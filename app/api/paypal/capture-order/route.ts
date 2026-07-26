import { Resend } from "resend";

import { captureOrderSchema } from "@/lib/checkout-schema";
import { captureDepositOrder, depositAmount, depositCurrency } from "@/lib/paypal";
import { createWelcomeKitShipment } from "@/lib/dhl";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = captureOrderSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: "That submission didn't look right — please check the form and try again." }, { status: 400 });
  }

  const { orderId, shipping } = parsed.data;

  let capture;
  try {
    capture = await captureDepositOrder(orderId);
  } catch (error) {
    console.error("[paypal] Failed to capture deposit order", error);
    return Response.json({ error: "We couldn't confirm your payment. Please try again or contact a steward directly." }, { status: 502 });
  }

  let tracking;
  try {
    tracking = await createWelcomeKitShipment(shipping);
  } catch (error) {
    // The deposit already succeeded — don't fail the whole request over a shipment hiccup.
    // A steward can book the shipment by hand; the notification email below still goes out.
    console.error("[dhl] Failed to book welcome-kit shipment", error);
    tracking = { trackingNumber: "pending — a steward will follow up", mock: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "hello@therealreturn.com";
  const summary =
    `Deposit: ${depositAmount} ${depositCurrency} (capture ${capture.captureId}, status ${capture.status}${capture.mock ? ", MOCK — no real charge" : ""})\n` +
    `Ship to: ${shipping.name}, ${shipping.addressLine1}${shipping.addressLine2 ? `, ${shipping.addressLine2}` : ""}, ${shipping.city}, ${shipping.state} ${shipping.postalCode}, ${shipping.countryCode}\n` +
    `Tracking: ${tracking.trackingNumber}${tracking.mock ? " (MOCK — no real shipment booked)" : ""}`;

  if (!apiKey) {
    console.warn(`[paypal] RESEND_API_KEY not set — steward notification NOT delivered.\n${summary}`);
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
      // Payment and shipment already succeeded — a missed notification email isn't fatal.
      console.error("[paypal] Failed to send steward notification email", error);
    }
  }

  return Response.json({
    ok: true,
    captureId: capture.captureId,
    trackingNumber: tracking.trackingNumber,
    mock: capture.mock || tracking.mock,
  });
}
