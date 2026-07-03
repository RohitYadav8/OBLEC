import Link from "next/link";

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF7] py-24">
      {/* Contour-line background texture — evokes land/topographic maps */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M-50 100 Q 200 60 400 110 T 900 90 T 1300 130" stroke="#4A7C3A" strokeWidth="2" />
        <path d="M-50 200 Q 220 150 420 210 T 920 190 T 1300 230" stroke="#4A7C3A" strokeWidth="2" />
        <path d="M-50 300 Q 240 250 440 310 T 940 290 T 1300 330" stroke="#4A7C3A" strokeWidth="2" />
        <path d="M-50 400 Q 260 360 460 410 T 960 390 T 1300 430" stroke="#4A7C3A" strokeWidth="2" />
        <path d="M-50 500 Q 280 460 480 510 T 980 490 T 1300 530" stroke="#4A7C3A" strokeWidth="2" />
      </svg>

      <div className="relative mx-auto max-w-[820px] px-6">
       

        {/* Heading */}
        <h1 className="text-center font-serif text-3xl leading-tight text-[#2B2B28] md:text-[42px]">
          Welcome to Old Basing &amp; Lychpit
          <br className="hidden md:block" /> Environment Campaign
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-8 h-[3px] w-16 rounded-full bg-[#4A7C3A]" />

        {/* Body copy */}
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-[#3A3A35]">
          <p>
            <span className="font-semibold text-[#2B2B28]">OBLEC</span> is a
            campaigning organisation, run for and on behalf of residents
            within the parish of Old Basing and Lychpit. OBLEC&apos;s primary
            function is to resist the imposition of large housing
            developments on greenfield sites within the Parish.
          </p>

          <p>
            Under the Local Plan Update, agreed by the Cabinet at the Borough
            Council in January 2024, up to 900 new houses are to be built on
            Land East of Basingstoke. You can find the Update on:
          </p>

          <p>
            <Link
              href="#"
              className="font-medium text-[#4A7C3A] underline decoration-[#4A7C3A]/40 underline-offset-4 transition hover:text-[#2F5C2B] hover:decoration-[#2F5C2B]"
            >
              Local Plan Update
            </Link>
          </p>

          <p>
            This development on the Land East of Basingstoke site threatens
            an asset of recreational and environmental value with its
            biodiversity, flora and fauna, and scenic beauty. Development
            could further compromise water quality in the River Loddon and
            minimise the value of the Strategic Gap between Basingstoke and
            Old Basing and Lychpit.
          </p>

          <p>
            Producing our Neighbourhood Plan (published in 2018) made us very
            aware how much the residents value the Loddon Valley environment
            and how strongly they wanted it protected and enhanced. Building
            up to another 900 houses will increase the Parish population by
            approximately 2,160 residents.
          </p>
        </div>

        {/* Closing CTA statement */}
        <div className="mt-14 rounded-2xl border border-[#4A7C3A]/15 bg-white px-8 py-10 text-center shadow-sm">
          <p className="font-serif text-xl leading-relaxed text-[#2B2B28] md:text-2xl">
            Please support OBLEC by opposing excessive housing development
            and help us to protect our cherished countryside and rivers
          </p>
        </div>
      </div>
    </section>
  );
}
