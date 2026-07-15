"use client";

import { Stethoscope, Leaf, Droplet, Car } from "lucide-react";
import { OtherAreasSection } from "../../components/shared/OtherAreasSection";
import { ThanksLogosStrip } from "../../components/shared/ThanksLogosStrip";

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
      <div className="bg-[#4A7C3A] py-4 text-center">
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
          <span className="text-xs font-semibold uppercase tracking-[4px] text-[#4A7C3A]">Key Concerns</span>
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

        {/* Support Message */}
        <div className="mt-20 mb-6 text-center">
          <div className="mx-auto mb-10 h-[3px] w-full bg-[#8FC15D]" />
          <span className="font-serif text-2xl leading-relaxed text-moss-dark md:text-3xl">
            Please support OBLEC by opposing more housing development
            <br />
            and help us to protect our cherished Loddon Valley.
          </span>
        </div>
      </div>

      {/* Thank You + partner/supporter logos — shared component, same everywhere */}
      <ThanksLogosStrip />
    </section>
  );
}
