import { captureOrderSchema } from "@/lib/checkout-schema";
import { captureDepositOrder } from "@/lib/paypal";
import { fulfillDeposit } from "@/lib/deposit-fulfillment";

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

  const fulfillment = await fulfillDeposit(
    { provider: "PayPal", reference: capture.captureId, status: capture.status, mock: capture.mock },
    shipping,
  );

  return Response.json({
    ok: true,
    captureId: capture.captureId,
    trackingNumber: fulfillment.trackingNumber,
    mock: fulfillment.mock,
  });
}
