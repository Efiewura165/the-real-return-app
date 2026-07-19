import { brandConfig } from "@/config/brand";

interface StoryQuoteProps {
  quote: string;
  attribution: string;
}

export function StoryQuote({ quote, attribution }: StoryQuoteProps) {
  return (
    <blockquote className="rounded-[1.5rem] border border-border/70 bg-background/70 p-6 shadow-[0_12px_32px_rgba(8,15,12,0.08)]">
      <p className="font-serif text-xl leading-8 text-foreground sm:text-2xl" style={{ fontFamily: brandConfig.typography.editorial }}>
        “{quote}”
      </p>
      <footer className="mt-4 text-sm uppercase tracking-[0.3em] text-foreground/65">{attribution}</footer>
    </blockquote>
  );
}
