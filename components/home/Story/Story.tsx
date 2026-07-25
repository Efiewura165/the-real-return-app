import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import type { StoryChapterContent } from "@/types/homepage";
import { StoryImage } from "./StoryImage";
import { StoryQuote } from "./StoryQuote";

interface StoryProps {
  content: StoryChapterContent;
}

export function Story({ content }: StoryProps) {
  return (
    <Section id="story" className="border-b border-border/70">
      <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal>
          <div className="space-y-6">
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{content.eyebrow}</p>
            <p className="max-w-xl text-sm uppercase tracking-[0.32em] text-foreground/65">A cultural journal of place, memory, and return</p>
            <Heading as="h2" className="text-3xl sm:text-4xl">
              {content.title}
            </Heading>
            <Text className="max-w-2xl text-lg leading-8">{content.body}</Text>
            <StoryQuote quote={content.quote} attribution={content.attribution} />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <StoryImage image={content.image} />
        </Reveal>
      </Container>
    </Section>
  );
}
