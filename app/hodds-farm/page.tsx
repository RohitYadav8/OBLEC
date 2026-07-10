 "use client";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/* ---------------------------------------------------------------
   Type system — same as the rest of the site.
   Display  – Fraunces: parish-notice / land-registry serif.
   Body     – Work Sans: quiet, legible.
   Utility  – IBM Plex Mono: eyebrows, tags, map-legend data.
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
   Signature element: the footpath / contour rule — a dashed line
   with perpendicular ticks, the way a right-of-way is marked on an
   Ordnance Survey map. Ties hero, dividers and section breaks
   together across every page on the site.
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

/* A single reason list item, marked with a short tick rather than
   a generic round bullet — echoes the footpath rule's ticks. */
function ImpactItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4 py-4" style={{ borderTop: "1px solid rgba(184,198,180,0.5)" }}>
      <span
        aria-hidden="true"
        style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
        className="text-sm pt-0.5"
      >
        —
      </span>
      <span className="leading-7" style={{ color: "#3d463e" }}>
        {children}
      </span>
    </li>
  );
}

const otherAreas = [
  { name: "Hodds Farm", image: "/hodds-farm.png", href: "/areas-under-threat/hodds-farm", current: true },
  { name: "Lodge Farm", image: "/lodge-farm.png", href: "/areas-under-threat/lodge-farm", current: false },
  {
    name: "Land East of Basingstoke",
    image: "/land-east.png",
    href: "/areas-under-threat/land-east-of-basingstoke",
    current: false,
  },
  { name: "River Loddon", image: "/river-loddon.png", href: "/areas-under-threat/river-loddon", current: false },
];

const thanksLogos = [
  { name: "OBLEC", image: "/oblec-crest.png" },
  { name: "CPRE Hampshire — The Countryside Charity", image: "/CPRE-Hampshire-LOGO.png" },
  { name: "Old Basing & Lychpit Parish Council", image: "/parish-council-crest.png" },
  { name: "Visualytes", image: "/visualytes.png" },
  { name: "Zebra Creative", image: "/zebra.png" },
];

