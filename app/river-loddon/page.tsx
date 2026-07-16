"use client";

import { useRef, useState, useEffect, useCallback } from "react";
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
  { src: "/River-loddon-0.png", alt: "The River Loddon among overhanging trees" },
  { src: "/River-loddon-1.png", alt: "The River Loddon winding through fields at dusk" },
  { src: "/River-loddon-2.png", alt: "A clear stretch of the River Loddon bordered by hedgerow" },
  { src: "/River-loddon-3.png", alt: "the River loddon flowing beneath the old brick bridge" },
  { src: "/River-loddon-4.png", alt: "the River loddon winding through the countryside" },
  { src: "/River-loddon-5.png", alt: "the River loddon reflecting the sky" },
  { src: "/River-loddon-6.png", alt: "the River loddon in the morning light" },
  { src: "/River-loddon-7.png", alt: "the River loddon during sunset" },
  { src: "/River-loddon-8.png", alt: "the River loddon at night" },
  { src: "/River-loddon-9.png", alt: "the River loddon in the evening" },
  { src: "/River-loddon-10.png", alt: "the River loddon in the morning" },
  { src: "/River-loddon-11.png", alt: "the River loddon in the afternoon" },
  { src: "/River-loddon-12.png", alt: "the River loddon in the evening" },
  { src: "/River-loddon-13.png", alt: "the River loddon in the morning" },
];

export default function RiverLoddonPage() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isProgrammaticScroll = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, carouselImages.length - 1));
    const card = cardRefs.current[clamped];
    const el = scrollerRef.current;
    if (!card || !el) return;

    isProgrammaticScroll.current = true;
    setActiveIndex(clamped);

    const targetLeft = card.offsetLeft - el.offsetLeft;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });

    window.clearTimeout((el as any)._scrollLock);
    (el as any)._scrollLock = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 600);
  }, []);

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let debounceTimer: number | undefined;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(() => {
        const elRect = el.getBoundingClientRect();
        let closestIndex = 0;
        let closestDistance = Infinity;

        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const cardRect = card.getBoundingClientRect();
          const distance = Math.abs(cardRect.left - elRect.left);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        });

        setActiveIndex(closestIndex);
      }, 120);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.clearTimeout(debounceTimer);
    };
  }, []);

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

          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">

              <h1 className="text-white leading-[0.95] font-display font-medium text-[clamp(2.75rem,6vw,5.25rem)]">
                River Loddon
              </h1>

              {/* OBLEC white logo — centered below the title */}
              <div className="flex justify-center mt-8">
                <div className="relative h-16 w-16">
                  <Image
                    src="/Symbol-White-logo.png"
                    alt="OBLEC"
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHOTO CAROUSEL */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 text-moss hover:bg-moss hover:text-white hover:scale-105 disabled:opacity-0 disabled:pointer-events-none"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === carouselImages.length - 1}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 text-moss hover:bg-moss hover:text-white hover:scale-105 disabled:opacity-0 disabled:pointer-events-none"
              >
                <ChevronRight size={20} />
              </button>

              <div
                ref={scrollerRef}
                className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-proximity px-2 py-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {carouselImages.map((img, i) => (
                  <div
                    key={img.src}
                    ref={(node) => {
                      cardRefs.current[i] = node;
                    }}
                    className={`group relative shrink-0 snap-start overflow-hidden rounded-2xl border transition-all duration-500 ease-out w-[min(90vw,380px)] h-[280px] shadow-md hover:shadow-xl ${
                      activeIndex === i
                        ? "border-moss ring-2 ring-moss/40 scale-[1.01]"
                        : "border-sage/70"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="380px"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      className="object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Progress dots */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {carouselImages.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === i ? "w-6 bg-moss" : "w-1.5 bg-sage/60 hover:bg-sage"
                    }`}
                  />
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
            <figure className="rounded-2xl overflow-hidden border border-sage/70 bg-chalk shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/River-loddon-map.png"
                  alt="Land cover map of the Loddon Valley catchment, showing arable land, grassland, woodland and freshwater habitat"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain p-2"
                />
              </div>
              <figcaption className="px-5 py-4 text-xs uppercase tracking-[0.18em] font-mono text-moss border-t border-sage/50 bg-white/60">
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
