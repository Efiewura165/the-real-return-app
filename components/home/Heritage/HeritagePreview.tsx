import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import type { HeritageItem } from "@/types/homepage";
import { HeritageCard } from "./HeritageCard";

interface HeritagePreviewProps {
  eyebrow: string;
  title: string;
  description: string;
  items: HeritageItem[];
}

export function HeritagePreview({ eyebrow, title, description, items }: HeritagePreviewProps) {
  return (
    <Section id="heritage" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-foreground/60">{eyebrow}</p>
            <Heading as="h2" className="text-3xl sm:text-4xl">
              {title}
            </Heading>
            <Text className="text-lg leading-8">{description}</Text>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <HeritageCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
