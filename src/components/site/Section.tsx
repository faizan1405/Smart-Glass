import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Reveal, RevealWords } from "./Reveal";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-6 py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Reveal mode="fade" duration={0.8}>
      <p className="hs-label text-primary/45">{children}</p>
    </Reveal>
  );
}

export function Heading({ text, className }: { text: string; className?: string }) {
  return (
    <h2
      className={cn(
        "hs-display mt-5 text-4xl font-extrabold text-primary sm:text-5xl lg:text-[3.5rem]",
        className,
      )}
    >
      <RevealWords text={text} />
    </h2>
  );
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Reveal mode="up" delay={0.12}>
      <p
        className={cn(
          "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
          className,
        )}
      >
        {children}
      </p>
    </Reveal>
  );
}

/** Image with a rounded reveal container; the soft shadow sits on the outer wrapper. */
export function ParallaxImage({
  src,
  alt,
  className,
  ratio = "aspect-[16/10]",
  from = "left",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  from?: "left" | "right" | "up";
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.0]);

  const initial =
    from === "left"
      ? { opacity: 0, x: -48 }
      : from === "right"
        ? { opacity: 0, x: 48 }
        : { opacity: 0, y: 48 };

  return (
    <motion.div
      ref={wrap}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group relative rounded-[2rem] hs-shadow", className)}
    >
      <div className={cn("relative w-full overflow-hidden rounded-[2rem] bg-secondary", ratio)}>
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={1600}
          height={1000}
          style={{ y, scale }}
          className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
        />
      </div>
    </motion.div>
  );
}
