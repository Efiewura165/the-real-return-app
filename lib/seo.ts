import type { Metadata } from "next";

export const siteConfig = {
  title: "The Real Return",
  description:
    "An education-first heritage and legacy platform for the African diaspora preparing to reconnect with Ghana.",
  url: "https://therealreturn.com",
  ogImage: "/og-image.svg",
};

export function buildMetadata(pageTitle?: string): Metadata {
  const title = pageTitle ? `${pageTitle} | ${siteConfig.title}` : siteConfig.title;

  return {
    title,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.title,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
  };
}
