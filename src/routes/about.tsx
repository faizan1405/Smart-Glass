import { createFileRoute } from "@tanstack/react-router";
import aboutEditorial from "@/assets/about-editorial.jpg";
import aboutModularHome from "@/assets/about-modular-home.jpg";
import architectural from "@/assets/architectural.jpg";
import techDetail from "@/assets/tech-detail.jpg";
import { Eyebrow, Heading, Lead, ParallaxImage, Section } from "@/components/site/Section";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { pageSeo } from "@/lib/seo";
import { FinalCta } from "./index";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "The HS smartglass™ Experience | More Than Smart Glass",
      description:
        "Discover the HS smartglass™ experience: technical assessment, project-specific configuration, precision installation and a 1-year Smart Film warranty.",
      path: "/about",
    }),
  component: About,
});

const STORY = [
  {
    title: "Technical Expertise",
    copy: "Your application, glass and operating requirements are evaluated before the solution is specified.",
    image: aboutEditorial,
    alt: "Minimal interior with switchable smart glass screens dividing a lounge",
    from: "right" as const,
  },
  {
    title: "Built Around Your Project",
    copy: "Configuration, dimensions, glass type and control systems are tailored to the actual requirement, standard or unconventional.",
    image: architectural,
    alt: "Office meeting room enclosed by architectural smart film glass partitions",
    from: "left" as const,
  },
  {
    title: "Precision Execution",
    copy: "Measurement, preparation, fitting and testing are managed as one integrated process.",
    image: techDetail,
    alt: "Close-up of a frosted switchable smart glass surface",
    from: "right" as const,
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="The HS smartglass™ experience"
        title={"MORE THAN\nSMART GLASS."}
        copy="A complete experience, from the first consultation to the finished installation. Technology is only half of it; how it is delivered matters just as much."
        image={aboutModularHome}
        imageAlt="Modern home with floor-to-ceiling switchable smart glass windows"
      />

      {STORY.map((s, i) => (
        <Section key={s.title} className={i === 0 ? "" : "pt-0"}>
          <div
            className={`grid gap-14 lg:grid-cols-2 lg:items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <Eyebrow>{`0${i + 1}`}</Eyebrow>
              <Heading text={s.title.toUpperCase()} className="text-3xl sm:text-4xl lg:text-5xl" />
              <Lead>{s.copy}</Lead>
            </div>
            <ParallaxImage src={s.image} alt={s.alt} from={s.from} />
          </div>
        </Section>
      ))}

      <Section className="pt-0">
        <Reveal mode="fade" duration={1.2}>
          <div className="rounded-[2.5rem] border border-border/70 px-8 py-16 text-center sm:px-16">
            <h2 className="hs-display text-3xl font-extrabold text-primary sm:text-4xl">
              <RevealWords text={"SMART FILM.\n1 YEAR WARRANTY."} />
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Smart Film installations are backed by a 1-year warranty, subject to applicable terms.
              You define the requirement. HS smartglass™ delivers the intelligent glazing solution.
            </p>
          </div>
        </Reveal>
      </Section>

      <RelatedLinks exclude={["/about"]} />

      <FinalCta />
    </>
  );
}
