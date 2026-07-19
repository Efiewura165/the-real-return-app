import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { brandConfig } from "@/config/brand";
import type { ReflectionContent } from "@/types/homepage";

interface ReflectionProps {
  content: ReflectionContent;
}

export function Reflection({ content }: ReflectionProps) {
  return (
    <Section id="reflection" style={{ backgroundColor: brandConfig.colors.primary }}>
      <Container className="max-w-3xl py-20 text-center sm:py-28">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.35em]" style={{ color: `${brandConfig.colors.goldLuxury}` }}>
            {content.eyebrow}
          </p>
          <h2
            className="mt-5 font-serif text-3xl leading-tight sm:text-4xl"
            style={{ fontFamily: brandConfig.typography.display, color: brandConfig.colors.ivory }}
          >
            {content.title}
          </h2>
          <div className="mt-6 space-y-4">
            {content.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8" style={{ color: `${brandConfig.colors.ivory}b3` }}>
                {paragraph}
              </p>
            ))}
          </div>
          <p
            className="mt-8 font-serif text-lg italic"
            style={{ fontFamily: brandConfig.typography.editorial, color: `${brandConfig.colors.ivory}d9` }}
          >
            {content.closingLine}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
