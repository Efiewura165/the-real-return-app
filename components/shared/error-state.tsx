import { AlertTriangle } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  description?: string;
}

export function ErrorState({ title = "Something went wrong", description = "The experience could not be loaded." }: ErrorStateProps) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="max-w-md rounded-[1.5rem] border border-destructive/20 bg-background/70 p-8 text-center shadow-sm">
        <div className="mb-4 flex justify-center text-destructive">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="mt-2 text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
}
