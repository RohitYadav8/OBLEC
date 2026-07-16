"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function GetInTouchPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // wire this up to your email/API endpoint
    console.log(form);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
         <section className="pt-8 pb-20">
          <div className="mx-auto max-w-[1100px] px-6">
            {/* Contact Us heading with envelope graphic */}
            <div className="mb-12 flex flex-col items-center text-center">
        <div className="relative aspect-[300/199] w-full max-w-[600px]">
                <Image
                  src="/contact-us.png"
                  alt="Contact Us"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl text-[#2F5C2B] md:text-3xl">
                  Contact Info
                </h2>
                <div className="mt-3 h-[2px] w-14 bg-[#4A7C3A]" />

                <p className="mt-8 text-[#2F5C2B]">You can find us on below.</p>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-3 text-[#2F5C2B] transition hover:text-[#4A7C3A]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A7C3A] text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                    </svg>
                  </span>
                  <span className="font-medium">Find us on Facebook</span>
                </Link>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl text-[#2F5C2B] md:text-3xl">
                  Send A Message
                </h2>
                <div className="mt-3 h-[2px] w-14 bg-[#4A7C3A]" />

                <p className="mt-8 text-[#2F5C2B]">
                  Do you have anything in your mind to tell us? Please
                  don&apos;t hesitate to get in touch to us via our contact
                  form.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[#2B2B28]"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#4A7C3A]/40 bg-[#F8FAF7] px-4 py-3 text-sm text-[#2B2B28] outline-none transition focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#2B2B28]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#4A7C3A]/40 bg-[#F8FAF7] px-4 py-3 text-sm text-[#2B2B28] outline-none transition focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-[#2B2B28]"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#4A7C3A]/40 bg-[#F8FAF7] px-4 py-3 text-sm text-[#2B2B28] outline-none transition focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-[#2B2B28]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#4A7C3A]/40 bg-[#F8FAF7] px-4 py-3 text-sm text-[#2B2B28] outline-none transition focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-md bg-[#2F5C2B] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#234420]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
