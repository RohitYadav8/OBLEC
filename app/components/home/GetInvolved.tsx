import Link from "next/link";

export default function GetInvolved() {
  return (
    <section className="relative overflow-hidden bg-[#2F5C2B] py-20">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-8 px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-[4px] text-[#B7D6A6]">
          How You Can Help
        </span>

        <h2 className="font-serif text-3xl leading-snug text-white md:text-4xl">
          We can&apos;t fight this alone.
          <br />
          Add your voice to the campaign.
        </h2>

        <p className="max-w-[560px] text-white/80">
          Whether it&apos;s signing up for updates, objecting to a planning
          application, or joining a local event — every bit of support helps
          protect the Loddon Valley for future generations.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#2F5C2B] transition hover:bg-[#F7F5EF]"
          >
            Join the Campaign
          </Link>
          <Link
            href="#"
            className="rounded-full border border-white/50 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Read The Facts
          </Link>
        </div>
      </div>
    </section>
  );
}
