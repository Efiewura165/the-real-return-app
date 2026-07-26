import type { HomepageLink, ImageAsset } from "@/types/homepage";

export interface AcademyTopic {
  id: string;
  title: string;
}

export interface AcademyModule {
  number: number;
  title: string;
  topics: AcademyTopic[];
}

export interface AcademyPhase {
  phase: number;
  title: string;
  tier: string;
  modules: AcademyModule[];
}

export interface AcademyProgram {
  name: string;
  tagline: string;
  description: string;
}

export interface AcademyResource {
  title: string;
  description: string;
  href?: string;
}

export interface AcademyPageContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: ImageAsset;
  };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  programs: AcademyProgram[];
  phases: AcademyPhase[];
  resources: AcademyResource[];
  closing: {
    eyebrow: string;
    title: string;
    description: string;
    cta: HomepageLink;
  };
}
