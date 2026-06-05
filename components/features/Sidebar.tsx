"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const links = [
  {
    label: "Explore",
    href: "/",
    icon: "🏠",
  },

  {
    label: "Companies",
    href: "/",
    icon: "🏢",
  },

  {
    label: "Salaries",
    href: "/salaries",
    icon: "💰",
  },

  {
    label: "Reviews",
    href: "#",
    icon: "⭐",
  },

  {
    label: "Interviews",
    href: "#",
    icon: "🎯",
  },

  {
    label: "Community",
    href: "#",
    icon: "💬",
  },

  {
    label: "Tools",
    href: "#",
    icon: "🛠️",
  },

  {
    label: "Workplace Index",
    href: "#",
    icon: "📊",
  },
];

export function Sidebar() {

  const pathname = usePathname();

  return (

    <aside className="hidden w-64 border-r border-[#ECECEC] bg-white xl:flex xl:flex-col">

      <div className="border-b border-[#ECECEC] p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FF4D8D] text-white font-bold">

            T

          </div>

          <div>

            <h2 className="font-semibold">

              TalentDash

            </h2>

            <p className="text-xs text-[#6B7280]">

              Career Intelligence

            </p>

          </div>

        </div>

      </div>

      <nav className="flex-1 space-y-2 p-4">

        {links.map((link) => {

          const active =
            pathname === link.href;

          return (

            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all ${
                active

                  ? "bg-[#FFF1F6] text-[#FF4D8D]"

                  : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
              }`}
            >

              <span>
                {link.icon}
              </span>

              <span>
                {link.label}
              </span>

            </Link>
          );
        })}

      </nav>

      <div className="border-t border-[#ECECEC] p-4">

        <div className="rounded-2xl bg-[#FFF5F8] p-4">

          <p className="text-sm font-medium">

            Upgrade to Pro

          </p>

          <p className="mt-2 text-xs leading-5 text-[#6B7280]">

            Unlock advanced salary intelligence and workplace analytics.

          </p>

          <button className="mt-4 w-full rounded-xl bg-[#FF4D8D] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">

            Go Pro

          </button>

        </div>

      </div>

    </aside>
  );
}