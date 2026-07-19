import { createClient, type SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Image as SanityImage } from "sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";

export const sanityClient: SanityClient | null = isSanityConfigured
  ? // useCdn: false so Next's own fetch cache (tags/revalidation) is the
    // single source of freshness control — see app/api/revalidate/route.ts
    createClient({ projectId, dataset, apiVersion, useCdn: false })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source: SanityImage) {
  if (!builder) return undefined;
  return builder.image(source).auto("format").fit("max");
}
