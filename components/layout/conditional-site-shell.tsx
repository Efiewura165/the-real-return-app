"use client";

import { usePathname } from "next/navigation";

import { SiteShell } from "@/components/layout/site-shell";

/**
 * The Sanity Studio at /studio is a full-screen app with its own chrome —
 * it must not be wrapped in the marketing site's header/footer. Kept as a
 * pathname check here rather than a second root layout, since this fork
 * has already shown edge cases around route-group root layouts.
 */
export function ConditionalSiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return <>{children}</>;
  }

  return <SiteShell>{children}</SiteShell>;
}
