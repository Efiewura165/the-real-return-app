import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import type { CoursePreview } from "@/types/homepage";
import { CourseCard } from "./CourseCard";

interface AcademyPreviewProps {
  content: CoursePreview;
}

export function AcademyPreview({ content }: AcademyPreviewProps) {
  return (
    <Section id="academy" className="border-b border-border/70">
      <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <div className="space-y-6">
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{content.eyebrow}</p>
            <Heading as="h2" className="text-3xl sm:text-4xl">
              {content.title}
            </Heading>
            <Text className="max-w-xl text-lg leading-8">{content.description}</Text>
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/60">{content.facilitator}</p>
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-background/70 p-3 shadow-[0_20px_60px_rgba(8,15,12,0.12)]">
              <Image src={content.image.src} alt={content.image.alt} width={1200} height={900} className="h-[280px] w-full rounded-[1.5rem] object-cover" />
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild className="mt-2">
                <Link href={content.cta.href}>{content.cta.label}</Link>
              </Button>
              <Link
                href="/journey-academy"
                className="text-sm font-medium text-foreground underline decoration-black/20 underline-offset-4 transition-colors hover:text-foreground/70"
              >
                View the full curriculum
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-4">
            {content.courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
