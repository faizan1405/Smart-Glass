import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import experienceClear from "@/assets/experience-clear.jpeg";
import experienceBlur from "@/assets/experience-blur.png";
import architectural from "@/assets/architectural.jpg";
import automotive from "@/assets/automotive.jpg";
import aboutModularHome from "@/assets/about-modular-home.jpg";
import aboutEditorial from "@/assets/about-editorial.jpg";
import controlWallSwitch from "@/assets/control-wall-switch.jpg";
import controlRemote from "@/assets/control-remote.jpg";
import controlSchedule from "@/assets/control-schedule.jpg";
import controlVoice from "@/assets/control-voice.jpg";
import controlApp from "@/assets/control-app.jpg";
import { BtnAnchor, BtnLink } from "@/components/site/Btn";
import { Eyebrow, Heading, Lead, ParallaxImage, Section } from "@/components/site/Section";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { GlassPanel } from "@/components/site/GlassPanel";
import { TintCabin } from "@/components/site/TintCabin";
import { WorkShowcase } from "@/components/site/WorkShowcase";
import { Preloader } from "@/components/site/Preloader";
import { WHATSAPP_URL } from "@/lib/site";
import { SITE_URL, pageSeo } from "@/lib/seo";
import { PARTITION_GLASS } from "@/lib/glass-regions";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = pageSeo({
      title: "HS smartglass™ | Smart Film & Smart Glass in Chandigarh, Punjab & Haryana",
      description:
        "HS smartglass™ supplies Smart Film and Smart Glass that switch from clear to private in a second, with UV protection and smart control, serving Chandigarh, Punjab & Haryana.",
      path: "/",
    });
    return {
      ...seo,
      links: [
        ...seo.links,
        { rel: "preload", as: "image", href: heroBanner, fetchpriority: "high" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "HS smartglass",
            url: SITE_URL,
            telephone: "+91 89681 19027",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1089, Sector 82-A",
              addressLocality: "Mohali",
              addressRegion: "Punjab",
              addressCountry: "IN",
            },
            areaServed: ["Chandigarh", "Punjab", "Haryana"],
            description:
              "Switchable Smart Film and Smart Glass for architectural, automotive and specialty applications.",
          }),
        },
      ],
    };
  },
  component: Home,
});

const APPLICATIONS = [
  {
    title: "Architectural Smart Film",
    copy: "Transform existing glass with instant privacy, UV protection and intelligent control for homes, offices and commercial spaces.",
    cta: "Explore Architectural Smart Film",
    to: "/services/architectural",
    image: architectural,
    alt: "Office glass partition fitted with architectural smart film for privacy",
  },
  {
    title: "Automotive and Specialty Smart Film",
    copy: "Intelligent glass for luxury vehicles, glasstops, sleeper buses, aircraft, yachts and entirely custom projects.",
    cta: "Explore Automotive & Specialty",
    to: "/services/automotive-specialty",
    image: automotive,
    alt: "Luxury vehicle glass roof fitted with switchable automotive smart film",
  },
  {
    title: "Smart Glass",
    copy: "Switchable technology integrated directly into the glass for new projects, premium interiors and specialised glazing.",
    cta: "Explore Smart Glass",
    to: "/services/smart-glass",
    image: aboutModularHome,
    alt: "Luxury residence with floor-to-ceiling switchable smart glass partitions",
  },
] as const;

const BENEFITS = [
  {
    title: "Privacy when you want it",
    copy: "Instantly transform transparent glass into a private surface.",
    mode: "up",
  },
  {
    title: "Fast response",
    copy: "Switching in 0–1 second, depending on the selected configuration.",
    mode: "left",
  },
  {
    title: "Minimal power",
    copy: "Designed to operate with very low power requirements.",
    mode: "scale",
  },
  {
    title: "UV protection",
    copy: "UV resistance even when switched off, subject to the selected specification.",
    mode: "right",
  },
  {
    title: "Heat-resistant options",
    copy: "Selected automotive and specialty solutions are built for demanding thermal environments.",
    mode: "mask",
  },
  {
    title: "Cleaner spaces",
    copy: "No curtains. No blinds. No bulky privacy systems.",
    mode: "blur",
  },
  {
    title: "Preserve the design",
    copy: "Keep the visual openness of glass while adding a new layer of function.",
    mode: "mask",
  },
  {
    title: "Effortless control",
    copy: "Connect your glass to switches, remotes, schedules, apps or compatible smart-home systems.",
    mode: "up",
  },
  {
    title: "Built for your brief",
    copy: "Choose a project-specific solution for homes, offices, retail, mobility and bespoke spaces.",
    mode: "scale",
  },
] as const;

