"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { shippingAddressSchema, type ShippingAddressValues } from "@/lib/checkout-schema";
import type { DepositContent } from "@/types/checkout";

interface DepositCheckoutProps {
  content: DepositContent;
  stripeEnabled: boolean;
}

export function DepositCheckout({ content, stripeEnabled }: DepositCheckoutProps) {
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [tracking, setTracking] = useState<string | null>(null);
  const [redirecting, setRedirecting] = useState(false);
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<ShippingAddressValues>({
    resolver: zodResolver(shippingAddressSchema),
    defaultValues: { countryCode: "US" },
  });

  async function payWithCard() {
    setSubmitError(null);
    const valid = await trigger();
    if (!valid) {
      setSubmitError("Please complete your shipping address before continuing to payment.");
      return;
    }

    setRedirecting(true);
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shipping: getValues() }),
      });
      const data = await response.json();
      if (!response.ok || !data.url) throw new Error(data.error);
      window.location.assign(data.url);
    } catch (error) {
      setSubmitError(
        (error instanceof Error && error.message) || "We couldn't start the payment. Please try again or contact a steward directly.",
      );
      setRedirecting(false);
    }
  }

  if (!paypalClientId && !stripeEnabled) {
    return (
      <div className="rounded-[0.2rem] border border-dashed border-black/15 bg-[#f8f2e8]/50 p-6 text-center">
        <p className="text-sm leading-7 text-foreground/65">{content.fallbackNote}</p>
      </div>
    );
  }

  if (status === "submitted") {
    return (
      <div className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/80 p-6">
        <p className="font-serif text-xl text-foreground">Your deposit is confirmed.</p>
        <p className="mt-2 text-sm leading-7 text-foreground/70">
          Your welcome & preparation kit is on its way{tracking ? ` — tracking number ${tracking}` : ""}. A steward will follow up to
          finalize your itinerary.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="deposit-name" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
            Name
          </label>
          <Input id="deposit-name" placeholder="Your full name" {...register("name")} />
          {errors.name ? <p className="text-sm text-red-700/80">{errors.name.message}</p> : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="deposit-email" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
            Email
          </label>
          <Input id="deposit-email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email ? <p className="text-sm text-red-700/80">{errors.email.message}</p> : null}
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="deposit-address1" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
            Address
          </label>
          <Input id="deposit-address1" placeholder="Street address" {...register("addressLine1")} />
          {errors.addressLine1 ? <p className="text-sm text-red-700/80">{errors.addressLine1.message}</p> : null}
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="deposit-address2" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
            Apt / Suite (optional)
          </label>
          <Input id="deposit-address2" placeholder="Apartment, suite, etc." {...register("addressLine2")} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="deposit-city" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
            City
          </label>
          <Input id="deposit-city" {...register("city")} />
          {errors.city ? <p className="text-sm text-red-700/80">{errors.city.message}</p> : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="deposit-state" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
            State / Province
          </label>
          <Input id="deposit-state" {...register("state")} />
          {errors.state ? <p className="text-sm text-red-700/80">{errors.state.message}</p> : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="deposit-postal" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
            Postal code
          </label>
          <Input id="deposit-postal" {...register("postalCode")} />
          {errors.postalCode ? <p className="text-sm text-red-700/80">{errors.postalCode.message}</p> : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="deposit-country" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
            Country code
          </label>
          <Input id="deposit-country" placeholder="US" maxLength={2} {...register("countryCode")} />
          {errors.countryCode ? <p className="text-sm text-red-700/80">{errors.countryCode.message}</p> : null}
        </div>
      </div>

      {submitError ? <p className="text-sm text-red-700/80">{submitError}</p> : null}

      {stripeEnabled ? (
        <div className="space-y-2">
          <Button type="button" size="lg" className="w-full" onClick={payWithCard} disabled={redirecting}>
            {redirecting ? "Redirecting to secure checkout…" : `Pay $${content.amount} ${content.currency} by card`}
          </Button>
          <p className="text-center text-xs text-foreground/55">Secure payment by Stripe. Apple Pay and Google Pay are offered where available.</p>
        </div>
      ) : null}

      {stripeEnabled && paypalClientId ? (
        <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-foreground/45">
          <span className="h-px flex-1 bg-black/10" />
          or
          <span className="h-px flex-1 bg-black/10" />
        </div>
      ) : null}

      {paypalClientId ? (
        <PayPalScriptProvider options={{ clientId: paypalClientId, currency: content.currency }}>
          <PayPalButtons
            style={{ layout: "horizontal" }}
            onClick={async (_data, actions) => {
              setSubmitError(null);
              const valid = await trigger();
              if (!valid) {
                setSubmitError("Please complete your shipping address before continuing to payment.");
                return actions.reject();
              }
              return actions.resolve();
            }}
            createOrder={async () => {
              const response = await fetch("/api/paypal/create-order", { method: "POST" });
              const data = await response.json();
              if (!response.ok || !data.orderId) throw new Error(data.error ?? "Failed to create order");
              return data.orderId;
            }}
            onApprove={async (data) => {
              const response = await fetch("/api/paypal/capture-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderId: data.orderID, shipping: getValues() }),
              });
              const result = await response.json();
              if (!response.ok) {
                setSubmitError(result?.error ?? "We couldn't confirm your payment. Please try again or contact a steward directly.");
                return;
              }
              setTracking(result.trackingNumber ?? null);
              setStatus("submitted");
            }}
            onError={() => {
              setSubmitError("We couldn't reach PayPal. Please try again or contact a steward directly.");
            }}
          />
        </PayPalScriptProvider>
      ) : null}
    </div>
  );
}
