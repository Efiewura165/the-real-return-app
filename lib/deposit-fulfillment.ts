import { Resend } from "resend";

import { depositContent } from "@/content/shared/deposit";
import { createWelcomeKitShipment } from "@/lib/dhl";
import type { ShippingAddress } from "@/types/checkout";

export const depositAmount = Number(process.env.RESERVATION_DEPOSIT_AMOUNT) || depositContent.amount;
export const depositCurrency = process.env.RESERVATION_DEPOSIT_CURRENCY || depositContent.currency;

export interface DepositPayment {
  provider: "PayPal" | "Stripe";
  reference: string;
  status: string;
  mock: boolean;
}

export interface FulfillmentResult {
  trackingNumber: string;
  mock: boolean;
}

/**
 * Everything that happens after a deposit is paid, regardless of provider:
 * book the DHL welcome-kit shipment and notify the stewards. Neither step
 * throws — the money has already moved, so a shipment or email hiccup is
 * logged for a steward to follow up on rather than failing the request.
 */
export async function fulfillDeposit(payment: DepositPayment, shipping: ShippingAddress): Promise<FulfillmentResult> {
  let tracking;
  try {
    tracking = await createWelcomeKitShipment(shipping);
  } catch (error) {
    console.error("[dhl] Failed to book welcome-kit shipment", error);
    tracking = { trackingNumber: "pending — a steward will follow up", mock: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "hello@therealreturn.com";
  const summary =
    `Deposit: ${depositAmount} ${depositCurrency} via ${payment.provider} (ref ${payment.reference}, status ${payment.status}${payment.mock ? ", MOCK — no real charge" : ""})\n` +
    `Ship to: ${shipping.name}, ${shipping.addressLine1}${shipping.addressLine2 ? `, ${shipping.addressLine2}` : ""}, ${shipping.city}, ${shipping.state} ${shipping.postalCode}, ${shipping.countryCode}\n` +
    `Tracking: ${tracking.trackingNumber}${tracking.mock ? " (MOCK — no real shipment booked)" : ""}`;

  if (!apiKey) {
    console.warn(`[deposit] RESEND_API_KEY not set — steward notification NOT delivered.\n${summary}`);
  } else {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "The Real Return <onboarding@resend.dev>",
        to: toEmail,
        replyTo: shipping.email,
        subject: `New reservation deposit from ${shipping.name}`,
        text: summary,
      });
    } catch (error) {
      console.error("[deposit] Failed to send steward notification email", error);
    }
  }

  return { trackingNumber: tracking.trackingNumber, mock: payment.mock || tracking.mock };
}
