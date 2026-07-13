"use client";

import { ErrorState } from "@/components/shared/error-state";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="px-6 py-16 sm:px-8 lg:px-10">
      <ErrorState
        title="The foundation could not be rendered"
        description="Please retry to load the platform shell."
      />
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full border border-border/70 bg-background/70 px-5 py-3 text-sm text-foreground transition-colors hover:bg-background"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
