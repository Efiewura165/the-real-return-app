import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { brandConfig } from "@/config/brand";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps extends HTMLAttributes<HTMLElement> {
  items: TimelineItem[];
}

export function Timeline({ items, className, ...props }: TimelineProps) {
  return (
    <ol className={cn("space-y-6", className)} {...props}>
      {items.map((item) => (
        <li key={`${item.year}-${item.title}`} className="relative border-l border-black/10 pl-6">
          <span className="absolute -left-[0.42rem] top-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: brandConfig.colors.gold }} />
          <div className="space-y-1">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/55">{item.year}</p>
            <h4 className="font-serif text-xl font-semibold text-foreground">{item.title}</h4>
            <p className="text-base leading-7 text-foreground/70">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
