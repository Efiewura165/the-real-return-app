import Image from "next/image";

import type { ImageAsset } from "@/types/homepage";

interface HeroMediaProps {
  image: ImageAsset;
}

export function HeroMedia({ image }: HeroMediaProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-background/70 p-3 shadow-[0_20px_60px_rgba(8,15,12,0.14)]">
      <div
        className="absolute inset-0 rounded-[1.5rem] opacity-30"
        style={{
          backgroundImage: 'url("/images/placeholder/paper-texture.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative overflow-hidden rounded-[1.5rem]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={900}
          className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 right-4 flex items-center justify-between gap-3">
          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.66rem] uppercase tracking-[0.32em] text-white/90 backdrop-blur-sm">
            Ghana • heritage • return
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a35b]/40 bg-[#7a4c20]/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-[#f7ebd8] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#d4ab5a]" />
            Kente • Adinkra • Cocoa
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.32em] text-white/90 backdrop-blur-sm">
            Documentary study
          </div>
          {image.caption ? <p className="mt-3 max-w-xl text-sm leading-6 text-white/90">{image.caption}</p> : null}
          {image.meta ? <p className="mt-2 text-[0.7rem] uppercase tracking-[0.32em] text-white/70">{image.meta}</p> : null}
        </div>
      </div>
    </div>
  );
}
