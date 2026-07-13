import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
}

export function Heading({ as: Component = "h2", className, children, ...props }: HeadingProps) {
  return (
    <Component className={cn("font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl", className)} {...props}>
      {children}
    </Component>
  );
}
