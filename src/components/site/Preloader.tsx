import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/hs-logo.png";

/** Loading state built on the smart-glass idea: transparent → frosted → transparent. */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              className="absolute -inset-x-24 -inset-y-16 rounded-[2rem] border border-white/60"
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{
                opacity: [0, 1, 1, 1],
                backgroundColor: [
                  "oklch(1 0 0 / 0)",
                  "oklch(1 0 0 / 0)",
                  "oklch(0.93 0.022 234 / 0.75)",
                  "oklch(1 0 0 / 0)",
                ],
              }}
              transition={{ duration: 1.6, times: [0, 0.2, 0.62, 1], ease: "easeInOut" }}
            />
            <motion.img
              src={logo}
              alt="HS Smart Glass"
              className="relative h-12 w-auto object-contain sm:h-14"
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
              animate={{
                opacity: 1,
                filter: ["blur(10px)", "blur(0px)", "blur(9px)", "blur(0px)"],
                scale: 1,
              }}
              transition={{ duration: 1.6, times: [0, 0.28, 0.62, 1], ease: "easeInOut" }}
            />
            <motion.p
              className="hs-label relative mt-6 text-primary/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Smart glass for smarter spaces
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
