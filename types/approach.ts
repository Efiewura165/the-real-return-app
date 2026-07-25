import type { ImageAsset } from "@/types/homepage";

export interface ApproachPillar {
  key: "people" | "place" | "purpose";
  title: string;
  description: string;
}

export interface ApproachValue {
  title: string;
  description: string;
}

export interface ApproachMilestone {
  year: string;
  title: string;
  description: string;
}

export interface ApproachPageContent {
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
  pillars: ApproachPillar[];
  values: ApproachValue[];
  milestones: ApproachMilestone[];
}
