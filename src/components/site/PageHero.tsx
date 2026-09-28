import { motion } from "framer-motion";
import { RevealWords } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="px-6 pt-36 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="hs-label text-primary/45"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {eyebrow}
        </motion.p>
        <h1 className="hs-display mt-6 max-w-4xl text-[2.4rem] font-extrabold text-primary sm:text-6xl lg:text-[4rem]">
          <RevealWords text={title} delay={0.15} />
        </h1>
        <motion.p
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9 }}
        >
          {copy}
        </motion.p>

        <motion.div
          className="relative mt-14 rounded-[2rem] hs-shadow-lg"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-secondary">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 size-full object-cover"
              width={1600}
              height={900}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
