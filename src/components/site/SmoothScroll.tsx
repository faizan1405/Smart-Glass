import { useEffect } from "react";

/** Lenis smooth scrolling, loaded only in the browser after hydration. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let destroy: (() => void) | undefined;

    (async () => {
      const { default: Lenis } = await import("lenis");
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      destroy = () => lenis.destroy();
    })();

    return () => {
      cancelAnimationFrame(raf);
      destroy?.();
    };
  }, []);

  return null;
}
