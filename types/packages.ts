import type { HomepageLink, ImageAsset, InvestmentTier, ItineraryHighlight } from "@/types/homepage";

export interface SeasonalPackageTier extends InvestmentTier {
  season: string;
  exclusions: string[];
  paymentNote: string;
  highlights: ItineraryHighlight[];
}

export interface PackagesPageContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: ImageAsset;
  };
  evergreen: {
    eyebrow: string;
    title: string;
    description: string;
  };
  seasonal: {
    eyebrow: string;
    title: string;
    description: string;
    tiers: SeasonalPackageTier[];
  };
  closing: {
    eyebrow: string;
    title: string;
    description: string;
    cta: HomepageLink;
  };
}
