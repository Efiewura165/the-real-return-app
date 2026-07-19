import { Hero } from "@/components/home/Hero";
import { Why } from "@/components/home/Why";
import { Pillars } from "@/components/home/Pillars";
import { FounderStory } from "@/components/home/Founder";
import { ExperienceGallery } from "@/components/home/Experience";
import { Reflection } from "@/components/home/Reflection";
import { LegacyInnovationPreview } from "@/components/home/LegacyInnovation";
import { ItineraryPreview } from "@/components/home/Itinerary";
import { InvestmentPreview } from "@/components/home/Investment";
import { FinalCTA } from "@/components/home/CTA";
import { homepageSections } from "@/config/homepage";
import { heroContent } from "@/content/homepage/hero";
import { whyContent } from "@/content/homepage/why";
import { pillarsContent } from "@/content/homepage/pillars";
import { founderContent } from "@/content/homepage/founder";
import { experienceContent } from "@/content/homepage/experience";
import { reflectionContent } from "@/content/homepage/reflection";
import { legacyInnovationContent } from "@/content/homepage/legacy-innovation";
import { itineraryContent } from "@/content/homepage/itinerary";
import { investmentContent } from "@/content/homepage/investment";
import { ctaContent } from "@/content/homepage/cta";

export default function HomePage() {
  return (
    <>
      {homepageSections.includes("hero") ? <Hero content={heroContent} /> : null}
      {homepageSections.includes("why") ? <Why content={whyContent} /> : null}
      {homepageSections.includes("pillars") ? <Pillars content={pillarsContent} /> : null}
      {homepageSections.includes("founder") ? <FounderStory content={founderContent} /> : null}
      {homepageSections.includes("experience") ? <ExperienceGallery content={experienceContent} /> : null}
      {homepageSections.includes("reflection") ? <Reflection content={reflectionContent} /> : null}
      {homepageSections.includes("legacy-innovation") ? <LegacyInnovationPreview content={legacyInnovationContent} /> : null}
      {homepageSections.includes("itinerary") ? <ItineraryPreview content={itineraryContent} /> : null}
      {homepageSections.includes("investment") ? <InvestmentPreview content={investmentContent} /> : null}
      {homepageSections.includes("cta") ? <FinalCTA content={ctaContent} /> : null}
    </>
  );
}
