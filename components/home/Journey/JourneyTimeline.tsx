import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import type { JourneyStage } from "@/types/homepage";
import { JourneyConnector } from "./JourneyConnector";
import { JourneyStage as JourneyStageItem } from "./JourneyStage";

interface JourneyTimelineProps {
  stages: JourneyStage[];
}

export function JourneyTimeline({ stages }: JourneyTimelineProps) {
  return (
    <Section id="journey" className="border-b border-border/70">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-foreground/75">The journey</p>
            <Heading as="h2" className="text-3xl sm:text-4xl">
              Learn, connect, experience, and build in a coherent path of return.
            </Heading>
            <Text className="text-lg leading-8">Each stage is designed to deepen understanding and guide action over time.</Text>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 0.06}>
              <div className="relative h-full">
                <JourneyStageItem stage={stage} />
                {index < stages.length - 1 ? <JourneyConnector /> : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
