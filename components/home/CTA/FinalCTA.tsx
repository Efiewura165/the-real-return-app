import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import type { CtaContent } from "@/types/homepage";

interface FinalCTAProps {
  content: CtaContent;
}

export function FinalCTA({ content }: FinalCTAProps) {
  return (
    <Section id="cta">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <div className="rounded-[2.5rem] border border-border/70 bg-background/70 p-8 shadow-[0_20px_60px_rgba(8,15,12,0.12)] sm:p-10 lg:p-12">
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-foreground/65">{content.eyebrow}</p>
            <Heading as="h2" className="mt-4 text-3xl sm:text-4xl">
              {content.title}
            </Heading>
            <Text className="mt-6 max-w-2xl text-lg leading-8">{content.description}</Text>
            <div className="mt-8 flex flex-wrap gap-3">
              {content.buttons.map((button) => (
                <Button key={button.label} asChild variant={button.variant === "outline" ? "outline" : "default"}>
                  <Link href={button.href}>{button.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
