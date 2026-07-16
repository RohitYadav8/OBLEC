"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

interface ImageSliderProps {
  slides: Slide[];
  autoPlayMs?: number; // set 0 to disable autoplay
}

export default function ImageSlider({
  slides,
  autoPlayMs = 5000,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = slides.length;

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (!autoPlayMs) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, autoPlayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, autoPlayMs, total]);

  return (
    <div className="relative w-full h-[380px] md:h-[520px] overflow-hidden rounded-none shadow-2xl">
      {/* Slides track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          width: `${total * 100}%`,
          transform: `translateX(-${(100 / total) * current}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative h-full"
            style={{ width: `${100 / total}%` }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/50" />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5 z-10">
              {slide.eyebrow && (
                <span className="mb-3 text-xs tracking-[4px] uppercase opacity-90 font-sans">
                  {slide.eyebrow}
                </span>
              )}
              <h1 className="font-serif text-3xl md:text-5xl font-normal drop-shadow-lg max-w-3xl">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="mt-4 text-sm md:text-base font-sans opacity-90 max-w-lg leading-relaxed">
                  {slide.subtitle}
                </p>
              )}

              {/* OBLEC white logo — shown on every slide, below the title */}
              <div className="mt-6 relative h-16 w-16 md:h-20 md:w-20">
                <Image
                  src="/Symbol-White-logo.png"
                  alt="OBLEC"
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-sm transition hover:bg-[#4A7C3A] hover:border-[#4A7C3A]"
      >
        &#10094;
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-sm transition hover:bg-[#4A7C3A] hover:border-[#4A7C3A]"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-[#8FC15D]" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* CTA, matches navbar's "Support Us" button style */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:block">
        <Link
          href="#"
          className="rounded-full bg-[#4A7C3A] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2F5C2B]"
        >
          Find Out More
        </Link>
      </div>
    </div>
  );
}
