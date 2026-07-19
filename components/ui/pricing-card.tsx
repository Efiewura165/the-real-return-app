import { cn } from "@/lib/utils";
import type { InvestmentTier } from "@/types/homepage";

interface PricingCardProps {
  tier: InvestmentTier;
  featured?: boolean;
  onSelect?: () => void;
  className?: string;
}

export function PricingCard({ tier, featured = false, className }: PricingCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[0.2rem] border p-6 sm:p-8",
        featured ? "border-black/20 bg-[#f8f2e8]" : "border-black/10 bg-background/70",
        className,
      )}
    >
      <h3 className="font-serif text-2xl text-foreground">{tier.name}</h3>
      <p className="mt-3 text-base leading-7 text-foreground/70">{tier.description}</p>
      <ul className="mt-6 flex-1 space-y-2 border-t border-black/10 pt-6">
        {tier.inclusions.map((inclusion) => (
          <li key={inclusion} className="text-sm leading-6 text-foreground/65">
            {inclusion}
          </li>
        ))}
      </ul>
      <a
        href="/connect"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-transparent bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        {tier.ctaLabel}
      </a>
    </article>
  );
}
