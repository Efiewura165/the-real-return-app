import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import type { PillarsContent } from "@/types/homepage";
import { PillarCard } from "./PillarCard";

interface PillarsProps {
  content: PillarsContent;
}

export function Pillars({ content }: PillarsProps) {
  return (
    <Section id="pillars" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <EditorialHeading align="center" eyebrow={content.eyebrow} title={content.title} className="mx-auto" />
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {content.pillars.map((pillar, index) => (
            <Reveal key={pillar.key} delay={index * 0.08}>
              <PillarCard pillar={pillar} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
