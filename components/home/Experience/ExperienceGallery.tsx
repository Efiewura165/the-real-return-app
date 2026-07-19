import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import type { ExperienceGalleryContent } from "@/types/homepage";

interface ExperienceGalleryProps {
  content: ExperienceGalleryContent;
}

export function ExperienceGallery({ content }: ExperienceGalleryProps) {
  return (
    <Section id="experience" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <EditorialHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {content.images.map((image, index) => (
            <Reveal key={image.src + index} delay={index * 0.06} className={index === 0 ? "col-span-2 row-span-2" : undefined}>
              <div
                className={`relative overflow-hidden rounded-[0.2rem] border border-black/10 ${
                  index === 0 ? "aspect-square sm:aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
