"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Overview",
    href: "/",
    icon: "🏠",
  },

  {
    label: "Salaries",
    href: "/salaries",
    icon: "💰",
  },

  {
    label: "Reviews",
    href: "/reviews",
    icon: "⭐",
  },

  {
    label: "Compare",
    href: "/compare",
    icon: "⚖️",
  },

  {
    label: "Companies",
    href: "/#companies",
    icon: "🏢",
  },
];

export function Sidebar() {

  const pathname =
    usePathname();

  return (

    <aside className="sticky top-20 hidden h-fit w-64 shrink-0 xl:block">

      <div className="rounded-3xl border border-[#F1F1F1] bg-white p-5 shadow-sm">

        {/* TITLE */}

        <div>

          <p className="text-xs font-semibold uppercase tracking-wide text-[#FF4D8D]">

            Navigation

          </p>

          <h2 className="mt-2 text-xl font-bold">

            TalentDash

          </h2>

        </div>

        {/* LINKS */}

        <nav className="mt-6 flex flex-col gap-2">

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
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  active

                    ? "bg-[#FFF1F6] text-[#FF4D8D]"

                    : "text-[#374151] hover:bg-[#FAFAFB]"
                }`}
              >

                <span className="text-base transition-transform duration-200 group-hover:scale-110">

                  {link.icon}

                </span>

                <span>

                  {link.label}

                </span>

              </Link>
            );
          })}

        </nav>

        {/* INSIGHT CARD */}

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#FF4D8D] to-[#FF7DB2] p-5 text-white">

          <p className="text-xs font-semibold uppercase tracking-wide text-white/80">

            Career Insights

          </p>

          <h3 className="mt-3 text-lg font-bold leading-snug">

            Compare top engineering companies.

          </h3>

          <p className="mt-3 text-sm leading-6 text-white/90">

            Explore salary benchmarks,
            workplace culture,
            and employee experiences.

          </p>

          <Link
            href="/compare"
            className="mt-5 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#FF4D8D] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >

            Compare Now →

          </Link>

        </div>

      </div>

    </aside>
  );
}