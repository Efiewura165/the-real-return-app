"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { brandConfig } from "@/config/brand";
import { primaryNavLinks, secondaryNavLinks } from "@/config/nav";
import { cn } from "@/lib/utils";

/**
 * Visible link row for desktop/tablet widths — added after the hamburger-
 * only pattern (matching Aman/Salamander) turned out too subtle to find in
 * practice. The hamburger drawer (main-nav.tsx) still handles mobile,
 * where there isn't room for a flat link row.
 */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 text-sm lg:flex lg:gap-1.5" style={{ fontFamily: brandConfig.typography.body }}>
      {primaryNavLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-foreground/70 transition-colors hover:bg-foreground hover:text-background",
              isActive && "text-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
      <span className="mx-1 h-4 w-px shrink-0 bg-border/70" aria-hidden="true" />
      {secondaryNavLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-foreground/50 transition-colors hover:bg-foreground hover:text-background",
              isActive && "text-foreground/80",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
