import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { PricingCard } from "@/components/ui/pricing-card";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import { SeasonalPackageCard } from "@/components/packages/SeasonalPackageCard";
import { buildMetadata } from "@/lib/seo";
import { getContent } from "@/lib/sanity/fetch";
import { packagesPageContent } from "@/content/packages";
import { investmentContent } from "@/content/shared/investment";
import type { PackagesPageContent } from "@/types/packages";

export const metadata: Metadata = buildMetadata("Packages");

export default async function PackagesPage() {
  const { hero, evergreen, seasonal, closing } = await getContent<PackagesPageContent>("packagesPage", packagesPageContent);

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialHeading align="center" eyebrow={evergreen.eyebrow} title={evergreen.title} description={evergreen.description} className="mx-auto" />
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
            <EditorialHeading eyebrow={seasonal.eyebrow} title={seasonal.title} description={seasonal.description} />
          </Reveal>
          <div className="mt-12 space-y-8">
            {seasonal.tiers.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 0.06}>
                <SeasonalPackageCard tier={tier} featured={index === 1} />
              </Reveal>
            ))}
          </div>
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
