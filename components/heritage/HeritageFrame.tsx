import Image from "next/image";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { brandConfig } from "@/config/brand";

interface HeritageFrameProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  caption?: ReactNode;
  imageClassName?: string;
  imageProps?: Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "width" | "height">;
}

export function HeritageFrame({
  imageSrc,
  imageAlt,
  caption,
  imageClassName,
  imageProps,
  className,
  ...props
}: HeritageFrameProps) {
  return (
    <figure className={cn("w-full", className)} {...props}>
      <div
        className="relative overflow-hidden border border-black/10 bg-[#f8f2e8] p-3 shadow-[0_20px_50px_rgba(20,33,28,0.08)]"
        style={{ borderColor: `${brandConfig.colors.ink}1A`, padding: brandConfig.imageTreatment.framePadding, boxShadow: brandConfig.imageTreatment.shadow }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={900}
          className={cn("h-full min-h-[280px] w-full", imageClassName)}
          style={{ ...imageProps?.style, objectFit: brandConfig.imageTreatment.objectFit }}
          {...imageProps}
        />
      </div>
      {caption ? <figcaption className="mt-3 text-sm uppercase tracking-[0.24em] text-foreground/65">{caption}</figcaption> : null}
    </figure>
  );
}
