import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { PullQuote } from "@/components/editorial/PullQuote";
import { buildMetadata } from "@/lib/seo";
import { getContent } from "@/lib/sanity/fetch";
import { founderPageContent } from "@/content/founder";
import type { FounderPageContent } from "@/types/founder";

export const metadata: Metadata = buildMetadata("Founder");

export default async function FounderPage() {
  const { hero, name, role, story, educationBackground, passion, vision, pullQuote, cta } = await getContent<FounderPageContent>(
    "founderPage",
    founderPageContent,
  );

  const sections = [educationBackground, passion, vision];

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">Founder Story</p>
            <p className="mt-4 font-serif text-2xl leading-tight text-foreground sm:text-3xl">{story}</p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <Reveal key={section.title}>
                <div className="border-t border-black/10 pt-8">
                  <h3 className="font-serif text-xl font-normal text-foreground">{section.title}</h3>
                  <p className="mt-3 text-base leading-8 text-foreground/70">{section.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10">
              <PullQuote quote={pullQuote} attribution={`${name}, ${role}`} />
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
