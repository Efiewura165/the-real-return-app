import { sanityClient, urlForImage } from "@/lib/sanity/client";

function isImageWithMetaDoc(value: unknown): value is { asset: unknown; alt?: string; caption?: string; meta?: string } {
  return !!value && typeof value === "object" && "asset" in (value as Record<string, unknown>);
}

/**
 * Recursively walks a fetched Sanity document, stripping system fields
 * (_id, _type, _key, _rev, ...) and turning imageWithMeta objects into the
 * plain { src, alt, caption?, meta? } shape the app's components expect.
 */
function resolveDoc<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => resolveDoc(item)) as unknown as T;
  }

  if (value && typeof value === "object") {
    if (isImageWithMetaDoc(value)) {
      const { asset, alt, caption, meta } = value as { asset: unknown; alt?: string; caption?: string; meta?: string };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const src = asset ? urlForImage(asset as any)?.url() : undefined;
      return { src: src ?? "", alt: alt ?? "", caption, meta } as unknown as T;
    }

    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      if (key.startsWith("_")) continue;
      result[key] = resolveDoc(val);
    }
    return result as T;
  }

  return value;
}

/**
 * Fetches a singleton document by _type from Sanity. Falls back to the
 * supplied static content when Sanity isn't configured, the document
 * doesn't exist yet, or the fetch fails for any reason — the site must
 * keep working throughout the CMS rollout, never break because a document
 * is missing.
 */
export async function getContent<T>(type: string, fallback: T): Promise<T> {
  if (!sanityClient) return fallback;

  try {
    const doc = await sanityClient.fetch<Record<string, unknown> | null>(`*[_type == $type][0]`, { type }, { next: { tags: [type] } });
    if (!doc) return fallback;
    return resolveDoc(doc) as T;
  } catch (error) {
    console.error(`[sanity] Failed to fetch "${type}", falling back to static content`, error);
    return fallback;
  }
}
