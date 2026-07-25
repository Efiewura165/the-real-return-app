import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import type { OpportunityItem } from "@/types/homepage";
import { OpportunityCard } from "./OpportunityCard";

interface OpportunityPreviewProps {
  eyebrow: string;
  title: string;
  description: string;
  items: OpportunityItem[];
}

export function OpportunityPreview({ eyebrow, title, description, items }: OpportunityPreviewProps) {
  return (
    <Section id="opportunity" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{eyebrow}</p>
            <Heading as="h2" className="text-3xl sm:text-4xl">
              {title}
            </Heading>
            <Text className="text-lg leading-8">{description}</Text>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <OpportunityCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
