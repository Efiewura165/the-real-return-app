import { randomUUID } from "node:crypto";
import Stripe from "stripe";

import { depositAmount, depositCurrency, fulfillDeposit } from "@/lib/deposit-fulfillment";
import type { ShippingAddress } from "@/types/checkout";

export const MOCK_SESSION_PREFIX = "MOCK-SESSION-";

let client: Stripe | null = null;

export function hasStripeCredentials() {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

// In development the card button stays visible without keys so the mock flow can be exercised.
export function isStripeCheckoutEnabled() {
  return hasStripeCredentials() || process.env.NODE_ENV !== "production";
}

// Instantiated lazily so builds without STRIPE_SECRET_KEY don't throw.
export function getStripe(): Stripe {
  if (!client) client = new Stripe(process.env.STRIPE_SECRET_KEY!);
  return client;
}

// Stripe metadata values are flat strings, so the shipping address is stored
// field-by-field on the session and rebuilt in the webhook.
function shippingToMetadata(shipping: ShippingAddress): Record<string, string> {
  return {
    name: shipping.name,
    email: shipping.email,
    addressLine1: shipping.addressLine1,
    addressLine2: shipping.addressLine2 ?? "",
    city: shipping.city,
    state: shipping.state,
    postalCode: shipping.postalCode,
    countryCode: shipping.countryCode,
  };
}

export function shippingFromMetadata(metadata: Stripe.Metadata | null): ShippingAddress | null {
  if (!metadata?.name || !metadata.email || !metadata.addressLine1) return null;
  return {
    name: metadata.name,
    email: metadata.email,
    addressLine1: metadata.addressLine1,
    addressLine2: metadata.addressLine2 || undefined,
    city: metadata.city ?? "",
    state: metadata.state ?? "",
    postalCode: metadata.postalCode ?? "",
    countryCode: metadata.countryCode ?? "",
  };
}

/**
 * Creates a hosted Stripe Checkout session for the reservation deposit and
 * returns the URL to redirect the guest to. Without STRIPE_SECRET_KEY set,
 * this fulfills the deposit immediately with a mock reference and returns
 * the success page URL — same fallback pattern as the PayPal integration,
 * so the flow can be exercised end-to-end in development.
 */
export async function createDepositCheckoutSession(shipping: ShippingAddress, origin: string): Promise<{ url: string; mock: boolean }> {
  if (!hasStripeCredentials()) {
    const mockId = `${MOCK_SESSION_PREFIX}${randomUUID().slice(0, 8).toUpperCase()}`;
    console.warn(
      `[stripe] STRIPE_SECRET_KEY not set — no real Checkout session was created.\n` +
        `Would have charged a ${depositAmount} ${depositCurrency} deposit. Fulfilling with mock session ${mockId}.`,
    );
    await fulfillDeposit({ provider: "Stripe", reference: mockId, status: "paid", mock: true }, shipping);
    return { url: `${origin}/reserve/success?session_id=${mockId}`, mock: true };
  }

  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    customer_email: shipping.email,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: depositCurrency.toLowerCase(),
          // Stripe expects the smallest currency unit (cents for USD).
          unit_amount: Math.round(depositAmount * 100),
          product_data: {
            name: "The Real Return™ — Reservation Deposit",
            description: "Applied toward your journey. The balance is arranged directly with your steward.",
          },
        },
      },
    ],
    metadata: shippingToMetadata(shipping),
    payment_intent_data: { metadata: shippingToMetadata(shipping) },
    success_url: `${origin}/reserve/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/reserve#deposit`,
  });

  if (!session.url) throw new Error(`Stripe returned no Checkout URL for session ${session.id}`);
  return { url: session.url, mock: false };
}

/**
 * Fulfills a paid Checkout session exactly once. Stripe can deliver the same
 * webhook more than once, so a `fulfilled` flag is written to the
 * PaymentIntent's metadata after the shipment + email go out.
 */
export async function fulfillCheckoutSession(session: Stripe.Checkout.Session) {
  if (session.payment_status !== "paid") return;

  const shipping = shippingFromMetadata(session.metadata);
  if (!shipping) {
    console.error(`[stripe] Session ${session.id} is paid but has no shipping metadata — a steward must follow up manually.`);
    return;
  }

  const stripe = getStripe();
  const paymentIntentId = typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id;

  if (paymentIntentId) {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.metadata.fulfilled === "true") return;
  }

  await fulfillDeposit({ provider: "Stripe", reference: paymentIntentId ?? session.id, status: session.payment_status, mock: false }, shipping);

  if (paymentIntentId) {
    await stripe.paymentIntents.update(paymentIntentId, { metadata: { fulfilled: "true" } });
  }
}
