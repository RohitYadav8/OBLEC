import Image from "next/image";
import Link from "next/link";

const ALL_AREAS = [
  { name: "Hodds Farm", image: "/hodds-farm.png", href: "/areas-under-threat/hodds-farm" },
  { name: "Lodge Farm", image: "/lodge-farm.png", href: "/areas-under-threat/lodge-farm" },
  {
    name: "Land East of Basingstoke",
    image: "/land-east.png",
    href: "/areas-under-threat/land-east-of-basingstoke",
  },
  { name: "River Loddon", image: "/river-loddon.png", href: "/areas-under-threat/river-loddon" },
];

/**
 * Usage: <OtherAreasSection currentHref="/areas-under-threat/hodds-farm" />
 * The matching area is shown with a "Viewing" badge and isn't clickable.
 * Omit currentHref (e.g. on a general overview page) and every card is
 * shown as a plain clickable link with no badge.
 * Add a 5th area to ALL_AREAS above and every page updates automatically.
 */
export function OtherAreasSection({ currentHref }: { currentHref?: string }) {
  return (
    <section className="py-20 md:py-24 bg-chalk">
      <div className="max-w-7xl mx-auto px-6">
        <span className="uppercase tracking-[0.25em] text-xs font-mono text-clay">
          Elsewhere on the register
        </span>
        <h2 className="mt-4 font-display font-medium text-[clamp(1.75rem,3.5vw,2.5rem)] text-moss-dark">
          Other areas under threat
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {ALL_AREAS.map((area) => {
            const isCurrent = area.href === currentHref;
            return (
              <Link
                key={area.name}
                href={area.href}
                className={`group relative block h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg shadow-md ${
                  isCurrent ? "pointer-events-none" : ""
                }`}
              >
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={
                    isCurrent
                      ? "absolute inset-0 bg-gradient-to-b from-moss-dark/15 to-moss-dark/85"
                      : "absolute inset-0 bg-gradient-to-b from-ink/5 to-ink/75"
                  }
                />
                {isCurrent && (
                  <span className="absolute top-4 right-4 uppercase tracking-[0.15em] text-[10px] px-2 py-1 rounded-sm font-mono text-ink bg-sage">
                    Viewing
                  </span>
                )}
                <span className="absolute bottom-5 left-5 right-5 text-white font-display text-[1.25rem] leading-snug">
                  {area.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
