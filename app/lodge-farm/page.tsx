"use client";

import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { fontVars } from "../lib/fonts";
import { FootpathRule } from "../components/shared/FootpathRule";
import { ImpactItem } from "../components/shared/ImpactItem";
import { OtherAreasSection } from "../components/shared/OtherAreasSection";
import { ThanksLogosStrip } from "../components/shared/ThanksLogosStrip";

export default function LodgeFarmPage() {
  return (
    <div className={`${fontVars} font-body`}>
      <Navbar />

      <main className="bg-paper text-ink">
        {/* HERO */}
        <section className="relative h-[560px] overflow-hidden">
          <Image
            src="/lodge-farm.png"
            alt="Aerial view of the fields at Lodge Farm, Old Basing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 from-40% to-black/75" />

          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pb-16">
              <p className="tracking-[0.25em] uppercase text-xs mb-5 font-mono text-sage">
                Areas Under Threat — Site 02
              </p>

              <h1 className="text-white leading-[0.95] font-display font-medium text-[clamp(2.75rem,6vw,5.25rem)]">
                Lodge Farm
              </h1>

              <p className="text-white/75 text-lg mt-6 max-w-xl">
                The Borough Council has proposed this site to build 600–900
                houses on the eastern edge of Old Basing, against the River
                Loddon.
              </p>

              <FootpathRule className="w-full max-w-xs h-3 mt-10 text-sage" />
            </div>
          </div>
        </section>

        {/* THE CASE */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-medium text-[clamp(1.6rem,3vw,2.2rem)] text-moss-dark">
              The Borough Council has proposed this site to build 600–900
              houses
            </h2>

            <p className="leading-8 max-w-3xl mt-8 text-body">
              Lodge Farm is crucial land because it sits on the eastern edge
              of the Old Basing settlement and Conservation Area and directly
              abuts the River Loddon. It&rsquo;s also the start of
              countryside extending east to Newnham and Hook: lose this and
              we are on the fast track to a Basingstoke–Hook city sprawl.
            </p>

            <p className="leading-8 max-w-3xl mt-6 text-body">
              You might ask why you would build over pleasant arable farmland
              and paddocks that offer space and expansive views for people to
              exercise in and take the public footpath to Wildmoor and the
              neighbouring woods. You might wonder why you would choose land
              that contains a Site of Nature Conservation at Petty&rsquo;s
              Brook, a Roman road, listed buildings and trees with
              preservation orders.
            </p>

            <p className="leading-8 max-w-3xl mt-6 text-body">
              That&rsquo;s what we would lose: what would we gain? Here are
              just a few factors to consider:
            </p>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 mt-10 items-start">
              <ul>
                <ImpactItem>
                  Homes would suffer the <strong className="text-moss-dark">noise and smells</strong> of
                  the adjoining sewage and refuse plants.
                </ImpactItem>
                <ImpactItem>
                  Homes with a <strong className="text-moss-dark">high flood risk</strong> based on
                  previous assessments which climate change may render <em>understated</em>.
                </ImpactItem>
                <ImpactItem>
                  The Borough&rsquo;s summary of this site says: &lsquo;The Inspector also noted that the
                  Environment Agency had objected on the grounds of flood risk and impact on the River Loddon and
                  associated wetlands on biodiversity grounds.
                </ImpactItem>
                <ImpactItem>
                  He envisaged major infrastructure would be required, to ensure that the impact on the
                  biodiversity of the Loddon Valley can be mitigated to an acceptable standard, and flood risk
                  concerns could be addressed. He stated that it was difficult to see how this could be achieved
                  based on the information available at that time.&rsquo; This statement is identical to that in
                  the summary for site 003 — and it came from a central Government agency.
                </ImpactItem>
                <ImpactItem>
                  An <strong className="text-moss-dark">acute traffic problem</strong> with another 2000
                  or so cars, and 100&rsquo;s of trade vehicles serving the site. The only potential access to a
                  main road is through site 001 to the single carriageway A33, already at capacity and with no
                  plans for relief. Access to Pyotts Hill would encourage &lsquo;rat runs&rsquo; across the
                  congested lanes of Old Basing.
                </ImpactItem>
              </ul>

              <figure className="rounded-sm overflow-hidden border border-sage bg-chalk">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/loadge-farm-map.png"
                    alt="Site plan showing the proposed Lodge Farm development boundary"
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

            {/* Closing note and signature */}
            <div className="mt-16 max-w-3xl">
              <p className="leading-8 text-body">
                And, we haven&rsquo;t even mentioned schools, doctors, or dentists!
              </p>
              <p className="mt-6 italic font-display text-moss-dark text-[1.1rem]">John Keary</p>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          <FootpathRule className="w-full h-3 text-sage" />
        </div>

        <OtherAreasSection currentHref="/areas-under-threat/lodge-farm" />

        <ThanksLogosStrip />
      </main>

      <Footer />
    </div>
  );
}
