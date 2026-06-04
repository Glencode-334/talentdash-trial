import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function Navbar() {

  return (

    <header className="border-b border-[#EBEBEB] bg-white">

      <Container>

        <div className="flex h-16 items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-bold"
          >

            TalentDash

          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium">

            <Link href="/salaries">

              Salaries

            </Link>

          </nav>

        </div>

      </Container>

    </header>
  );
}