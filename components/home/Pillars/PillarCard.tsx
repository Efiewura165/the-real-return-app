import { brandConfig } from "@/config/brand";
import type { Pillar } from "@/types/homepage";

interface PillarCardProps {
  pillar: Pillar;
  index: number;
}

export function PillarCard({ pillar, index }: PillarCardProps) {
  return (
    <div className="relative border-t pt-6" style={{ borderColor: `${brandConfig.colors.gold}55` }}>
      <span className="text-[0.68rem] uppercase tracking-[0.3em] text-foreground/65">0{index + 1}</span>
      <h3 className="mt-4 font-serif text-3xl text-foreground" style={{ fontFamily: brandConfig.typography.display }}>
        {pillar.title}
      </h3>
      <p className="mt-3 max-w-xs text-base leading-7 text-foreground/70">{pillar.description}</p>
    </div>
  );
}
