import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { GoldRule } from "@/components/heritage/GoldRule";
import { buildMetadata } from "@/lib/seo";
import { getStripe, hasStripeCredentials, MOCK_SESSION_PREFIX } from "@/lib/stripe";

export const metadata: Metadata = { ...buildMetadata("Deposit Confirmed"), robots: { index: false } };

type Outcome = { state: "paid" | "processing" | "unknown"; email?: string; mock?: boolean };

async function resolveOutcome(sessionId: string | undefined): Promise<Outcome> {
  if (!sessionId) return { state: "unknown" };
  if (sessionId.startsWith(MOCK_SESSION_PREFIX)) return { state: "paid", mock: true };
  if (!hasStripeCredentials()) return { state: "unknown" };

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    const email = session.customer_details?.email ?? session.customer_email ?? undefined;
    if (session.payment_status === "paid") return { state: "paid", email };
    if (session.status === "complete") return { state: "processing", email };
    return { state: "unknown" };
  } catch (error) {
    console.error(`[stripe] Couldn't retrieve Checkout session ${sessionId}`, error);
    return { state: "unknown" };
  }
}

export default async function ReserveSuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  const outcome = await resolveOutcome(session_id);

  const copy = {
    paid: {
      title: "Your deposit is confirmed.",
      body: "Your place is held. Your welcome & preparation kit will ship shortly, and a steward will reach out within 48 hours to finalize your tier and itinerary.",
    },
    processing: {
      title: "Your payment is processing.",
      body: "Some payment methods take a little longer to clear. We'll confirm by email as soon as it does — no need to pay again.",
    },
    unknown: {
      title: "We couldn't find that payment.",
      body: "If you completed checkout, you'll receive a receipt by email and a steward will be in touch. Otherwise, you can return to the Reserve page and try again.",
    },
  }[outcome.state];

  return (
    <Section className="pt-36 sm:pt-40">
      <Container className="max-w-2xl text-center">
        <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">Reservation Deposit</p>
        <h1 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl">{copy.title}</h1>
        <GoldRule className="mx-auto mt-8" />
        <p className="mt-8 text-base leading-8 text-foreground/70">{copy.body}</p>
        {outcome.email ? <p className="mt-4 text-sm text-foreground/60">A receipt has been sent to {outcome.email}.</p> : null}
        {outcome.mock ? (
          <p className="mt-6 rounded-[0.2rem] border border-dashed border-black/15 p-3 text-xs text-foreground/60">
            Development mode — Stripe isn&apos;t configured, so no real charge was made.
          </p>
        ) : null}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Return home</Link>
          </Button>
          {outcome.state === "unknown" ? (
            <Button asChild variant="outline">
              <Link href="/reserve#deposit">Back to Reserve</Link>
            </Button>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
