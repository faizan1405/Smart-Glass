import { Link } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-[transform,box-shadow] duration-500 will-change-transform";

const styles: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hs-shadow-sm",
  secondary: "border border-primary/25 bg-background/70 text-primary hs-shadow-sm",
  ghost: "text-primary",
};

/** Animated sweep + magnetic button. The sweep is a pseudo-layer inside, never a colour swap. */
function useMagnet(strength = 0.22) {
  const ref = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
    });
  };
  const reset = () => setOffset({ x: 0, y: 0 });
  return { ref, offset, onMove, reset };
}

function Inner({ children, variant }: { children: ReactNode; variant: Variant }) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100",
          variant === "primary" ? "bg-ice" : "bg-primary",
        )}
      />
      <span
        className={cn(
          "relative z-10 transition-colors duration-500",
          variant === "primary"
            ? "group-hover:text-primary"
            : "group-hover:text-primary-foreground",
        )}
      >
        {children}
      </span>
    </>
  );
}

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function BtnLink({
  to,
  children,
  variant = "primary",
  className,
}: CommonProps & { to: string }) {
  const m = useMagnet();
  return (
    <motion.span
      className="inline-block"
      animate={{ x: m.offset.x, y: m.offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.4 }}
      onMouseMove={m.onMove}
      onMouseLeave={m.reset}
    >
      <Link to={to} className={cn("group", base, styles[variant], className)}>
        <span ref={m.ref} className="hidden" />
        <Inner variant={variant}>{children}</Inner>
      </Link>
    </motion.span>
  );
}

export function BtnAnchor({
  href,
  children,
  variant = "primary",
  className,
}: CommonProps & { href: string }) {
  const m = useMagnet();
  return (
    <motion.span
      className="inline-block"
      animate={{ x: m.offset.x, y: m.offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.4 }}
      onMouseMove={m.onMove}
      onMouseLeave={m.reset}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn("group", base, styles[variant], className)}
      >
        <span ref={m.ref} className="hidden" />
        <Inner variant={variant}>{children}</Inner>
      </a>
    </motion.span>
  );
}

export function BtnButton({
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: CommonProps & { type?: "button" | "submit"; disabled?: boolean }) {
  const m = useMagnet();
  return (
    <motion.span
      className="inline-block"
      animate={{ x: m.offset.x, y: m.offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.4 }}
      onMouseMove={m.onMove}
      onMouseLeave={m.reset}
    >
      <button
        type={type}
        disabled={disabled}
        className={cn("group", base, styles[variant], "disabled:opacity-60", className)}
      >
        <span ref={m.ref} className="hidden" />
        <Inner variant={variant}>{children}</Inner>
      </button>
    </motion.span>
  );
}
