import Image from "next/image";

/* Light "Thank you" band — big centered logo and green divider heading.
   The partner/supporter logo row was moved into the site Footer, so it's
   no longer duplicated here. */
export function ThanksLogosStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Big centered logo */}
        <div className="mx-auto mb-8 relative h-36 w-36">
          <Image src="/logo-leaf.webp" alt="OBLEC logo" fill className="object-contain" sizes="144px" />
        </div>

        {/* Green divider heading */}
        <div className="flex items-center gap-6">
          <div className="h-[2px] flex-1 bg-[#4A7C3A]" />
          <span className="shrink-0 font-serif font-bold tracking-[2px] text-[#4A7C3A] text-2xl md:text-3xl">
            THANK YOU
          </span>
          <div className="h-[2px] flex-1 bg-[#4A7C3A]" />
        </div>
      </div>
    </section>
  );
}
