"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { brandConfig } from "@/config/brand";
import { cn } from "@/lib/utils";
import type { AcademyModule } from "@/types/academy";

interface ModuleCardProps {
  module: AcademyModule;
}

/** A collapsed module by default; expands to a snapshot of every lesson inside it. */
export function ModuleCard({ module }: ModuleCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[1.25rem] border border-border/70 bg-background/70 shadow-[0_12px_32px_rgba(8,15,12,0.06)]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex flex-col gap-1">
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/55">Module {module.number}</span>
          <span className="font-serif text-lg font-normal text-foreground" style={{ fontFamily: brandConfig.typography.editorial }}>
            {module.title}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-3 text-foreground/55">
          <span className="text-[0.7rem] uppercase tracking-[0.2em]">{module.topics.length} lessons</span>
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} aria-hidden="true" />
        </span>
      </button>
      {open ? (
        <ul className="space-y-3 border-t border-black/10 px-6 py-5">
          {module.topics.map((topic) => (
            <li key={topic.id} className="flex gap-3 text-sm leading-6 text-foreground/70">
              <span className="shrink-0 text-foreground/45">{topic.id}</span>
              <span>{topic.title}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
