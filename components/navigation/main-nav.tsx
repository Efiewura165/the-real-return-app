"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { brandConfig } from "@/config/brand";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/connect", label: "Connect" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-6 text-sm text-foreground/70 md:flex" style={{ fontFamily: brandConfig.typography.body }}>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "transition-colors hover:text-foreground",
              isActive && "text-foreground",
            )}
            style={{ fontFamily: brandConfig.typography.body }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
