import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import type { LegacyInnovationContent } from "@/types/homepage";
import { LegacyInnovationCard } from "./LegacyInnovationCard";

interface LegacyInnovationPreviewProps {
  content: LegacyInnovationContent;
}

export function LegacyInnovationPreview({ content }: LegacyInnovationPreviewProps) {
  return (
    <Section id="legacy-innovation" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <EditorialHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <LegacyInnovationCard item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
