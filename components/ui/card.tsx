import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <article className={cn("rounded-[2rem] border border-border/70 bg-background/70 p-8 shadow-[0_20px_60px_rgba(8,15,12,0.16)] backdrop-blur", className)} {...props}>
      {children}
    </article>
  );
}
