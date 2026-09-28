import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/hs-logo.png";
import { NAV_LINKS, SERVICE_LINKS, WHATSAPP_URL } from "@/lib/site";
import { BtnAnchor } from "./Btn";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={cn(
            "pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/50 backdrop-blur-xl transition-all duration-700",
            scrolled
              ? "bg-background/80 px-4 py-2 hs-shadow-sm sm:px-6"
              : "bg-white/45 px-5 py-3 hs-shadow-sm sm:px-7",
          )}
        >
          <Link to="/" className="group flex items-center" aria-label="HS Smart Glass home">
            <img
              src={logo}
              alt="HS Smart Glass"
              className={cn(
                "w-auto origin-left object-contain transition-all duration-700 group-hover:scale-[1.04]",
                scrolled ? "h-8 sm:h-9" : "h-10 sm:h-12",
              )}
              style={{ filter: "drop-shadow(0 6px 18px oklch(0.196 0.052 262 / 0.10))" }}
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link to={link.to} className="group relative flex items-center gap-1 px-4 py-2">
                    <NavText active={pathname.startsWith("/services")}>{link.label}</NavText>
                    <ChevronDown className="size-3.5 text-primary/60" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3"
                      >
                        <div className="rounded-3xl border border-white/60 bg-background/90 p-2 backdrop-blur-xl hs-shadow-sm">
                          {SERVICE_LINKS.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              className="block rounded-2xl px-4 py-3 text-sm font-medium text-primary/80 transition-colors hover:bg-ice/60 hover:text-primary"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.to} to={link.to} className="group relative px-4 py-2">
                  <NavText active={pathname === link.to}>{link.label}</NavText>
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <BtnAnchor href={WHATSAPP_URL} className="px-6 py-3 text-xs">
                Talk to an Expert
              </BtnAnchor>
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex size-11 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-ice/60 lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] p-3 lg:hidden"
          >
            <motion.div
              initial={{ y: -16, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -12, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col rounded-[2rem] border border-white/60 bg-background/95 p-6 backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between">
                <img src={logo} alt="HS Smart Glass" className="h-9 w-auto object-contain" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex size-11 items-center justify-center rounded-full border border-primary/15 text-primary"
                >
                  <X className="size-5" />
                </button>
              </div>

              <motion.div
                className="mt-10 flex flex-1 flex-col gap-1"
                initial="hidden"
                animate="show"
                transition={{ staggerChildren: 0.06, delayChildren: 0.12 }}
              >
                {NAV_LINKS.map((link) => (
                  <motion.div
                    key={link.to}
                    variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.to}
                      className="block py-3 text-3xl font-semibold tracking-tight text-primary"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                {SERVICE_LINKS.map((s) => (
                  <motion.div
                    key={s.to}
                    variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link to={s.to} className="block py-1.5 pl-1 text-base text-primary/60">
                      — {s.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <BtnAnchor href={WHATSAPP_URL} className="w-full">
                Talk to an Expert
              </BtnAnchor>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavText({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span className="relative text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-primary/75 transition-colors group-hover:text-primary">
      {children}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-px w-full origin-left bg-primary transition-transform duration-500",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </span>
  );
}
