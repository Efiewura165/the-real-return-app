import type { DepositContent } from "@/types/checkout";

/**
 * Display copy + default amount for the Reserve page deposit. The amount
 * shown here is a placeholder pending the client's actual figure — the
 * authoritative charge amount lives in RESERVATION_DEPOSIT_AMOUNT
 * (lib/paypal.ts), which falls back to this same default if unset.
 */
export const depositContent: DepositContent = {
  eyebrow: "Hold Your Spot",
  title: "Secure your place with a reservation deposit.",
  description:
    "A deposit holds your place while a steward finalizes your itinerary and tier. It's applied toward your journey — the balance is arranged directly with your steward.",
  amount: 500,
  currency: "USD",
  fallbackNote: "Payments aren't configured yet — a steward can arrange your deposit directly.",
};
