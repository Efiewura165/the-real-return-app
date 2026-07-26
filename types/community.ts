import type { ImageAsset, Testimonial } from "@/types/homepage";

export interface CommunityPageContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: ImageAsset;
  };
  stories: {
    eyebrow: string;
    title: string;
    description: string;
    testimonials: Testimonial[];
  };
  newsletter: {
    eyebrow: string;
    title: string;
    description: string;
  };
  events: {
    eyebrow: string;
    title: string;
    description: string;
    emptyStateMessage: string;
  };
  culturalConversations: {
    eyebrow: string;
    title: string;
    description: string;
    topics: string[];
  };
  globalConnections: {
    eyebrow: string;
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
}
