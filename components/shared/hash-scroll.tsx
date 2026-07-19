"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Native browser hash-scroll-on-load is unreliable here: the page-transition
 * and scroll-reveal animations reflow layout just after mount, so the
 * anchor's position at scroll time doesn't match its settled position.
 * Re-runs the scroll after a short delay once that layout has settled.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    const timeout = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
