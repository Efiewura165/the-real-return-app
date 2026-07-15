import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EditorialSectionProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}

export function EditorialSection({ eyebrow, title, description, children, className, ...props }: EditorialSectionProps) {
  return (
    <section className={cn("space-y-8", className)} {...props}>
      <div className="space-y-4">
        {eyebrow ? <p className="text-[0.72rem] uppercase tracking-[0.35em] text-foreground/60">{eyebrow}</p> : null}
        <h3 className="font-serif text-2xl font-semibold leading-tight text-foreground sm:text-3xl">{title}</h3>
        {description ? <p className="max-w-3xl text-base leading-8 text-foreground/70">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
