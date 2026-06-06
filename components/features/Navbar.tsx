"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    label: "Explore",
    href: "/",
  },

  {
    label: "Salaries",
    href: "/salaries",
  },

  {
    label: "Reviews",
    href: "/reviews",
  },

  {
    label: "Compare",
    href: "/compare",
  },

  {
    label: "Companies",
    href: "/#companies",
  },
];

export function Navbar() {

  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (

    <header className="sticky top-0 z-50 border-b border-[#F1F1F1] bg-white/90 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* LEFT */}

        <div className="flex items-center gap-10">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-[#FF4D8D] to-[#FF7DB2]" />

            <div className="hidden sm:block">

              <h1 className="text-lg font-bold tracking-tight">

                TalentDash

              </h1>

            </div>

          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-6 lg:flex">

            {links.map((link) => {

              const active =
                pathname === link.href ||
                (
                  link.href === "/#companies" &&
                  pathname === "/"
                );

              return (

                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    active

                      ? "text-[#FF4D8D]"

                      : "text-[#6B7280] hover:text-[#111827]"
                  }`}
                >

                  {link.label}

                </Link>
              );
            })}

          </nav>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          {/* SEARCH */}

          <div className="hidden items-center rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-2 md:flex">

            <input
              type="text"
              placeholder="Search companies..."
              className="w-56 bg-transparent text-sm outline-none"
            />

          </div>

          {/* SIGN IN */}

          <button className="hidden rounded-2xl border border-[#ECECEC] bg-white px-5 py-2 text-sm font-medium transition-all duration-200 hover:bg-[#FAFAFB] hover:shadow-sm sm:block">

            Sign in

          </button>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#ECECEC] bg-white transition-all duration-200 hover:bg-[#FAFAFB] lg:hidden"
          >

            {mobileMenuOpen
              ? "✕"
              : "☰"}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      {mobileMenuOpen && (

        <div className="border-t border-[#F3F4F6] bg-white lg:hidden">

          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 md:px-6">

            {/* MOBILE SEARCH */}

            <div className="mb-3 flex items-center rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-3">

              <input
                type="text"
                placeholder="Search companies..."
                className="w-full bg-transparent text-sm outline-none"
              />

            </div>

            {/* LINKS */}

            {links.map((link) => {

              const active =
                pathname === link.href ||
                (
                  link.href === "/#companies" &&
                  pathname === "/"
                );

              return (

                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    active

                      ? "bg-[#FFF1F6] text-[#FF4D8D]"

                      : "text-[#374151] hover:bg-[#FAFAFB]"
                  }`}
                >

                  {link.label}

                </Link>
              );
            })}

            {/* MOBILE BUTTON */}

            <button className="mt-2 rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:bg-[#FAFAFB]">

              Sign in

            </button>

          </div>

        </div>
      )}

    </header>
  );
}