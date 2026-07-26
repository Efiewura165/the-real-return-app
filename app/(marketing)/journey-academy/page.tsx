import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { EditorialSection } from "@/components/editorial/EditorialSection";
import { PhaseSection } from "@/components/academy";
import { brandConfig } from "@/config/brand";
import { buildMetadata } from "@/lib/seo";
import { getContent } from "@/lib/sanity/fetch";
import { academyPageContent } from "@/content/academy";
import type { AcademyPageContent } from "@/types/academy";

export const metadata: Metadata = buildMetadata("Journey Academy");

export default async function JourneyAcademyPage() {
  const { hero, intro, programs, phases, resources, closing } = await getContent<AcademyPageContent>("journeyAcademyPage", academyPageContent);

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <Section className="border-b border-border/70">
        <Container className="max-w-2xl">
          <Reveal>
            <ol className="space-y-8">
              {programs.map((program, index) => (
                <li key={program.name} className="relative border-l border-black/10 pl-6">
                  <span
                    className="absolute -left-[0.9rem] top-0 flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium text-background"
                    style={{ backgroundColor: brandConfig.colors.gold }}
                  >
                    {index + 1}
                  </span>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/55">{program.tagline}</p>
                  <h4 className="mt-2 font-serif text-xl font-normal text-foreground">{program.name}</h4>
                  <p className="mt-2 text-sm leading-7 text-foreground/70">{program.description}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{intro.eyebrow}</p>
            <h2
              className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl"
              style={{ fontFamily: brandConfig.typography.display }}
            >
              {intro.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-foreground/70">{intro.description}</p>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container className="space-y-16 py-4">
          {phases.map((phase) => (
            <PhaseSection key={phase.phase} phase={phase} />
          ))}
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialSection eyebrow="Resources" title="Support alongside the curriculum.">
              <div className="grid gap-6 sm:grid-cols-3">
                {resources.map((resource) =>
                  resource.href ? (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      className="block rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/80 p-6 transition-colors hover:border-black/20"
                    >
                      <h4 className="font-serif text-lg font-normal text-foreground">{resource.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-foreground/70">{resource.description}</p>
                    </Link>
                  ) : (
                    <div key={resource.title} className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/80 p-6">
                      <h4 className="font-serif text-lg font-normal text-foreground">{resource.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-foreground/70">{resource.description}</p>
                    </div>
                  ),
                )}
              </div>
            </EditorialSection>
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
