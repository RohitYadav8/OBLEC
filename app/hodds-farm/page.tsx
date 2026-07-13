"use client";

import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { fontVars } from "../lib/fonts";
import { FootpathRule } from "../components/shared/FootpathRule";
import { ImpactItem } from "../components/shared/ImpactItem";
import { OtherAreasSection } from "../components/shared/OtherAreasSection";
import { PartnerLogosSlider } from "../components/shared/PartnerLogosSlider";

export default function HoddsFarmPage() {
  return (
    <div className={`${fontVars} font-body`}>
      <Navbar />

      <main className="bg-paper text-ink">
        {/* HERO */}
        <section className="relative h-[560px] overflow-hidden bg-moss-dark">
          <Image
            src="/hodds-farm.png"
            alt="Aerial view of the fields at Hodds Farm, Old Basing"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/[0.88]" />

          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pb-16">
              <p className="tracking-[0.25em] uppercase text-xs mb-5 font-mono text-sage">
                Areas Under Threat — Site 01
              </p>

              <h1 className="text-white leading-[0.95] font-display font-medium text-[clamp(2.75rem,6vw,5.25rem)]">
                Hodds Farm
              </h1>

              <p className="text-white/75 text-lg mt-6 max-w-xl">
                800 proposed homes on the eastern edge of Old Basing — fields,
                hedgerows and ancient woodland between the A30 and the railway
                line.
              </p>

              <FootpathRule className="w-full max-w-xs h-3 mt-10 text-sage" />
            </div>
          </div>
        </section>

        {/* THE CASE — copy left-aligned, map plan alongside the reasons */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <p className="leading-8 max-w-3xl text-body">
              <strong className="text-moss-dark">
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

            <p className="leading-8 max-w-3xl mt-6 text-body">
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

              <figure className="rounded-sm overflow-hidden border border-sage bg-chalk">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/areas/hodds-farm-map.jpg"
                    alt="Site plan showing the proposed Hodds Farm development boundary"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs uppercase tracking-[0.18em] font-mono text-moss">
                  Site plan — proposed boundary
                </figcaption>
              </figure>
            </div>

            {/* The one point in favour — set apart as a marginal note */}
            <div className="mt-16 max-w-3xl pl-6 py-2 border-l-[3px] border-clay">
              <span className="uppercase tracking-[0.2em] text-xs font-mono text-clay">The case for</span>
              <p className="mt-3 leading-8 italic font-display text-moss-dark text-[1.15rem]">
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
          <FootpathRule className="w-full h-3 text-sage" />
        </div>

        <OtherAreasSection currentHref="/areas-under-threat/hodds-farm" />

        {/* THANK YOU */}
        <div className="mb-16 mt-20 flex items-center gap-4 max-w-5xl mx-auto px-6">
          <div className="h-[3px] flex-1 bg-brand" />
          <span className="shrink-0 font-serif text-xl font-bold tracking-[2px] text-brand md:text-2xl">
            THANK YOU
          </span>
          <div className="h-[3px] flex-1 bg-brand" />
        </div>

        <div className="mb-10 max-w-5xl mx-auto px-6">
          <PartnerLogosSlider />
        </div>
      </main>

      <Footer />
    </div>
  );
}
