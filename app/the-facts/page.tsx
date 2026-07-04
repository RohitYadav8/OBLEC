import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Stethoscope, Smile, School, Car, Globe2 } from "lucide-react";

const sections = [
  {
    id: "gp-surgeries",
    title: "GP Surgeries",
    icon: Stethoscope,
    image: "/gp-surgestic.png",
    imageSide: "left",
    stat: { value: "7,400", label: "residents served by just one GP surgery" },
    paragraphs: [
      "There is one GP surgery in Old Basing and Lychpit serving approximately 7,400 residents of the Parish. Adding another 2,160 people to the Parish from up to 900 new houses — which is a conservative estimate of additional population — will require additional GP facilities to serve new residents, and there are no plans provided currently to suggest that this will be the case.",
      "This will no doubt cause concern for those in the Parish who are already worried about the strain put on the Old Basing surgery by those registered to the practice. The number of patients per GP is already above the average for England and more GPs would be needed to maintain the already stressed situation.",
    ],
  },
  {
    id: "dentists",
    title: "Dentists",
    icon: Smile,
    image: "/dentists.png",
    imageSide: "left",
    stat: { value: "0", label: "NHS dental places currently available" },
    paragraphs: [
      "There is currently one BUPA private dental practice in Old Basing and Lychpit. There are currently no NHS places at this practice, forcing residents to look outside of the Parish. Adding 2,160 people to the Parish will only increase the pressure on dentists unless further dental practices are proposed.",
    ],
  },
  {
    id: "schools",
    title: "Schools",
    icon: School,
    image: "/school.png",
    imageSide: "right",
    stat: { value: "0", label: "secondary schools currently in the Parish" },
    paragraphs: [
      "There is an Infant and a Junior school in the Parish and no secondary schools. Whilst Great Binfields School has possible expansion opportunities, adding 2,160 residents to the Parish will mean that both the Great Binfields and Old Basing schools will be put under significant pressure for places unless new schools are built. There are plans to build a new primary school on the Land East of Basingstoke site, but when will this be built?",
      "When Lychpit was developed in the late 1970s/early 1980s, new residents were promised a primary school would be built in Lychpit. Great Binfields School was opened in 2001, in Chineham, not Lychpit.",
    ],
  },
  {
    id: "traffic",
    title: "Traffic",
    icon: Car,
    image: "/traffic.png",
    imageSide: "right",
    stat: { value: "A33", label: "an already at-capacity road facing more pressure" },
    paragraphs: [
      "OBLEC has particular concerns about the additional traffic in Old Basing and Lychpit as a result of 2,160 more residents. Old Basing especially already experiences unacceptable levels of traffic on Hatch Lane, Crown Lane, Newnham Lane and also The Street and Church Lane; we can only see this becoming a greater problem with so many more people in the Parish.",
      "The A33 — a road already at capacity — is also a concern, especially during peak commuting hours. The intention is to have one entrance into the development from the A33. This has implications for vehicles entering and exiting the site plus the passage of emergency vehicles. Traffic pressure will increase around Sherfield Park and the Redlands area.",
      "Pollution, noise and congestion are all worries for local residents. There is much talk of promoting walking and cycling but realistically if you are at the far end of the Land East of Basingstoke site, almost into Sherfield, you are going to have to drive to access shops, schools, employment etc. The area is poorly served by public transport at present and it would be foolish to assume that this will change, despite the optimistic plans of the developers to introduce a bus route through the site.",
    ],
  },
];

const partners = [
  { name: "SOLVE", logo: "/SOLVE.jpg" },
  { name: "CPRE — The Countryside Charity", logo: "/cpre-logo.png" },
  { name: "Old Basing & Lychpit Parish Council", logo: "/images/parish-council.png" },
  { name: "Visualytes", logo: "/visualytes.png" },
  { name: "Zebra Creative", logo: "/zebra.png" },
];

const navLinks = [
  { id: "gp-surgeries", label: "GP Surgeries" },
  { id: "dentists", label: "Dentists" },
  { id: "schools", label: "Schools" },
  { id: "traffic", label: "Traffic" },
  { id: "climate", label: "Climate" },
];

