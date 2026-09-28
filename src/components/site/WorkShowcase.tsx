import v1 from "@/assets/showcase-1.mp4";
import v2 from "@/assets/showcase-2.mp4";
import v3 from "@/assets/showcase-3.mp4";
import { Reveal } from "./Reveal";

interface ShowcaseItem {
  src: string;
  category: string;
  title: string;
  description: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    src: v1,
    category: "Commercial Office",
    title: "Remote-Controlled Window",
    description:
      "Instant switch between daylight and full frosted privacy using a wireless remote.",
  },
  {
    src: v2,
    category: "Luxury Residence",
    title: "Smart Shower Enclosure",
    description: "Frameless switchable privacy glass transforming a modern bathroom suite.",
  },
  {
    src: v3,
    category: "Corporate Headquarters",
    title: "Executive Partitions & Doors",
    description: "Floor-to-ceiling switchable smart glass wall and doors switching simultaneously.",
  },
];

export function WorkShowcase() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SHOWCASE_ITEMS.map((item, i) => (
        <Reveal key={item.src} mode="up" delay={i * 0.1}>
          <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] bg-secondary hs-shadow transition-transform duration-700 hover:-translate-y-1.5 hover:hs-shadow-lg">
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            {/* Top Category Badge */}
            <div className="absolute left-4 top-4 z-10">
              <span className="rounded-full bg-background/80 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-md hs-shadow-sm">
                {item.category}
              </span>
            </div>

            {/* Bottom Gradient and Info Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white pt-16">
              <h3 className="text-lg font-bold tracking-tight text-white">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/80">{item.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
