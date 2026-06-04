import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFoundPage() {

  return (

    <main className="min-h-screen bg-[#F7F7F7] py-20">

      <Container>

        <div className="text-center">

          <h1 className="text-5xl font-bold">

            Company Not Found

          </h1>

          <p className="mt-4 text-[#6A6A6A]">

            The requested company profile does not exist.

          </p>

          <Link
            href="/salaries"
            className="mt-8 inline-block rounded-xl bg-black px-6 py-3 text-white"
          >

            Back to Salaries

          </Link>

        </div>

      </Container>

    </main>
  );
}