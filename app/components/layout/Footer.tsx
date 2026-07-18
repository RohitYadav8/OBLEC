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

const quickLinks = [
  { label: "Area Under Threat", href: "/" },
  { label: "Our Campaign Partners", href: "/our-campaign-partners" },
  { label: "The Facts", href: "/the-facts" },
  { label: "How Can You Help", href: "/how-you-can-help" },
  { label: "Contact Us", href: "/get-in-touch" },
];

const areasOfConcern = [
  { label: "Hodds Farm", href: "/hodds-farm" },
  { label: "Lodge Farm", href: "/lodge-farm" },
  { label: "East of Basingstoke", href: "/east-of-basingstoke" },
  { label: "River Loddon", href: "/river-loddon" },
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
              <Link href="/get-in-touch" className="flex item-center gap-2">

               Subscribe
              </Link>
            
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
                    <Sprout size={13} className="shrink-0 text-[#8FC15D]" />
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
              href="https://www.facebook.com/people/Old-Basing-and-Lychpit-Environment-Campaign/61555003000332/"
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Facebook icon, centered */}
        <div className="mt-14 flex justify-center">
          <Link
            href="https://www.facebook.com/people/Old-Basing-and-Lychpit-Environment-Campaign/61555003000332/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OBLEC on Facebook"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10"
          >
            <FacebookIcon size={24} />
          </Link>
        </div>

        {/* Proudly working with */}
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/15" />
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Sprout size={14} className="text-[#8FC15D]" />
            Proudly working with
            <Sprout size={14} className="text-[#8FC15D]" />
          </p>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {partners.map((p) => (
            <div
              key={p.name}
              className="relative h-20 w-44 opacity-90 transition hover:opacity-100"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-contain"
                sizes="176px"
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
