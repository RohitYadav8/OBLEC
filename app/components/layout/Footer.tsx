import Link from "next/link";
import { Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Campaign Partners", href: "/our-campaign-partners" },
  { label: "The Facts", href: "/the-facts" },
  { label: "How Can You Help", href: "/how-you-can-help" },
];

const areasOfConcern = [
  { label: "Hodds Farm", href: "/hodds-farm" },
  { label: "Lodge Farm", href: "/lodge-farm" },
  { label: "East of Basingstoke", href: "/east-of-basingstoke" },
  { label: "River Loddon", href: "/river-loddon" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#5C9448] to-[#4A7C3A] pb-10 pt-16 text-white">
      <div className="mx-auto max-w-[1300px] px-8">
        {/* Columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl">Quick Links</h3>

            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/90 transition hover:text-white hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-serif text-xl">Areas of Concern</h3>

            <ul className="mt-6 space-y-3.5">
              {areasOfConcern.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/90 transition hover:text-white hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl">OBLEC</h3>

            <p className="mt-6 text-[15px] leading-relaxed text-white/90">
              Old Basing &amp; Lychpit Environment Campaign
            </p>

            <a
              href="mailto:oblecteam@outlook.com"
              className="mt-4 flex items-center gap-2.5 text-[15px] text-white/90 transition hover:text-white"
            >
              <Mail size={16} />
              oblecteam@outlook.com
            </a>
          </div>
        </div>

        {/* Facebook Icon */}
        <div className="flex justify-center py-10">
          <Link
            href="https://www.facebook.com/people/Old-Basing-and-Lychpit-Environment-Campaign/61555003000332/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OBLEC on Facebook"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#4A7C3A] shadow-md transition hover:scale-105 hover:bg-gray-100"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
            </svg>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-white/35" />

        {/* Copyright */}
        <div className="py-6 text-center text-sm text-white/85">
          © Oblec. All Rights Reserved. Website designed and developed by{" "}
          <span className="font-medium text-white">
            Visualytes Limited
          </span>
        </div>
      </div>
    </footer>
  );
}