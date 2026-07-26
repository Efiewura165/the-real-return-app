import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { JourneyConnector } from "@/components/home/Journey/JourneyConnector";
import { JourneyCarousel } from "@/components/journey";
import { PricingCard } from "@/components/ui/pricing-card";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import { brandConfig } from "@/config/brand";
import { buildMetadata } from "@/lib/seo";
import { getContent } from "@/lib/sanity/fetch";
import { journeyPageContent } from "@/content/journey";
import { investmentContent } from "@/content/shared/investment";
import type { JourneyPageContent } from "@/types/journey";

export const metadata: Metadata = buildMetadata("Experiences");

export default async function ExperiencesPage() {
  const { hero, carousel, stages, experienceHighlights, futureJourneys, closing } = await getContent<JourneyPageContent>(
    "experiencesPage",
    journeyPageContent,
  );

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl space-y-3 text-center">
              <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{carousel.eyebrow}</p>
              <h2 className="font-serif text-2xl font-normal leading-tight text-foreground sm:text-3xl" style={{ fontFamily: brandConfig.typography.display }}>
                {carousel.title}
              </h2>
              <p className="text-base leading-7 text-foreground/70">{carousel.description}</p>
            </div>
          </Reveal>
          <div className="mx-auto mt-8 max-w-4xl">
            <Reveal delay={0.06}>
              <JourneyCarousel slides={carousel.slides} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 0.06}>
                <div className="relative h-full">
                  <div className="flex h-full flex-col rounded-[1.5rem] border border-border/70 bg-background/70 p-6 shadow-[0_12px_32px_rgba(8,15,12,0.06)]">
                    <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
                      {stage.label} — {stage.location}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl font-normal text-foreground" style={{ fontFamily: brandConfig.typography.editorial }}>
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-foreground/70">{stage.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-black/10 pt-5">
                      {stage.details.map((detail) => (
                        <li key={detail} className="text-sm leading-6 text-foreground/65">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < stages.length - 1 ? <JourneyConnector /> : null}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialHeading
              align="center"
              eyebrow="Private/group journeys"
              title="Every tier travels the same itinerary, at the depth that fits your family."
              className="mx-auto"
            />
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
        <Container>
          <Reveal>
            <EditorialHeading
              align="center"
              eyebrow={experienceHighlights.eyebrow}
              title={experienceHighlights.title}
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {experienceHighlights.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-[1.5rem] border border-border/70 bg-background/70 p-6 shadow-[0_12px_32px_rgba(8,15,12,0.06)]">
                  <h3 className="font-serif text-xl font-normal text-foreground">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-foreground/70">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{futureJourneys.eyebrow}</p>
            <h2 className="mt-4 font-serif text-2xl font-normal leading-tight text-foreground sm:text-3xl">{futureJourneys.title}</h2>
            <p className="mx-auto mt-4 text-base leading-8 text-foreground/70">{futureJourneys.description}</p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{closing.eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl">{closing.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-foreground/70">{closing.description}</p>
            <Button asChild size="lg" className="mt-8">
              <Link href={closing.cta.href}>{closing.cta.label}</Link>
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
