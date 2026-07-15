export interface JourneyPageStage {
  label: string;
  title: string;
  description: string;
  details: string[];
}

export interface JourneyPageContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  stages: JourneyPageStage[];
  closing: {
    eyebrow: string;
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
}
