import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { EditorialSection } from "@/components/editorial/EditorialSection";
import { Timeline } from "@/components/editorial/Timeline";
import { brandConfig } from "@/config/brand";
import { buildMetadata } from "@/lib/seo";
import { getContent } from "@/lib/sanity/fetch";
import { approachPageContent } from "@/content/approach";
import type { ApproachPageContent } from "@/types/approach";

export const metadata: Metadata = buildMetadata("Approach");

export default async function ApproachPage() {
  const { hero, intro, pillars, values, milestones } = await getContent<ApproachPageContent>("approachPage", approachPageContent);

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialSection eyebrow={intro.eyebrow} title={intro.title} description={intro.description} className="mx-auto max-w-2xl text-center">
              <div className="grid gap-6 sm:grid-cols-3">
                {pillars.map((pillar) => (
                  <div key={pillar.key} className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/80 p-6 text-left">
                    <p className="text-[0.7rem] uppercase tracking-[0.2em]" style={{ color: brandConfig.colors.gold }}>
                      {pillar.title}
                    </p>
                    <h4 className="mt-2 font-serif text-lg font-normal text-foreground">{pillar.tagline}</h4>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </EditorialSection>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialSection eyebrow="What guides us" title="A few principles we hold close.">
              <div className="grid gap-6 sm:grid-cols-3">
                {values.map((value) => (
                  <div key={value.title} className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/80 p-6">
                    <h4 className="font-serif text-xl font-normal text-foreground">{value.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">{value.description}</p>
                  </div>
                ))}
              </div>
            </EditorialSection>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <EditorialSection eyebrow="How we got here" title="A short history of the work.">
              <Timeline items={milestones} />
            </EditorialSection>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
