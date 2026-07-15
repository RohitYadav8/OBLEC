"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type EventSlide = {
  src: string;
  alt: string;
  caption?: string;
};

/**
 * A single event's photo carousel — one large image at a time,
 * prev/next arrows, dot pagination, and an optional caption per slide
 * (e.g. a speaker's name). Used for every event block on the Events page.
 */
export function EventCarousel({ slides }: { slides: EventSlide[] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const goTo = (i: number) => setIndex(((i % total) + total) % total);

  const current = slides[index];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {total > 1 && (
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition text-moss hover:bg-moss hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-sage bg-chalk shadow-md">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {total > 1 && (
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition text-moss hover:bg-moss hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {current.caption && (
        <p className="text-center mt-4 font-display text-[1.05rem] text-moss-dark">{current.caption}</p>
      )}

      {total > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-clay" : "w-2 bg-sage"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
