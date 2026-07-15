import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { brandConfig } from "@/config/brand";

interface QuoteDecorationProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  mark?: string;
}

export function QuoteDecoration({ children, mark = "“", className, ...props }: QuoteDecorationProps) {
  return (
    <blockquote
      className={cn("relative border-l border-black/10 pl-6 text-lg leading-8 text-foreground/80 sm:text-xl", className)}
      {...props}
    >
      <span className="absolute -left-2 top-0 text-5xl leading-none" style={{ color: brandConfig.colors.gold }}>
        {mark}
      </span>
      <p className="font-serif text-[1.05rem] sm:text-[1.2rem]">{children}</p>
    </blockquote>
  );
}