export default function HoddsFarmPage() {
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
        <section className="relative h-[560px] overflow-hidden" style={{ background: "var(--moss-dark)" }}>
          <Image
            src="/hodds-farm.png"
            alt="Aerial view of the fields at Hodds Farm, Old Basing"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(32,43,33,0.5) 0%, rgba(32,43,33,0.3) 45%, rgba(32,43,33,0.88) 100%)",
            }}
          />

          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pb-16">
              <p
                className="tracking-[0.25em] uppercase text-xs mb-5"
                style={{ fontFamily: "var(--font-mono)", color: "var(--sage)" }}
              >
                Areas Under Threat — Site 01
              </p>

              <h1
                className="text-white leading-[0.95]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.75rem, 6vw, 5.25rem)", fontWeight: 500 }}
              >
            Hodds Farm
              </h1>

              <p className="text-white/75 text-lg mt-6 max-w-xl">
                800 proposed homes on the eastern edge of Old Basing — fields,
                hedgerows and ancient woodland between the A30 and the railway
                line.
              </p>

              <FootpathRule className="w-full max-w-xs h-3 mt-10" style={{ color: "var(--sage)" }} />
            </div>
          </div>
        </section>

        {/* THE CASE — copy left-aligned, map plan alongside the reasons */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <p className="leading-8 max-w-3xl" style={{ color: "#3d463e" }}>
              <strong style={{ color: "var(--moss-dark)" }}>
                Among other options, Basingstoke &amp; Deane Borough Council is
                strongly considering building 800 new homes on the eastern
                edge of Old Basing, between the very busy main A30 road
                opposite Conkers Garden Centre and the Basingstoke to London
                railway line.
              </strong>{" "}
              Possibly as soon as within the next five years, the new houses
              would start appearing behind the Scout Hut next to the narrow
              Milkingpen Lane railway bridge, and stretch all the way east
              across to Ashmoor Lane — including Hodds Farm and all the
              woodland and fields in between that form part of our
              countryside. This would be just one third of a huge future
              housing development that will dwarf the village if it is
              permitted.
            </p>

            <p className="leading-8 max-w-3xl mt-6" style={{ color: "#3d463e" }}>
              Planning to provide land to meet the need for housing is an
              ever-growing problem for the whole Borough, which must at all
              times be able to show how and where it will build in the
              future, always with a five-year supply of land identified. This
              is a continuous process, but within the Borough the village is
              allowed and encouraged to express its own opinion, taking care
              to base that opinion on evidence. Several areas around
              Basingstoke are much better suited than others for large-scale
              new developments, and by objective comparison the historic
              village of Old Basing is not one. The evidence presented to the
              Borough so far implies that the whole area would suffer more
              from the Hodds Farm development than elsewhere because:
            </p>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 mt-12 items-start">
              <ul>
                <ImpactItem>The ancient village roads cannot cope with a further expansion of traffic.</ImpactItem>
                <ImpactItem>The resulting noise levels would exceed permitted limits.</ImpactItem>
                <ImpactItem>The vital biodiversity of the area would be badly impacted.</ImpactItem>
                <ImpactItem>
                  The existing trees and hedgerows, and the ancient woodland Sites of Importance for Nature
                  Conservation (SINCs), would be lost.
                </ImpactItem>
                <ImpactItem>The sensitive landscape would be adversely impacted.</ImpactItem>
                <ImpactItem>The unique Heritage &amp; Conservation Area would be impacted.</ImpactItem>
                <ImpactItem>There is insufficient scope for adequate education provision in the village.</ImpactItem>
                <ImpactItem>
                  And a further threat would be presented to the globally important chalk stream that is the River
                  Loddon.
                </ImpactItem>
              </ul>

              <figure
                className="rounded-sm overflow-hidden"
                style={{ border: "1px solid var(--sage)", background: "var(--chalk)" }}
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/areas/hodds-farm-map.jpg"
                    alt="Site plan showing the proposed Hodds Farm development boundary"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className="px-4 py-3 text-xs uppercase tracking-[0.18em]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--moss)" }}
                >
                  Site plan — proposed boundary
                </figcaption>
              </figure>
            </div>

            {/* The one point in favour — set apart as a marginal note */}
            <div
              className="mt-16 max-w-3xl pl-6 py-2"
              style={{ borderLeft: "3px solid var(--clay)" }}
            >
              <span
                className="uppercase tracking-[0.2em] text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
              >
                The case for
              </span>
              <p className="mt-3 leading-8 italic" style={{ fontFamily: "var(--font-display)", color: "var(--moss-dark)", fontSize: "1.15rem" }}>
                The only very significant point in favour of the Borough
                choosing this space for development is that the land has
                been offered by its owner to developers who are keen to
                promote its use — thereby ignoring each of the objective
                reasons against doing so.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          <FootpathRule className="w-full h-3" style={{ color: "var(--sage)" }} />
        </div>

        {/* OTHER AREAS UNDER THREAT */}
        <section className="py-20 md:py-24" style={{ background: "var(--chalk)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <span
              className="uppercase tracking-[0.25em] text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--clay)" }}
            >
              Elsewhere on the register
            </span>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--moss-dark)",
              }}
            >
              Other areas under threat
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
              {otherAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="group relative block h-44 overflow-hidden rounded-sm"
                  style={area.current ? { pointerEvents: "none" } : undefined}
                >
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: area.current
                        ? "linear-gradient(180deg, rgba(32,43,33,0.15) 0%, rgba(44,68,50,0.85) 100%)"
                        : "linear-gradient(180deg, rgba(32,43,33,0.05) 0%, rgba(32,43,33,0.75) 100%)",
                    }}
                  />
                  <span
                    className="absolute bottom-4 left-4 right-4 text-white text-sm"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
                  >
                    {area.name}
                  </span>
                  {area.current && (
                    <span
                      className="absolute top-3 right-3 uppercase tracking-[0.15em] text-[10px] px-2 py-1 rounded-sm"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--ink)", background: "var(--sage)" }}
                    >
                      Viewing
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* THANK YOU */}
        <section className="py-24" style={{ background: "var(--moss-dark)" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4">
              <FootpathRule className="hidden sm:block w-24 h-3" style={{ color: "var(--sage)" }} />
              <h2
                className="text-white uppercase tracking-[0.2em] text-sm"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Thank you
              </h2>
              <FootpathRule className="hidden sm:block w-24 h-3" style={{ color: "var(--sage)" }} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 mt-14">
              {thanksLogos.map((logo) => (
                <div key={logo.name} className="relative w-28 h-14 opacity-80 hover:opacity-100 transition-opacity">
                  <Image src={logo.image} alt={logo.name} fill sizes="112px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
