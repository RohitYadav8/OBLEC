"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { fontVars } from "../lib/fonts";
import { FootpathRule } from "../components/shared/FootpathRule";
import { P, SubHeading } from "../components/shared/Typography";
import { OtherAreasSection } from "../components/shared/OtherAreasSection";
import { ThanksLogosStrip } from "../components/shared/ThanksLogosStrip";

const carouselImages = [
  { src: "/river-loddon-1.jpg", alt: "The River Loddon among overhanging trees" },
  { src: "/river-loddon-2.jpg", alt: "The River Loddon winding through fields at dusk" },
  { src: "/river-loddon-3.jpg", alt: "A clear stretch of the River Loddon bordered by hedgerow" },
];

export default function RiverLoddonPage() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.9), behavior: "smooth" });
  };

  return (
    <div className={`${fontVars} font-body`}>
      <Navbar />

      <main className="bg-paper text-ink">
        {/* HERO */}
        <section className="relative h-[560px] overflow-hidden">
          <Image
            src="/river-loddon.png"
            alt="The River Loddon flowing beneath the old brick bridge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 from-40% to-black/75" />

          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pb-16">
              <p className="tracking-[0.25em] uppercase text-xs mb-5 font-mono text-sage">
                Areas Under Threat — Site 04
              </p>

              <h1 className="text-white leading-[0.95] font-display font-medium text-[clamp(2.75rem,6vw,5.25rem)]">
                River Loddon
              </h1>

              <FootpathRule className="w-full max-w-xs h-3 mt-10 text-sage" />
            </div>
          </div>
        </section>

        {/* PHOTO CAROUSEL */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative">
              <button
                onClick={() => scrollByAmount(-1)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition text-moss hover:bg-moss hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollByAmount(1)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition text-moss hover:bg-moss hover:text-white"
              >
                <ChevronRight size={20} />
              </button>

              <div
                ref={scrollerRef}
                className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 [scrollbar-width:none]"
              >
                {carouselImages.map((img) => (
                  <div
                    key={img.src}
                    className="relative shrink-0 snap-start rounded-sm overflow-hidden border border-sage w-[min(90vw,380px)] h-[280px]"
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="380px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THE CASE */}
        <section className="py-4 md:py-10">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-center font-display font-medium text-[clamp(1.6rem,3vw,2.2rem)] text-moss-dark">
              The River Loddon — ecologically rich and biodiverse
            </h2>

            <div className="mt-10 space-y-4">
              <P>
                Chalk streams support an extraordinarily diverse
                ecosystem — &ldquo;our equivalent to the Great Barrier Reef
                or the Okavango: a truly special natural heritage and
                responsibility&rdquo;, says the CaBA Chalk Stream
                Restoration Strategy. It goes on: chalk streams in their
                natural condition are home to a profusion of life —
                botanically they are the most biodiverse of all English
                rivers, and for invertebrates, fish, birds and mammals they
                offer a vast range of habitat niches.
              </P>

              <P>
                The Loddon is one of only five north-flowing chalk streams
                in the world, so an extremely rare habitat. Peat bogs are
                the UK&rsquo;s &ldquo;Amazon rainforest&rdquo; for carbon
                storage, and the river has environmentally important peat
                bogs — &ldquo;black lands&rdquo; — dotted along its length.
                Pockets of ancient woodland along the valley are remnants
                of the historic hunting forest and vital habitat. The
                Basing Fen SINC is home to the Desmoulin&rsquo;s whorl
                snail, and downstream, beyond our Parish, otters and water
                voles are present which, given the right conditions, could
                easily migrate upstream. This extraordinarily diverse
                ecology and rich mosaic habitat provides opportunities for
                enhancement that far exceed the sum of the parts.
              </P>

              <SubHeading>Well being</SubHeading>
              <P>
                Health and wellbeing — numerous reports show that access to
                natural green space improves our physical and mental
                health, and saves the NHS millions of pounds each year. It
                gives us breathing space — literally the lungs of the
                community — where we enjoy walking, running and cycling,
                and the views by the river and across the valley.
              </P>

              <SubHeading>Water Quality and Abstraction</SubHeading>
              <P>
                Our water is supplied from the aquifer, which also
                provides water to the springs at the source of the river.
                The more water we use, the less there is for the river.
                Almost all of Basingstoke&rsquo;s treated sewage goes into
                the River Loddon, impacting water quality.
              </P>

              <SubHeading>Landscape character</SubHeading>
              <P>
                The landscape character of the Loddon Valley is highly
                sensitive to further development, according to the
                Planning Inspector. We must protect it from further
                development which will bring more pollution of water, air,
                light and noise; increased water run-off; increased
                traffic; loss of trees and hedges; and loss of
                biodiversity owing to the destruction of the natural
                environment. Our river valley is one of our greatest
                assets in terms of mitigating climate change — something
                we all have a responsibility to consider.
              </P>

              <p className="mt-8 italic font-semibold font-display text-moss-dark text-[1.05rem]">
                Borough Councillor Kate Tuck
              </p>
            </div>
          </div>
        </section>

        {/* LAND COVER MAP */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <figure className="rounded-sm overflow-hidden border border-sage bg-chalk">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/loddon-valley-land-cover-map.jpg"
                  alt="Land cover map of the Loddon Valley catchment, showing arable land, grassland, woodland and freshwater habitat"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs uppercase tracking-[0.18em] font-mono text-moss">
                Land cover — the Loddon Valley catchment
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          <FootpathRule className="w-full h-3 text-sage" />
        </div>

        <OtherAreasSection currentHref="/areas-under-threat/river-loddon" />

        <ThanksLogosStrip />
      </main>

      <Footer />
    </div>
  );
}
