import type { HTMLAttributes } from "react";
import { brandConfig } from "@/config/brand";

interface KenteDividerProps extends HTMLAttributes<HTMLElement> {
  accent?: string;
  height?: number;
}

export function KenteDivider({ accent = brandConfig.colors.gold, height = 24, className, ...props }: KenteDividerProps) {
  return (
    <div className={className} aria-hidden="true" {...props}>
      <svg viewBox="0 0 240 24" width="100%" height={height} preserveAspectRatio="none">
        <rect width="240" height="24" fill="transparent" />
        <rect x="0" y="0" width="240" height="8" fill={accent} fillOpacity="0.94" />
        <rect x="0" y="8" width="240" height="8" fill={brandConfig.colors.earth} fillOpacity="0.16" />
        <rect x="0" y="16" width="240" height="8" fill={brandConfig.colors.forest} fillOpacity="0.22" />
        <path d="M0 8H240" stroke={brandConfig.colors.charcoal} strokeOpacity="0.16" strokeWidth="1" />
      </svg>
    </div>
  );
}
