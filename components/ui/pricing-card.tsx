import { Compass, Sparkle, Crown, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { brandConfig } from "@/config/brand";
import type { InvestmentTier } from "@/types/homepage";

// Mapped by position (tier 1/2/3), not name text — resilient to minor
// copy edits made later through the CMS without needing a code change.
const icons: LucideIcon[] = [Compass, Sparkle, Crown];

interface PricingCardProps {
  tier: InvestmentTier;
  index: number;
  featured?: boolean;
  onSelect?: () => void;
  className?: string;
}

export function PricingCard({ tier, index, featured = false, className }: PricingCardProps) {
  const Icon = icons[index % icons.length];

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[0.2rem] border p-6 sm:p-8",
        featured ? "border-black/20 bg-[#f8f2e8]" : "border-black/10 bg-background/70",
        className,
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.5} style={{ color: brandConfig.colors.gold }} aria-hidden="true" />
      <h3 className="mt-4 font-serif text-2xl text-foreground">{tier.name}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-serif text-3xl text-foreground" style={{ color: brandConfig.colors.gold }}>
          {tier.price}
        </span>
        {tier.priceNote ? <span className="text-sm text-foreground/55">{tier.priceNote}</span> : null}
      </div>
      <p className="mt-3 text-base leading-7 text-foreground/70">{tier.description}</p>
      <div className="mt-4 rounded-[0.2rem] border border-black/10 bg-black/[0.02] px-4 py-3">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/55">Accommodation included</p>
        <p className="mt-1 text-sm leading-6 text-foreground/75">{tier.accommodation}</p>
      </div>
      <ul className="mt-6 flex-1 space-y-2 border-t border-black/10 pt-6">
        {tier.inclusions.map((inclusion) => (
          <li key={inclusion} className="text-sm leading-6 text-foreground/65">
            {inclusion}
          </li>
        ))}
      </ul>
      <a
        href="/reserve"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-transparent bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        {tier.ctaLabel}
      </a>
    </article>
  );
}
