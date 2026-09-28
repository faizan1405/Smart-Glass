import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Eyebrow, Heading, Lead, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { BtnAnchor, BtnButton } from "@/components/site/Btn";
import {
  EMAIL,
  EMAIL_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  OPERATIONAL_AREAS,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/site";
import { pageSeo } from "@/lib/seo";
import { RelatedLinks } from "@/components/site/RelatedLinks";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact HS smartglass™ | Chandigarh, Punjab & Haryana",
      description:
        "Book a Smart Film or Smart Glass appointment with HS smartglass™. Operational Areas: Chandigarh, Punjab & Haryana.",
      path: "/contact",
    }),
  component: Contact,
});

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "company", label: "Company", type: "text", required: false },
  { name: "application", label: "Application", type: "text", required: false },
] as const;

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      "New enquiry — HS Smart Glass",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "—"}`,
      `Application: ${data.get("application") || "—"}`,
      `Message: ${data.get("message") || "—"}`,
    ].join("\n");

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(lines)}`, "_blank", "noreferrer");
    setSent(true);
    toast.success("Enquiry ready to send — WhatsApp has opened with your details.");
  };

  return (
    <>
      <Toaster />
      <Section className="pt-36 sm:pt-44">
        <Eyebrow>Location and contact</Eyebrow>
        <Heading text={"LET'S MAKE YOUR\nGLASS SMART."} />
        <Lead>Have a project in mind? Start with an appointment.</Lead>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal mode="up">
            <form onSubmit={onSubmit} className="rounded-[2.5rem] bg-card p-8 hs-shadow sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                {FIELDS.map((f) => (
                  <label key={f.name} className={f.name === "application" ? "sm:col-span-2" : ""}>
                    <span className="hs-label text-primary/45">{f.label}</span>
                    <input
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-primary outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary/50"
                      placeholder={f.label}
                    />
                  </label>
                ))}
                <label className="sm:col-span-2">
                  <span className="hs-label text-primary/45">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-primary outline-none transition-colors duration-300 focus:border-primary/50"
                    placeholder="Tell us about your space and application"
                  />
                </label>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BtnButton type="submit">Send Enquiry</BtnButton>
                {sent && (
                  <span className="text-xs text-muted-foreground">
                    Enquiry opened in WhatsApp — press send there to reach our team.
                  </span>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal mode="right" delay={0.15}>
            <div className="rounded-[2.5rem] border border-border/70 p-8 sm:p-10">
              <p className="hs-label text-primary/45">Our office</p>
              <p className="mt-4 text-lg font-bold leading-relaxed text-primary">
                1089, Sector 82-A
                <br />
                Mohali, Punjab, India
              </p>

              <p className="hs-label mt-8 text-primary/45">Direct line</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-2xl font-bold tracking-tight text-primary hover:underline underline-offset-4"
              >
                {WHATSAPP_NUMBER}
              </a>

              <p className="hs-label mt-8 text-primary/45">Email</p>
              <a
                href={EMAIL_URL}
                className="mt-3 block text-base font-semibold text-primary hover:underline underline-offset-4"
              >
                {EMAIL}
              </a>

              <p className="hs-label mt-8 text-primary/45">Instagram</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-base font-semibold text-primary hover:underline underline-offset-4"
              >
                <span>{INSTAGRAM_HANDLE}</span>
                <ArrowUpRight className="size-4 opacity-70" />
              </a>

              <p className="hs-label mt-8 text-primary/45">Operational Areas</p>
              <p className="mt-3 text-sm font-semibold text-primary">{OPERATIONAL_AREAS}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                For specialised projects beyond our primary area, contact us to discuss execution.
              </p>

              <div className="mt-8">
                <BtnAnchor href={WHATSAPP_URL} variant="secondary">
                  Book an Appointment
                </BtnAnchor>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <RelatedLinks exclude={["/contact"]} />
    </>
  );
}