const CONTROLS = [
  {
    title: "Wall switch",
    copy: "A discreet plate where you would expect a light switch.",
    image: controlWallSwitch,
    alt: "Discreet wall switch plate controlling smart glass",
  },
  {
    title: "Remote",
    copy: "From the sofa, the bed or the head of the table.",
    image: controlRemote,
    alt: "Handheld remote for switching smart glass resting on a sofa",
  },
  {
    title: "Schedule",
    copy: "Private at 8 PM, clear at sunrise. Set it once.",
    image: controlSchedule,
    alt: "Interior at dusk with scheduled smart glass privacy",
  },
  {
    title: "Voice",
    copy: "Ask your smart speaker for privacy.",
    image: controlVoice,
    alt: "Smart speaker used to voice control smart glass",
  },
  {
    title: "App",
    copy: "Every pane in your pocket, from anywhere.",
    image: controlApp,
    alt: "Smartphone app controlling smart glass partitions",
  },
] as const;

const PLACES = [
  {
    title: "Private residences and architecture",
    copy: "Luxury residences, smart homes, executive offices, boardrooms, hotels, healthcare and architectural partitions.",
  },
  {
    title: "Luxury, retail and hospitality",
    copy: "Jewellery houses, boutiques, flagship showrooms, executive lounges, experience centres and private suites.",
  },
  {
    title: "Automotive and executive mobility",
    copy: "Luxury automobiles, panoramic roofs, smart glasstops, armoured vehicles, executive coaches and sleeper buses.",
  },
  {
    title: "Aviation, marine and bespoke projects",
    copy: "Private aircraft, business jets, yachts, portable executive offices, showcase glazing and custom concepts.",
  },
] as const;

