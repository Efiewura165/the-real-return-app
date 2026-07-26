import type { ImageAsset } from "@/types/homepage";

export interface InvestHighlightItem {
  title: string;
  description: string;
}

export interface InvestPageContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: ImageAsset;
  };
  whyInvest: {
    eyebrow: string;
    title: string;
    description: string;
    points: InvestHighlightItem[];
  };
  strategicPartnerships: {
    eyebrow: string;
    title: string;
    description: string;
    items: InvestHighlightItem[];
  };
  sponsors: {
    eyebrow: string;
    title: string;
    description: string;
    items: InvestHighlightItem[];
  };
  investors: {
    eyebrow: string;
    title: string;
    description: string;
    points: InvestHighlightItem[];
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
  };
}
