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
  const { hero, name, role, body, pullQuote, cta } = await getContent<FounderPageContent>("founderPage", founderPageContent);

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <div className="space-y-5">
              {body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-foreground/70">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
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
