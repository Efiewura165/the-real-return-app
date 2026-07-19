import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { EditorialHeading } from "@/components/editorial/EditorialHeading";
import { GoldRule } from "@/components/heritage/GoldRule";
import { ContactForm } from "@/components/connect/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { connectContent } from "@/content/connect";

export const metadata: Metadata = buildMetadata("Connect");

export default function ConnectPage() {
  const { hero, info, form } = connectContent;

  return (
    <>
      <Section className="border-b border-border/70">
        <Container>
          <Reveal>
            <EditorialHeading as="h1" align="center" eyebrow={hero.eyebrow} title={hero.title} description={hero.description} className="mx-auto" />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.35em] text-foreground/65">{form.eyebrow}</p>
                  <h2 className="font-serif text-2xl font-normal leading-tight text-foreground sm:text-3xl">{form.title}</h2>
                  <p className="max-w-md text-base leading-8 text-foreground/70">{form.description}</p>
                </div>
                <GoldRule />
                <dl className="space-y-5">
                  {info.map((item) => (
                    <div key={item.label}>
                      <dt className="text-[0.68rem] uppercase tracking-[0.3em] text-foreground/65">{item.label}</dt>
                      <dd className="mt-1 text-base text-foreground">
                        {item.href ? (
                          <a href={item.href} className="underline decoration-black/20 underline-offset-4 transition-colors hover:text-foreground/70">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/50 p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
