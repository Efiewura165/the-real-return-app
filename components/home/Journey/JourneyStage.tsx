import { brandConfig } from "@/config/brand";
import type { JourneyStage as JourneyStageType } from "@/types/homepage";

interface JourneyStageProps {
  stage: JourneyStageType;
}

export function JourneyStage({ stage }: JourneyStageProps) {
  return (
    <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-6 shadow-[0_12px_32px_rgba(8,15,12,0.06)]">
      <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">{stage.label}</p>
      <h3 className="mt-4 font-serif text-2xl font-normal text-foreground" style={{ fontFamily: brandConfig.typography.editorial }}>
        {stage.title}
      </h3>
      <p className="mt-3 text-base leading-7 text-foreground/70">{stage.description}</p>
    </div>
  );
}
