"use client";

import Image from "next/image";
import { Stethoscope, Leaf, Droplet, Car } from "lucide-react";
import { PartnerLogosSlider } from "../../components/shared/PartnerLogosSlider";
import { OtherAreasSection } from "../../components/shared/OtherAreasSection";

const concerns = [
  { label: "GPs", icon: Stethoscope, note: "Local surgeries already at capacity" },
  { label: "Carbon", icon: Leaf, note: "Loss of greenfield carbon storage" },
  { label: "Water", icon: Droplet, note: "Pressure on supply and river quality" },
  { label: "Traffic", icon: Car, note: "Increased congestion on village roads" },
];

export default function SiteOverview() {
  return (
    <section className="bg-white py-20">
      {/* Banner */}
      <div className="bg-brand py-4 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[2px] text-white md:text-base">
          OLD001 &mdash; Land East of Basingstoke
        </h2>
      </div>

      {/* Site overview grid — shared component, same look as every area page */}
      <div className="mb-20 mt-8">
        <OtherAreasSection />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pt-16">
        {/* Key Concerns */}
        <div className="mb-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[4px] text-brand">Key Concerns</span>
          <h3 className="mt-3 font-serif text-2xl text-[#2B2B28] md:text-3xl">
            What This Development Puts At Risk
          </h3>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {concerns.map(({ label, icon: Icon, note }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-brand/15 px-4 py-8 text-center transition hover:border-brand hover:bg-[#F8FAF7]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-light text-[#2F5C2B] transition group-hover:bg-brand group-hover:text-white">
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

        {/* Support Message */}
        <div className="mt-20 mb-6 text-center">
          <div className="mx-auto mb-10 h-[3px] w-full bg-brand-light" />
          <span className="font-serif text-2xl leading-relaxed text-moss-dark md:text-3xl">
            Please support OBLEC by opposing more housing development
            <br />
            and help us to protect our cherished Loddon Valley.
          </span>
        </div>

        {/* OBLEC leaf logo — sits close beneath the support message */}
        <div className="mb-10 flex justify-center">
          <div className="relative h-20 w-20">
            <Image src="/logo-leaf.webp" alt="OBLEC leaf logo" fill className="object-contain" sizes="80px" />
          </div>
        </div>

        {/* THANK YOU Divider */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-[3px] flex-1 bg-brand" />
          <span className="shrink-0 font-serif text-xl font-bold tracking-[2px] text-brand md:text-2xl">
            THANK YOU
          </span>
          <div className="h-[3px] flex-1 bg-brand" />
        </div>

        {/* Partner Logo Slider — premium */}
        <div className="mb-10">
          <PartnerLogosSlider />
        </div>
      </div>
    </section>
  );
}
