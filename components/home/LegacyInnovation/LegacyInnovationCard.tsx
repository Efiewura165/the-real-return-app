import type { LegacyInnovationItem } from "@/types/homepage";

interface LegacyInnovationCardProps {
  item: LegacyInnovationItem;
}

export function LegacyInnovationCard({ item }: LegacyInnovationCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-border/70 bg-background/70 p-6 shadow-[0_12px_32px_rgba(8,15,12,0.06)]">
      <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
      <p className="mt-3 text-base leading-7 text-foreground/70">{item.description}</p>
    </article>
  );
}
