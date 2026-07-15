import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { HomepageLink } from "@/types/homepage";

interface HeroActionsProps {
  primaryAction: HomepageLink;
  secondaryAction: HomepageLink;
}

export function HeroActions({ primaryAction, secondaryAction }: HeroActionsProps) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <Button asChild variant="default">
        <Link href={primaryAction.href}>{primaryAction.label}</Link>
      </Button>
      <Button asChild variant="outline">
        <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
      </Button>
    </div>
  );
}
