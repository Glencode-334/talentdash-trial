"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const links = [
  {
    label: "Explore",
    href: "/",
  },

  {
    label: "Compare",
    href: "/compare",
  },

  {
    label: "Salaries",
    href: "/salaries",
  },

  {
    label: "Reviews",
    href: "#",
  },

  {
    label: "Companies",
    href: "/",
  },
];

export function Navbar() {

  const pathname = usePathname();

  return (

    <header className="sticky top-0 z-50 border-b border-[#F1F1F1] bg-white/90 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* LEFT */}

        <div className="flex items-center gap-12">

          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#FF4D8D] to-[#FF7DB2]" />

            <span className="text-lg font-semibold tracking-tight">

              TalentDash

            </span>

          </Link>

          <nav className="hidden items-center gap-8 md:flex">

            {links.map((link) => {

              const active =
                pathname === link.href;

              return (

                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm transition ${
                    active

                      ? "font-medium text-[#FF4D8D]"

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

        <div className="flex items-center gap-4">

          <div className="hidden items-center rounded-2xl border border-[#F1F1F1] bg-[#FAFAFB] px-4 py-2 md:flex">

            <input
              type="text"
              placeholder="Search companies, roles, locations..."
              className="w-64 bg-transparent text-sm outline-none"
            />

          </div>

          <button className="rounded-2xl border border-[#ECECEC] px-5 py-2 text-sm font-medium transition hover:bg-[#FAFAFB]">

            Sign in

          </button>

        </div>

      </div>

    </header>
  );
}