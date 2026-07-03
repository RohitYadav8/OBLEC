import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Leaf, Droplet, Car } from "lucide-react";

const areas = [
  { name: "Hodds Farm", image: "/hodds-farm.png", href: "/areas-under-threat/hodds-farm" },
  { name: "Lodge Farm", image: "/lodge-farm.png", href: "/areas-under-threat/lodge-farm" },
  {
    name: "Land East of Basingstoke",
    image: "/images/east-of-basingstoke.jpg",
    href: "/areas-under-threat/east-of-basingstoke",
  },
  { name: "River Loddon", image: "/images/river-loddon.jpg", href: "/areas-under-threat/river-loddon" },
];

const concerns = [
  {
    label: "GPs",
    icon: Stethoscope,
    note: "Local surgeries already at capacity",
  },
  {
    label: "Carbon",
    icon: Leaf,
    note: "Loss of greenfield carbon storage",
  },
  {
    label: "Water",
    icon: Droplet,
    note: "Pressure on supply and river quality",
  },
  {
    label: "Traffic",
    icon: Car,
    note: "Increased congestion on village roads",
  },
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

      <div className="mx-auto max-w-[1200px] px-6 pt-16">
        {/* Site thumbnails */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="group relative block aspect-square overflow-hidden rounded-md shadow-sm"
            >
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 truncate text-sm font-semibold text-white">
                {area.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Key concerns */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[4px] text-[#4A7C3A]">
              Key Concerns
            </span>
            <h3 className="mt-3 font-serif text-2xl text-[#2B2B28] md:text-3xl">
              What This Development Puts At Risk
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {concerns.map(({ label, icon: Icon, note }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-[#4A7C3A]/15 px-4 py-8 text-center transition hover:border-[#4A7C3A] hover:bg-[#F8FAF7]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#8FC15D] text-[#2F5C2B] transition group-hover:bg-[#4A7C3A] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#2B2B28]">
                    {label}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
