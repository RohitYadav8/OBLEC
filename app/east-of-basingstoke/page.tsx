"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { fontVars } from "../lib/fonts";
import { FootpathRule } from "../components/shared/FootpathRule";
import { P, CaseSection, PolicyQuote } from "../components/shared/Typography";
import { OtherAreasSection } from "../components/shared/OtherAreasSection";
import { PartnerLogosSlider } from "../components/shared/PartnerLogosSlider";



const galleryStrip = [
  "/gallery/land-east-1.jpg",
  "/gallery/land-east-2.jpg",
  "/gallery/land-east-3.jpg",
  "/gallery/land-east-4.jpg",
];

export default function LandEastOfBasingstokePage() {
  return (
    <div className={`${fontVars} font-body`}>
      <Navbar />

      <main className="bg-paper text-ink">
        {/* HERO */}
        <section className="relative h-[560px] overflow-hidden">
          <Image
            src="/land-east.png"
            alt="Aerial view of the fields at Land East of Basingstoke"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 from-40% to-black/75" />

          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-6 text-center">



              {/* Title */}
              <h1 className="text-white font-display font-medium leading-tight
      text-[clamp(2.5rem,4.5vw,4.5rem)]">
                Land East of Basingstoke
              </h1>

              {/* Logo */}
              <div className="flex justify-center my-8">
                <Image
                  src="/symbol-white.webp"   // apna white logo yaha rakho
                  alt="OBLEC"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO + MAP */}
        <section className="py-20 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-start">
              <div className="space-y-4">
                <P>
                  This site is next to Pyotts Hill and runs alongside the
                  A33. Whilst the housing allocation was originally for 450
                  houses in 2016, Hampshire County Council (HCC) now wants to
                  bring forward a further 450 houses, taking the total
                  allocation on this site to 900 houses.
                </P>
                <P>
                  HCC and their consultants Tibbalds conducted two public
                  consultations about their plans for the site, in July 2023
                  and February/March 2024. The plans seen by residents show
                  that there are a number of problems in respect of the
                  proposed development, and we discuss those below.
                </P>
                <P>
                  Whilst we have to accept that some houses are likely to be
                  built on the Land East of Basingstoke site, we repeat that
                  the site is problematical and we continue to have grave
                  concerns about several matters: the issues of odour from
                  the Sewage Treatment Works, noise from the incinerator,
                  heritage, valued biodiversity and flood risk (flood Zones
                  2 and 3a). Having built the facilities away from housing,
                  it cannot make sense to bring as many as 900 homes near to
                  the facilities now.
                </P>
              </div>

              <figure className="rounded-sm overflow-hidden border border-sage bg-chalk">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/EOB.png"
                    alt="Site plan showing the proposed Land East of Basingstoke development boundary"
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs uppercase tracking-[0.18em] font-mono text-moss">
                  Site plan — proposed boundary
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

  
       
        {/* THE CASE — clause by clause */}
        <section className="py-6 md:py-10">
          <div className="max-w-5xl mx-auto px-6">
            <CaseSection id="odour" code=""  title="Odour">
              <P>
                The Sewage Treatment Works (STW) was built away from houses.
                It does not make sense to bring the houses closer to the
                STW.
              </P>
              <P>
                Odour from the STW is a problem. In 2016 the Planning
                Inspector said there would be unacceptable odours for new
                residents.
              </P>
              <P>
                The drift of odour is not just in a northerly direction. The
                smell goes in all directions, including into Broadhurst
                Grove, Lychpit — a road where residents have experienced the
                smell. Broadhurst Grove is situated in a corner of Lychpit
                nearest the new Redrow housing development. The approximate
                distance between the STW and this road is 2.5 kilometres, so
                the odour travels around quite far, depending on wind
                direction and cyclonic conditions.
              </P>
              <P>
                Also, the odour is evident sometimes along the footpath
                which runs parallel to Park Pale.
              </P>
              <P>Does HCC think it is feasible for people to live happily alongside such odour?</P>
              <P>
                We note this instruction from the Borough Council to HCC and
                the developer in the Local Plan Update published in early
                2024:
              </P>
              <PolicyQuote label="Noise and odour — 6.101">
                The neighbouring incinerator and sewage treatment works are
                a notable noise and odour source affecting the site, and
                successfully mitigating these impacts will be vital for
                the quality of life of future occupants and ensuring the
                delivery of healthy communities. Robust technical and
                comprehensive noise, odour and air quality assessments
                must be submitted by the applicant, prepared in
                consultation with relevant infrastructure providers. In
                this regard it is likely that a significant buffer between
                the sewage treatment works, incinerator and the edge of
                the built form will be required to ensure acceptable
                noise and odour standards can be met within new homes and
                amenity areas.
              </PolicyQuote>
            </CaseSection>

            <CaseSection id="noise" code=""  title="Noise">
              <P>
                In 2016 the Planning Inspector said there would be noise
                from the A33, the incinerator and the sewage works.
              </P>
              <P>
                Noisy vehicles deliver to the incinerator and STW throughout
                the day, and in the case of the STW, at weekends too.
              </P>
              <P>
                The incinerator was built to be away from housing estates
                purposely. In HCC&rsquo;s Minerals and Waste Local Plan
                1999, when the present incinerator was being planned, the
                &ldquo;countryside location&rdquo; of the incinerator was
                noted. If houses are built in close proximity, the
                incinerator will no longer be in a countryside location —
                although the site is fairly close to housing estates in
                Chineham, that site was preferred to alternatives,
                presumably because of its more remote location.
              </P>
              <P>
                The housing development planned by HCC will bring the
                houses closer to the incinerator. Harmful particles may be
                released, causing respiratory and other health problems for
                residents living nearby.
              </P>
            </CaseSection>

            <CaseSection id="access-and-movement" code=""  title="Access & Movement">
              <P>
                The proposal to have a Bus Gate at the bottom of the site,
                leading into either Bartons Lane or Pyotts Hill, is
                particularly worrying. Should this proposal become a
                reality, other vehicles will use it as a shortcut very
                quickly. We don&rsquo;t want more vehicles passing through
                Old Basing, which has longstanding historical problems with
                rat runs through the village during peak hours.
              </P>
              <P>
                Other existing Bus Gates in Basingstoke do not prevent cars
                going through, and we have photographic evidence of this.
              </P>
              <P>
                A Bus Gate, with large signs and signage painted on the
                road, would be out of character with the rural setting of
                Lychpit and Old Basing.
              </P>
              <P>Residents haven&rsquo;t seen HCC&rsquo;s traffic survey.</P>
            </CaseSection>

            <CaseSection id="water"  code="" title="Water">
              <P>
                Where will the water supply for the development come from?
                No new reservoirs have been built in the last 30 years.
                Water supply for 900 more houses must be a concern.
              </P>
              <P>If assurances have been given on water supply, where have they come from?</P>
              <P>
                There are concerns about abstraction from the aquifers that
                feed the River Loddon — a rare, north-flowing chalk stream
                and salmonid watercourse, with environmentally important
                peat bogs along its length.
              </P>
              <P>
                History shows that, unless there are flood conditions, the
                River Loddon is very shallow — often just a few inches —
                compared to its flow in the past. Further abstraction could
                cause the river to dry up, as has happened to chalk streams
                elsewhere, for example the River Quinn in Hertfordshire.
                Climate change has resulted in less spring and summer
                rainfall, a fact acknowledged by the Environment Agency in
                2019, when it found soils had got significantly drier
                across much of England during April than at any point in
                the previous month. Since then, 2022 brought drought
                conditions and June 2023 was exceptionally dry. Chalk
                streams like the River Loddon are among England&rsquo;s
                most important habitats, of global significance — it has
                been argued they are as ecologically important as
                rainforests. It cannot be assumed that the aquifers will
                continue to provide water for ever more consumers.
              </P>
              <P>
                What about sewage treatment? When there is heavy rainfall,
                the existing STW discharges raw sewage into the River
                Loddon&rsquo;s ecosystem. According to Thames Water&rsquo;s
                live discharge map, between 7 and 13 January 2023 there were
                139 hours of continuous discharge, with further lengthy
                incidents later that month and in February and March.
              </P>
              <P>
                On 2 April 2024 the Basingstoke Gazette reported that
                Councillor Paul Harvey, Leader of the Borough Council, had
                criticised Thames Water for pumping untreated sewage into
                the River Loddon for almost 60 hours, following reports
                from residents near the Basingstoke sewage treatment works
                on Whitsmarsh Lane, Chineham, who noticed raw sewage being
                pumped into the Loddon on Friday 29 March.
              </P>
              <P>
                Councillor Harvey said the Government is not stopping water
                companies from dumping raw sewage into rivers, and called
                for the Government to give powers to local councils to
                intervene, describing local waterways as being destroyed by
                these companies.
              </P>
              <P>
                The more houses the plant has to serve, the more likely
                this is to happen — which is not only unpleasant but
                damaging to delicate ecosystems.
              </P>
              <P>Will a new sewage treatment plant be built? And when?</P>
            </CaseSection>

            <CaseSection id="flooding" code="" title="Flooding">
              <P>The Local Plan Update acknowledges that there is flood risk in parts of the site.</P>
              <P>This is the comment on page 199, Appendix 4 of the draft Local Plan:</P>
              <PolicyQuote label="Local Plan Update — 4.3">
                Within one of the sites proposed for allocation, there are
                parts of the site which lie within Flood Zones 2 and 3,
                and therefore may be at risk from other sources of
                flooding (900 dwellings). This site is a current
                allocation in the adopted Local Plan (Land East of
                Basingstoke), but it is proposed that it is allocated for
                a higher number of dwellings. Due to the layout of the
                site, the requirement for access will need at least to
                cross an area of Flood Zone 2/3, so site OLD001 (East of
                Basingstoke) is required to meet the Exception Test. The
                development will be subject to a site-specific flood risk
                assessment, and the proposed site policy requires
                development and points of access to avoid Flood Zones 2
                and 3 and appropriate flood risk management measures. This
                will ensure that any access infrastructure is designed
                and constructed to remain operational and safe at times
                of flood, in accordance with the requirements of the
                Exception Test.
              </PolicyQuote>
              <P>
                The Local Plan Update, at 6.97, states that &ldquo;a Flood
                Risk Assessment will be required&rdquo;. What assurances
                will be given to residents, and when?
              </P>
            </CaseSection>

            <CaseSection id="habitat" code="" title="Habitat">
              <P>
                Damage to the environment: in 2016 the Planning Inspector
                said the development would result in the loss of key
                habitat, as well as contributing to an increase in
                wastewater phosphate concentration in the River Loddon. The
                development process could lead to run-off and particles
                entering the River Loddon.
              </P>
              <P>
                The existence of important trees, including large oak
                trees, has been acknowledged. How are these going to be
                protected from damage during the development process?
              </P>
            </CaseSection>

            <CaseSection id="heritage" code="" title="Heritage">
              <P>
                We note that the Pyotts Hill Entrenchment will be
                protected. How close will the houses be built to this?
              </P>
            </CaseSection>

            <CaseSection id="traffic-transport-and-movement" code="" title="Traffic, Transport & Movement">
              <P>
                Traffic and noise: the Inspector reported that there would
                be noise from the A33, the incinerator and the sewage
                works, whilst also noting that the development could lead
                to congestion and delays on the surrounding transport
                network, namely the A33. Residents in Old Basing and
                Lychpit already endure frustrating levels of traffic using
                village roads as a rat run, and adding hundreds of vehicles
                from this development will not help.
              </P>
              <P>
                The A33 is a single carriageway until it becomes a dual
                carriageway beyond Bloch Hill. The housing estates at
                Taylor&rsquo;s Farm — also known as Sherfield Park — and
                the newer Redlands development mean the A33 is already at
                capacity, with no plans for relief, and it has got worse.
              </P>
              <P>
                The proposal is that traffic will exit the Land East of
                Basingstoke site onto the A33 at just one point, on a road
                that is already busy. How will 1,000-plus cars belonging to
                residents living on the development actually get onto the
                A33? Congestion will be constant, and access for emergency
                vehicles, both entering and exiting the estate, will be
                difficult.
              </P>
            </CaseSection>

            <CaseSection id="landscape-and-the-loddon-valley" code="" title="Landscape & the Loddon Valley Environment">
              <P>
                Residents in Old Basing and Lychpit Parish value the Loddon
                Valley environment and want it protected and enhanced.
              </P>
              <P>
                The Land East of Basingstoke development threatens an asset
                of important recreational and environmental value — its
                biodiversity, flora and fauna, history and scenic beauty.
                Development could compromise water quality in the River
                Loddon and reduce the value of the strategic gap between
                Basingstoke and Old Basing and Lychpit.
              </P>
              <P>
                People who live in Basingstoke want access to the
                countryside. The wellbeing benefits of walking in nature
                are well researched and documented. The Loddon Valley area
                should be retained for recreation by the local community.
              </P>
            </CaseSection>

            <CaseSection id="community-services" code="" title="Doctors, Dentists, Schools & Community Centre">
              <P>
                There will be a mixed reliance on Chineham and the wider
                area for shopping, schools, doctors and dentists — some of
                which are already overstretched.
              </P>
              <P>
                HCC plans a new primary school and community centre within
                the site — but on what timescale? There is a history of
                HCC promising schools that only get built decades later.
              </P>
              <P>
                The shortage of doctors and dentists is a nationwide
                problem, but practically, how will the needs of up to 900
                new households be met? Doctors&rsquo; and dentists&rsquo;
                surgeries in this area are already under strain — NHS
                dentists cannot be found here, and practices are closing,
                putting more pressure on those that stay open.
              </P>
              <P>
                Taking average household occupancy as 2.4 people per
                dwelling, 900 houses means an extra 2,160 residents — a lot
                of people needing medical care and other services. By
                comparison, nearby Old Basing and Lychpit has around 7,400
                residents living in approximately 3,200 households.
              </P>
            </CaseSection>

            <CaseSection id="in-conclusion" code="" title="In Conclusion">
              <P>
                The commentary in the Local Plan Update for SPS5.6, Land
                East of Basingstoke, is optimistic concerning the
                development of the site. There are problems — constraints,
                as planners call them — as highlighted in the comments
                above.
              </P>
              <P>
                Building houses closer to the STW and the incinerator has
                inherent problems. At 6.101, the Local Plan Update itself
                says that successfully mitigating these impacts will be
                vital for the quality of life of future occupants and
                ensuring the delivery of healthy communities.
              </P>
              <P>
                The residents of Lychpit and Old Basing have campaigned for
                decades to preserve the Loddon Valley environment. We also
                deserve a continuation of a suitable strategic gap between
                our settlement and Basingstoke.
              </P>
              <p className="mt-6 italic font-display text-moss-dark text-[1.1rem]">Alan Renwick</p>
            </CaseSection>
          </div>
        </section>

        {/* PHOTO STRIP */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              {galleryStrip.map((src, i) => (
                <div
                  key={src}
                  className="relative shrink-0 w-[280px] sm:w-[340px] h-[200px] rounded-sm overflow-hidden snap-start border border-sage"
                >
                  <Image
                    src={src}
                    alt={`Land East of Basingstoke, view ${i + 1}`}
                    fill
                    sizes="340px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">
          <FootpathRule className="w-full h-3 text-sage" />
        </div>

        <OtherAreasSection currentHref="/areas-under-threat/land-east-of-basingstoke" />

        {/* THANK YOU */}
        <section className="py-20 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16 flex items-center gap-4">
              <div className="h-[3px] flex-1 bg-brand" />
              <span className="shrink-0 font-serif text-xl font-bold tracking-[2px] text-brand md:text-2xl">
                THANK YOU
              </span>
              <div className="h-[3px] flex-1 bg-brand" />
            </div>

            <div className="mb-10">
              <PartnerLogosSlider />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
