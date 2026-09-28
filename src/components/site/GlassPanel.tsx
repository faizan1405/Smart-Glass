import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PARTITION_GLASS, type GlassRegion } from "@/lib/glass-regions";

/**
 * Interactive smart-glass demonstration.
 * Drag the handle or use the CLEAR / PRIVACY buttons.
 * PRIVACY ON: Fully opaque frosted smart-glass surface (zero see-through, no recognizable details behind glass).
 * PRIVACY OFF: 100% clear view of the original photo with no cloudy layer or blur.
 */
export function GlassPanel({
  image,
  blurImage,
  caption = "Experience the switch.",
  className,
  mode = "slider",
  glass = PARTITION_GLASS,
}: {
  image: string;
  blurImage?: string;
  caption?: string;
  className?: string;
  mode?: "slider" | "compare";
  glass?: GlassRegion;
}) {
  const [pos, setPos] = useState(mode === "compare" ? 50 : 35);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => setFromClientX(e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [dragging, setFromClientX]);

  // When pos <= 50, privacy is active/dominant
  const isPrivacyActive = pos <= 50;

  return (
    <div className={cn("relative rounded-[2rem] hs-shadow-lg", className)}>
      <div
        ref={ref}
        onPointerDown={(e) => {
          setDragging(true);
          setFromClientX(e.clientX);
        }}
        className="relative aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-[2rem] bg-secondary"
      >
        {/* CLEAR STATE (Base): 100% clean, crisp original photograph */}
        <img
          src={image}
          alt="Smart glass installation in clear state"
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />

        {/*
          PRIVACY / FROSTED STATE:
          Revealed from the drag position rightwards (pos% to 100%).
          When pos = 0%, covers the entire image (Full Privacy).
          When pos = 100%, reveals the entire clear image (Full Clear).
        */}
        <div
          className={cn(
            "absolute inset-0 overflow-hidden pointer-events-none",
            dragging ? "duration-75" : "duration-700",
            "transition-[clip-path] ease-out",
          )}
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          {/* Base photograph for ambient scene fidelity */}
          {blurImage ? (
            <img
              src={blurImage}
              alt="Smart glass installation in private state"
              aria-hidden
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          ) : (
            <img
              src={image}
              alt=""
              aria-hidden
              className="absolute inset-0 size-full object-cover"
              style={{ filter: "blur(32px) saturate(0.9) brightness(1.02)" }}
              loading="lazy"
            />
          )}

          {/*
            OPAQUE FROSTED SMART-GLASS OVERLAY:
            Clipped strictly to the specified glass region polygons.
            Provides 100% opacity over the glass interior so that
            people, chairs, tables, and objects behind it are NEVER visible,
            while all exterior walls, frames, and furniture remain untouched.
          */}
          {glass.map((shape, i) => (
            <div key={i} className="absolute inset-0" style={{ clipPath: shape }}>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(248, 250, 253, 0.98) 0%, rgba(234, 239, 246, 0.99) 50%, rgba(244, 247, 251, 0.98) 100%)",
                  backdropFilter: "blur(60px)",
                  boxShadow:
                    "inset 0 0 80px rgba(255, 255, 255, 0.7), inset 0 0 25px rgba(200, 212, 228, 0.3)",
                }}
              />
            </div>
          ))}
        </div>

        {/* State Badges */}
        <span className="pointer-events-none absolute left-5 top-5 rounded-full bg-background/85 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.22em] text-primary backdrop-blur-md hs-shadow-sm">
          CLEAR
        </span>
        <span className="pointer-events-none absolute right-5 top-5 rounded-full bg-primary/90 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.22em] text-primary-foreground backdrop-blur-md hs-shadow-sm">
          PRIVACY
        </span>

        {/* Drag Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{ left: `${pos}%` }}
        >
          <div
            className={cn(
              "absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-background/85 backdrop-blur-md hs-shadow transition-transform duration-300",
              dragging && "scale-110",
            )}
          >
            <span className="text-primary">
              <svg viewBox="0 0 24 24" className="size-5 fill-current">
                <path d="M9.5 6 5 12l4.5 6V6Zm5 0v12l4.5-6-4.5-6Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Toggle Controls */}
      <div className="mx-auto mt-6 flex w-fit items-center justify-center gap-2 rounded-full border border-primary/15 bg-background/70 p-1.5 hs-shadow-sm">
        <button
          type="button"
          aria-pressed={!isPrivacyActive}
          onClick={() => setPos(100)}
          className={cn(
            "rounded-full px-6 py-2 text-[0.7rem] font-semibold tracking-[0.18em] transition-all duration-500",
            !isPrivacyActive
              ? "bg-primary text-primary-foreground hs-shadow-sm"
              : "text-primary/70 hover:text-primary",
          )}
        >
          CLEAR
        </button>
        <button
          type="button"
          aria-pressed={isPrivacyActive}
          onClick={() => setPos(0)}
          className={cn(
            "rounded-full px-6 py-2 text-[0.7rem] font-semibold tracking-[0.18em] transition-all duration-500",
            isPrivacyActive
              ? "bg-primary text-primary-foreground hs-shadow-sm"
              : "text-primary/70 hover:text-primary",
          )}
        >
          PRIVACY
        </button>
      </div>

      {caption && (
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {caption} <span className="text-primary/60">Drag the control or use the toggle.</span>
        </p>
      )}
    </div>
  );
}
