import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import process from "@/assets/process.jpg";
import { Eyebrow, Heading, Lead, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { pageSeo } from "@/lib/seo";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { FinalCta } from "./index";

export const Route = createFileRoute("/process")({
  head: () =>
    pageSeo({
      title: "Our Smart Glass Installation Process | HS smartglass™",
      description:
        "See how an HS smartglass™ project runs: appointment, discussion, site visit, measurement, quotation, preparation, installation, testing and final handover.",
      path: "/process",
    }),
  component: Process,
});

const STEPS = [
  { n: "01", title: "Appointment", copy: "Contact us and tell us what you want to make smart." },
  {
    n: "02",
    title: "Project Discussion",
    copy: "We understand your application, glass, dimensions and desired functionality.",
  },
  {
    n: "03",
    title: "Site Visit",
    copy: "Where required, our team visits the location to assess the project.",
  },
  {
    n: "04",
    title: "Measurement",
    copy: "Precise measurements are taken and installation requirements finalised.",
  },
  {
    n: "05",
    title: "Solution and Quotation",
    copy: "We recommend the right Smart Film or Smart Glass and provide the quotation.",
  },
  {
    n: "06",
    title: "Preparation",
    copy: "Material and components are prepared to the finalised specifications.",
  },
  {
    n: "07",
    title: "Fitting and Installation",
    copy: "We install the solution and complete the electrical and control connections.",
  },
  {
    n: "08",
    title: "Testing and Handover",
    copy: "The system is tested, demonstrated and handed over.",
  },
];

function Process() {
  return (
    <>
      <Section className="pt-36 sm:pt-44">
        <Eyebrow>Book your project</Eyebrow>
        <Heading text={"FROM FIRST APPOINTMENT\nTO FINISHED GLASS."} />
        <Lead>
          A complete experience, carefully managed from initial requirements to testing and
          handover.
        </Lead>
        <Reveal mode="mask" duration={1.2} className="mt-14">
          <div className="relative rounded-[2rem] hs-shadow">
            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[2rem] bg-secondary">
              <img
                src={process}
                alt="Modern building facade with large smart glass glazing installed by HS smartglass"
                className="absolute inset-0 size-full object-cover"
                width={1400}
                height={900}
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      <HorizontalSteps />

      <Section className="pt-0 lg:hidden">
        <div className="space-y-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} mode="up" delay={i * 0.06}>
              <div className="rounded-[2rem] bg-card p-8 hs-shadow-sm">
                <span className="hs-label text-primary/35">{s.n}</span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <RelatedLinks exclude={["/process"]} />

      <FinalCta />
    </>
  );
}

/** Desktop: horizontal scroll storytelling driven by vertical scroll. */
function HorizontalSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-79%"]);

  return (
    <div ref={ref} className="hidden h-[460vh] lg:block">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-[6vw]">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="flex h-[58vh] w-[34vw] shrink-0 flex-col justify-between rounded-[2.5rem] bg-card p-12 hs-shadow"
            >
              <span className="text-7xl font-extrabold tracking-tighter text-primary/12">
                {s.n}
              </span>
              <div>
                <h3 className="hs-display text-4xl font-extrabold text-primary">{s.title}</h3>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
