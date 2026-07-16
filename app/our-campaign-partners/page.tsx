"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FootpathRule } from "../components/shared/FootpathRule";

type Partner = {
  ref: string;
  name: string;
  role?: string;
  image: string;
  kind: "photo" | "logo";
  paragraphs: string[];
  linkHref?: string;
  linkLabel?: string;
};

/* PartnerBio: the lead paragraph gets a drop-cap intro; anything
   after the first paragraph is filed under "Read full entry". */
function PartnerBio({ paragraphs }: { paragraphs: string[] }) {
  const [open, setOpen] = useState(false);
  const [lead, ...rest] = paragraphs;
  const firstLetter = lead.charAt(0);
  const leadRemainder = lead.slice(1);

  return (
    <div className="mt-4 max-w-2xl">
      <p className="leading-8 text-body">
        <span
          aria-hidden="true"
          className="float-left font-display font-medium text-moss-dark pr-1.5 mt-1"
          style={{ lineHeight: "0.78", fontSize: "3.4rem" }}
        >
          {firstLetter}
        </span>
        {leadRemainder}
      </p>

      {rest.length > 0 && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateRows: open ? "1fr" : "0fr",
              transition: "grid-template-rows 420ms ease",
            }}
          >
            <div className="overflow-hidden">
              <div className="space-y-4 pt-4">
                {rest.map((para, i) => (
                  <p key={i} className="leading-8 text-body">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex items-center gap-2 mt-4 text-xs uppercase tracking-[0.18em] font-medium font-mono text-clay"
          >
            {open ? "Show less" : "Read full entry"}
            <ChevronDown
              size={14}
              style={{
                transition: "transform 300ms ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
        </>
      )}
    </div>
  );
}

export default function CampaignPartnersPage() {
  const partners: Partner[] = [
    {
      ref: "01",
      name: "Onnalee Cubitt",
      role: "Local Councillor",
      image: "/cubitt.png",
      kind: "photo",
      paragraphs: [
        "I am a local mum aged 56. I grew up locally and have been one of your Borough Councillors since 2008. I have fought hard to protect Basing and Lychpit, the villages and the River Loddon and its precious environment for many years.",
        "Basing and Lychpit is under threat like never before. The Government housing number imposed on this Borough is 18,000 more by 2039. We have already undergone the 6th highest growth in population in the country from the recent census data at over 10% from 2011 to 2021. Our sewage system can't cope. Our roads can't cope. Our schools, dentists and GP surgeries can't cope.",
        "We need the public to engage like never before. As your councillors Sven, Kate and I can't fight this alone. We are delighted that your Parish is leading with this Local Environment Campaign working closely with S.O.L.V.E. (Save our Loddon Valley Environment) which has been hugely successful in protecting our Ward thus far. Please sign up. Please engage in the process. Your Parish needs you. We need you.",
      ],
    },
    {
      ref: "02",
      name: "Des O'Donnell",
      role: "CPRE Hampshire — The Countryside Charity",
      image: "/CPRE-Hampshire-LOGO.png",
      kind: "logo",
      paragraphs: [
        "At CPRE Hampshire, the countryside charity, we believe in countryside and green spaces that are accessible to all, rich in nature and play a crucial role in responding to the climate emergency. Sadly today, Hampshire's countryside faces many challenges including population growth, climate change, pressures to grow the economy and build more houses. CPRE Hampshire is an independent charity working to promote, protect and enhance local countryside in a way that underpins the economy and maintains the balance between necessary development and a thriving Hampshire countryside.",
        "In North Hampshire, we have an active group of volunteers monitoring proposed development. This often means raising objections to planning applications where, in our view, the harm to the local landscape outweighs any benefit from proposed development. In Basingstoke and Deane, the Local Plan was adopted in 2016 covering the period 2011–2029. Local Plans are at the heart of the planning system and are normally the main consideration for deciding planning applications. The Basingstoke Local Plan is being updated covering the period to 2039. Our volunteers and the Parish Councils we engage with are working hard to understand and influence the Local Plan to ensure a positive outcome for the local countryside.",
        "To that end we fully endorse and support the aims of the Old Basing and Lychpit Environment Campaign (OBLEC) in opposing proposals for up to 2,150 houses on three sites in the Old Basing and Lychpit parish.",
        "We would encourage you to feed into the process and have your say on local development. For more information see the Planning Hub of our website.",
        "If you are as passionate as we are to preserve our local landscapes, please consider joining us as a CPRE Hampshire member. Membership helps us to protect the beautiful Hampshire countryside, keep working on its behalf, and starts from £3.00 per month (£36.00 per year).",
      ],
      linkHref: "https://www.cprehampshire.org.uk",
      linkLabel: "Visit cprehampshire.org.uk",
    },
    {
      ref: "03",
      name: "Visualytes",
      role: "Web & Marketing Solutions",
      image: "/visualytes.png",
      kind: "logo",
      paragraphs: [
        "When we say we are your partner for total technical care, we mean it! With many years of experience and expertise, we are one of the industry leaders in integrated IT solutions, which are not only the back bone of our business but also the trigger of our growth into new innovation and strategic expansion.",
        "Owing to such forward thinking mindset, we have confidently marched towards new market and service growth areas and successfully positioned ourselves in both software solution and whole lifecycle of software development. We are your one-stop shop for all your IT needs. Our client growth and satisfaction has resulted in us globalizing and differentiating ourselves from competitors in a very short time.",
      ],
    },
    {
      ref: "04",
      name: "Zebra Creative",
      role: "Creative Design Partner",
      image: "/zebra.png",
      kind: "logo",
      paragraphs: [
        "Zebra Creative's approach to what we do enables us to provide full graphic design and marketing services in-house. Should specialist skills be required, we involve our external panel of experts with whom we have spent years building relationships. This allows us to remain flexible yet focused, ensuring our clients receive the best possible service, ideas and value for money. Previously based just outside London but now on the Isle of Wight, we have easy access to London and the South, but, like zebras, we can and do travel miles when required!",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-paper text-ink">
        {/* HERO */}
        <section className="relative h-[640px] overflow-hidden bg-moss-dark">
          <Image
            src="/campaign-partners.jpg"
            alt="Volunteer holding a seedling from the Loddon valley"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/85" />

          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pb-16">
              <h1 className="text-white leading-[0.95] font-display font-medium text-[clamp(2.75rem,6vw,5.25rem)]">
                Join the
                <br />
                <span className="italic font-normal">campaign</span>
              </h1>

              <FootpathRule className="w-full max-w-xs h-3 mt-10 text-sage" />
            </div>
          </div>
        </section>

        {/* PARTNERS — a register, not a card grid */}
        <section className="pb-8 bg-paper">
          <div className="max-w-5xl mx-auto px-6">
            {partners.map((partner) => (
              <div key={partner.ref}>
                <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-12 py-14">
                  {/* image — photos get a framed roundel, logos get a clean strip */}
                  <div className="flex md:flex-col items-center md:items-start gap-6">
                    {partner.kind === "photo" ? (
                      <div className="relative w-28 h-28 md:w-[150px] md:h-[150px] shrink-0 overflow-hidden rounded-full bg-chalk border border-sage">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          sizes="150px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative w-32 h-16 md:w-full md:h-20 shrink-0">
                        <Image
                          src={partner.image}
                          alt={`${partner.name} logo`}
                          fill
                          sizes="180px"
                          className="object-contain object-left"
                        />
                      </div>
                    )}
                    <span className="md:hidden text-2xl font-mono text-sage">
                      {partner.ref}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-4">
                      <span className="hidden md:inline text-sm font-mono text-sage">
                        {partner.ref}
                      </span>
                      {partner.role && (
                        <span className="uppercase tracking-[0.18em] text-xs font-mono text-clay">
                          {partner.role}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-display font-medium text-[clamp(1.75rem,3vw,2.4rem)] text-moss-dark">
                      {partner.name}
                    </h3>

                    <PartnerBio paragraphs={partner.paragraphs} />

                    {partner.linkHref && (
                      <Link
                        href={partner.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mt-6 text-sm font-medium group w-fit text-moss"
                      >
                        {partner.linkLabel ?? "Learn more"}
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    )}
                  </div>
                </div>

                <FootpathRule className="w-full h-3 text-sage" />
              </div>
            ))}
          </div>
        </section>

        {/* PHOTOGRAPHERS */}
        <section className="py-24 bg-moss-dark">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 bg-white border border-sage">
                <Image
                  src="/camera.png"
                  alt="Camera icon"
                  fill
                  sizes="80px"
                  className="object-contain p-3"
                />
              </div>

              <div>
                <h3 className="mt-2 text-white font-display font-medium text-[1.85rem]">
                  Photographers
                </h3>
                <p className="mt-3 leading-7 text-white/70 max-w-xl">
                  We are grateful to Chris Hawkins &amp; Peter Bloyce for letting
                  us use their pictures.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
