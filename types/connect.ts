export interface ConnectInfoItem {
  label: string;
  value: string;
  href?: string;
}

export interface ConnectContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  info: ConnectInfoItem[];
  form: {
    eyebrow: string;
    title: string;
    description: string;
  };
}
