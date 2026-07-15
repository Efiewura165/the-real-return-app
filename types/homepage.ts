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
  eyebrow: string;
  title: string;
  subtitle: string;
  location?: string;
  primaryCta: HomepageLink;
  secondaryCta: HomepageLink;
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
