"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { fontVars } from "../lib/fonts";
import { FootpathRule } from "../components/shared/FootpathRule";
import { P } from "../components/shared/Typography";
import { EventCarousel, type EventSlide } from "../components/shared/EventCarousel";

/* ---------------------------------------------------------------
   Event data — each block below is one event. To add a new event,
   copy one of these arrays and add a matching <EventBlock> in the
   page body further down. Replace the placeholder image paths with
   your real files in /public/events/.
----------------------------------------------------------------- */

const campaigningSlides: EventSlide[] = [
  { src: "/Events-1.jpg", alt: "OBLEC supporters holding placards outside Basingstoke Council Offices" },
  { src: "/Events-2.jpg", alt: "A group of OBLEC supporters campaigning outside the council offices" },
  
];

const publicMeetingSlides: EventSlide[] = [
  { src:"/Meeting-1.png",alt:"OBLEC public meeting at old basing village hall."},
  { src: "/Meeting-2.png", alt: "Alan Renwick speaking at the podium", caption: "Alan Renwick (Chairman)" },
  { src: "/Meeting-3.png", alt: "Alistair Rudman speaking at the podium", caption: "Alistair Rudman" },
  { src: "/Meeting-4.png", alt: "Gillian Moore speaking at the podium", caption: "Gillian Moore" },
  {src:"/Meeting-5.png",alt:"Nick Harris speaking at the podium", caption :"Nick Harris"},
  {src:"/Meeting-6.png",alt:"Steve Pickels speaking at the podium",caption:"Steve Pickels"},
  {src:"/Meeting-7.png",alt:"Peter Bloyce Speaking at the podium",caption :"Peter Bloyce"},
  {src:"/Meeting-8.png",alt:"Residence ",caption:"Residence"},
    {src:"/Meeting-9.png",alt:"Residence ",caption:"Residence"},
      {src:"/Meeting-10.png",alt:"Residence ",caption:"Residence"},
        {src:"/Meeting-11.png",alt:"Residence ",caption:"Residence"},
  // Add further speakers/photos here in the same shape:
  // { src: "/events/meeting-4.jpg", alt: "...", caption: "..." },
];

const posterCompetitionSlides: EventSlide[] = [
  { src: "/Poster-1.png", alt: "Children's poster: Save Our Wildlife" },
  { src: "/Poster-2.png", alt: "Children's poster: countryside and river scene" },
  { src: "/Poster-3.png", alt: "Children's poster: river and trees" },
   { src: "/Poster-4.png", alt: "Children's poster: Save Our Wildlife" },
  { src: "/Poster-5.png", alt: "Children's poster: countryside and river scene" },
  { src: "/Poster-6.png", alt: "Children's poster: river and trees" }, 
  { src: "/Poster-7.png", alt: "Children's poster: Save Our Wildlife" },
  { src: "/Poster-8.png", alt: "Children's poster: countryside and river scene" },
  { src: "/Poster-9.png", alt: "Children's poster: river and trees" },
   { src: "/Poster-10.png", alt: "Children's poster: Save Our Wildlife" },
  { src: "/Poster-11.png", alt: "Children's poster: countryside and river scene" },
  { src: "/Poster-12.png", alt: "Children's poster: river and trees" },
   { src: "/Poster-13.png", alt: "Children's poster: Save Our Wildlife" },
  { src: "/Poster-14.png", alt: "Children's poster: countryside and river scene" },
  { src: "/Poster-15.png", alt: "Children's poster: river and trees" },
  // Add further poster entries here in the same shape:
  // { src: "/events/poster-4.png", alt: "..." },
];

/* A single event: a green underlined heading, optional intro copy,
   then its photo carousel. */
function EventBlock({
  title,
  children,
  slides,
}: {
  title: string;
  children?: React.ReactNode;
  slides: EventSlide[];
}) {
  return (
    <section className="py-14 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center font-display font-semibold text-[1.4rem] md:text-[1.6rem] text-moss-dark underline decoration-[#8FC15D] underline-offset-8 mb-10">
          {title}
        </h2>

        {children && <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">{children}</div>}

        <EventCarousel slides={slides} />
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <div className={`${fontVars} font-body`}>
      <Navbar />

      <main className="bg-paper text-ink">
        {/* PAGE HEADER */}
        <section className="py-16 md:py-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <p className="tracking-[0.25em] uppercase text-xs mb-4 font-mono text-clay">
              OBLEC
            </p>
            <h1 className="font-display font-medium text-[clamp(2rem,4vw,3rem)] text-moss-dark">
              Events
            </h1>
            <p className="mt-4 text-body">
              A record of campaign activity, public meetings, and community
              involvement from Old Basing &amp; Lychpit Environment Campaign.
            </p>
            <div className="flex justify-center mt-8">
              <FootpathRule className="w-full max-w-xs h-3 text-sage" />
            </div>
          </div>
        </section>

        {/* EVENT 1 — Campaigning */}
        <EventBlock
          title="OBLEC Supporters Campaigning — Basingstoke Council Offices — 7th September 2023"
          slides={campaigningSlides}
        />

        <div className="max-w-4xl mx-auto px-6">
          <FootpathRule className="w-full h-3 text-sage" />
        </div>

        {/* EVENT 2 — Public Meeting */}
        <EventBlock
          title="OBLEC Public Meeting at Old Basing Village Hall — 15th April 2023"
          slides={publicMeetingSlides}
        />

        <div className="max-w-4xl mx-auto px-6">
          <FootpathRule className="w-full h-3 text-sage" />
        </div>

        {/* EVENT 3 — Poster Competition */}
        <EventBlock
          title="St Mary's Junior School — Poster Competition"
          slides={posterCompetitionSlides}
        >
          <P>
            To promote its OBLEC campaign the Parish Council asked children
            from year 6 at St Mary&rsquo;s Junior School, Old Basing, to
            design a poster to depict the countryside, wildlife and the
            Loddon Valley which the campaign is trying to protect. The
            children gave up their own time for this project and all entries
            were displayed at Old Basing Village Hall during the Public
            Meeting held on 15th April 2023.
          </P>
          <P>We should like to thank all those children that entered.</P>
        </EventBlock>
      </main>

      <Footer />
    </div>
  );
}
