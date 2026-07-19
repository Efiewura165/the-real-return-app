import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import { Timeline } from "@/components/editorial/Timeline";
import type { ItineraryContent } from "@/types/homepage";

interface ItineraryPreviewProps {
  content: ItineraryContent;
}

export function ItineraryPreview({ content }: ItineraryPreviewProps) {
  const items = content.highlights.map((highlight) => ({
    year: `${highlight.day} — ${highlight.location}`,
    title: highlight.title,
    description: highlight.description,
  }));

  return (
    <Section id="itinerary" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <EditorialHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        </Reveal>
        <div className="mt-10 max-w-2xl">
          <Reveal delay={0.06}>
            <Timeline items={items} />
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Button asChild variant="outline" className="mt-10">
            <Link href={content.cta.href}>{content.cta.label}</Link>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
