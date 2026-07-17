import Link from "next/link";
import { Inbox, LayoutDashboard } from "lucide-react";
import { createClient } from "../lib/supabase/server";
import LogoutButton from "./LogoutButton";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const { data: submissions, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-[#F0F4EE]">
        {/* Sidebar */}
        <aside className="flex w-64 shrink-0 flex-col border-r border-[#4A7C3A]/15 bg-[#2F5C2B]">
          <div className="px-6 py-6">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
              OBLEC
            </p>
            <p className="font-serif text-xl text-white">Admin panel</p>
          </div>

          <nav className="flex-1 space-y-1 px-3">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-md bg-white/10 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
            >
              <Inbox size={18} />
              Submissions
            </Link>
          </nav>

          <div className="border-t border-white/10 px-3 py-4 text-sm text-white/50">
            <LogoutButton />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 px-8 py-10">
          <h1 className="font-serif text-2xl text-[#2F5C2B] md:text-3xl">
            Contact submissions
          </h1>

          {/* Stat summary */}
          {!error && submissions && (
            <div className="mt-6 mb-8 flex flex-wrap gap-4">
              <div className="rounded-xl border border-[#4A7C3A]/15 bg-white px-6 py-4 shadow-sm">
                <p className="text-2xl font-semibold text-[#2F5C2B]">
                  {submissions.length}
                </p>
                <p className="text-sm text-[#2B2B28]/60">Total submissions</p>
              </div>
              <div className="rounded-xl border border-[#4A7C3A]/15 bg-white px-6 py-4 shadow-sm">
                <p className="text-2xl font-semibold text-[#2F5C2B]">
                  {
                    submissions.filter((s) => {
                      const d = new Date(s.created_at);
                      const now = new Date();
                      return (
                        d.getFullYear() === now.getFullYear() &&
                        d.getMonth() === now.getMonth() &&
                        d.getDate() === now.getDate()
                      );
                    }).length
                  }
                </p>
                <p className="text-sm text-[#2B2B28]/60">Today</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
              Couldn&apos;t load submissions: {error.message}
            </div>
          )}

          {!error && submissions?.length === 0 && (
            <div className="mt-6 rounded-xl border border-dashed border-[#4A7C3A]/30 bg-white px-6 py-16 text-center">
              <p className="text-[#2B2B28]/60">
                No submissions yet — they&apos;ll show up here as people fill
                in the contact form.
              </p>
            </div>
          )}

          {!error && submissions && submissions.length > 0 && (
            <div className="overflow-hidden rounded-xl border border-[#4A7C3A]/15 bg-white shadow-sm">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-[#EAF1E6] text-[#2F5C2B]">
                  <tr>
                    <th className="px-5 py-3 font-medium">Name</th>
                    <th className="px-5 py-3 font-medium">Email</th>
                    <th className="px-5 py-3 font-medium">Subject</th>
                    <th className="px-5 py-3 font-medium">Message</th>
                    <th className="px-5 py-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s, i) => (
                    <tr
                      key={s.id}
                      className={`align-top transition-colors hover:bg-[#F0F4EE] ${
                        i !== submissions.length - 1
                          ? "border-b border-[#4A7C3A]/10"
                          : ""
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-[#2B2B28]">
                        {s.name}
                      </td>
                      <td className="px-5 py-4">
                        <a
                          href={`mailto:${s.email}`}
                          className="text-[#2F5C2B] underline decoration-[#4A7C3A]/30 underline-offset-2 hover:decoration-[#4A7C3A]"
                        >
                          {s.email}
                        </a>
                      </td>
                      <td className="px-5 py-4 text-[#2B2B28]/80">
                        {s.subject || (
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
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