function Home() {
  return (
    <>
      <Preloader />
      <Hero />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>Welcome to intelligent glass</Eyebrow>
            <Heading text={"MORE THAN A SWITCH.\nA NEW WAY TO DESIGN."} />
            <Lead>
              Efficient in execution, professional in every detail and creative in our approach, we
              turn ambitious ideas into working smart-glass solutions. From CEO offices and
              apartments to yachts, jewellers and entirely unconventional spaces, every project is
              shaped around its setting, purpose and design intent. Whether transforming existing
              glass with Smart Film or engineering purpose-built Smart Glass from the beginning, we
              are ready to explore what your project could become.
            </Lead>
          </div>
          <ParallaxImage
            src={aboutEditorial}
            alt="Minimal interior lounge divided by switchable smart glass screens"
            from="right"
          />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="text-center">
          <Eyebrow>Experience the switch</Eyebrow>
          <Heading text={"ONE SURFACE.\nTWO EXPERIENCES."} className="mx-auto" />
          <Lead className="mx-auto text-center">
            Switch instantly between transparency and privacy without changing the glass itself.
          </Lead>
        </div>
        <Reveal mode="scale" duration={1.1} className="mt-14">
          <GlassPanel image={experienceClear} blurImage={experienceBlur} glass={PARTITION_GLASS} />
        </Reveal>
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          <Eyebrow>Colour experience</Eyebrow>
          <Heading text={"GLASS, REIMAGINED\nIN COLOUR."} />
          <Lead>Explore how subtle tint options can transform the character of a space.</Lead>
        </div>
        <Reveal mode="mask" duration={1.1} className="mt-14">
          <TintCabin />
        </Reveal>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Our solutions</Eyebrow>
          <Heading text={"THREE WAYS TO MAKE\nGLASS INTELLIGENT."} />
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.title} mode="up" delay={i * 0.12} className="h-full">
              <Link
                to={a.to}
                className="group block h-full rounded-[2rem] bg-card p-3 hs-shadow transition-transform duration-700 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.6rem] bg-secondary">
                  <img
                    src={a.image}
                    alt={a.alt}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.07]"
                  />
                </div>
                <div className="px-4 pb-5 pt-6">
                  <h3 className="text-xl font-bold tracking-tight text-primary">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.copy}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-transform duration-500 group-hover:translate-x-1">
                    {a.cta} <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          <Eyebrow>Our work</Eyebrow>
          <Heading text={"SELECTED INSTALLATIONS\nIN ACTION."} />
          <Lead>
            Watch smart glass and smart film switch instantaneously across real-world commercial and
            residential installations.
          </Lead>
        </div>
        <WorkShowcase />
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          <Eyebrow>Benefits</Eyebrow>
          <Heading text={"WHAT SMART GLASS\nGIVES YOU."} />
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="bg-background p-8 sm:p-10">
              <Reveal mode={b.mode} delay={i * 0.06}>
                <span className="hs-label text-primary/35">0{i + 1}</span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-primary">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          <Eyebrow>Control</Eyebrow>
          <Heading text={"COMMAND IT\nYOUR WAY."} />
          <Lead>
            One touch, one word or one schedule. Every installation is wired to the control system
            that suits the space.
          </Lead>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {CONTROLS.map((control, i) => (
            <Reveal key={control.title} mode="up" delay={i * 0.06} className="h-full">
              <div className="group h-full overflow-hidden rounded-[1.6rem] bg-card p-3 transition-all duration-500 hover:-translate-y-1 hover:hs-shadow-lg hs-shadow">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.2rem] bg-secondary">
                  <img
                    src={control.image}
                    alt={control.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.08]"
                  />
                </div>
                <div className="px-3 pb-3 pt-5">
                  <h3 className="text-base font-bold text-primary">{control.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {control.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          <Eyebrow>Where smart glass belongs</Eyebrow>
          <Heading text={"INTELLIGENT GLASS FOR\nEXCEPTIONAL SPACES."} />
          <Lead>
            Instant privacy, UV protection and intelligent control, wherever glass is an essential
            part of the experience.
          </Lead>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {PLACES.map((place, i) => (
            <Reveal key={place.title} mode={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
              <div className="border-t border-border/70 py-7">
                <h3 className="text-xl font-bold text-primary">{place.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{place.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <div className="px-3 pt-24 sm:px-6 sm:pt-28">
      <div className="relative mx-auto min-h-[650px] max-w-[1600px] overflow-hidden rounded-[2rem] bg-primary hs-shadow-lg sm:min-h-[720px]">
        <img
          src={heroBanner}
          alt="Switchable smart glass partitions in a premium contemporary office"
          className="absolute inset-0 size-full object-cover object-[58%_center]"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div aria-hidden className="absolute inset-0 bg-primary/55 sm:bg-primary/45" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/45 to-primary/10"
        />

        <div className="relative flex min-h-[650px] items-end px-6 pb-12 pt-32 sm:min-h-[720px] sm:px-12 sm:pb-16 lg:px-20 lg:pb-20">
          <div className="max-w-3xl">
            <motion.p
              className="hs-label text-primary-foreground/65"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              HS smartglass™
            </motion.p>
            <h1 className="hs-display mt-6 text-[2.6rem] font-extrabold text-primary-foreground sm:text-6xl lg:text-[4.4rem]">
              <RevealWords text={"WELCOME TO\nINTELLIGENT GLASS."} delay={1.9} />
            </h1>
            <motion.p
              className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.9 }}
            >
              Smart Film and Smart Glass that switch from clear to private in a second, shield your
              interiors from UV, and turn your home into a smart home.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.9 }}
            >
              <BtnLink to="/services" className="bg-background text-primary">
                Explore Solutions
              </BtnLink>
              <BtnAnchor
                href={WHATSAPP_URL}
                variant="secondary"
                className="border-primary-foreground/35 bg-primary/25 text-primary-foreground backdrop-blur-sm"
              >
                Book an Appointment
              </BtnAnchor>
            </motion.div>
            <motion.p
              className="mt-6 text-xs font-semibold uppercase text-primary-foreground/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.8 }}
            >
              A proud Make in India enterprise, based in Mohali, Punjab
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FinalCta() {
  return (
    <Section>
      <Reveal mode="scale" duration={1.1}>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 text-center sm:px-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(120% 90% at 20% 0%, oklch(0.45 0.08 250 / 0.7), transparent 60%)",
            }}
          />
          <div className="relative">
            <p className="hs-label text-primary-foreground/50">Bespoke projects</p>
            <h2 className="hs-display mx-auto mt-6 max-w-3xl text-4xl font-extrabold text-primary-foreground sm:text-5xl">
              <RevealWords text={"THE UNUSUAL BRIEF IS\nOUR FAVOURITE KIND."} />
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              Yachts, business jets, sleeper buses, armoured vehicles, portable offices and showcase
              glazing. If it has glass, or should, tell us about it.
            </p>
            <div className="mt-10 flex justify-center">
              <BtnAnchor
                href={WHATSAPP_URL}
                className="bg-background text-primary hover:text-primary"
              >
                Discuss a Bespoke Project
              </BtnAnchor>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
