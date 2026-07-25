"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types/homepage";

interface JourneyCarouselProps {
  slides: ImageAsset[];
}

const AUTO_ADVANCE_MS = 6000;

export function JourneyCarousel({ slides }: JourneyCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (paused || slides.length <= 1) return;

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, slides.length]);

  return (
    <div
      className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-background/70 shadow-[0_25px_60px_rgba(13,13,12,0.14)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: slideIndex === index ? 1 : 0 }}
            aria-hidden={slideIndex !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              preload={slideIndex === 0}
              loading={slideIndex === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            {slide.caption ? (
              <p className="absolute bottom-5 left-6 right-6 text-base font-medium leading-6 text-white sm:text-lg">{slide.caption}</p>
            ) : null}
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to slide ${slideIndex + 1}`}
                aria-current={slideIndex === index}
                onClick={() => goTo(slideIndex)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  slideIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
