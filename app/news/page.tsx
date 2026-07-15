"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Tag, MessageCircle } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const posts = [
  {
    title: "OBLEC Bulletin — October 2024",
    date: "October 23, 2024",
    category: "News",
    comments: 0,
    href: "#",
  },
  {
    title: "Letters published by the Basingstoke Gazette on Thursday 7th March 2024",
    date: "March 25, 2024",
    category: "News",
    comments: 0,
    href: "#",
  },
  {
    title: "The Local Plan Update public consultation has started",
    date: "February 29, 2024",
    category: "News",
    comments: 0,
    href: "#",
  },
  {
    title: "Good News",
    date: "February 29, 2024",
    category: "News",
    comments: 0,
    href: "#",
  },
  {
    title:
      "Concerns Regarding Inclusion of Site SP56 'Land East of Basingstoke' in Local Plan",
    date: "February 19, 2024",
    category: "News",
    comments: 0,
    href: "#",
  },
  {
    title: "Drone Tour — Sites East of Basingstoke & Lodge Farm — Evidence",
    date: "September 26, 2023",
    category: "News",
    comments: 0,
    href: "#",
  },
  {
    title: "Basingstoke Gov — Economic Planning Housing — 07/09/2023",
    date: "September 22, 2023",
    category: "News",
    comments: 2,
    href: "#",
  },
  {
    title: "Parish Council Letter to Borough Council — Gary Watts",
    date: "September 7, 2023",
    category: "News",
    comments: 1,
    href: "#",
  },
  {
    title: "Interim Report from the OBLEC Biodiversity Study Group",
    date: "September 6, 2023",
    category: "News",
    comments: 0,
    href: "#",
  },
  {
    title: "OBLEC Biodiversity Study Group — Wildlife Survey",
    date: "September 5, 2023",
    category: "News",
    comments: 0,
    href: "#",
  },
];

export default function NewsPage() {
  const [saveInfo, setSaveInfo] = useState(false);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper">
        {/* News List */}
        <section className="py-16">
          <div className="mx-auto max-w-[900px] px-6">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-[4px] font-mono text-clay">
                Campaign Updates
              </span>
              <h1 className="mt-4 font-display font-medium text-3xl text-moss-dark md:text-4xl">
                Latest News
              </h1>
            </div>

            <div className="divide-y divide-sage/40 rounded-2xl border border-sage/40">
              {posts.map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="group block px-6 py-6 transition hover:bg-chalk sm:px-8"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#8FC15D]" />
                      {post.date}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1.5 rounded-full bg-[#4A7C3A]/10 px-2.5 py-0.5 font-medium text-[#4A7C3A]">
                      <Tag size={12} />
                      {post.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={13} />
                      {post.comments}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display font-medium text-lg leading-snug text-moss-dark transition group-hover:text-[#4A7C3A] md:text-xl">
                    {post.title}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comment Form */}
        <section className="bg-chalk py-16">
          <div className="mx-auto max-w-[900px] px-6">
            <h2 className="font-display font-medium text-2xl text-moss-dark">Leave a Reply</h2>
            <p className="mt-2 text-sm text-gray-500">
              Your email address will not be published. Required fields are
              marked <span className="text-[#4A7C3A]">*</span>
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="comment"
                  className="mb-2 block text-sm font-medium text-moss-dark"
                >
                  Comment <span className="text-[#4A7C3A]">*</span>
                </label>
                <textarea
                  id="comment"
                  rows={6}
                  required
                  className="w-full rounded-xl border border-sage/50 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-moss-dark"
                  >
                    Name<span className="text-[#4A7C3A]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-sage/50 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-moss-dark"
                  >
                    Email<span className="text-[#4A7C3A]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-sage/50 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="mb-2 block text-sm font-medium text-moss-dark"
                  >
                    Website
                  </label>
                  <input
                    id="website"
                    type="url"
                    className="w-full rounded-xl border border-sage/50 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2.5 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  className="h-4 w-4 rounded border-sage/50 text-[#4A7C3A] focus:ring-[#4A7C3A]/30"
                />
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>

              <button
                type="submit"
                className="rounded-full bg-[#4A7C3A] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#2F5C2B]"
              >
                Post Comment
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
