"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { HeroChapterContent } from "@/types/homepage";
import { HeroContent } from "./HeroContent";

interface HeroProps {
  content: HeroChapterContent;
}

const AUTO_ADVANCE_MS = 7000;

export function Hero({ content }: HeroProps) {
  const { images } = content;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (next: number) => {
    setIndex(((next % images.length) + images.length) % images.length);
  };

  useEffect(() => {
    if (paused || images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [paused, images.length]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden border-b border-border/70"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((image, imageIndex) => (
        <div
          key={image.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{ opacity: imageIndex === index ? 1 : 0 }}
          aria-hidden={imageIndex !== index}
        >
          <div className={cn("absolute inset-0", imageIndex === index && "photo-slow-zoom")}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload={imageIndex === 0}
              loading={imageIndex === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous background photo"
            onClick={() => goTo(index - 1)}
            className="absolute left-4 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:left-8 sm:top-8"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next background photo"
            onClick={() => goTo(index + 1)}
            className="absolute right-4 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-8 sm:top-8"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="absolute left-1/2 top-7 z-20 flex -translate-x-1/2 gap-2 sm:top-9">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show background photo ${imageIndex + 1}`}
                aria-current={imageIndex === index}
                onClick={() => goTo(imageIndex)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  imageIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </>
      ) : null}

      <Container className="relative z-10 w-full py-16 sm:py-20">
        <Reveal>
          <HeroContent content={content} />
        </Reveal>
      </Container>
    </section>
  );
}
