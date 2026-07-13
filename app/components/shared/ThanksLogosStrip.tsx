import Image from "next/image";

const thanksLogos = [
  { name: "OBLEC", image: "/SOLVE.jpg" },
  { name: "CPRE Hampshire — The Countryside Charity", image: "/CPRE-Hampshire-Logo.png" },
  { name: "Old Basing & Lychpit Parish Council", image: "/oblpc.png" },
  { name: "Visualytes", image: "/visualytes.png" },
  { name: "Zebra Creative", image: "/zebra.png" },
];

/* Light "Thank you" band — big centered logo, green divider heading,
   and a clean static row of supporter/partner logos underneath.

   NOTE: uses arbitrary hex values like text-[#4A7C3A] instead of the
   custom "brand" color name — this works regardless of whether the
   Tailwind @theme merge in globals.css succeeded, so it renders
   correctly even if that config step wasn't applied. */
export function ThanksLogosStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Big centered logo */}
        <div className="mx-auto mb-8 relative h-36 w-36">
          <Image src="/logo-leaf.webp" alt="OBLEC logo" fill className="object-contain" sizes="144px" />
        </div>

        {/* Green divider heading */}
        <div className="mb-10 flex items-center gap-6">
          <div className="h-[2px] flex-1 bg-[#4A7C3A]" />
          <span className="shrink-0 font-serif font-bold tracking-[2px] text-[#4A7C3A] text-2xl md:text-3xl">
            THANK YOU
          </span>
          <div className="h-[2px] flex-1 bg-[#4A7C3A]" />
        </div>

        {/* Logo row — nowrap on desktop so all 5 sit on one line, wraps on small screens.
            items-end + a fixed-height box keeps every logo sitting on the same
            baseline regardless of each image's own aspect ratio. */}
        <div className="flex flex-wrap md:flex-nowrap items-end justify-center gap-x-10 lg:gap-x-14 gap-y-10">
          {thanksLogos.map((logo) => (
            <div key={logo.name} className="relative w-40 sm:w-52 lg:w-60 h-24 sm:h-32 lg:h-36 shrink-0">
              <Image src={logo.image} alt={logo.name} fill sizes="240px" className="object-contain object-bottom" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
