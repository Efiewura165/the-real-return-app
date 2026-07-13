import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: "p" | "span" | "small" | "label";
}

export function Text({ as: Component = "p", className, children, ...props }: TextProps) {
  return (
    <Component className={cn("text-base leading-8 text-foreground/70", className)} {...props}>
      {children}
    </Component>
  );
}
