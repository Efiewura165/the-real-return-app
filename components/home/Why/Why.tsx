import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ImageStory } from "@/components/editorial/ImageStory";
import type { WhyContent } from "@/types/homepage";

interface WhyProps {
  content: WhyContent;
}

export function Why({ content }: WhyProps) {
  return (
    <Section id="why" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <ImageStory
            imageSrc={content.image.src}
            imageAlt={content.image.alt}
            caption={content.image.caption}
            title={content.title}
            description={content.body}
          >
            <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-black/10 pt-4 text-[0.72rem] uppercase tracking-[0.28em] text-foreground/65">
              {content.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </ImageStory>
        </Reveal>
      </Container>
    </Section>
  );
}
