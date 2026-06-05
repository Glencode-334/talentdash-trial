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

    <main className="min-h-screen bg-[#F7F7F7] py-10">

      <Container>

        <SectionHeader
          title="Salary Intelligence"
          description="Explore compensation insights from top tech companies."
        />

        <StatsGrid
          totalCompanies={
            uniqueCompanies.size
          }
          avgCompensation={formatCurrency(
            averageCompensation,
            "INR"
          )}
          topLocation={topLocation}
        />

        <FilterBar />

        {selectedCompanies.length > 0 && (

          <div className="mb-6 flex items-center justify-between rounded-2xl border border-[#EBEBEB] bg-white p-4">

            <p className="text-sm text-[#6A6A6A]">

              {selectedCompanies.length} companies selected for comparison

            </p>

            <Link
              href={`/compare?companies=${selectedCompanies.join(",")}`}
              className="rounded-xl bg-black px-5 py-3 text-sm text-white transition hover:opacity-90"
            >

              View Compare

            </Link>

          </div>

        )}

        <Card>

          <div className="w-full overflow-x-auto rounded-2xl">

            <table className="w-full min-w-[900px] table-fixed">

              <thead className="border-b border-[#EBEBEB] bg-[#FAFAFA]">

                <tr>

                  <th className="px-5 py-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                    Company
                  </th>

                  <th className="px-5 py-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                    Role
                  </th>

                  <th className="px-5 py-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                    Level
                  </th>

                  <th className="px-5 py-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                    Location
                  </th>

                  <th className="px-5 py-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                    Total Compensation
                  </th>

                  <th className="px-5 py-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                    Compare
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredSalaries.length === 0 ? (

                  <tr>

                    <td
                      colSpan={5}
                      className="px-5 py-16 text-center text-[#6A6A6A]"
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

                      <td className="px-5 py-4 font-medium">

                        <Link
                          href={`/companies/${salary.companySlug}`}
                          className="transition hover:text-[#2563EB]"
                        >

                          {salary.company}

                        </Link>

                      </td>

                      <td className="px-5 py-4">
                        {salary.role}
                      </td>

                      <td className="px-5 py-4">
                        {salary.level}
                      </td>

                      <td className="px-5 py-4">
                        {salary.location}
                      </td>

                      <td className="px-5 py-4 font-semibold text-[#16A34A]">

                        {formatCurrency(
                          salary.totalCompensation,
                          salary.currency
                        )}

                      </td>

                      <td className="px-5 py-4">

                          <CompareButton
                            companySlug={
                              salary.companySlug
                            }
                          />

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