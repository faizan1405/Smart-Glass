import { createFileRoute } from "@tanstack/react-router";
import architectural from "@/assets/architectural.jpg";
import archClear from "@/assets/architectural-clear.png";
import archBlur from "@/assets/architectural-blur.png";
import aboutEditorial from "@/assets/about-editorial.jpg";
import { Eyebrow, Heading, Lead, ParallaxImage, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { GlassPanel } from "@/components/site/GlassPanel";
import { ARCHITECTURAL_GLASS } from "@/lib/glass-regions";
import { BtnAnchor } from "@/components/site/Btn";
import { WHATSAPP_URL } from "@/lib/site";
import { pageSeo } from "@/lib/seo";
import { RelatedLinks } from "@/components/site/RelatedLinks";

export const Route = createFileRoute("/services/architectural")({
  head: () =>
    pageSeo({
      title: "Architectural Smart Film Installation | HS smartglass",
      description:
        "Turn existing glass switchable with 0.38 mm Architectural Smart Film for homes, offices, hotels, clinics, jewellery showrooms and glass partitions.",
      path: "/services/architectural",
      type: "product",
    }),
  component: Architectural,
});

const APPLICATIONS = [
  "Homes and private residences",
  "Corporate offices and meeting rooms",
  "Hotels and hospitals",
  "Jewellery stores and showrooms",
  "Retail and display areas",
  "Luxury interiors",
  "Glass partitions",
  "Commercial spaces",
];

const RANGE = [
  "88% Smart Film · 0.38 mm",
  "92% Ultra-Clear Smart Film · 0.38 mm",
  "High-Quality Colour Smart Film · 0.38 mm",
  "PNLC Smart Film · 0.38 mm",
];

function Architectural() {
  return (
    <>
      <PageHero
        eyebrow="Solution 01 · Architectural Smart Film"
        title={"TRANSFORM THE GLASS\nYOU ALREADY HAVE."}
        copy="Architectural Smart Film allows existing glass to become switchable without replacing the entire glazing system."
        image={architectural}
        imageAlt="Office glass partition fitted with architectural smart film for instant privacy"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>Ideal for</Eyebrow>
            <Heading
              text={"INTELLIGENCE WITHOUT\nREPLACING THE GLASS."}
              className="text-3xl sm:text-4xl lg:text-[3rem]"
            />
            <Lead>
              Retrofit projects, privacy requirements and spaces where existing glass should become
              intelligent without changing the fundamental architecture.
            </Lead>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-border/70 sm:grid-cols-2">
            {APPLICATIONS.map((a, i) => (
              <div key={a} className="bg-background px-7 py-6">
                <Reveal mode={i % 2 === 0 ? "left" : "right"} delay={i * 0.05} duration={0.7}>
                  <p className="text-sm font-semibold text-primary">{a}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal mode="scale" duration={1.1}>
          <GlassPanel
            image={archClear}
            blurImage={archBlur}
            caption="Experience the switch."
            glass={ARCHITECTURAL_GLASS}
          />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <ParallaxImage
            src={aboutEditorial}
            alt="Hospitality interior divided by switchable smart film glass screens"
            from="left"
          />
          <div>
            <Eyebrow>Our range</Eyebrow>
            <Heading
              text={"FOUR WAYS TO\nTRANSFORM A SURFACE."}
              className="text-3xl sm:text-4xl lg:text-5xl"
            />
            <div className="mt-8 space-y-3">
              {RANGE.map((item) => (
                <p
                  key={item}
                  className="border-b border-border/70 pb-3 text-sm font-semibold text-primary"
                >
                  {item}
                </p>
              ))}
            </div>
            <Reveal mode="up" delay={0.2}>
              <div className="mt-10">
                <BtnAnchor href={WHATSAPP_URL}>Book an Appointment</BtnAnchor>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <RelatedLinks exclude={["/services/architectural"]} />
    </>
  );
}
