import type { ImageAsset } from "@/types/homepage";

export interface AboutMilestone {
  year: string;
  title: string;
  description: string;
}

export interface AboutValue {
  title: string;
  description: string;
}

export interface AboutContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    body: string;
    image: ImageAsset;
  };
  values: AboutValue[];
  milestones: AboutMilestone[];
  quote: {
    quote: string;
    attribution: string;
  };
  stats: Array<{ value: string; label: string; description: string }>;
}
