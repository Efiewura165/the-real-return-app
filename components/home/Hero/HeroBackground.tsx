import Image from "next/image";

import type { ImageAsset } from "@/types/homepage";

interface HeroBackgroundProps {
  image: ImageAsset;
}

export function HeroBackground({ image }: HeroBackgroundProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-background/70 p-3 shadow-[0_20px_60px_rgba(8,15,12,0.14)]">
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={900}
        className="h-full min-h-[360px] w-full rounded-[1.5rem] object-cover"
        priority
      />
    </div>
  );
}
