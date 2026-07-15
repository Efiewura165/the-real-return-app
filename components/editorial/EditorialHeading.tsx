import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { brandConfig } from "@/config/brand";

interface EditorialHeadingProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export function EditorialHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Component = "h2",
  className,
  ...props
}: EditorialHeadingProps) {
  return (
    <header className={cn("space-y-4", align === "center" ? "mx-auto max-w-3xl text-center" : "text-left", className)} {...props}>
      {eyebrow ? (
        <p className="text-[0.7rem] uppercase tracking-[0.35em]" style={{ color: brandConfig.colors.earth }}>
          {eyebrow}
        </p>
      ) : null}
      <Component className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </Component>
      {description ? <p className="max-w-2xl text-base leading-8 text-foreground/70">{description}</p> : null}
    </header>
  );
}
