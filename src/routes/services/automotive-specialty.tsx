import { createFileRoute } from "@tanstack/react-router";
import automotive from "@/assets/automotive.jpg";
import autoClear from "@/assets/automotive-clear.png";
import autoBlur from "@/assets/automotive-blur.png";
import { Eyebrow, Heading, Lead, ParallaxImage, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { GlassPanel } from "@/components/site/GlassPanel";
import { AUTOMOTIVE_GLASS } from "@/lib/glass-regions";
import { BtnAnchor } from "@/components/site/Btn";
import { WHATSAPP_URL } from "@/lib/site";
import { pageSeo } from "@/lib/seo";
import { RelatedLinks } from "@/components/site/RelatedLinks";

export const Route = createFileRoute("/services/automotive-specialty")({
  head: () =>
    pageSeo({
      title: "Automotive & Specialty Smart Film | HS smartglass™",
      description:
        "Heat-resistant switchable Smart Film for luxury cars, glasstops, armoured vehicles, sleeper buses, aircraft and yachts, in 0.10 mm and 0.38 mm grades.",
      path: "/services/automotive-specialty",
      type: "product",
    }),
  component: Automotive,
});

const APPLICATIONS = [
  "Car glasstops",
  "Bulletproof cars",
  "Armoured executive vehicles",
  "Sleeper buses",
  "Aircraft",
  "Yachts and specialty vehicles",
];

const RANGE = [
  "Auto-Grade White · 0.10 mm",
  "Auto-Grade Black · 0.10 mm",
  "Auto-Grade White · 0.38 mm",
];

function Automotive() {
  return (
    <>
      <PageHero
        eyebrow="Solution 02 · Automotive and Specialty Smart Film"
        title={"BUILT FOR MOVEMENT.\nDESIGNED FOR THE UNEXPECTED."}
        copy="Our Automotive and Specialty Smart Film range takes switchable technology beyond conventional architecture."
        image={automotive}
        imageAlt="Luxury car interior with a switchable smart film panoramic glass roof"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-border/70 sm:grid-cols-2">
            {APPLICATIONS.map((a, i) => (
              <div key={a} className="bg-background px-7 py-6">
                <Reveal mode={i % 2 === 0 ? "up" : "scale"} delay={i * 0.05} duration={0.7}>
                  <p className="text-sm font-semibold text-primary">{a}</p>
                </Reveal>
              </div>
            ))}
          </div>
          <div>
            <Eyebrow>Designed for demanding applications</Eyebrow>
            <Heading
              text={"PERFORMANCE BEYOND\nCONVENTIONAL GLASS."}
              className="text-3xl sm:text-4xl lg:text-[3rem]"
            />
            <Lead>
              Selected solutions offer heat-resistant performance, UV resistance, rapid switching,
              low power consumption and custom application potential.
            </Lead>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          <Eyebrow>Privacy on demand</Eyebrow>
          <Heading text={"SEE OUT.\nSTAY PRIVATE."} className="text-3xl sm:text-4xl lg:text-5xl" />
        </div>
        <Reveal mode="mask" duration={1.1} className="mt-14">
          <GlassPanel
            image={autoClear}
            blurImage={autoBlur}
            caption="Experience the switch."
            glass={AUTOMOTIVE_GLASS}
          />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <ParallaxImage
            src={autoBlur}
            alt="Panoramic vehicle glass roof with switchable smart film in private sun-shielding state"
            from="left"
          />
          <div>
            <Eyebrow>Our range</Eyebrow>
            <Heading
              text={"THREE FILMS.\nCOUNTLESS APPLICATIONS."}
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
            <Lead>
              Every specialty project is assessed according to its glass, geometry, environment and
              intended use.
            </Lead>
            <Reveal mode="up" delay={0.2}>
              <div className="mt-10">
                <BtnAnchor href={WHATSAPP_URL}>Discuss a Bespoke Project</BtnAnchor>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <RelatedLinks exclude={["/services/automotive-specialty"]} />
    </>
  );
}
