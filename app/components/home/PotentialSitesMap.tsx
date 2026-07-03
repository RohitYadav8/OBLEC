import Image from "next/image";

export default function PotentialSitesMap() {
  return (
    <section className="bg-white py-20">
      {/* Green banner header */}
      <div className="bg-gradient-to-r from-[#4A7C3A] to-[#6B9E4F] py-10 text-center text-white shadow-sm">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">
          Old Basing &amp; Lychpit
        </h1>
        <p className="mt-2 font-serif text-xl md:text-2xl">
          Potential Development Sites
        </p>
      </div>

      {/* Map + context */}
      <div className="mx-auto max-w-[700px] px-6 pt-14">
        <div className="overflow-hidden rounded-lg border-2 border-[#8FC15D] shadow-lg">
          <Image
            src="/map.jpg"
            alt="Map of potential development sites in Old Basing & Lychpit"
            width={1400}
            height={900}
            className="h-auto w-full"
          />
        </div>

       

        {/* Links to individual area pages */}
       
      </div>
    </section>
  );
}
