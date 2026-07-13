import Link from "next/link";

import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/70">
      <Container className="flex flex-col gap-4 py-8 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 The Real Return. Reconnect with intention.</p>
        <div className="flex gap-4">
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/journey" className="transition-colors hover:text-foreground">
            Journey
          </Link>
          <Link href="/connect" className="transition-colors hover:text-foreground">
            Connect
          </Link>
        </div>
      </Container>
    </footer>
  );
}
