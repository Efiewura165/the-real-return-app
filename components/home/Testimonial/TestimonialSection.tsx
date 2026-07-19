import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import type { Testimonial } from "@/types/homepage";
import { StoryCard } from "./StoryCard";

interface TestimonialSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  testimonials: Testimonial[];
}

export function TestimonialSection({ eyebrow, title, description, testimonials }: TestimonialSectionProps) {
  return (
    <Section id="testimonial" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-foreground/65">{eyebrow}</p>
            <Heading as="h2" className="text-3xl sm:text-4xl">
              {title}
            </Heading>
            <Text className="text-lg leading-8">{description}</Text>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <StoryCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
