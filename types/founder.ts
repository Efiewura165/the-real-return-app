import type { ImageAsset } from "@/types/homepage";

export interface FounderPageContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: ImageAsset;
  };
  name: string;
  role: string;
  body: string[];
  pullQuote: string;
  cta: { label: string; href: string };
}