export default function TheFactsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero */}
        <section className="relative flex h-[420px] items-center justify-center overflow-hidden">
          <Image
            src="/the-fact-banner.png"
            alt="River Loddon"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 flex flex-col items-center text-center text-white">
            
            <h1 className="font-serif text-5xl md:text-6xl">The Facts</h1>
           <Image
      src="/symbol-white.png"   // public/logo-leaf.png
      alt="Leaf Logo"
      width={90}
      height={90}
      className="mt-6"
    />
          </div>
        </section>

        {/* Quick jump nav */}
        <div className="sticky top-[88px] z-30 border-b border-[#4A7C3A]/10 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-2 px-6 py-4">
            {navLinks.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-full border border-[#4A7C3A]/25 px-4 py-1.5 text-sm font-medium text-[#2F5C2B] transition hover:border-[#4A7C3A] hover:bg-[#F8FAF7]"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>

        {/* Intro */}
        <section className="py-16">
          <div className="mx-auto max-w-[900px] px-6 text-center">
            <h2 className="font-serif text-3xl text-[#2B2B28] md:text-4xl">
              Environmental &amp; Infrastructure Challenges
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-base leading-relaxed text-gray-600">
              Hampshire County Council wants to build up to 900 houses on the
              Land East of Basingstoke site inside our Parish. We are
              concerned that the local facilities, already under pressure,
              will struggle further: local traffic will also become
              unsustainable on roads already struggling with the volume of
              traffic through the Parish.
            </p>
          </div>
        </section>

        {/* Alternating sections */}
        <section className="pb-8">
          <div className="mx-auto max-w-[1100px] space-y-24 px-6">
            {sections.map((s) => (
              <div
                key={s.title}
                id={s.id}
                className="scroll-mt-40"
              >
                <div
                  className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${
                    s.imageSide === "right" ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A7C3A]/10 text-[#4A7C3A]">
                        <s.icon size={22} strokeWidth={1.75} />
                      </div>
                      <h3 className="font-serif text-2xl text-[#2B2B28] md:text-3xl">
                        {s.title}
                      </h3>
                    </div>

                    <div className="mb-5 flex items-baseline gap-3 rounded-xl border border-[#4A7C3A]/15 bg-[#F8FAF7] px-5 py-3">
                      <span className="font-serif text-3xl text-[#4A7C3A]">
                        {s.stat.value}
                      </span>
                      <span className="text-sm text-gray-600">
                        {s.stat.label}
                      </span>
                    </div>

                    <div className="space-y-4 text-[15px] leading-relaxed text-gray-600">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global warming — full width */}
        <section id="climate" className="scroll-mt-40 py-20">
          <div className="mx-auto max-w-[1100px] px-6">
            <div className="mb-10 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A7C3A]/10 text-[#4A7C3A]">
                <Globe2 size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-2xl text-[#2B2B28] md:text-3xl">
                Global Warming &amp; Destruction Of The Countryside
              </h3>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[#4A7C3A]/15 bg-[#F8FAF7] px-5 py-4 text-center">
                <div className="font-serif text-3xl text-[#4A7C3A]">30%</div>
                <div className="mt-1 text-sm text-gray-600">
                  of emissions come from the building industry
                </div>
              </div>
              <div className="rounded-xl border border-[#4A7C3A]/15 bg-[#F8FAF7] px-5 py-4 text-center">
                <div className="font-serif text-3xl text-[#4A7C3A]">43</div>
                <div className="mt-1 text-sm text-gray-600">
                  bird species supported by the Loddon Valley
                </div>
              </div>
              <div className="rounded-xl border border-[#4A7C3A]/15 bg-[#F8FAF7] px-5 py-4 text-center">
                <div className="font-serif text-3xl text-[#4A7C3A]">9</div>
                <div className="mt-1 text-sm text-gray-600">
                  of those species are on the red list
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/global-destruction.png"
                  alt="Global warming and countryside destruction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-gray-600">
                <p>
                  Digging into the soil to build releases carbon. The
                  building industry is responsible for over 30% of emissions.
                  Green fields and woodland absorb carbon. It could be argued
                  that, before new builds, existing buildings should be
                  re-purposed and brownfield sites be developed, not green
                  fields.
                </p>
                <p>
                  On the Land East of Basingstoke site in the spring and
                  summer skylarks sing. If you walk the footpaths in May you
                  will hear cuckoos — these birds will not be there if there
                  is development. The birds are protected by law but their
                  habitat is not.
                </p>
                <p>
                  Any additional house building anywhere in Basingstoke will
                  increase pollution. The sewage treatment facility is at
                  capacity and when it rains &lsquo;storm overflows&rsquo;
                  put raw sewage into a tributary of the River Loddon, so
                  into the Loddon and the Thames. This was happening for many
                  days in January 2023.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THANK YOU + partner marquee */}
        <section className="pb-16">
          <div className="mx-auto max-w-[1100px] px-6">
            <div className="mb-12 flex items-center gap-4">
              <div className="h-[3px] flex-1 bg-[#8FC15D]" />
              <span className="shrink-0 font-serif text-xl font-bold tracking-[2px] text-[#4A7C3A] md:text-2xl">
                THANK YOU
              </span>
              <div className="h-[3px] flex-1 bg-[#8FC15D]" />
            </div>
          </div>

          <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-10 px-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="relative h-16 w-32 shrink-0 grayscale transition duration-300 hover:grayscale-0"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="140px"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
