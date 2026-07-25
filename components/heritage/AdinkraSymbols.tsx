import type { SVGProps } from "react";

interface AdinkraGlyphProps extends Omit<SVGProps<SVGSVGElement>, "viewBox" | "children"> {
  size?: number | string;
}

function glyphSvgProps(size: number | string | undefined, props: AdinkraGlyphProps) {
  const resolvedSize = typeof size === "number" ? `${size}px` : size ?? "48px";
  return {
    viewBox: "0 0 100 100",
    width: resolvedSize,
    height: resolvedSize,
    fill: "none",
    "aria-hidden": true as const,
    role: "presentation" as const,
    ...props,
  };
}

/** Adinkrahene — concentric circles. "Chief of the Adinkra symbols": leadership, greatness, charisma. */
export function AdinkraheneGlyph({ size, ...props }: AdinkraGlyphProps) {
  return (
    <svg {...glyphSvgProps(size, props)}>
      <circle cx="50" cy="50" r="10" strokeWidth="3" stroke="currentColor" />
      <circle cx="50" cy="50" r="24" strokeWidth="3" stroke="currentColor" />
      <circle cx="50" cy="50" r="38" strokeWidth="3" stroke="currentColor" />
    </svg>
  );
}

/** Akoma — the heart. Patience, tolerance, and a symbol given in devotion. */
export function AkomaGlyph({ size, ...props }: AdinkraGlyphProps) {
  return (
    <svg {...glyphSvgProps(size, props)}>
      <path
        d="M50 82 C 22 62, 12 40, 24 24 C 33 12, 48 14, 50 30 C 52 14, 67 12, 76 24 C 88 40, 78 62, 50 82 Z"
        strokeWidth="3.5"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Nyame Dua — "Tree of God," an altar symbol for divine presence and protection. */
export function NyameDuaGlyph({ size, ...props }: AdinkraGlyphProps) {
  return (
    <svg {...glyphSvgProps(size, props)}>
      <path d="M50 88 L50 30" strokeWidth="3.5" stroke="currentColor" strokeLinecap="round" />
      <path d="M50 30 L30 14" strokeWidth="3.5" stroke="currentColor" strokeLinecap="round" />
      <path d="M50 30 L50 10" strokeWidth="3.5" stroke="currentColor" strokeLinecap="round" />
      <path d="M50 30 L70 14" strokeWidth="3.5" stroke="currentColor" strokeLinecap="round" />
      <circle cx="30" cy="14" r="4.5" fill="currentColor" />
      <circle cx="50" cy="10" r="4.5" fill="currentColor" />
      <circle cx="70" cy="14" r="4.5" fill="currentColor" />
    </svg>
  );
}

/** Dwennimmen — ram's horns, joined at the base. Humility paired with strength. */
export function DwennimmenGlyph({ size, ...props }: AdinkraGlyphProps) {
  return (
    <svg {...glyphSvgProps(size, props)}>
      <path
        d="M50 60 C 50 40, 34 44, 30 30 C 27 19, 36 12, 45 16"
        strokeWidth="3.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M50 60 C 50 40, 66 44, 70 30 C 73 19, 64 12, 55 16"
        strokeWidth="3.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M50 60 L50 84" strokeWidth="3.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

/** Gye Nyame — "except for God": mirrored spiral commas, the most widely known Adinkra symbol. */
export function GyeNyameGlyph({ size, ...props }: AdinkraGlyphProps) {
  return (
    <svg {...glyphSvgProps(size, props)}>
      <path
        d="M50 50 C 34 50, 22 40, 24 26 C 25 18, 34 14, 40 20 C 45 25, 42 33, 34 33"
        strokeWidth="3.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M50 50 C 66 50, 78 60, 76 74 C 75 82, 66 86, 60 80 C 55 75, 58 67, 66 67"
        strokeWidth="3.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Sankofa spiral — "return and get it": a single line curling back on itself. */
export function SankofaSpiralGlyph({ size, ...props }: AdinkraGlyphProps) {
  return (
    <svg {...glyphSvgProps(size, props)}>
      <path
        d="M50 86 C 20 86, 12 62, 28 48 C 40 37, 58 42, 58 56 C 58 66, 46 69, 42 60"
        strokeWidth="3.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const adinkraGlyphs = [
  AdinkraheneGlyph,
  AkomaGlyph,
  NyameDuaGlyph,
  DwennimmenGlyph,
  GyeNyameGlyph,
  SankofaSpiralGlyph,
] as const;
