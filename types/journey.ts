import type { ImageAsset } from "@/types/homepage";

export interface JourneyPageStage {
  label: string;
  location: string;
  title: string;
  description: string;
  details: string[];
}

export interface JourneyPageContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: ImageAsset;
  };
  carousel: {
    eyebrow: string;
    title: string;
    description: string;
    slides: ImageAsset[];
  };
  stages: JourneyPageStage[];
  futureJourneys: {
    eyebrow: string;
    title: string;
    description: string;
  };
  closing: {
    eyebrow: string;
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
}
