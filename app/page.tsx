import Navbar from "./components/layout/Navbar";
import ImageSlider from "./components/home/ImageSlider";
import Mission from "./components/home/Mission";
import PotentialSitesMap from "./components/home/PotentialSitesMap";
import Footer from "./components/layout/Footer";
import SiteOverview from "./components/home/SiteOverview";

export default function Home() {
  const slides = [
    {
      image: "/Home-1.png",
      
      title: "Fight the destruction of our countryside",
      
    },
    {
      image: "/Home-2.png",
      title: "Stop sewage spoiling our waterways",
      
    },
    {
      image: "/Home-3.png",
      title: "Can our surgeries andhospitals cope?",
      
    },
     {
      image: "/Home-4.png",
      title: "Our homes andwoodlans at risk",
    
    }, {
      image: "/Home-5.png",
      
      title: "Can our current road infrastructure cope?",
      
    }, {
      image: "/Home-6.png",
      title: "Land East of Basingstoke",
      
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
