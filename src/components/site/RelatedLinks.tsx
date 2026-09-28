import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

type Item = { to: string; label: string; copy: string };

const ALL: Item[] = [
  {
    to: "/",
    label: "Home",
    copy: "Smart Film and Smart Glass, switching from clear to private in a second.",
  },
  {
    to: "/about",
    label: "The HS smartglass experience",
    copy: "Technical assessment, tailored configuration and precision installation.",
  },
  {
    to: "/services",
    label: "All solutions",
    copy: "Three smart-glass technologies, chosen around your application.",
  },
  {
    to: "/services/architectural",
    label: "Architectural Smart Film",
    copy: "Make the glass you already have switchable.",
  },
  {
    to: "/services/automotive-specialty",
    label: "Automotive & Specialty Smart Film",
    copy: "For vehicles, glasstops, buses, aircraft and yachts.",
  },
  {
    to: "/services/smart-glass",
    label: "Smart Glass",
    copy: "Switchable technology built into the glass itself.",
  },
  { to: "/process", label: "Our process", copy: "From first appointment to testing and handover." },
  {
    to: "/contact",
    label: "Contact us",
    copy: "Book an appointment with our team serving Chandigarh, Punjab & Haryana.",
  },
];

/** Contextual internal links so every page connects to the rest of the site. */
export function RelatedLinks({
  exclude = [],
  title = "Continue exploring",
}: {
  exclude?: string[];
  title?: string;
}) {
  const items = ALL.filter((i) => !exclude.includes(i.to)).slice(0, 4);

  return (
    <Section className="pt-0">
      <p className="hs-label text-primary/45">{title}</p>
      <nav
        aria-label="Related pages"
        className="mt-8 grid gap-px overflow-hidden rounded-[2rem] bg-border/70 sm:grid-cols-2"
      >
        {items.map((item, i) => (
          <div key={item.to} className="bg-background">
            <Reveal mode="up" delay={i * 0.06}>
              <Link to={item.to} className="group block px-7 py-7">
                <span className="flex items-center gap-2 text-base font-bold text-primary">
                  {item.label}
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </span>
              </Link>
            </Reveal>
          </div>
        ))}
      </nav>
    </Section>
  );
}
