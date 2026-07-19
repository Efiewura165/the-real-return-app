import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatHighlightProps extends HTMLAttributes<HTMLElement> {
  value: ReactNode;
  label: ReactNode;
  description?: ReactNode;
}

export function StatHighlight({ value, label, description, className, ...props }: StatHighlightProps) {
  return (
    <div className={cn("rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/80 p-6", className)} {...props}>
      <p className="font-serif text-3xl font-medium text-foreground sm:text-4xl">{value}</p>
      <p className="mt-2 text-[0.72rem] uppercase tracking-[0.3em] text-foreground/65">{label}</p>
      {description ? <p className="mt-3 text-sm leading-7 text-foreground/70">{description}</p> : null}
    </div>
  );
}
