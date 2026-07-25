import { brandConfig } from "@/config/brand";
import { Reveal } from "@/components/ui/reveal";
import type { AcademyPhase } from "@/types/academy";
import { ModuleCard } from "./ModuleCard";

interface PhaseSectionProps {
  phase: AcademyPhase;
}

export function PhaseSection({ phase }: PhaseSectionProps) {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border/70 pb-5">
          <div className="space-y-1">
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">Phase {phase.phase}</p>
            <h3
              className="font-serif text-2xl font-normal text-foreground sm:text-3xl"
              style={{ fontFamily: brandConfig.typography.display }}
            >
              {phase.title}
            </h3>
          </div>
          <span
            className="rounded-full border px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.2em]"
            style={{ borderColor: `${brandConfig.colors.gold}55`, color: brandConfig.colors.earth }}
          >
            {phase.tier}
          </span>
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {phase.modules.map((module, index) => (
          <Reveal key={module.number} delay={index * 0.04}>
            <ModuleCard module={module} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
