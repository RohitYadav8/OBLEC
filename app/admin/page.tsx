import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Users, Calendar, Mail, X, Menu } from "lucide-react";
import { createClient } from "../lib/supabase/server";
import LogoutButton from "./LogoutButton";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

type Submission = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  created_at: string;
};

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;
  const supabase = await createClient();

  const { data: submissions, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  const all = (submissions as Submission[] | null) ?? [];

  const todayInKolkata = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-CA", {
      timeZone: "Asia/Kolkata",
    }) ===
    new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });

  const todaysSubmissions = all.filter((s) => todayInKolkata(s.created_at));

  const uniqueSenders = Array.from(
    new Map(all.map((s) => [s.email, s])).values()
  );

  let visible: Submission[] = all;
  let heading = "All submissions";
  if (filter === "today") {
    visible = todaysSubmissions;
    heading = "Received today";
  } else if (filter === "unique") {
    visible = uniqueSenders;
    heading = "Unique senders";
  }

  const cardBase =
    "flex items-center gap-4 rounded-2xl border bg-white px-6 py-6 text-left shadow-[0_4px_16px_-4px_rgba(47,92,43,0.12)] transition hover:shadow-[0_8px_24px_-6px_rgba(47,92,43,0.18)]";
  const activeRing = "ring-2 ring-[#2F5C2B] ring-offset-2 ring-offset-[#F0F4EE]";

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-[#F0F4EE]">
        {/* Mobile sidebar toggle (checkbox-driven, no client JS needed) */}
        <input
          type="checkbox"
          id="sidebar-toggle"
          className="peer hidden"
        />

        {/* Mobile hamburger button */}
        <label
          htmlFor="sidebar-toggle"
          className="fixed right-4 top-4 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg bg-[#2F5C2B] text-white shadow-md md:hidden"
        >
          <Menu size={20} />
        </label>

        {/* Overlay (click to close on mobile) */}
        <label
          htmlFor="sidebar-toggle"
          className="fixed inset-0 z-30 hidden bg-black/40 peer-checked:block md:hidden"
        />

        {/* Sidebar */}
        <aside className="fixed inset-y-0 left-0 z-40 flex w-64 -translate-x-full shrink-0 flex-col bg-gradient-to-b from-[#2C4432] to-[#2F5C2B] transition-transform duration-300 peer-checked:translate-x-0 md:static md:translate-x-0">
          <div className="flex items-center gap-3 px-6 py-7">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
              <Image
                src="/logo.png"
                alt="OBLEC logo"
                fill
                className="object-contain p-1.5"
              />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50">
                OBLEC
              </p>
              <p className="font-serif text-lg leading-tight text-white">
                Admin panel
              </p>
            </div>
          </div>

          <div className="mx-6 h-px bg-white/10" />

          <nav className="flex-1 space-y-1 px-3 py-6">
            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
              Menu
            </p>
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
            >
              <LayoutDashboard size={17} />
              Dashboard
            </Link>
          </nav>

          <div className="mx-6 h-px bg-white/10" />

          <div className="px-3 py-4">
            <LogoutButton />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 bg-[#F0F4EE] px-5 pb-10 pt-20 md:px-10 md:pt-10">
          {/* Welcome banner */}
          <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#2F5C2B] to-[#3F5D44] px-8 py-7">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-16 right-24 h-32 w-32 rounded-full bg-[#8FC15D]/10" />
            <p className="relative text-sm font-medium text-white/70">
              Dashboard
            </p>
            <h1 className="relative mt-1 font-serif text-3xl text-white">
              Contact submissions
            </h1>
            <p className="relative mt-2 max-w-lg text-sm text-white/60">
              Everything sent through the &ldquo;Get in Touch&rdquo; form on
              the site lands here, newest first. Click a card below to
              filter the list.
            </p>
          </div>

          {/* Stat summary — clickable filters */}
          {!error && (
            <div className="mb-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Link
                href="/admin"
                className={`${cardBase} ${!filter ? activeRing : ""}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2F5C2B] to-[#4A7C3A] text-white shadow-sm">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#1F2E20]">
                    {all.length}
                  </p>
                  <p className="text-sm text-[#2B2B28]/55">
                    Total submissions
                  </p>
                </div>
              </Link>

              <Link
                href="/admin?filter=today"
                className={`${cardBase} ${
                  filter === "today" ? activeRing : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4A7C3A] to-[#8FC15D] text-white shadow-sm">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#1F2E20]">
                    {todaysSubmissions.length}
                  </p>
                  <p className="text-sm text-[#2B2B28]/55">Received today</p>
                </div>
              </Link>

              <Link
                href="/admin?filter=unique"
                className={`${cardBase} ${
                  filter === "unique" ? activeRing : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3F5D44] to-[#2F5C2B] text-white shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#1F2E20]">
                    {uniqueSenders.length}
                  </p>
                  <p className="text-sm text-[#2B2B28]/55">Unique senders</p>
                </div>
              </Link>
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
              Couldn&apos;t load submissions: {error.message}
            </div>
          )}

          {!error && visible.length === 0 && (
            <div className="rounded-2xl border border-dashed border-[#4A7C3A]/30 bg-white px-6 py-16 text-center shadow-[0_4px_16px_-4px_rgba(47,92,43,0.08)]">
              <p className="text-[#2B2B28]/60">
                {all.length === 0
                  ? "No submissions yet — they'll show up here as people fill in the contact form."
                  : "Nothing matches this filter yet."}
              </p>
            </div>
          )}

          {!error && visible.length > 0 && (
            <>
              <div className="mb-3 flex items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2F5C2B]/60">
                  {heading}
                </p>
                {filter && (
                  <Link
                    href="/admin"
                    className="flex items-center gap-1 rounded-full bg-[#EAF1E6] px-2.5 py-1 text-xs font-medium text-[#2F5C2B] transition hover:bg-[#dbe9d3]"
                  >
                    <X size={12} />
                    Clear filter
                  </Link>
                )}
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#4A7C3A]/10 bg-white shadow-[0_4px_16px_-4px_rgba(47,92,43,0.12)]">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-[#EAF1E6] text-[#2F5C2B]">
                    <tr>
                      <th className="px-5 py-3.5 font-medium">Name</th>
                      <th className="px-5 py-3.5 font-medium">Email</th>
                      <th className="px-5 py-3.5 font-medium">Subject</th>
                      <th className="px-5 py-3.5 font-medium">Message</th>
                      <th className="px-5 py-3.5 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visible.map((s, i) => (
                      <tr
                        key={s.id}
                        className={`align-top transition-colors hover:bg-[#F8FAF7] ${
                          i !== visible.length - 1
                            ? "border-b border-[#4A7C3A]/10"
                            : ""
                        }`}
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2F5C2B] to-[#4A7C3A] text-xs font-semibold text-white">
                              {s.name?.charAt(0)?.toUpperCase() || "?"}
                            </div>
                            <span className="font-medium text-[#2B2B28]">
                              {s.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <a
                            href={`mailto:${s.email}`}
                            className="text-[#2F5C2B] underline decoration-[#4A7C3A]/30 underline-offset-2 hover:decoration-[#4A7C3A]"
                          >
                            {s.email}
                          </a>
                        </td>
                        <td className="px-5 py-4">
                          {s.subject ? (
                            <span className="inline-block rounded-full bg-[#EAF1E6] px-3 py-1 text-xs font-medium text-[#2F5C2B]">
                              {s.subject}
                            </span>
                          ) : (
                            <span className="text-[#2B2B28]/40">—</span>
                          )}
                        </td>
                        <td className="max-w-sm px-5 py-4 text-[#2B2B28]/80">
                          {s.message}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 text-[#2B2B28]/50">
                          {new Date(s.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
