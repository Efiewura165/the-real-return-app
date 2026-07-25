import { brandConfig } from "@/config/brand";
import { cn } from "@/lib/utils";
import { adinkraGlyphs } from "./AdinkraSymbols";

type AdinkraTone = "ink" | "gold" | "ivory";

interface AdinkraBackdropProps {
  tone?: AdinkraTone;
  opacity?: number;
  className?: string;
  /** "fixed" pins the layer to the viewport (site-wide watermark); "absolute" scopes it to the nearest positioned ancestor. */
  position?: "fixed" | "absolute";
}

function resolveTone(tone: AdinkraTone): string {
  switch (tone) {
    case "gold":
      return brandConfig.colors.goldLuxury;
    case "ivory":
      return brandConfig.colors.ivory;
    default:
      return brandConfig.colors.earth;
  }
}

/**
 * Fixed (non-random) scatter layout so server and client render identically —
 * no hydration mismatch from Math.random(). Positions are percentages of the
 * container; sizes and rotation vary a little to read as hand-placed rather
 * than tiled. Cycles through all six Adinkra glyphs three times over for even
 * coverage across a full viewport.
 */
const placements = [
  { glyph: 0, top: "4%", left: "6%", size: 64, rotate: -8 },
  { glyph: 1, top: "9%", left: "34%", size: 44, rotate: 12 },
  { glyph: 2, top: "3%", left: "62%", size: 56, rotate: -6 },
  { glyph: 3, top: "12%", left: "88%", size: 50, rotate: 15 },
  { glyph: 4, top: "22%", left: "16%", size: 40, rotate: 5 },
  { glyph: 5, top: "26%", left: "48%", size: 68, rotate: -10 },
  { glyph: 0, top: "20%", left: "76%", size: 46, rotate: 9 },
  { glyph: 1, top: "36%", left: "4%", size: 58, rotate: -14 },
  { glyph: 2, top: "40%", left: "60%", size: 42, rotate: 7 },
  { glyph: 3, top: "34%", left: "94%", size: 60, rotate: -4 },
  { glyph: 4, top: "50%", left: "28%", size: 50, rotate: 11 },
  { glyph: 5, top: "54%", left: "82%", size: 44, rotate: -9 },
  { glyph: 0, top: "62%", left: "10%", size: 66, rotate: 6 },
  { glyph: 1, top: "66%", left: "52%", size: 38, rotate: -13 },
  { glyph: 2, top: "72%", left: "72%", size: 54, rotate: 10 },
  { glyph: 3, top: "80%", left: "20%", size: 48, rotate: -7 },
  { glyph: 4, top: "84%", left: "62%", size: 62, rotate: 4 },
  { glyph: 5, top: "90%", left: "40%", size: 42, rotate: -11 },
  { glyph: 0, top: "94%", left: "88%", size: 52, rotate: 13 },
  { glyph: 2, top: "88%", left: "4%", size: 40, rotate: -5 },
] as const;

/**
 * A subtle, scattered layer of all six original line-art Adinkra symbols —
 * vector only, no photography. Meant to sit behind content, dimmed but
 * noticeable, the way a watermark texture would, never competing with
 * foreground text or photos (which paint over it wherever a section has its
 * own opaque background).
 */
export function AdinkraBackdrop({ tone = "ink", opacity = 0.09, className, position = "absolute" }: AdinkraBackdropProps) {
  const color = resolveTone(tone);

  return (
    <div
      className={cn("pointer-events-none inset-0 overflow-hidden", position === "fixed" ? "fixed" : "absolute", className)}
      aria-hidden="true"
    >
      {placements.map((placement, index) => {
        const Glyph = adinkraGlyphs[placement.glyph];
        return (
          <Glyph
            key={index}
            size={placement.size}
            style={{
              position: "absolute",
              top: placement.top,
              left: placement.left,
              color,
              opacity,
              transform: `rotate(${placement.rotate}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}
