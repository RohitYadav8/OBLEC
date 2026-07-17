import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  Mail,
  MapPin,
  Heart,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.3l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.13s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.44 2.54c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2Zm0 1.8c-2.67 0-2.98.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.5.6-.67 1.02-.12.31-.26.78-.3 1.65C4.26 8.68 4.25 9 4.25 11.66v.68c0 2.67.01 2.98.06 4.04.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.5 1.02.67.31.12.78.26 1.65.3 1.06.05 1.37.06 4.04.06h.02c2.6 0 2.98-.01 4.02-.06.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.5-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.06.06-1.37.06-4.04v-.02c0-2.6-.01-2.98-.06-4.02-.04-.87-.18-1.34-.3-1.65a2.6 2.6 0 0 0-.67-1.02 2.6 2.6 0 0 0-1.02-.67c-.31-.12-.78-.26-1.65-.3-1.04-.05-1.36-.06-4.02-.06Zm0 3.15a5.05 5.05 0 1 1 0 10.1 5.05 5.05 0 0 1 0-10.1Zm0 1.8a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm5.25-1.99a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0Z" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.9a3 3 0 0 0-2.12-2.12C19.5 4.3 12 4.3 12 4.3s-7.5 0-9.38.48A3 3 0 0 0 .5 6.9 31.4 31.4 0 0 0 0 12.5a31.4 31.4 0 0 0 .5 5.6 3 3 0 0 0 2.12 2.12c1.88.48 9.38.48 9.38.48s7.5 0 9.38-.48a3 3 0 0 0 2.12-2.12c.34-1.83.5-3.71.5-5.6a31.4 31.4 0 0 0-.5-5.6ZM9.6 15.9V9.1l6.24 3.4-6.24 3.4Z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Campaign Partners", href: "/our-campaign-partners" },
  { label: "The Facts", href: "/the-facts" },
  { label: "How Can You Help", href: "/how-you-can-help" },
  { label: "News & Updates", href: "/news-and-updates" },
  { label: "Contact Us", href: "/get-in-touch" },
];

const areasOfConcern = [
  { label: "Hodds Farm", href: "/hodds-farm" },
  { label: "Lodge Farm", href: "/lodge-farm" },
  { label: "East of Basingstoke", href: "/east-of-basingstoke" },
  { label: "River Loddon", href: "/river-loddon" },
  { label: "Local Wildlife", href: "/local-wildlife" },
];

const partners = [
  { name: "OBLEC", image: "/SOLVE.jpg" },
  { name: "CPRE Hampshire", image: "/CPRE-Hampshire-Logo.png" },
  { name: "Parish Council", image: "/oblpc.png" },
  { name: "Visualytes", image: "/visualytes.png" },
  { name: "Zebra Creative", image: "/zebra.png" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C4432] text-white">
      {/* Newsletter bar */}
      <div className="bg-[#EAF3E4]">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-6 px-8 py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
              <Sprout size={26} className="text-[#4A7C3A]" />
            </div>
            <div>
              <p className="font-serif text-xl text-[#1F2E20] md:text-2xl">
                Stay Updated. Stay Involved.
              </p>
              <p className="mt-1 text-sm text-[#2B2B28]/70">
                Subscribe to get the latest news, events and ways you can
                help protect our environment.
              </p>
            </div>
          </div>

          <form className="flex w-full max-w-xl gap-3 md:w-auto">
            <div className="relative flex-1">
              <Mail
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#2B2B28]/40"
              />
              <input
                type="email"
                required
                placeholder="Your email address"
                className="h-12 w-full rounded-md border border-[#4A7C3A]/25 bg-white pl-11 pr-4 text-sm text-[#2B2B28] outline-none focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
              />
            </div>
            <button
              type="submit"
              className="flex h-12 shrink-0 items-center gap-2 rounded-md bg-[#2F5C2B] px-6 text-sm font-semibold text-white transition hover:bg-[#234420]"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto max-w-[1300px] px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* OBLEC brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/logo.png"
                  alt="OBLEC logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-serif text-xl leading-tight text-white">
                  OBLEC
                </p>
                <p className="text-sm leading-tight text-white/70">
                  Old Basing &amp; Lychpit
                  <br />
                  Environment Campaign
                </p>
              </div>
            </div>

            <div className="mt-5 h-[2px] w-14 bg-[#8FC15D]" />

            <p className="mt-5 text-[15px] leading-relaxed text-white/75">
              Working together to protect and improve our countryside for
              wildlife, heritage and future generations.
            </p>

            <div className="mt-6 flex gap-3">
              {[FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10"
                  >
                    <Icon size={16} />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8FC15D]">
              Quick Links
            </p>
            <div className="mt-3 h-[2px] w-10 bg-[#8FC15D]" />

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[15px] text-white/85 transition hover:text-white"
                  >
                    <Sprout
                      size={13}
                      className="shrink-0 text-[#8FC15D]"
                    />
                    <span className="flex-1">{link.label}</span>
                    <ChevronRight
                      size={14}
                      className="text-white/40 opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Concern */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8FC15D]">
              Areas of Concern
            </p>
            <div className="mt-3 h-[2px] w-10 bg-[#8FC15D]" />

            <ul className="mt-5 space-y-3">
              {areasOfConcern.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[15px] text-white/85 transition hover:text-white"
                  >
                    <MapPin size={13} className="shrink-0 text-[#8FC15D]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact card */}
          <div className="rounded-xl bg-white/5 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin size={16} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-white">OBLEC</p>
                <p className="text-sm text-white/70">
                  Old Basing &amp; Lychpit
                  <br />
                  Environment Campaign
                </p>
              </div>
            </div>

            <a
              href="mailto:oblecteam@outlook.com"
              className="mt-4 flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Mail size={16} />
              </span>
              oblecteam@outlook.com
            </a>

            <Link
              href="#"
              className="mt-3 flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                <FacebookIcon size={16} />
              </span>
              Follow us on Facebook
            </Link>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#8FC15D] px-4 py-3 text-sm font-semibold text-[#1F2E20] transition hover:bg-[#7DB04C]"
            >
              <Heart size={16} />
              Support Our Campaign
            </button>
          </div>
        </div>

        {/* Proudly working with */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/15" />
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Sprout size={14} className="text-[#8FC15D]" />
            Proudly working with
            <Sprout size={14} className="text-[#8FC15D]" />
          </p>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {partners.map((p) => (
            <div key={p.name} className="relative h-10 w-32 opacity-90">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#243923]">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-3 px-8 py-5 text-xs text-white/60 md:flex-row">
          <p className="flex items-center gap-2">
            <Sprout size={12} className="text-[#8FC15D]" />© 2026 OBLEC. All
            Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/sitemap" className="hover:text-white">
              Sitemap
            </Link>
          </div>

          <p>
            Designed &amp; Developed by{" "}
            <span className="font-medium text-[#8FC15D]">
              Visualytes Limited
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
