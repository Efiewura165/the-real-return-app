import { Hero } from "@/components/home/Hero";
import { Why } from "@/components/home/Why";
import { Pillars } from "@/components/home/Pillars";
import { FounderStory } from "@/components/home/Founder";
import { ExperienceGallery } from "@/components/home/Experience";
import { Reflection } from "@/components/home/Reflection";
import { LegacyInnovationPreview } from "@/components/home/LegacyInnovation";
import { AcademyPreview } from "@/components/home/Academy";
import { ItineraryPreview } from "@/components/home/Itinerary";
import { InvestmentPreview } from "@/components/home/Investment";
import { FinalCTA } from "@/components/home/CTA";
import { homepageSections } from "@/config/homepage";
import { getContent } from "@/lib/sanity/fetch";
import { heroContent } from "@/content/homepage/hero";
import { whyContent } from "@/content/homepage/why";
import { pillarsContent } from "@/content/homepage/pillars";
import { founderContent } from "@/content/homepage/founder";
import { experienceContent } from "@/content/homepage/experience";
import { reflectionContent } from "@/content/homepage/reflection";
import { legacyInnovationContent } from "@/content/homepage/legacy-innovation";
import { academyPreview } from "@/content/homepage/academy";
import { itineraryContent } from "@/content/homepage/itinerary";
import { investmentContent } from "@/content/shared/investment";
import { ctaContent } from "@/content/homepage/cta";
import type {
  CoursePreview,
  CtaContent,
  ExperienceGalleryContent,
  FounderStoryContent,
  HeroChapterContent,
  InvestmentContent,
  ItineraryContent,
  LegacyInnovationContent,
  PillarsContent,
  ReflectionContent,
  WhyContent,
} from "@/types/homepage";

export default async function HomePage() {
  const [hero, why, pillars, founder, experience, reflection, legacyInnovation, academy, itinerary, investment, cta] = await Promise.all([
    getContent<HeroChapterContent>("homepageHero", heroContent),
    getContent<WhyContent>("homepageWhy", whyContent),
    getContent<PillarsContent>("homepagePillars", pillarsContent),
    getContent<FounderStoryContent>("homepageFounder", founderContent),
    getContent<ExperienceGalleryContent>("homepageExperience", experienceContent),
    getContent<ReflectionContent>("homepageReflection", reflectionContent),
    getContent<LegacyInnovationContent>("homepageLegacyInnovation", legacyInnovationContent),
    getContent<CoursePreview>("homepageAcademy", academyPreview),
    getContent<ItineraryContent>("homepageItinerary", itineraryContent),
    getContent<InvestmentContent>("homepageInvestment", investmentContent),
    getContent<CtaContent>("homepageCta", ctaContent),
  ]);

  return (
    <>
      {homepageSections.includes("hero") ? <Hero content={hero} /> : null}
      {homepageSections.includes("why") ? <Why content={why} /> : null}
      {homepageSections.includes("pillars") ? <Pillars content={pillars} /> : null}
      {homepageSections.includes("founder") ? <FounderStory content={founder} /> : null}
      {homepageSections.includes("experience") ? <ExperienceGallery content={experience} /> : null}
      {homepageSections.includes("reflection") ? <Reflection content={reflection} /> : null}
      {homepageSections.includes("legacy-innovation") ? <LegacyInnovationPreview content={legacyInnovation} /> : null}
      {homepageSections.includes("academy") ? <AcademyPreview content={academy} /> : null}
      {homepageSections.includes("itinerary") ? <ItineraryPreview content={itinerary} /> : null}
      {homepageSections.includes("investment") ? <InvestmentPreview content={investment} /> : null}
      {homepageSections.includes("cta") ? <FinalCTA content={cta} /> : null}
    </>
  );
}
