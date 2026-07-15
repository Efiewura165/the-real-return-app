import Link from "next/link";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/ui/page-transition";
import { brandConfig } from "@/config/brand";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/75 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="font-serif text-xl font-semibold tracking-[0.2em] text-foreground" style={{ fontFamily: brandConfig.typography.display }}>
            {brandConfig.logo.wordmark.toUpperCase()}
          </Link>
          <MainNav />
        </Container>
      </header>

      <PageTransition>
        <main className="flex-1">{children}</main>
      </PageTransition>

      <Footer />
    </div>
  );
}
