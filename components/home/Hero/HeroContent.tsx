import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import type { HeroChapterContent } from "@/types/homepage";
import { HeroActions } from "./HeroActions";

interface HeroContentProps {
  content: HeroChapterContent;
}

export function HeroContent({ content }: HeroContentProps) {
  return (
    <div className="max-w-2xl space-y-6">
      {content.location ? (
        <p className="text-[0.72rem] uppercase tracking-[0.35em] text-foreground/50">{content.location}</p>
      ) : null}
      <p className="text-[0.72rem] uppercase tracking-[0.35em] text-foreground/60">{content.eyebrow}</p>
      <Heading as="h1" className="text-4xl sm:text-5xl lg:text-6xl">
        {content.title}
      </Heading>
      <Text className="max-w-xl text-lg leading-8">{content.subtitle}</Text>
      <div className="h-px w-24 bg-gradient-to-r from-[#9d6428]/80 via-[#9d6428]/20 to-transparent" />
      <HeroActions primaryAction={content.primaryCta} secondaryAction={content.secondaryCta} />
    </div>
  );
}
