import Link from "next/link";

import { MainNav } from "@/components/navigation/main-nav";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { FullLockup } from "@/components/brand/Logo";
import { HashScroll } from "@/components/shared/hash-scroll";
import { brandConfig } from "@/config/brand";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <HashScroll />
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/75 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" aria-label={brandConfig.logo.alt}>
            <FullLockup variant="default" size={28} />
          </Link>
          <div className="flex items-center gap-6 sm:gap-8">
            <DesktopNav />
            <div className="flex items-center gap-2 sm:gap-4">
              <Button asChild size="sm" className="hidden sm:inline-flex">
                <Link href="/connect">Reserve Your Journey</Link>
              </Button>
              <MainNav />
            </div>
          </div>
        </Container>
      </header>

      <PageTransition>
        <main className="flex-1">{children}</main>
      </PageTransition>

      <Footer />
    </div>
  );
}
