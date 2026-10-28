import type Stripe from "stripe";

import { fulfillCheckoutSession, getStripe, hasStripeCredentials } from "@/lib/stripe";

/**
 * Stripe → site webhook. Register https://yourdomain.com/api/stripe/webhook
 * in the Stripe Dashboard (Developers → Webhooks) for the events below, and
 * put the endpoint's signing secret in STRIPE_WEBHOOK_SECRET.
 */
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!hasStripeCredentials() || !secret) {
    console.warn("[stripe] Webhook received but STRIPE_SECRET_KEY/STRIPE_WEBHOOK_SECRET not set — ignoring.");
    return Response.json({ error: "Stripe webhook not configured" }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return Response.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  // Signature verification needs the exact raw body, so read it as text.
  const payload = await request.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(payload, signature, secret);
  } catch (error) {
    console.error("[stripe] Webhook signature verification failed", error);
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded":
        await fulfillCheckoutSession(event.data.object);
        break;
      case "checkout.session.async_payment_failed":
        console.warn(`[stripe] Async payment failed for session ${event.data.object.id}`);
        break;
    }
  } catch (error) {
    // A 500 makes Stripe retry delivery; fulfillment is idempotent.
    console.error(`[stripe] Failed to handle ${event.type}`, error);
    return Response.json({ error: "Fulfillment failed" }, { status: 500 });
  }

  return Response.json({ received: true });
}
