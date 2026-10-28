import { randomUUID } from "node:crypto";

import { depositAmount, depositCurrency } from "@/lib/deposit-fulfillment";

const PAYPAL_BASE_URL =
  process.env.PAYPAL_ENV === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";

function hasPayPalCredentials() {
  return Boolean(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET);
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET!;
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error(`PayPal token request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token as string;
}

export interface DepositOrderResult {
  orderId: string;
  mock: boolean;
}

/**
 * Creates a PayPal order for the reservation deposit. Without
 * NEXT_PUBLIC_PAYPAL_CLIENT_ID / PAYPAL_CLIENT_SECRET set, this logs the
 * intent and returns a mock order id so the UI flow keeps working in
 * development — same fallback pattern as the Resend email integration.
 */
export async function createDepositOrder(): Promise<DepositOrderResult> {
  if (!hasPayPalCredentials()) {
    const mockId = `MOCK-ORDER-${randomUUID().slice(0, 8).toUpperCase()}`;
    console.warn(
      `[paypal] NEXT_PUBLIC_PAYPAL_CLIENT_ID/PAYPAL_CLIENT_SECRET not set — no real order was created.\n` +
        `Would have created a ${depositAmount} ${depositCurrency} deposit order. Returning mock order id ${mockId}.`,
    );
    return { orderId: mockId, mock: true };
  }

  const accessToken = await getAccessToken();
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "The Real Return™ — Reservation Deposit",
          amount: { currency_code: depositCurrency, value: depositAmount.toFixed(2) },
        },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`PayPal order creation failed: ${response.status} ${body}`);
  }

  const data = await response.json();
  return { orderId: data.id as string, mock: false };
}

export interface DepositCaptureResult {
  captureId: string;
  status: string;
  mock: boolean;
}

/**
 * Captures a previously-created deposit order. Mock order ids (created
 * when PayPal credentials are missing) are captured locally without
 * calling PayPal, so the rest of the flow (DHL shipment, steward email)
 * can still be exercised end-to-end in development.
 */
export async function captureDepositOrder(orderId: string): Promise<DepositCaptureResult> {
  if (!hasPayPalCredentials() || orderId.startsWith("MOCK-ORDER-")) {
    const mockCaptureId = `MOCK-CAPTURE-${randomUUID().slice(0, 8).toUpperCase()}`;
    console.warn(`[paypal] Skipping real capture for ${orderId} — returning mock capture ${mockCaptureId}.`);
    return { captureId: mockCaptureId, status: "COMPLETED", mock: true };
  }

  const accessToken = await getAccessToken();
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`PayPal capture failed: ${response.status} ${body}`);
  }

  const data = await response.json();
  const capture = data.purchase_units?.[0]?.payments?.captures?.[0];
  return { captureId: capture?.id ?? data.id, status: data.status ?? "UNKNOWN", mock: false };
}
