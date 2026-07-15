import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import type { HeroChapterContent } from "@/types/homepage";
import { HeroContent } from "./HeroContent";
import { HeroMedia } from "./HeroMedia";

interface HeroProps {
  content: HeroChapterContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <Section id="hero" className="border-b border-border/70">
      <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <HeroContent content={content} />
        </Reveal>
        <Reveal delay={0.08}>
          <HeroMedia image={content.image} />
        </Reveal>
      </Container>
    </Section>
  );
}
