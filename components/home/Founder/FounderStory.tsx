import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { StoryLayout } from "@/components/editorial/StoryLayout";
import { HeritageFrame } from "@/components/heritage/HeritageFrame";
import { PullQuote } from "@/components/editorial/PullQuote";
import type { FounderStoryContent } from "@/types/homepage";

interface FounderStoryProps {
  content: FounderStoryContent;
}

export function FounderStory({ content }: FounderStoryProps) {
  return (
    <Section id="founder" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <StoryLayout
            eyebrow={content.eyebrow}
            title={content.title}
            aside={<HeritageFrame imageSrc={content.image.src} imageAlt={content.image.alt} caption={content.image.caption} />}
          >
            {content.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-foreground/70">
                {paragraph}
              </p>
            ))}
            <PullQuote quote={content.pullQuote} attribution={`${content.name}, ${content.role}`} />
            <Link
              href="/founder"
              className="inline-block text-sm font-medium text-foreground underline decoration-black/20 underline-offset-4 transition-colors hover:text-foreground/70"
            >
              Meet Tarsha, our founder →
            </Link>
          </StoryLayout>
        </Reveal>
      </Container>
    </Section>
  );
}
