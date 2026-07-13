import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
  as?: "section" | "div" | "main" | "article" | "header" | "footer";
}

export function Section({ children, className, as: Component = "section", ...props }: SectionProps) {
  return (
    <Component className={cn("py-20 sm:py-24 lg:py-32", className)} {...props}>
      {children}
    </Component>
  );
}
