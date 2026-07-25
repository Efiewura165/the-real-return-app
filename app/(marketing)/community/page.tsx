import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { EditorialSection } from "@/components/editorial/EditorialSection";
import { TestimonialSection } from "@/components/home/Testimonial/TestimonialSection";
import { NewsletterForm } from "@/components/community/NewsletterForm";
import { buildMetadata } from "@/lib/seo";
import { getContent } from "@/lib/sanity/fetch";
import { communityPageContent } from "@/content/community";
import type { CommunityPageContent } from "@/types/community";

export const metadata: Metadata = buildMetadata("Community");

export default async function CommunityPage() {
  const { hero, stories, newsletter, events, connections } = await getContent<CommunityPageContent>("communityPage", communityPageContent);

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} image={hero.image} />

      <TestimonialSection
        eyebrow={stories.eyebrow}
        title={stories.title}
        description={stories.description}
        testimonials={stories.testimonials}
      />

      <Section className="border-b border-border/70">
        <Container className="max-w-2xl">
          <Reveal>
            <EditorialSection eyebrow={newsletter.eyebrow} title={newsletter.title} description={newsletter.description}>
              <NewsletterForm />
            </EditorialSection>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-b border-border/70">
        <Container className="max-w-2xl">
          <Reveal>
            <EditorialSection eyebrow={events.eyebrow} title={events.title} description={events.description}>
              <div className="rounded-[0.2rem] border border-dashed border-black/15 bg-[#f8f2e8]/50 p-6 text-center">
                <p className="text-sm leading-7 text-foreground/65">{events.emptyStateMessage}</p>
              </div>
            </EditorialSection>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl text-center">
          <Reveal>
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">{connections.eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl">{connections.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-foreground/70">{connections.description}</p>
            <Button asChild size="lg" className="mt-8">
              <Link href={connections.cta.href}>{connections.cta.label}</Link>
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
