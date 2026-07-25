import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StoryLayoutProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}

export function StoryLayout({ eyebrow, title, description, aside, children, className, ...props }: StoryLayoutProps) {
  return (
    <section className={cn("grid gap-10 lg:grid-cols-[1.2fr_0.8fr]", className)} {...props}>
      <div className="space-y-6">
        {eyebrow ? <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{eyebrow}</p> : null}
        <h3 className="font-serif text-2xl font-normal leading-tight text-foreground sm:text-3xl">{title}</h3>
        {description ? <p className="max-w-2xl text-base leading-8 text-foreground/70">{description}</p> : null}
        <div className="space-y-4">{children}</div>
      </div>
      {aside ? <aside className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/70 p-6">{aside}</aside> : null}
    </section>
  );
}
