import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { GoldRule } from "@/components/heritage/GoldRule";
import { ContactForm } from "@/components/connect/ContactForm";
import { PricingCard } from "@/components/ui/pricing-card";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import { DepositCheckout } from "@/components/reserve/DepositCheckout";
import { buildMetadata } from "@/lib/seo";
import { isStripeCheckoutEnabled } from "@/lib/stripe";
import { getContent } from "@/lib/sanity/fetch";
import { connectContent } from "@/content/connect";
import { investmentContent } from "@/content/shared/investment";
import { depositContent } from "@/content/shared/deposit";
import type { ConnectContent } from "@/types/connect";

export const metadata: Metadata = buildMetadata("Reserve");

export default async function ReservePage() {
  const { hero, journeyOptions, process, info, form } = await getContent<ConnectContent>("reservePage", connectContent);
  const stripeEnabled = isStripeCheckoutEnabled();

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialHeading align="center" eyebrow={journeyOptions.eyebrow} title={journeyOptions.title} description={journeyOptions.description} className="mx-auto" />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {investmentContent.tiers.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 0.06}>
                <PricingCard tier={tier} index={index} featured={index === 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{process.eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl">{process.title}</h2>
            <ol className="mt-8 space-y-6">
              {process.steps.map((step) => (
                <li key={step.step} className="flex gap-5 border-t border-black/10 pt-6 first:border-t-0 first:pt-0">
                  <span className="font-serif text-2xl text-foreground/40">{step.step}</span>
                  <div>
                    <h4 className="font-serif text-xl font-normal text-foreground">{step.title}</h4>
                    <p className="mt-1 text-base leading-7 text-foreground/70">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      <Section id="deposit" className="scroll-mt-24 border-b border-border/70">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <EditorialHeading
                eyebrow={depositContent.eyebrow}
                title={depositContent.title}
                description={`${depositContent.description} $${depositContent.amount} ${depositContent.currency}, applied toward your journey.`}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/50 p-6 sm:p-8">
                <DepositCheckout content={depositContent} stripeEnabled={stripeEnabled} />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{form.eyebrow}</p>
                  <h2 className="font-serif text-2xl font-normal leading-tight text-foreground sm:text-3xl">{form.title}</h2>
                  <p className="max-w-md text-base leading-8 text-foreground/70">{form.description}</p>
                </div>
                <GoldRule />
                <dl className="space-y-5">
                  {info.map((item) => (
                    <div key={item.label}>
                      <dt className="text-[0.68rem] uppercase tracking-[0.3em] text-foreground/65">{item.label}</dt>
                      <dd className="mt-1 text-base text-foreground">
                        {item.href ? (
                          <a href={item.href} className="underline decoration-black/20 underline-offset-4 transition-colors hover:text-foreground/70">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/50 p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
