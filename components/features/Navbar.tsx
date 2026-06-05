"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container";

export function Navbar() {

  const pathname = usePathname();

  const links = [
    {
      href: "/",
      label: "Home",
    },

    {
      href: "/salaries",
      label: "Salaries",
    },

    {
      href: "/compare",
      label: "Compare",
    },
  ];

  return (

    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/90 backdrop-blur">

      <Container>

        <div className="flex h-16 items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >

            TalentDash

          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium">

            {links.map((link) => {

              const isActive =
                pathname === link.href;

              return (

                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${
                    isActive

                      ? "text-black"

                      : "text-[#6B7280] hover:text-black"
                  }`}
                >

                  {link.label}

                </Link>

              );
            })}

          </nav>

        </div>

      </Container>

    </header>
  );
}