import { Link } from "@tanstack/react-router";
import logo from "@/assets/hs-logo.png";
import {
  EMAIL,
  EMAIL_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_LINKS,
  OPERATIONAL_AREAS,
  SERVICE_LINKS,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/site";
import { BtnAnchor } from "./Btn";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/70 px-6 pb-12 pt-16">
      <Reveal mode="fade" duration={1.2} className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="HS Smart Glass" className="h-11 w-auto object-contain" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Smart Film. Smart Glass. Infinite Possibilities.
            </p>
            <div className="mt-6">
              <BtnAnchor href={WHATSAPP_URL} variant="secondary" className="px-6 py-3 text-xs">
                Book an Appointment
              </BtnAnchor>
            </div>
          </div>

          <FooterCol title="Navigation">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="block py-1.5 hover:text-primary">
                {l.label}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {SERVICE_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="block py-1.5 hover:text-primary">
                {l.label}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <span className="block py-1">1089, Sector 82-A, Mohali, Punjab, India</span>
            <span className="block py-1 text-xs text-muted-foreground">
              Operational Areas: {OPERATIONAL_AREAS}
            </span>
            <a href={EMAIL_URL} className="block py-1 hover:text-primary">
              {EMAIL}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="block py-1 hover:text-primary"
            >
              {WHATSAPP_NUMBER}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-1 hover:text-primary"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} HS Smart Glass. All rights reserved. Designed by{" "}
            <a
              href="https://www.rankzio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Rank Zio
            </a>
          </span>
          <span className="hs-label text-primary/50">A proud Make in India enterprise</span>
        </div>
      </Reveal>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="hs-label text-primary/50">{title}</p>
      <div className="mt-4 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
