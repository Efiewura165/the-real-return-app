import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import { EditorialSection } from "@/components/editorial/EditorialSection";
import { ImageStory } from "@/components/editorial/ImageStory";
import { Timeline } from "@/components/editorial/Timeline";
import { PullQuote } from "@/components/editorial/PullQuote";
import { StatHighlight } from "@/components/editorial/StatHighlight";
import { GoldRule } from "@/components/heritage/GoldRule";
import { buildMetadata } from "@/lib/seo";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = buildMetadata("About");

export default function AboutPage() {
  const { hero, mission, values, milestones, quote, stats } = aboutContent;

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
          <Reveal>
            <ImageStory
              imageSrc={mission.image.src}
              imageAlt={mission.image.alt}
              caption={mission.image.caption}
              title={mission.title}
              description={mission.body}
            />
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
                    <h4 className="font-serif text-xl font-semibold text-foreground">{value.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">{value.description}</p>
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
            <EditorialSection eyebrow="How we got here" title="A short history of the work.">
              <Timeline items={milestones} />
            </EditorialSection>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container className="max-w-3xl">
          <Reveal>
            <GoldRule label="In our words" className="mb-8" />
            <PullQuote quote={quote.quote} attribution={quote.attribution} />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <StatHighlight key={stat.label} value={stat.value} label={stat.label} description={stat.description} />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
