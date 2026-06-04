import Link from "next/link";
import { CompanyGrid } from "@/components/features/CompanyGrid";
import { salaries } from "@/data/salaries";

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
  }>;
};

export default async function SalariesPage({
  searchParams,
}: SalariesPageProps) {

  const params = await searchParams;

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
  return (

    <main className="min-h-screen bg-[#F7F7F7] py-10">

      <Container>

        <SectionHeader
          title="Salary Intelligence"
          description="Explore compensation insights from top tech companies."
        />

        <FilterBar />

        <Card>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="border-b border-[#EBEBEB] bg-[#FAFAFA]">

                <tr>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Company
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Role
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Level
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Location
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Total Compensation
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredSalaries.length === 0 ? (

                  <tr>

                    <td
                      colSpan={5}
                      className="px-6 py-16 text-center text-[#6A6A6A]"
                    >

                      No salary records found for the selected filters.

                    </td>

                  </tr>

                ) : (

                  filteredSalaries.map((salary) => (

                    <tr
                      key={salary.id}
                      className="border-b border-[#F1F1F1]"
                    >

                      <td className="px-6 py-5 font-medium">

                        <Link
                          href={`/companies/${salary.companySlug}`}
                          className="transition hover:text-[#2563EB]"
                        >

                          {salary.company}

                        </Link>

                      </td>

                      <td className="px-6 py-5">
                        {salary.role}
                      </td>

                      <td className="px-6 py-5">
                        {salary.level}
                      </td>

                      <td className="px-6 py-5">
                        {salary.location}
                      </td>

                      <td className="px-6 py-5 font-semibold text-[#16A34A]">

                        {formatCurrency(
                          salary.totalCompensation,
                          salary.currency
                        )}

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </Card>

        <div className="mt-14">

          <h2 className="mb-6 text-3xl font-bold">

            Top Companies

          </h2>

          <CompanyGrid />

        </div>

      </Container>

    </main>
  );
}