import { Droplet, Bean, Sprout, Shirt, Hammer, TrendingUp, type LucideIcon } from "lucide-react";

import { brandConfig } from "@/config/brand";
import type { LegacyInnovationItem } from "@/types/homepage";

// Mapped by position, not title text — resilient to minor copy edits
// made later through the CMS without needing a code change.
const icons: LucideIcon[] = [Droplet, Bean, Sprout, Shirt, Hammer, TrendingUp];

interface LegacyInnovationCardProps {
  item: LegacyInnovationItem;
  index: number;
}

export function LegacyInnovationCard({ item, index }: LegacyInnovationCardProps) {
  const Icon = icons[index % icons.length];

  return (
    <article className="rounded-[1.5rem] border border-border/70 bg-background/70 p-6 shadow-[0_12px_32px_rgba(8,15,12,0.06)]">
      <Icon className="h-5 w-5" strokeWidth={1.5} style={{ color: brandConfig.colors.gold }} aria-hidden="true" />
      <h3 className="mt-4 font-serif text-xl text-foreground">{item.title}</h3>
      <p className="mt-3 text-base leading-7 text-foreground/70">{item.description}</p>
    </article>
  );
}
