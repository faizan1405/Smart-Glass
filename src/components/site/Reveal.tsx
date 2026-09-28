import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Mode = "fade" | "up" | "left" | "right" | "scale" | "mask" | "blur";

const EASE = [0.22, 1, 0.36, 1] as const;

const variants: Record<Mode, Variants> = {
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  up: { hidden: { opacity: 0, y: 44 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -56 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 56 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1 } },
  mask: { hidden: { opacity: 0, y: 24, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1 } },
  blur: { hidden: { opacity: 0, filter: "blur(14px)" }, show: { opacity: 1, filter: "blur(0px)" } },
};

export function Reveal({
  children,
  mode = "up",
  delay = 0,
  duration = 0.9,
  className,
}: {
  children: ReactNode;
  mode?: Mode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants[mode]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const lines = text.split("\n");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ staggerChildren: 0.09, delayChildren: delay }}
      style={{ display: "block" }}
    >
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}>
          <motion.span
            style={{ display: "block" }}
            variants={{
              hidden: { y: "108%", opacity: 0 },
              show: { y: "0%", opacity: 1 },
            }}
            transition={{ duration: 1, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
