import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/editorial/Timeline";
import { brandConfig } from "@/config/brand";
import { cn } from "@/lib/utils";
import type { SeasonalPackageTier } from "@/types/packages";

interface SeasonalPackageCardProps {
  tier: SeasonalPackageTier;
  featured?: boolean;
}

export function SeasonalPackageCard({ tier, featured = false }: SeasonalPackageCardProps) {
  const timelineItems = tier.highlights.map((highlight) => ({
    year: `${highlight.day} — ${highlight.location}`,
    title: highlight.title,
    description: highlight.description,
  }));

  return (
    <article
      className={cn(
        "rounded-[0.2rem] border p-6 sm:p-10",
        featured ? "border-black/20 bg-[#f8f2e8]" : "border-black/10 bg-background/70",
      )}
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/55">{tier.season}</p>
          <h3 className="mt-3 font-serif text-2xl text-foreground sm:text-3xl">{tier.name}</h3>
          <p className="mt-3 text-base leading-7 text-foreground/70">{tier.description}</p>
          <div className="mt-8">
            <Timeline items={timelineItems} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl text-foreground" style={{ color: brandConfig.colors.gold }}>
                {tier.price}
              </span>
              {tier.priceNote ? <span className="text-sm text-foreground/55">{tier.priceNote}</span> : null}
            </div>
            <div className="mt-4 rounded-[0.2rem] border border-black/10 bg-black/[0.02] px-4 py-3">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/55">Accommodation included</p>
              <p className="mt-1 text-sm leading-6 text-foreground/75">{tier.accommodation}</p>
            </div>
          </div>

          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/55">Included</p>
            <ul className="mt-2 space-y-2 border-t border-black/10 pt-3">
              {tier.inclusions.map((item) => (
                <li key={item} className="text-sm leading-6 text-foreground/65">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/55">Not included</p>
            <ul className="mt-2 space-y-2 border-t border-black/10 pt-3">
              {tier.exclusions.map((item) => (
                <li key={item} className="text-sm leading-6 text-foreground/50">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm leading-6 text-foreground/60">{tier.paymentNote}</p>

          <Button asChild size="lg" className="mt-auto w-full">
            <Link href="/reserve">{tier.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
