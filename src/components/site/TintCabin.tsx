import { useState } from "react";
import tintWhite from "@/assets/tint-white.png";
import tintGrey from "@/assets/tint-grey.png";
import tintLightBlue from "@/assets/tint-light-blue.png";
import tintLightYellow from "@/assets/tint-light-yellow.png";
import tintLightPurple from "@/assets/tint-light-purple.png";
import tintLightRed from "@/assets/tint-light-red.png";
import tintLightGreen from "@/assets/tint-light-green.png";
import tintWhiteClear from "@/assets/tint-white-clear.jpeg";
import tintGreyClear from "@/assets/tint-grey-clear.png";
import tintBlueClear from "@/assets/tint-blue-clear.png";
import tintYellowClear from "@/assets/tint-yellow-clear.png";
import tintPurpleClear from "@/assets/tint-purple-clear.png";
import tintPinkClear from "@/assets/tint-pink-clear.png";
import { CABIN_GLASS } from "@/lib/glass-regions";
import { cn } from "@/lib/utils";

const TINTS = [
  {
    label: "White",
    blur: tintWhite,
    clear: tintWhiteClear,
    swatch: "oklch(0.98 0 0)",
    frostGradient:
      "linear-gradient(155deg, rgba(250, 252, 255, 0.98) 0%, rgba(234, 239, 246, 0.99) 50%, rgba(246, 248, 252, 0.98) 100%)",
  },
  {
    label: "Blue",
    blur: tintLightBlue,
    clear: tintBlueClear,
    swatch: "oklch(0.82 0.09 240)",
    frostGradient:
      "linear-gradient(155deg, rgba(195, 222, 252, 0.98) 0%, rgba(155, 200, 245, 0.99) 50%, rgba(185, 218, 250, 0.98) 100%)",
  },
  {
    label: "Yellow",
    blur: tintLightYellow,
    clear: tintYellowClear,
    swatch: "oklch(0.92 0.11 95)",
    frostGradient:
      "linear-gradient(155deg, rgba(254, 245, 205, 0.98) 0%, rgba(245, 228, 155, 0.99) 50%, rgba(252, 238, 185, 0.98) 100%)",
  },
  {
    label: "Pink",
    blur: tintLightRed,
    clear: tintPinkClear,
    swatch: "oklch(0.8 0.13 25)",
    frostGradient:
      "linear-gradient(155deg, rgba(252, 215, 225, 0.98) 0%, rgba(246, 172, 192, 0.99) 50%, rgba(250, 198, 212, 0.98) 100%)",
  },
  {
    label: "Lavender",
    blur: tintLightPurple,
    clear: tintPurpleClear,
    swatch: "oklch(0.83 0.1 305)",
    frostGradient:
      "linear-gradient(155deg, rgba(235, 215, 252, 0.98) 0%, rgba(212, 178, 246, 0.99) 50%, rgba(228, 200, 250, 0.98) 100%)",
  },
  {
    label: "Green",
    blur: tintLightGreen,
    clear: tintWhiteClear,
    swatch: "oklch(0.86 0.11 145)",
    frostGradient:
      "linear-gradient(155deg, rgba(210, 242, 218, 0.98) 0%, rgba(180, 230, 192, 0.99) 50%, rgba(198, 238, 208, 0.98) 100%)",
  },
  {
    label: "Grey",
    blur: tintGrey,
    clear: tintGreyClear,
    swatch: "oklch(0.72 0 0)",
    frostGradient:
      "linear-gradient(155deg, rgba(210, 216, 224, 0.98) 0%, rgba(180, 188, 200, 0.99) 50%, rgba(202, 210, 218, 0.98) 100%)",
  },
] as const;

export function TintCabin() {
  const [active, setActive] = useState(0);
  const [privacyOn, setPrivacyOn] = useState(true);
  const tint = TINTS[active] ?? TINTS[0];

  return (
    <div>
      <div className="relative rounded-[2rem] hs-shadow-lg">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-secondary">
          {/* Base: 100% Clear original photograph */}
          <img
            src={tint.clear}
            alt={`${tint.label} smart glass meeting cabin in clear state`}
            className="absolute inset-0 size-full object-cover"
            width={1600}
            height={1000}
            loading="lazy"
          />

          {/* Privacy Layer: Frosted + 100% Opaque Smart Glass Surface */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              privacyOn ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            {/* Ambient tinted scene */}
            <img
              src={tint.blur}
              alt=""
              aria-hidden
              className="absolute inset-0 size-full object-cover"
              width={1600}
              height={1000}
              loading="lazy"
            />

            {/* Opaque frosted glass panes (strictly clipped to glass boundaries) */}
            {CABIN_GLASS.map((shape, i) => (
              <div key={i} className="absolute inset-0" style={{ clipPath: shape }}>
                <div
                  className="absolute inset-0"
                  style={{
                    background: tint.frostGradient,
                    backdropFilter: "blur(60px)",
                    boxShadow:
                      "inset 0 0 60px rgba(255, 255, 255, 0.65), inset 0 0 20px rgba(200, 212, 228, 0.3)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          aria-pressed={privacyOn}
          onClick={() => setPrivacyOn((v) => !v)}
          className={cn(
            "flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-500",
            privacyOn
              ? "border-primary bg-primary text-primary-foreground hs-shadow-sm"
              : "border-primary/20 bg-background/70 text-primary hover:border-primary/45",
          )}
        >
          <span
            className={cn(
              "relative h-3.5 w-7 rounded-full transition-colors duration-300",
              privacyOn ? "bg-primary-foreground/40" : "bg-primary/20",
            )}
          >
            <span
              className={cn(
                "absolute top-1/2 size-3 -translate-y-1/2 rounded-full transition-all duration-300",
                privacyOn ? "left-[calc(100%-0.75rem)] bg-primary-foreground" : "left-0 bg-primary",
              )}
            />
          </span>
          Privacy {privacyOn ? "ON" : "OFF"}
        </button>

        {TINTS.map((t, i) => (
          <button
            key={t.label}
            type="button"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
            className={cn(
              "group flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-500",
              active === i
                ? "border-primary bg-primary text-primary-foreground hs-shadow-sm"
                : "border-primary/20 bg-background/70 text-primary hover:border-primary/45",
            )}
          >
            <span
              className="size-3.5 rounded-full border border-primary/20"
              style={{ background: t.swatch }}
            />
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
