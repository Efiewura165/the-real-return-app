import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { EditorialSection } from "@/components/editorial/EditorialSection";
import { ImageStory } from "@/components/editorial/ImageStory";
import { PullQuote } from "@/components/editorial/PullQuote";
import { StatHighlight } from "@/components/editorial/StatHighlight";
import { GoldRule } from "@/components/heritage/GoldRule";
import { buildMetadata } from "@/lib/seo";
import { getContent } from "@/lib/sanity/fetch";
import { aboutContent } from "@/content/about";
import { pillarsContent } from "@/content/homepage/pillars";
import type { AboutContent } from "@/types/about";

export const metadata: Metadata = buildMetadata("About");

export default async function AboutPage() {
  const { hero, mission, vision, philosophy, quote, stats } = await getContent<AboutContent>("aboutPage", aboutContent);

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <ImageStory
              imageSrc={mission.image.src}
              imageAlt={mission.image.alt}
              caption={mission.image.caption}
              title={mission.title}
              description={mission.body}
            >
              <div className="border-t border-black/10 pt-4">
                <Link
                  href="/founder"
                  className="text-sm font-medium text-foreground underline decoration-black/20 underline-offset-4 transition-colors hover:text-foreground/70"
                >
                  Meet Tarsha, our founder →
                </Link>
              </div>
            </ImageStory>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container className="max-w-3xl">
          <Reveal>
            <EditorialSection eyebrow={vision.eyebrow} title={vision.title}>
              <p className="text-base leading-8 text-foreground/70">{vision.body}</p>
            </EditorialSection>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialSection eyebrow={philosophy.eyebrow} title={philosophy.title} description={philosophy.description}>
              <div className="grid gap-6 sm:grid-cols-3">
                {pillarsContent.pillars.map((pillar) => (
                  <div key={pillar.key} className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/80 p-6">
                    <h4 className="font-serif text-xl font-normal text-foreground">{pillar.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">{pillar.description}</p>
                  </div>
                ))}
              </div>
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
