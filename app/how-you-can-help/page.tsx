import { Landmark, MapPinned, ScrollText, Mail } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const groups = [
  {
    title: "Your Borough Councillors",
    icon: Landmark,
    contacts: [
      { name: "Cllr. Onnalee Cubitt", email: "cllr.onnalee.cubitt@basingstoke.gov.uk" },
      { name: "Cllr. Sheena Grassi", email: "cllr.Sheena.Grassi@basingstoke.gov.uk" },
      { name: "Cllr. Kate Tuck", email: "cllr.Kate.Tuck@basingstoke.gov.uk" },
    ],
  },
  {
    title: "Your County Councillor",
    icon: MapPinned,
    contacts: [{ name: "Elaine Still", email: "elaine.still@hants.gov.uk" }],
  },
  {
    title: "Your Member of Parliament",
    icon: ScrollText,
    contacts: [{ name: "Alex Brewer MP", email: "alex.brewer.mp@parliament.uk" }],
  },
];

export default function WriteToRepresentatives() {
  return (
    <>
    <Navbar />
    <section className="bg-[#F8FAF7] py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[4px] text-[#4A7C3A]">
            Take Action
          </span>
          <h2 className="mt-4 font-serif text-3xl text-[#2B2B28] md:text-4xl">
            You Can Help Our Campaign By Writing To
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-base text-gray-600">
            A short, personal email to any of the contacts below makes a real
            difference. Let them know why the Loddon Valley matters to you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups.map(({ title, icon: Icon, contacts }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-[#4A7C3A]/15 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#4A7C3A]/10 text-[#4A7C3A]">
                <Icon size={26} strokeWidth={1.75} />
              </div>

              <h3 className="font-serif text-lg text-[#2B2B28]">{title}</h3>

              <div className="mt-6 flex-1 space-y-4 border-t border-dashed border-[#4A7C3A]/20 pt-6">
                {contacts.map((c) => (
                  <a
                    key={c.email}
                    href={`mailto:${c.email}`}
                    className="group flex items-start gap-2.5 text-sm"
                  >
                    <Mail
                      size={15}
                      className="mt-0.5 shrink-0 text-[#8FC15D] transition group-hover:text-[#4A7C3A]"
                    />
                    <span>
                      <span className="block font-medium text-[#2B2B28]">
                        {c.name}
                      </span>
                      <span className="break-all text-[#4A7C3A]/90 underline decoration-[#4A7C3A]/30 underline-offset-2 transition group-hover:text-[#2F5C2B] group-hover:decoration-[#2F5C2B]">
                        {c.email}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <Footer />
    </>

   
  );
}
