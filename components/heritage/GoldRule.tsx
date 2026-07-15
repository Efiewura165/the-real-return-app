import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { brandConfig } from "@/config/brand";

interface GoldRuleProps extends HTMLAttributes<HTMLElement> {
  label?: ReactNode;
}

export function GoldRule({ label, className, ...props }: GoldRuleProps) {
  return (
    <div className={cn("flex items-center gap-3", className)} role="separator" aria-label="Decorative rule" {...props}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      {label ? (
        <span className="text-[0.68rem] uppercase tracking-[0.35em] text-foreground/70" style={{ color: brandConfig.colors.earth }}>
          {label}
        </span>
      ) : null}
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b48a3c]/70 to-transparent" />
    </div>
  );
}
