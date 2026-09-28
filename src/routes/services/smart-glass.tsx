import { createFileRoute } from "@tanstack/react-router";
import glassCabin from "@/assets/glass-cabin.jpg";
import sgClear from "@/assets/smart-glass-clear.png";
import sgBlur from "@/assets/smart-glass-blur.png";
import { Eyebrow, Heading, Lead, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { GlassPanel } from "@/components/site/GlassPanel";
import { TintCabin } from "@/components/site/TintCabin";
import { SMART_GLASS_PANELS } from "@/lib/glass-regions";
import { BtnAnchor } from "@/components/site/Btn";
import { WHATSAPP_URL } from "@/lib/site";
import { pageSeo } from "@/lib/seo";
import { RelatedLinks } from "@/components/site/RelatedLinks";

export const Route = createFileRoute("/services/smart-glass")({
  head: () =>
    pageSeo({
      title: "Smart Glass Panels & Switchable Glazing | HS smartglass",
      description:
        "Switchable technology built into the glass itself for premium residences, offices, hotels, showrooms and new-build glazing, in three Smart Glass variants.",
      path: "/services/smart-glass",
      type: "product",
    }),
  component: SmartGlass,
});

const STEPS = [
  { n: "01", title: "Power Off", copy: "Glass becomes private." },
  { n: "02", title: "Power On", copy: "Glass becomes transparent." },
  { n: "03", title: "Control", copy: "Integrate switching into your environment." },
];

const RANGE = ["White Smart Glass · 88%", "White Smart Glass · 92%", "Grey Smart Glass · 50%"];

function SmartGlass() {
  return (
    <>
      <PageHero
        eyebrow="Solution 03 · Smart Glass"
        title={"WHEN THE GLASS\nITSELF IS SMART."}
        copy="Smart Glass integrates switchable technology into the glass itself, creating a complete smart-glass solution rather than a retrofit film application."
        image={glassCabin}
        imageAlt="Architectural meeting cabin built with integrated switchable smart glass"
      />

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>The interaction</Eyebrow>
          <Heading
            text={"MOVE THE CONTROL.\nWATCH IT SWITCH."}
            className="text-3xl sm:text-4xl lg:text-[3rem]"
          />
          <Lead>Experience the switch on a full architectural surface.</Lead>
        </div>
        <Reveal mode="scale" duration={1.1} className="mt-14">
          <GlassPanel image={sgClear} blurImage={sgBlur} glass={SMART_GLASS_PANELS} />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <Heading text={"THREE SIMPLE\nSTATES."} className="text-3xl sm:text-4xl lg:text-5xl" />
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-border/70 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className="bg-background p-9">
              <Reveal mode={["left", "up", "right"][i] as "left" | "up" | "right"} delay={i * 0.1}>
                <span className="hs-label text-primary/35">{s.n}</span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>Our range</Eyebrow>
            <Heading
              text={"THREE SMART GLASS\nVARIANTS."}
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
          </div>
          <div>
            <Eyebrow>Choosing a solution</Eyebrow>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary">Choose Smart Film</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  When you want to transform existing glass.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Choose Smart Glass</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  When the smart technology should be incorporated into the glass from the
                  beginning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          <Eyebrow>Colour options</Eyebrow>
          <Heading
            text={"TINTS THAT SHAPE\nTHE SPACE."}
            className="text-3xl sm:text-4xl lg:text-5xl"
          />
          <Lead>Explore how subtle tint options can transform the character of a space.</Lead>
        </div>
        <Reveal mode="mask" duration={1.1} className="mt-14">
          <TintCabin />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal mode="fade" duration={1.1}>
          <div className="flex flex-col items-center gap-8 rounded-[2.5rem] border border-border/70 px-8 py-16 text-center">
            <p className="max-w-xl text-lg leading-relaxed text-primary">
              Premium residences, corporate spaces, hotels, showrooms, jewellery, retail,
              healthcare, privacy partitions, doors, luxury interiors and new-build projects.
            </p>
            <BtnAnchor href={WHATSAPP_URL}>Talk to an Expert</BtnAnchor>
          </div>
        </Reveal>
      </Section>

      <RelatedLinks exclude={["/services/smart-glass"]} />
    </>
  );
}
