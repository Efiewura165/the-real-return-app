import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

const foundationItems = [
  {
    title: "Architecture",
    description: "App Router, TypeScript, and modular sections designed for long-term scale.",
  },
  {
    title: "Design system",
    description: "Editorial typography, warm earth tones, and reusable UI primitives ready to expand.",
  },
  {
    title: "Experience layer",
    description: "Motion, accessibility, and container-driven layouts are in place without page-level clutter.",
  },
];

export default function Home() {
  return (
    <Container className="py-16 sm:py-24">
      <Section className="rounded-[2.5rem] border border-border/70 bg-background/70 px-6 py-10 shadow-[0_30px_80px_rgba(8,15,12,0.10)] sm:px-10 lg:px-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Platform foundation</p>
            <Heading as="h1" className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
              A premium, scalable foundation is now in place for The Real Return.
            </Heading>
            <Text className="mt-6 max-w-2xl text-lg">
              The architecture has been prepared around heritage, trust, and transformation rather than generic startup patterns. This shell is intentionally modular so product teams can expand without rebuilding the system.
            </Text>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Explore the architecture</Button>
              <Button variant="outline">Prepare content layers</Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {foundationItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card>
                <p className="text-sm uppercase tracking-[0.25em] text-accent">{item.title}</p>
                <Text className="mt-3 text-base">{item.description}</Text>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </Container>
  );
}
