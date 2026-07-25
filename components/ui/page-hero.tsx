import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { brandConfig } from "@/config/brand";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: { src: string; alt: string };
}

/** Full-bleed image hero for secondary pages — same treatment as the homepage Hero, at a shorter height. */
export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden border-b border-border/70 sm:min-h-[64vh]">
      <div className="absolute inset-0 photo-slow-zoom">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <Container className="relative z-10 w-full py-14 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em]" style={{ color: brandConfig.colors.goldLuxury }}>
              {eyebrow}
            </p>
            <h1
              className="font-serif text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: brandConfig.typography.display, color: brandConfig.colors.ivory }}
            >
              {title}
            </h1>
            {description ? (
              <p className="mx-auto max-w-2xl text-base leading-8" style={{ color: `${brandConfig.colors.ivory}d9` }}>
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
