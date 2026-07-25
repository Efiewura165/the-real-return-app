import type { ImageAsset } from "@/types/homepage";

export interface AboutContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: ImageAsset;
  };
  mission: {
    eyebrow: string;
    title: string;
    body: string;
    image: ImageAsset;
  };
  vision: {
    eyebrow: string;
    title: string;
    body: string;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    description: string;
  };
  quote: {
    quote: string;
    attribution: string;
  };
  stats: Array<{ value: string; label: string; description: string }>;
}
