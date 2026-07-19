import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PullQuoteProps extends HTMLAttributes<HTMLElement> {
  quote: ReactNode;
  attribution?: ReactNode;
}

export function PullQuote({ quote, attribution, className, ...props }: PullQuoteProps) {
  return (
    <figure className={cn("rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/80 p-6 sm:p-8", className)} {...props}>
      <blockquote className="font-serif text-xl leading-8 text-foreground sm:text-2xl">
        {quote}
      </blockquote>
      {attribution ? <figcaption className="mt-4 text-sm uppercase tracking-[0.24em] text-foreground/65">{attribution}</figcaption> : null}
    </figure>
  );
}
