"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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

  const closeMenus = () => {
    setMobileMenu(false);
    setOpenDropdown(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-5 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="OBLEC"
            width={100}
            height={100}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="group flex items-center gap-1 text-[16px] font-medium text-gray-700 hover:text-[#4A7C3A]"
            >
              <span className="relative">
                Areas Under Threat
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4A7C3A] transition-all duration-300 group-hover:w-full" />
              </span>

              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown && (
              <div className="absolute left-0 top-14 w-64 rounded-md border bg-white shadow-xl overflow-hidden">

                <Link
                  href="/hodds-farm"
                  onClick={closeMenus}
                  className="block px-5 py-3 hover:bg-green-50 hover:text-[#4A7C3A]"
                >
                  Hodds Farm
                </Link>

                <Link
                  href="/lodge-farm"
                  onClick={closeMenus}
                  className="block px-5 py-3 hover:bg-green-50 hover:text-[#4A7C3A]"
                >
                  Lodge Farm
                </Link>

                <Link
                  href="/east-of-basingstoke"
                  onClick={closeMenus}
                  className="block px-5 py-3 hover:bg-green-50 hover:text-[#4A7C3A]"
                >
                  East of Basingstoke
                </Link>

                <Link
                  href="/river-loddon"
                  onClick={closeMenus}
                  className="block px-5 py-3 hover:bg-green-50 hover:text-[#4A7C3A]"
                >
                  River Loddon
                </Link>

              </div>
            )}
          </div>

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
            href="/events"
            className="group relative text-[16px] font-medium text-gray-700 hover:text-[#4A7C3A]"
          >
            Events
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4A7C3A] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/get-in-touch"
            className="rounded-full bg-[#4A7C3A] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#2F5C2B] transition"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden border-t bg-white shadow-lg">
          <div className="flex flex-col">

            <details className="border-b">
              <summary className="cursor-pointer px-5 py-4 font-medium">
                Areas Under Threat
              </summary>

              <div className="flex flex-col bg-gray-50">

                <Link
                  href="/hodds-farm"
                  onClick={closeMenus}
                  className="px-8 py-3"
                >
                  Hodds Farm
                </Link>

                <Link
                  href="/lodge-farm"
                  onClick={closeMenus}
                  className="px-8 py-3"
                >
                  Lodge Farm
                </Link>

                <Link
                  href="/east-of-basingstoke"
                  onClick={closeMenus}
                  className="px-8 py-3"
                >
                  East of Basingstoke
                </Link>

                <Link
                  href="/river-loddon"
                  onClick={closeMenus}
                  className="px-8 py-3"
                >
                  River Loddon
                </Link>

              </div>
            </details>

            <Link
              href="/our-campaign-partners"
              onClick={closeMenus}
              className="border-b px-5 py-4"
            >
              Our Campaign Partners
            </Link>

            <Link
              href="/news"
              onClick={closeMenus}
              className="border-b px-5 py-4"
            >
              News
            </Link>

            <Link
              href="/how-you-can-help"
              onClick={closeMenus}
              className="border-b px-5 py-4"
            >
              How You Can Help
            </Link>

            <Link
              href="/the-facts"
              onClick={closeMenus}
              className="border-b px-5 py-4"
            >
              The Facts
            </Link>

            <Link
              href="/events"
              onClick={closeMenus}
              className="border-b px-5 py-4"
            >
              Events
            </Link>

            <div className="p-5">
              <Link
                href="/get-in-touch"
                onClick={closeMenus}
                className="block rounded-full bg-[#4A7C3A] py-3 text-center font-semibold text-white hover:bg-[#2F5C2B]"
              >
                Get In Touch
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}