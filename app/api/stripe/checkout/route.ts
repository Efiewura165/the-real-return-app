import { shippingAddressSchema } from "@/lib/checkout-schema";
import { createDepositCheckoutSession } from "@/lib/stripe";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = shippingAddressSchema.safeParse(body?.shipping);

  if (!parsed.success) {
    return Response.json({ error: "Please complete your shipping address before continuing to payment." }, { status: 400 });
  }

  const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  try {
    const { url } = await createDepositCheckoutSession(parsed.data, origin);
    return Response.json({ url });
  } catch (error) {
    console.error("[stripe] Failed to create Checkout session", error);
    return Response.json({ error: "We couldn't start the payment. Please try again or contact a steward directly." }, { status: 502 });
  }
}
