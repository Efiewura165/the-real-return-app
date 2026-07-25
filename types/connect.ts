import type { ImageAsset } from "@/types/homepage";

export interface ConnectInfoItem {
  label: string;
  value: string;
  href?: string;
}

export interface ReservationStep {
  step: string;
  title: string;
  description: string;
}

export interface ConnectContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: ImageAsset;
  };
  journeyOptions: {
    eyebrow: string;
    title: string;
    description: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: ReservationStep[];
  };
  info: ConnectInfoItem[];
  form: {
    eyebrow: string;
    title: string;
    description: string;
  };
}
