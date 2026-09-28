import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import architectural from "@/assets/architectural.jpg";
import automotive from "@/assets/automotive.jpg";
import aboutModularHome from "@/assets/about-modular-home.jpg";
import { Eyebrow, Heading, Lead, ParallaxImage, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { pageSeo } from "@/lib/seo";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { FinalCta } from "../index";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageSeo({
      title: "Smart Glass Solutions & Smart Film Range | HS smartglass",
      description:
        "Explore three HS smartglass™ solutions: Architectural Smart Film, Automotive and Specialty Smart Film, and purpose-built Smart Glass for new projects.",
      path: "/services",
    }),
  component: Services,
});

const SERVICES = [
  {
    n: "01",
    title: "Architectural Smart Film",
    copy: "Transform existing glass with 0.38 mm Smart Film for instant privacy, UV protection and intelligent control. Available in four variants.",
    to: "/services/architectural",
    image: architectural,
    alt: "Office glass partition fitted with architectural smart film for privacy",
  },
  {
    n: "02",
    title: "Automotive and Specialty Smart Film",
    copy: "Smart Film for mobility and specialised applications, available in 0.10 mm and 0.38 mm across three variants.",
    to: "/services/automotive-specialty",
    image: automotive,
    alt: "Luxury vehicle glass roof fitted with switchable automotive smart film",
  },
  {
    n: "03",
    title: "Smart Glass",
    copy: "Switchable technology integrated directly into the glass, available in three Smart Glass variants.",
    to: "/services/smart-glass",
    image: aboutModularHome,
    alt: "Luxury residence with floor-to-ceiling switchable smart glass partitions",
  },
] as const;

function Services() {
  return (
    <>
      <Section className="pt-36 sm:pt-44">
        <Eyebrow>Our solutions</Eyebrow>
        <Heading text={"THREE WAYS TO MAKE\nGLASS INTELLIGENT."} />
        <Lead>
          HS smartglass™ provides three core smart-glass technologies, each engineered for a
          different application.
        </Lead>
      </Section>

      {SERVICES.map((s, i) => (
        <Section key={s.title} className="pt-0">
          <div
            className={`grid gap-14 lg:grid-cols-2 lg:items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <Eyebrow>{s.n}</Eyebrow>
              <Heading
                text={s.title.toUpperCase()}
                className="text-3xl sm:text-4xl lg:text-[3rem]"
              />
              <Lead>{s.copy}</Lead>
              <Reveal mode="up" delay={0.2}>
                <Link
                  to={s.to}
                  className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                >
                  Explore {s.title}
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            </div>
            <ParallaxImage src={s.image} alt={s.alt} from={i % 2 === 1 ? "left" : "right"} />
          </div>
        </Section>
      ))}

      <RelatedLinks exclude={["/services"]} />

      <FinalCta />
    </>
  );
}
