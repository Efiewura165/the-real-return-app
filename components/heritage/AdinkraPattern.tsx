import type { SVGProps } from "react";
import { brandConfig } from "@/config/brand";

interface AdinkraPatternProps extends SVGProps<SVGSVGElement> {
  opacity?: number;
  size?: number | string;
  decorative?: boolean;
}

export function AdinkraPattern({
  opacity = 0.18,
  size = "100%",
  decorative = true,
  className,
  ...props
}: AdinkraPatternProps) {
  const resolvedSize = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      viewBox="0 0 160 160"
      width={resolvedSize}
      height={resolvedSize}
      className={className}
      aria-hidden={decorative}
      role={decorative ? "presentation" : "img"}
      {...props}
    >
      {!decorative ? <title>Adinkra-inspired heritage pattern</title> : null}
      <rect x="20" y="20" width="120" height="120" rx="12" fill="none" stroke={brandConfig.colors.earth} strokeOpacity={opacity} strokeWidth="1.5" />
      <path d="M80 30V130" stroke={brandConfig.colors.earth} strokeOpacity={opacity} strokeWidth="1.5" />
      <path d="M30 80H130" stroke={brandConfig.colors.earth} strokeOpacity={opacity} strokeWidth="1.5" />
      <path d="M46 46L114 114" stroke={brandConfig.colors.earth} strokeOpacity={opacity} strokeWidth="1.5" />
      <path d="M46 114L114 46" stroke={brandConfig.colors.earth} strokeOpacity={opacity} strokeWidth="1.5" />
      <circle cx="80" cy="80" r="20" fill="none" stroke={brandConfig.colors.gold} strokeOpacity={opacity} strokeWidth="1.5" />
      <circle cx="80" cy="80" r="8" fill={brandConfig.colors.gold} fillOpacity={opacity} />
    </svg>
  );
}
