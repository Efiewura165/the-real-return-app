import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import { InquiryForm } from "@/components/invest/InquiryForm";
import { buildMetadata } from "@/lib/seo";
import { getContent } from "@/lib/sanity/fetch";
import { investPageContent } from "@/content/invest";
import type { InvestPageContent, InvestHighlightItem } from "@/types/invest";

export const metadata: Metadata = buildMetadata("Invest");

function HighlightGrid({ items }: { items: InvestHighlightItem[] }) {
  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="border-t border-black/10 pt-5">
          <h3 className="font-serif text-lg font-normal text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-foreground/70">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default async function InvestPage() {
  const { hero, whyInvest, strategicPartnerships, sponsors, investors, form } = await getContent<InvestPageContent>(
    "investPage",
    investPageContent,
  );

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialHeading eyebrow={whyInvest.eyebrow} title={whyInvest.title} description={whyInvest.description} />
            <HighlightGrid items={whyInvest.points} />
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialHeading
              eyebrow={strategicPartnerships.eyebrow}
              title={strategicPartnerships.title}
              description={strategicPartnerships.description}
            />
            <HighlightGrid items={strategicPartnerships.items} />
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialHeading eyebrow={sponsors.eyebrow} title={sponsors.title} description={sponsors.description} />
            <HighlightGrid items={sponsors.items} />
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialHeading eyebrow={investors.eyebrow} title={investors.title} description={investors.description} />
            <HighlightGrid items={investors.points} />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <EditorialHeading eyebrow={form.eyebrow} title={form.title} description={form.description} />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/50 p-6 sm:p-8">
                <InquiryForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
