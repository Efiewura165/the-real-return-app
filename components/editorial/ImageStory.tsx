import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeritageFrame } from "@/components/heritage/HeritageFrame";

interface ImageStoryProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  description?: ReactNode;
  caption?: ReactNode;
  children?: ReactNode;
}

export function ImageStory({ imageSrc, imageAlt, title, description, caption, children, className, ...props }: ImageStoryProps) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-[0.95fr_1.05fr]", className)} {...props}>
      <HeritageFrame imageSrc={imageSrc} imageAlt={imageAlt} caption={caption} />
      <div className="space-y-5">
        <h3 className="font-serif text-2xl font-semibold leading-tight text-foreground sm:text-3xl">{title}</h3>
        {description ? <p className="text-base leading-8 text-foreground/70">{description}</p> : null}
        {children ? <div className="space-y-3">{children}</div> : null}
      </div>
    </div>
  );
}
