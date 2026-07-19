import Image from "next/image";

import type { ImageAsset } from "@/types/homepage";

interface StoryImageProps {
  image: ImageAsset;
}

export function StoryImage({ image }: StoryImageProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-background/70 p-3 shadow-[0_20px_60px_rgba(8,15,12,0.12)]">
      <div
        className="rounded-[1.5rem]"
        style={{
          backgroundImage: 'url("/images/placeholder/paper-texture.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <div className="absolute inset-x-4 top-4 z-10 h-10 rounded-full border border-[#8c632d]/20 bg-[#f7efe3]/65 backdrop-blur-sm" />
          <div className="absolute inset-x-8 top-7 z-10 h-[2px] bg-gradient-to-r from-[#8c632d]/0 via-[#8c632d]/70 to-[#8c632d]/0" />
          <Image src={image.src} alt={image.alt} width={1200} height={900} className="h-full min-h-[340px] w-full rounded-[1.5rem] object-cover" />
        </div>
      </div>
      {image.caption ? (
        <div className="mt-4 border-t border-border/70 pt-4">
          <p className="text-sm leading-7 text-foreground/75">{image.caption}</p>
          {image.meta ? <p className="mt-2 text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">{image.meta}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
