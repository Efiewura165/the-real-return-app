export interface HomepageLink {
  label: string;
  href: string;
}

export interface HomepageButton extends HomepageLink {
  variant?: "default" | "outline" | "secondary" | "ghost";
}

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  meta?: string;
}

export interface HeroChapterContent {
  brandStack: string[];
  location?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: HomepageLink;
  secondaryCta?: HomepageLink;
  image: ImageAsset;
}

export interface StoryChapterContent {
  eyebrow: string;
  title: string;
  body: string;
  quote: string;
  attribution: string;
  image: ImageAsset;
}

export interface JourneyStage {
  title: string;
  description: string;
  label: string;
  image?: ImageAsset;
}

export interface CoursePreview {
  eyebrow: string;
  title: string;
  description: string;
  image: ImageAsset;
  courses: Array<{
    title: string;
    description: string;
    duration: string;
  }>;
}

export interface HeritageItem {
  title: string;
  description: string;
}

export interface OpportunityItem {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface CtaContent {
  eyebrow: string;
  title: string;
  description: string;
  buttons: HomepageButton[];
}

// — The Future Africa Experience™ homepage sections —

export interface WhyContent {
  eyebrow: string;
  title: string;
  body: string;
  focusAreas: string[];
  image: ImageAsset;
}

export interface Pillar {
  key: "remember" | "return" | "rebuild";
  title: string;
  description: string;
}

export interface PillarsContent {
  eyebrow: string;
  title: string;
  pillars: Pillar[];
}

export interface FounderStoryContent {
  eyebrow: string;
  title: string;
  name: string;
  role: string;
  body: string[];
  pullQuote: string;
  image: ImageAsset;
}

export interface ExperienceGalleryContent {
  eyebrow: string;
  title: string;
  description: string;
  images: ImageAsset[];
}

export interface ReflectionContent {
  eyebrow: string;
  title: string;
  body: string[];
  closingLine: string;
}

export interface LegacyInnovationItem {
  title: string;
  description: string;
}

export interface LegacyInnovationContent {
  eyebrow: string;
  title: string;
  description: string;
  items: LegacyInnovationItem[];
}

export interface ItineraryHighlight {
  day: string;
  title: string;
  location: string;
  description: string;
}

export interface ItineraryContent {
  eyebrow: string;
  title: string;
  description: string;
  highlights: ItineraryHighlight[];
  cta: HomepageLink;
}

export interface InvestmentTier {
  name: string;
  description: string;
  inclusions: string[];
  ctaLabel: string;
}

export interface InvestmentContent {
  eyebrow: string;
  title: string;
  description: string;
  tiers: InvestmentTier[];
}
