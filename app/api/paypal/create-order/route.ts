import { createDepositOrder } from "@/lib/paypal";

export async function POST() {
  try {
    const { orderId } = await createDepositOrder();
    return Response.json({ orderId });
  } catch (error) {
    console.error("[paypal] Failed to create deposit order", error);
    return Response.json({ error: "We couldn't start the payment. Please try again or contact a steward directly." }, { status: 502 });
  }
}
