import type { SVGProps } from "react";

import { brandConfig } from "@/config/brand";

export type LogoVariant = "default" | "mono-black" | "mono-white" | "gold";

function resolveColor(variant: LogoVariant): string {
  switch (variant) {
    case "mono-black":
      return brandConfig.colors.primary;
    case "mono-white":
      return brandConfig.colors.ivory;
    case "gold":
      return brandConfig.colors.goldLuxury;
    default:
      return brandConfig.colors.primary;
  }
}

interface SymbolMarkProps extends Omit<SVGProps<SVGSVGElement>, "viewBox"> {
  variant?: LogoVariant;
  size?: number | string;
  decorative?: boolean;
}

/**
 * A Sankofa-derived mark: a single line sweeping forward, curling back on
 * itself at the head — "remember, then move forward." Deliberately reduced
 * to geometry rather than an illustrated bird, per the brand's rejection of
 * literal/traditional imagery.
 */
export function SymbolMark({ variant = "default", size = 40, decorative = true, className, ...props }: SymbolMarkProps) {
  const color = resolveColor(variant);
  const resolvedSize = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      viewBox="0 0 120 120"
      width={resolvedSize}
      height={resolvedSize}
      fill="none"
      className={className}
      aria-hidden={decorative}
      role={decorative ? "presentation" : "img"}
      {...props}
    >
      {!decorative ? <title>The Real Return symbol</title> : null}
      <path
        d="M25 94 C 24 60, 47 33, 79 29"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M79 29 C 93 27, 101 36, 97 48 C 94 58, 82 59, 75 51"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="82" cy="41" r="4.5" fill={color} />
    </svg>
  );
}

interface MonogramProps extends Omit<SVGProps<SVGSVGElement>, "viewBox"> {
  variant?: LogoVariant;
  size?: number | string;
  decorative?: boolean;
}

/** Symbol mark inscribed in a measured circular frame — favicon, social, merch. */
export function Monogram({ variant = "default", size = 48, decorative = true, className, ...props }: MonogramProps) {
  const color = resolveColor(variant);
  const resolvedSize = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      viewBox="0 0 120 120"
      width={resolvedSize}
      height={resolvedSize}
      fill="none"
      className={className}
      aria-hidden={decorative}
      role={decorative ? "presentation" : "img"}
      {...props}
    >
      {!decorative ? <title>The Real Return monogram</title> : null}
      <circle cx="60" cy="60" r="56" stroke={color} strokeOpacity="0.35" strokeWidth="2" />
      <g transform="translate(14, 14) scale(0.78)">
        <path d="M25 94 C 24 60, 47 33, 79 29" stroke={color} strokeWidth="6" strokeLinecap="round" />
        <path
          d="M79 29 C 93 27, 101 36, 97 48 C 94 58, 82 59, 75 51"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="82" cy="41" r="5" fill={color} />
      </g>
    </svg>
  );
}

interface WordmarkProps {
  variant?: LogoVariant;
  showTagline?: boolean;
  className?: string;
  taglineClassName?: string;
}

/** Text lockup: "THE REAL RETURN™" with an optional tagline line beneath it. */
export function Wordmark({ variant = "default", showTagline = false, className, taglineClassName }: WordmarkProps) {
  const color = resolveColor(variant);

  return (
    <span className="inline-flex flex-col">
      <span
        className={className ?? "font-serif text-lg font-medium tracking-[0.22em]"}
        style={{ fontFamily: brandConfig.typography.display, color }}
      >
        {brandConfig.logo.wordmark.toUpperCase()}™
      </span>
      {showTagline ? (
        <span
          className={taglineClassName ?? "mt-1 text-[0.6rem] uppercase tracking-[0.28em]"}
          style={{ color: `${color}99` }}
        >
          {brandConfig.tagline}™
        </span>
      ) : null}
    </span>
  );
}

interface FullLockupProps {
  variant?: LogoVariant;
  size?: number;
  showTagline?: boolean;
  className?: string;
}

/** The full logo: symbol + wordmark, side by side. */
export function FullLockup({ variant = "default", size = 32, showTagline = false, className }: FullLockupProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <SymbolMark variant={variant} size={size} />
      <Wordmark variant={variant} showTagline={showTagline} />
    </span>
  );
}
