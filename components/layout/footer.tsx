import Link from "next/link";

import { Container } from "@/components/ui/container";
import { primaryNavLinks } from "@/config/nav";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/70">
      <Container className="flex flex-col gap-4 py-8 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 The Real Return. Reconnect with intention.</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {primaryNavLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
