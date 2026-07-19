import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { HeroChapterContent } from "@/types/homepage";
import { HeroContent } from "./HeroContent";

interface HeroProps {
  content: HeroChapterContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section id="hero" className="relative flex min-h-[88vh] items-end overflow-hidden border-b border-border/70">
      <Image src={content.image.src} alt={content.image.alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
      <Container className="relative z-10 w-full py-16 sm:py-20">
        <Reveal>
          <HeroContent content={content} />
        </Reveal>
      </Container>
    </section>
  );
}
