"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { brandConfig } from "@/config/brand";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/connect", label: "Connect" },
];

/**
 * Visible link row for desktop/tablet widths — added after the hamburger-
 * only pattern (matching Aman/Salamander) turned out too subtle to find in
 * practice. The hamburger drawer (main-nav.tsx) still handles mobile,
 * where there isn't room for a flat link row.
 */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-6 text-sm md:flex" style={{ fontFamily: brandConfig.typography.body }}>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn("text-foreground/70 transition-colors hover:text-foreground", isActive && "text-foreground")}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
