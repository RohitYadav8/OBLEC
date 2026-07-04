"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Areas Under Threat", href: "#", dropdown: true },
  { label: "Our Campaign Partners", href: "#" },
  { label: "News", href: "#" },
  { label: "How You Can Help", href: "#" },
  { label: "The Facts", href: "#" },
  { label: "Get In Touch", href: "#" },
  { label: "Events", href: "#" },
];

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(false);

const dropdownRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, []);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-[88px] max-w-[1400px] items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="OBLEC"
            width={56}
            height={56}
            className="h-14 w-auto"
            priority
          />

          <div className="leading-tight">
            <h2 className="text-2xl font-bold text-[#4A7C3A]">
              OBLEC
            </h2>

            <p className="text-xs text-gray-600">
              Old Basing & Lychpit
            </p>
          </div>
        </Link>

        {/* Navigation */}
       {/* Navigation */}
<nav className="hidden lg:flex items-center gap-8">
  {/* Dropdown */}
  <div className="relative" ref={dropdownRef}>
    <button
      onClick={() => setOpenDropdown(!openDropdown)}
      className="group flex items-center gap-1 text-[16px] font-medium text-gray-700 transition hover:text-[#4A7C3A]"
    >
      <span className="relative">
        Areas Under Threat

        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4A7C3A] transition-all duration-300 group-hover:w-full" />
      </span>

      <ChevronDown
        size={16}
        className={`transition-transform duration-300 ${
          openDropdown ? "rotate-180" : ""
        }`}
      />
    </button>

    {openDropdown && (
      <div className="absolute left-0 top-14 w-60 overflow-hidden rounded-md border border-gray-200 bg-white shadow-xl">

        <Link
          href="#"
          className="block px-5 py-2 text-lg text-gray-800 transition hover:bg-green-50 hover:text-[#4A7C3A]"
        >
          Hodds Farm
        </Link>

        <Link
          href="#"
          className="block px-5 py-3 text-lg text-gray-800 transition hover:bg-green-50 hover:text-[#4A7C3A]"
        >
          Lodge Farm
        </Link>

        <Link
          href="#"
          className="block px-5 py-3 text-lg text-gray-800 transition hover:bg-green-50 hover:text-[#4A7C3A]"
        >
          East of Basingstoke
        </Link>

        <Link
          href="#"
          className="block px-5 py-3 text-lg text-[#4A7C3A] transition hover:bg-green-50"
        >
          River Loddon
        </Link>
      </div>
    )}

  </div>

  {/* Remaining Links */}
  <Link
    href="/our-campaign-partners"
    className="group relative text-[16px] font-medium text-gray-700 hover:text-[#4A7C3A]"
  >
    Our Campaign Partners
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4A7C3A] transition-all duration-300 group-hover:w-full" />
  </Link>

  <Link
    href="/news"
    className="group relative text-[16px] font-medium text-gray-700 hover:text-[#4A7C3A]"
  >
    News
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4A7C3A] transition-all duration-300 group-hover:w-full" />
  </Link>

  <Link
    href="/how-you-can-help"
    className="group relative text-[16px] font-medium text-gray-700 hover:text-[#4A7C3A]"
  >
    How You Can Help
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4A7C3A] transition-all duration-300 group-hover:w-full" />
  </Link>

  <Link
    href="/the-facts"
    className="group relative text-[16px] font-medium text-gray-700 hover:text-[#4A7C3A]"
  >
    The Facts
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4A7C3A] transition-all duration-300 group-hover:w-full" />
  </Link>

  <Link
    href="/get-in-touch"
    className="group relative text-[16px] font-medium text-gray-700 hover:text-[#4A7C3A]"
  >
    Get In Touch
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4A7C3A] transition-all duration-300 group-hover:w-full" />
  </Link>

  <Link
    href="#"
    className="group relative text-[16px] font-medium text-gray-700 hover:text-[#4A7C3A]"
  >
    Events
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4A7C3A] transition-all duration-300 group-hover:w-full" />
  </Link>
</nav>
        {/* CTA */}
        <button className="rounded-full bg-[#4A7C3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2F5C2B]">
          Support Us
        </button>
      </div>
    </header>
  );
}