"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Leaf, Droplet, Car, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

// Data Definitions
const areas = [
  { name: "Hodds Farm", image: "/hodds-farm.png", href: "/areas-under-threat/hodds-farm" },
  { name: "Lodge Farm", image: "/lodge-farm.png", href: "/areas-under-threat/lodge-farm" },
  { name: "Land East of Basingstoke", image: "/land-east.png", href: "/areas-under-threat/east-of-basingstoke" },
  { name: "River Loddon", image: "/river-loddon.png", href: "/areas-under-threat/river-loddon" },
];

const concerns = [
  { label: "GPs", icon: Stethoscope, note: "Local surgeries already at capacity" },
  { label: "Carbon", icon: Leaf, note: "Loss of greenfield carbon storage" },
  { label: "Water", icon: Droplet, note: "Pressure on supply and river quality" },
  { label: "Traffic", icon: Car, note: "Increased congestion on village roads" },
];

const partners = [
  { name: "Zebra Creative", logo: "/zebra.png" },
  { name: "SOLVE", logo: "/SOLVE.jpg" },
  { name: "CPRE — The Countryside Charity", logo: "/cpre-logo.png" },
  { name: "Visualytes", logo: "/visualytes.png" },
];

export default function SiteOverview() {
  const partnerSwiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-20">
      {/* Banner */}
      <div className="bg-[#4A7C3A] py-4 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[2px] text-white md:text-base">
          OLD001 &mdash; Land East of Basingstoke
        </h2>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pt-16">
        {/* 1. Key Concerns */}
        <div className="mb-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[4px] text-[#4A7C3A]">
            Key Concerns
          </span>
          <h3 className="mt-3 font-serif text-2xl text-[#2B2B28] md:text-3xl">
            What This Development Puts At Risk
          </h3>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {concerns.map(({ label, icon: Icon, note }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-[#4A7C3A]/15 px-4 py-8 text-center transition hover:border-[#4A7C3A] hover:bg-[#F8FAF7]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#8FC15D] text-[#2F5C2B] transition group-hover:bg-[#4A7C3A] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#2B2B28]">{label}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Support Message */}
        <div className="my-20 border-b border-t border-[#8FC15D] py-14 text-center">
          <p className="font-serif text-2xl leading-relaxed text-[#2B2B28] md:text-3xl">
            Please support OBLEC by opposing more housing development
            <br />
            and help us to protect our cherished Loddon Valley.
          </p>
        </div>

        {/* 3. Site Slider */}
        <div className="mb-20 mt-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {areas.map((area) => (
              <SwiperSlide key={area.name}>
                <Link
                  href={area.href}
                  className="group relative block aspect-square overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 right-4 text-center text-sm font-semibold text-white">
                    {area.name}
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 4. THANK YOU Divider */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-[3px] flex-1 bg-[#8FC15D]" />
          <span className="shrink-0 font-serif text-xl font-bold tracking-[2px] text-[#4A7C3A] md:text-2xl">
            THANK YOU
          </span>
          <div className="h-[3px] flex-1 bg-[#8FC15D]" />
        </div>

        {/* 5. Partner Logo Slider — premium */}
        <div className="mb-10">
         

          <div className="relative">
            {/* Custom nav buttons */}
            <button
              onClick={() => partnerSwiperRef.current?.slidePrev()}
              aria-label="Previous partner"
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#4A7C3A]/25 bg-white text-[#4A7C3A] shadow-md transition hover:bg-[#4A7C3A] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => partnerSwiperRef.current?.slideNext()}
              aria-label="Next partner"
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#4A7C3A]/25 bg-white text-[#4A7C3A] shadow-md transition hover:bg-[#4A7C3A] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>

            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                partnerSwiperRef.current = swiper;
              }}
              autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
              speed={4000}
              loop
              allowTouchMove={false}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="!px-1 !py-2"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.name}>
                  <div className="group flex h-32 items-center justify-center rounded-2xl border border-[#00000008] bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(74,124,58,0.25)]">
                    <div className="relative h-full w-full grayscale transition duration-300 group-hover:grayscale-0">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        sizes="180px"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
