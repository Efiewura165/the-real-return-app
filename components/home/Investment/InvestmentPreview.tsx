import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { PricingCard } from "@/components/ui/pricing-card";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import type { InvestmentContent } from "@/types/homepage";

interface InvestmentPreviewProps {
  content: InvestmentContent;
}

export function InvestmentPreview({ content }: InvestmentPreviewProps) {
  return (
    <Section id="investment" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <EditorialHeading align="center" eyebrow={content.eyebrow} title={content.title} description={content.description} className="mx-auto" />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.06}>
              <PricingCard tier={tier} index={index} featured={index === 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
