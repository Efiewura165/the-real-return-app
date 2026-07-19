import { brandConfig } from "@/config/brand";
import type { HeroChapterContent } from "@/types/homepage";
import { HeroActions } from "./HeroActions";

interface HeroContentProps {
  content: HeroChapterContent;
}

export function HeroContent({ content }: HeroContentProps) {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="space-y-1.5">
        {content.brandStack.map((line, index) => (
          <p
            key={line}
            className="text-[0.72rem] uppercase tracking-[0.35em]"
            style={{ color: index === 0 ? brandConfig.colors.goldLuxury : `${brandConfig.colors.ivory}b3` }}
          >
            {line}
          </p>
        ))}
        {content.location ? (
          <p className="text-[0.72rem] uppercase tracking-[0.35em]" style={{ color: `${brandConfig.colors.ivory}b3` }}>
            {content.location}
          </p>
        ) : null}
        <p className="text-[0.72rem] uppercase tracking-[0.35em]" style={{ color: `${brandConfig.colors.ivory}b3` }}>
          {content.eyebrow}
        </p>
      </div>
      <h1
        className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
        style={{ fontFamily: brandConfig.typography.display, color: brandConfig.colors.ivory }}
      >
        {content.title}
      </h1>
      <p className="max-w-xl text-lg leading-8" style={{ color: `${brandConfig.colors.ivory}d9` }}>
        {content.subtitle}
      </p>
      <div className="h-px w-24 bg-gradient-to-r from-[#d9b25c]/80 via-[#d9b25c]/20 to-transparent" />
      <HeroActions primaryAction={content.primaryCta} secondaryAction={content.secondaryCta} />
    </div>
  );
}
