import Navbar from "./components/layout/Navbar";
import ImageSlider from "./components/home/ImageSlider";
import Mission from "./components/home/Mission";
import PotentialSitesMap from "./components/home/PotentialSitesMap";
import Footer from "./components/layout/Footer";
import SiteOverview from "./components/home/SiteOverview";

export default function Home() {
  const slides = [
    {
      image: "/images/land-1.jpg",
      eyebrow: "Now Under Threat",
      title: "Land East of Basingstoke",
      subtitle:
        "Up to 900 homes are proposed on this greenfield site — help us protect it.",
    },
    {
      image: "/images/land-2.jpg",
      eyebrow: "Our Campaign",
      title: "Protecting The Loddon Valley",
      subtitle:
        "A rare chalk stream and its surrounding countryside deserve better.",
    },
    {
      image: "/images/land-3.jpg",
      eyebrow: "Get Involved",
      title: "Every Voice Counts",
      subtitle:
        "Join residents of Old Basing & Lychpit in shaping the future of our parish.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAF7]">
        <ImageSlider slides={slides} autoPlayMs={5000} />
        <Mission />
        <PotentialSitesMap />
           <SiteOverview />
        
      
        <Footer/>
      </main>
    </>
  );
}
