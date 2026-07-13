"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const partners = [
  { name: "Zebra Creative", logo: "/zebra.png" },
  { name: "SOLVE", logo: "/SOLVE.jpg" },
  { name: "CPRE — The Countryside Charity", logo: "/cpre-logo.png" },
  { name: "Visualytes", logo: "/visualytes.png" },
];

/* Auto-scrolling partner logo strip with manual prev/next controls.
   Used wherever the site says "thank you" to sponsors/partners. */
export function PartnerLogosSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative px-10 sm:px-12">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous partner"
        className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-brand shadow-md transition hover:bg-brand hover:text-white"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next partner"
        className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-brand shadow-md transition hover:bg-brand hover:text-white"
      >
        <ChevronRight size={20} />
      </button>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={4000}
        loop
        allowTouchMove={false}
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="!px-1 !py-2"
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.name}>
            <div className="flex h-28 w-full items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-full w-full grayscale transition duration-300 hover:grayscale-0">
                <Image src={partner.logo} alt={partner.name} fill className="object-contain" sizes="180px" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
