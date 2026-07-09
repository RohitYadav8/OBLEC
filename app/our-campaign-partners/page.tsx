"use client";

import Image from "next/image";
import type React from "react";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/* ---------------------------------------------------------------
   Type system
   Display  – Fraunces: soft ink-trap serif, reads as parish-notice /
              land-registry rather than corporate-green-NGO default.
   Body     – Work Sans: quiet, legible, gets out of the way.
   Utility  – IBM Plex Mono: for role tags, the eyebrow, and the
              housing figures — treated like map-legend data.
----------------------------------------------------------------- */
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

/* ---------------------------------------------------------------
   Signature element: a footpath / contour rule, the way a public
   right-of-way is marked on an Ordnance Survey map — a dashed line
   with perpendicular ticks. Used as the one recurring graphic
   motif tying hero, dividers and section breaks together.
----------------------------------------------------------------- */
function FootpathRule({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <line x1="0" y1="6" x2="400" y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 8" />
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={i} x1={i * 40} y1="1" x2={i * 40} y2="11" stroke="currentColor" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

export default function CampaignPartnersPage() {
  const partners = [
    {
      ref: "01",
      name: "Onnalee Cubitt",
      role: "Local Councillor",
      image: "/partners/onnalee.jpg",
      kind: "photo" as const,
      description:
        "For many years we have worked to protect Basing and Lychpit from excessive development while preserving the local environment, countryside, and community identity.",
    },
    {
      ref: "02",
      name: "CPRE Hampshire",
      role: "Countryside Charity",
      image: "/CPRE-Hampshire-LOGO.png",
      kind: "logo" as const,
      description:
        "CPRE Hampshire works to protect and enhance the countryside through sustainable planning, environmental awareness, and community engagement.",
    },
    {
      ref: "03",
      name: "Visualytes",
      role: "Web & Marketing Solutions",
      image: "/visualytes.png",
      kind: "logo" as const,
      description:
        "Visualytes provides website development, branding, and digital marketing services helping organisations grow their online presence.",
    },
    {
      ref: "04",
      name: "Zebra Creative",
      role: "Creative Design Partner",
      image: "/zebra.png",
      kind: "logo" as const,
      description:
        "Zebra Creative delivers graphic design and marketing solutions with a flexible approach tailored to client requirements.",
    },
  ];

  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <style jsx global>{`
        :root {
          --ink: #202b21;
          --moss: #3f5d44;
          --moss-dark: #2c4432;
          --sage: #b8c6b4;
          --chalk: #f2efe4;
          --paper: #fbfaf4;
          --clay: #a85a2e;
        }
      `}</style>

      <Navbar />

      <main style={{ background: "var(--paper)", color: "var(--ink)" }}>
        {/* HERO */}
        <section className="relative h-[640px] overflow-hidden" style={{ background: "var(--moss-dark)" }}>
          <Image
            src="/campaign-partners.jpg"
            alt="Volunteer holding a seedling from the Loddon valley"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(32,43,33,0.55) 0%, rgba(32,43,33,0.35) 45%, rgba(32,43,33,0.85) 100%)",
            }}
          />

          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pb-16">
              <p
                className="tracking-[0.25em] uppercase text-xs mb-5"
                style={{ fontFamily: "var(--font-mono)", color: "var(--sage)" }}
              >
                Old Basing &amp; Lychpit — Parish Register
              </p>

              <h1
                className="text-white leading-[0.95]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.75rem, 6vw, 5.25rem)", fontWeight: 500 }}
              >
                Join the
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>campaign</span>
              </h1>

              <p className="text-white/75 text-lg mt-6 max-w-xl">
                A record of the people, charities and studios standing behind the
                effort to protect our fields, footpaths and river valley.
              </p>

              <FootpathRule className="w-full max-w-xs h-3 mt-10" style={{ color: "var(--sage)" }} />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-24 md:py-28" style={{ background: "var(--chalk)" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span
              className="uppercase tracking-[0.25em] text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
            >
              Our Campaign Partners
            </span>

            <h2
              className="mt-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--moss-dark)",
              }}
            >
              Entered on the register
            </h2>

            <p className="mt-6 leading-8" style={{ color: "#4b554c" }}>
              We are supported by dedicated individuals, environmental
              organisations, creative agencies, and volunteers who share our
              vision for a better future.
            </p>
          </div>
        </section>

        {/* PARTNERS — a register, not a card grid */}
        <section className="pb-8" style={{ background: "var(--paper)" }}>
          <div className="max-w-5xl mx-auto px-6">
            {partners.map((partner) => (
              <div key={partner.ref}>
                <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-12 py-14">
                  {/* image — photos get a framed square, logos get a clean strip */}
                  <div className="flex md:flex-col items-center md:items-start gap-6">
                    {partner.kind === "photo" ? (
                      <div
                        className="relative w-28 h-28 md:w-[150px] md:h-[150px] shrink-0 overflow-hidden rounded-full"
                        style={{ background: "var(--chalk)", border: "1px solid var(--sage)" }}
                      >
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          sizes="150px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative w-32 h-16 md:w-full md:h-20 shrink-0">
                        <Image
                          src={partner.image}
                          alt={`${partner.name} logo`}
                          fill
                          sizes="180px"
                          className="object-contain object-left md:object-left"
                        />
                      </div>
                    )}
                    <span
                      className="md:hidden text-2xl"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--sage)" }}
                    >
                      {partner.ref}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-4">
                      <span
                        className="hidden md:inline text-sm"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--sage)" }}
                      >
                        {partner.ref}
                      </span>
                      <span
                        className="uppercase tracking-[0.18em] text-xs"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
                      >
                        {partner.role}
                      </span>
                    </div>

                    <h3
                      className="mt-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                        color: "var(--moss-dark)",
                      }}
                    >
                      {partner.name}
                    </h3>

                    <p className="mt-4 leading-8 max-w-2xl" style={{ color: "#3d463e" }}>
                      {partner.description}
                    </p>

                    <button
                      className="flex items-center gap-2 mt-6 text-sm font-medium group"
                      style={{ color: "var(--moss)" }}
                    >
                      Learn more
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                <FootpathRule className="w-full h-3" style={{ color: "var(--sage)" }} />
              </div>
            ))}
          </div>
        </section>

        {/* PHOTOGRAPHERS */}
        <section className="py-24" style={{ background: "var(--moss-dark)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <div
                className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 bg-white"
                style={{ border: "1px solid var(--sage)" }}
              >
                {/* Replace "/logo.png" below with the actual path to your OBLEC logo in /public if different */}
                <Image
                  src="/camera.png"
                  alt="OBLEC logo"
                  fill
                  sizes="80px"
                  className="object-contain p-3"
                />
              </div>

              <div>
                <span
                  className="uppercase tracking-[0.2em] text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--sage)" }}
                >
                  With thanks
                </span>
                <h3
                  className="mt-2 text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.85rem" }}
                >
                  Photographers
                </h3>
                <p className="mt-3 leading-7 text-white/70 max-w-xl">
                  We are grateful to all photographers and volunteers who
                  contribute their images to support our campaign and help
                  showcase the beauty of our local environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
