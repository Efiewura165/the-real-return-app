import { LoaderCircle } from "lucide-react";

export function LoadingState() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-border/70 bg-background/70 px-5 py-3 text-sm text-foreground/70">
        <LoaderCircle className="h-4 w-4 animate-spin" />
        Preparing the experience.
      </div>
    </div>
  );
}
