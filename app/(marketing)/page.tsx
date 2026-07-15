import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { JourneyTimeline } from "@/components/home/Journey";
import { AcademyPreview } from "@/components/home/Academy";
import { HeritagePreview } from "@/components/home/Heritage";
import { OpportunityPreview } from "@/components/home/Opportunity";
import { TestimonialSection } from "@/components/home/Testimonial";
import { FinalCTA } from "@/components/home/CTA";
import { homepageSections } from "@/config/homepage";
import { heroContent } from "@/content/homepage/hero";
import { storyContent } from "@/content/homepage/story";
import { journeyStages } from "@/content/homepage/journey";
import { academyPreview } from "@/content/homepage/academy";
import { heritagePreview } from "@/content/homepage/heritage";
import { opportunityPreview } from "@/content/homepage/opportunity";
import { testimonialContent } from "@/content/homepage/testimonials";
import { ctaContent } from "@/content/homepage/cta";

export default function HomePage() {
  return (
    <>
      {homepageSections.includes("hero") ? <Hero content={heroContent} /> : null}
      {homepageSections.includes("story") ? <Story content={storyContent} /> : null}
      {homepageSections.includes("journey") ? <JourneyTimeline stages={journeyStages} /> : null}
      {homepageSections.includes("academy") ? <AcademyPreview content={academyPreview} /> : null}
      {homepageSections.includes("heritage") ? (
        <HeritagePreview
          eyebrow={heritagePreview.eyebrow}
          title={heritagePreview.title}
          description={heritagePreview.description}
          items={heritagePreview.items}
        />
      ) : null}
      {homepageSections.includes("opportunity") ? (
        <OpportunityPreview
          eyebrow={opportunityPreview.eyebrow}
          title={opportunityPreview.title}
          description={opportunityPreview.description}
          items={opportunityPreview.items}
        />
      ) : null}
      {homepageSections.includes("testimonial") ? (
        <TestimonialSection
          eyebrow={testimonialContent.eyebrow}
          title={testimonialContent.title}
          description={testimonialContent.description}
          testimonials={testimonialContent.testimonials}
        />
      ) : null}
      {homepageSections.includes("cta") ? <FinalCTA content={ctaContent} /> : null}
    </>
  );
}
