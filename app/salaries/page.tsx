import Link from "next/link";
import { CompanyGrid } from "@/components/features/CompanyGrid";
import { salaries } from "@/data/salaries";
import { StatsGrid } from "@/components/features/StatsGrid";
import { CompareButton } from "@/components/features/CompareButton";
import { formatCurrency } from "@/lib/formatCurrency";

import { Container } from "@/components/ui/Container";

import { SectionHeader } from "@/components/ui/SectionHeader";

import { Card } from "@/components/ui/Card";
import { FilterBar } from "@/components/features/FilterBar";

type SalariesPageProps = {
  searchParams: Promise<{
    role?: string;
    location?: string;
    sort?: string;
    companies?: string;
  }>;
};

export default async function SalariesPage({
  searchParams,
}: SalariesPageProps) {

  const params = await searchParams;

  const selectedCompanies =
  params.companies
    ?.split(",")
    .filter(Boolean) ?? [];

  const filteredSalaries = salaries
  .filter((salary) => {
    const roleMatch =
      !params.role ||
      salary.role === params.role;
    const locationMatch =
      !params.location ||
      salary.location ===
        params.location;
    return (
      roleMatch &&
      locationMatch
    );

  })
  .sort((a, b) => {

    if (
      params.sort ===
      "High to Low"
    ) {

      return (
        b.totalCompensation -
        a.totalCompensation
      );

    }

    if (
      params.sort ===
      "Low to High"
    ) {

      return (
        a.totalCompensation -
        b.totalCompensation
      );

    }

    return 0;

  });

  const uniqueCompanies =
  new Set(
    filteredSalaries.map(
      (salary) => salary.company
    )
  );

const averageCompensation =
  filteredSalaries.length > 0

    ? Math.round(

        filteredSalaries.reduce(
          (acc, salary) =>

            acc +
            salary.totalCompensation,

          0
        ) /

        filteredSalaries.length
      )

    : 0;

const locationCounts =
  filteredSalaries.reduce(

    (acc, salary) => {

      acc[salary.location] =
        (acc[salary.location] || 0) + 1;

      return acc;
    },

    {} as Record<string, number>
  );

const topLocation =
  Object.entries(locationCounts)
    .sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] ?? "N/A";
    
 return (

  <main className="bg-[#FCFCFD] pb-20">

    {/* HERO */}

    <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-[#FFFFFF] to-[#F8FAFF]">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="max-w-3xl">

          <div className="inline-flex rounded-xl bg-[#FFF1F6] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#FF4D8D]">

            SALARY INTELLIGENCE

          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">

            Explore salaries across top companies.

          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">

            Discover compensation trends,
            compare salaries,
            and explore engineering pay insights from leading companies.

          </p>

        </div>

        {/* FILTER BAR */}

        <div className="mt-10 rounded-2xl border border-[#F1F1F1] bg-white p-5 shadow-sm">

          <FilterBar />

        </div>

      </div>

    </section>

    {/* INSIGHT CARDS */}

    <section className="mx-auto mt-10 max-w-7xl px-6">

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-[#F1F1F1] bg-white p-5 shadow-sm">

          <p className="text-sm text-[#6B7280]">

            Highest Paying Role

          </p>

          <h2 className="mt-3 text-2xl font-bold">

            Staff Engineer

          </h2>

          <p className="mt-2 text-sm text-[#16A34A]">

            ₹85L+ average compensation

          </p>

        </div>

        <div className="rounded-2xl border border-[#F1F1F1] bg-white p-5 shadow-sm">

          <p className="text-sm text-[#6B7280]">

            Most Popular Location

          </p>

          <h2 className="mt-3 text-2xl font-bold">

            Bangalore

          </h2>

          <p className="mt-2 text-sm text-[#FF4D8D]">

            2,400+ salary records

          </p>

        </div>

        <div className="rounded-2xl border border-[#F1F1F1] bg-white p-5 shadow-sm">

          <p className="text-sm text-[#6B7280]">

            Top Paying Company

          </p>

          <h2 className="mt-3 text-2xl font-bold">

            Netflix

          </h2>

          <p className="mt-2 text-sm text-[#7C3AED]">

            Premium compensation band

          </p>

        </div>

        <div className="rounded-2xl border border-[#F1F1F1] bg-white p-5 shadow-sm">

          <p className="text-sm text-[#6B7280]">

            Salary Records

          </p>

          <h2 className="mt-3 text-2xl font-bold">

            {filteredSalaries.length}

          </h2>

          <p className="mt-2 text-sm text-[#6B7280]">

            Compensation insights available

          </p>

        </div>

      </div>

    </section>

    {/* POPULAR ROLES */}

    <section className="mx-auto mt-10 max-w-7xl px-6">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Popular Roles

        </h2>

        <button className="text-sm font-medium text-[#FF4D8D]">

          Explore all →
        </button>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        {[
          "Software Engineer",
          "Frontend Engineer",
          "Backend Engineer",
          "Product Manager",
          "Data Scientist",
          "ML Engineer",
          "DevOps Engineer",
          "Mobile Engineer",
        ].map((role, index) => {

          const gradients = [
            "from-[#EEF5FF] to-[#F8FBFF]",
            "from-[#FFF6DF] to-[#FFF9EF]",
            "from-[#FFF1F3] to-[#FFF7F8]",
            "from-[#EEF3FF] to-[#F7F9FF]",
          ];

          return (

            <div
              key={role}
              className={`rounded-2xl border border-[#F1F1F1] bg-gradient-to-br ${
                gradients[index % gradients.length]
              } px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold">

                    {role}

                  </h3>

                  <p className="mt-2 text-sm text-[#6B7280]">

                    Salary insights

                  </p>

                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">

                  →

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>

    {/* SALARY TABLE */}

    <section className="mx-auto mt-10 max-w-7xl px-6">

      <div className="rounded-2xl border border-[#F1F1F1] bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-[#F3F4F6] px-6 py-5">

          <div>

            <h2 className="text-xl font-bold">

              Salary Intelligence Table

            </h2>

            <p className="mt-1 text-sm text-[#6B7280]">

              Explore compensation records from top companies.

            </p>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="border-b border-[#F3F4F6] bg-[#FAFAFB]">

              <tr className="text-left text-sm text-[#6B7280]">

                <th className="px-6 py-4 font-medium">

                  Company

                </th>

                <th className="px-6 py-4 font-medium">

                  Role

                </th>

                <th className="px-6 py-4 font-medium">

                  Location

                </th>

                <th className="px-6 py-4 font-medium">

                  Experience

                </th>

                <th className="px-6 py-4 font-medium">

                  Compensation

                </th>

                <th className="px-6 py-4 font-medium">

                  Compare

                </th>

              </tr>

            </thead>

            <tbody>

              {filteredSalaries.map((salary) => (

                <tr
                  key={salary.id}
                  className="border-b border-[#F8F8F8] transition hover:bg-[#FAFAFB]"
                >

                  <td className="px-6 py-5 font-medium">

                    {salary.company}

                  </td>

                  <td className="px-6 py-5 text-[#6B7280]">

                    {salary.role}

                  </td>

                  <td className="px-6 py-5 text-[#6B7280]">

                    {salary.location}

                  </td>

                  <td className="px-6 py-5 text-[#6B7280]">

                    {salary.experience} yrs

                  </td>

                  <td className="px-6 py-5 font-semibold text-[#111827]">

                    {formatCurrency(
                      salary.totalCompensation,
                      salary.currency
                    )}

                  </td>

                  <td className="px-6 py-5">

                    <CompareButton
                      companySlug={salary.company}
                    />

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>

  </main>
);
}