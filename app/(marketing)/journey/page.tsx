import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import { JourneyConnector } from "@/components/home/Journey/JourneyConnector";
import { brandConfig } from "@/config/brand";
import { buildMetadata } from "@/lib/seo";
import { journeyPageContent } from "@/content/journey";

export const metadata: Metadata = buildMetadata("Journey");

export default function JourneyPage() {
  const { hero, stages, closing } = journeyPageContent;

  return (
    <>
      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialHeading as="h1" align="center" eyebrow={hero.eyebrow} title={hero.title} description={hero.description} className="mx-auto" />
          </Reveal>
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

      <Section>
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-foreground/65">{closing.eyebrow}</p>
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
