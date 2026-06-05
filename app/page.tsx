import Link from "next/link";

import { salaries } from "@/data/salaries";

import { companies } from "@/data/companies";

import { Container } from "@/components/ui/Container";

import { Card } from "@/components/ui/Card";

import { CompanyGrid } from "@/components/features/CompanyGrid";

import { formatCurrency } from "@/lib/formatCurrency";

export default function HomePage() {

  const avgCompensation =
    Math.round(

      salaries.reduce(
        (acc, salary) =>
          acc +
          salary.totalCompensation,
        0
      ) /

      salaries.length
    );

  return (

    <main className="min-h-screen">

      <Container>

        {/* HERO */}

        <section className="py-24">

          <div className="max-w-4xl">

            <div className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#6B7280]">

              Salary Intelligence Platform

            </div>

            <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight tracking-tight text-[#111827]">

              Explore compensation insights from top technology companies.

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 md:text-xl md:leading-9 text-[#6B7280]">

              TalentDash helps engineers explore salary intelligence,
              compare compensation trends,
              and analyze workplace insights across modern technology companies.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/salaries"
                className="rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md"
              >

                Explore Salaries

              </Link>

              <Link
                href="/compare"
                className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-4 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-md"
              >

                Compare Companies

              </Link>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="grid gap-6 md:grid-cols-3">

          <Card>

            <div className="p-8">

              <p className="text-sm text-[#6B7280]">
                Companies
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {companies.length}
              </h2>

            </div>

          </Card>

          <Card>

            <div className="p-8">

              <p className="text-sm text-[#6B7280]">
                Salary Records
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {salaries.length}
              </h2>

            </div>

          </Card>

          <Card>

            <div className="p-8">

              <p className="text-sm text-[#6B7280]">
                Avg Compensation
              </p>

              <h2 className="mt-3 text-4xl font-bold text-[#16A34A]">

                {formatCurrency(
                  avgCompensation,
                  "INR"
                )}

              </h2>

            </div>

          </Card>

        </section>

        {/* FEATURES */}

        <section className="py-24">

          <div className="max-w-3xl">

            <h2 className="text-4xl font-bold tracking-tight">

              Built for modern compensation research.

            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6B7280]">

              TalentDash combines salary intelligence,
              company insights,
              and compare workflows into a modern developer-focused experience.

            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <Card>

              <div className="p-8">

                <h3 className="text-xl font-semibold">

                  Salary Intelligence

                </h3>

                <p className="mt-4 leading-7 text-[#6B7280]">

                  Explore compensation trends across roles,
                  levels,
                  and locations.

                </p>

              </div>

            </Card>

            <Card>

              <div className="p-8">

                <h3 className="text-xl font-semibold">

                  Company Insights

                </h3>

                <p className="mt-4 leading-7 text-[#6B7280]">

                  Analyze company-specific compensation data
                  and workplace metrics.

                </p>

              </div>

            </Card>

            <Card>

              <div className="p-8">

                <h3 className="text-xl font-semibold">

                  Compare Workflows

                </h3>

                <p className="mt-4 leading-7 text-[#6B7280]">

                  Compare multiple companies side-by-side
                  using shareable URL-driven workflows.

                </p>

              </div>

            </Card>

          </div>

        </section>

        {/* TOP COMPANIES */}

        <section className="pb-24">

          <div className="mb-10 flex items-end justify-between">

            <div>

              <h2 className="text-4xl font-bold tracking-tight">

                Top Companies

              </h2>

              <p className="mt-4 text-lg text-[#6B7280]">

                Explore salary intelligence from leading technology companies.

              </p>

            </div>

            <Link
              href="/salaries"
              className="hidden rounded-xl border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#F9FAFB] md:inline-flex"
            >

              View Salaries

            </Link>

          </div>

          <CompanyGrid />

        </section>

      </Container>

    </main>
  );
}