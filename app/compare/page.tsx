import { companies } from "@/data/companies";

import { salaries } from "@/data/salaries";

import { Container } from "@/components/ui/Container";

import { SectionHeader } from "@/components/ui/SectionHeader";

import { Card } from "@/components/ui/Card";

import { formatCurrency } from "@/lib/formatCurrency";

type ComparePageProps = {
  searchParams: Promise<{
    companies?: string;
  }>;
};

export default async function ComparePage({
  searchParams,
}: ComparePageProps) {

  const params = await searchParams;

  const selectedCompanies =
    params.companies
      ?.split(",")
      ?? [];

  const comparedCompanies =
    companies.filter((company) =>
      selectedCompanies.includes(
        company.slug
      )
    );

  return (

    <main className="min-h-screen bg-[#F7F7F7] py-10">

      <Container>

        <SectionHeader
          title="Compare Companies"
          description="Compare salary intelligence and workplace insights across companies."
        />

        {comparedCompanies.length === 0 ? (

          <Card>

            <div className="p-12 text-center">

              <h2 className="text-2xl font-semibold">

                No Companies Selected

              </h2>

              <p className="mt-4 text-[#6A6A6A]">

                Add companies from the salary table to compare compensation insights.

              </p>

            </div>

          </Card>

        ) : (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {comparedCompanies.map(
              (company) => {

                const companySalaries =
                  salaries.filter(
                    (salary) =>
                      salary.companySlug ===
                      company.slug
                  );

                const avgComp =
                  Math.round(

                    companySalaries.reduce(
                      (acc, salary) =>
                        acc +
                        salary.totalCompensation,
                      0
                    ) /

                    companySalaries.length
                  );

                return (

                  <Card
                    key={company.slug}
                  >

                    <div className="p-6">

                      <h2 className="text-2xl font-bold">

                        {company.name}

                      </h2>

                      <p className="mt-2 text-sm text-[#6A6A6A]">

                        {company.industry}

                      </p>

                      <div className="mt-6 space-y-4">

                        <div>

                          <p className="text-sm text-[#6A6A6A]">

                            Avg Compensation

                          </p>

                          <h3 className="mt-1 text-xl font-semibold text-[#16A34A]">

                            {formatCurrency(
                              avgComp,
                              "INR"
                            )}

                          </h3>

                        </div>

                        <div>

                          <p className="text-sm text-[#6A6A6A]">

                            Employees

                          </p>

                          <h3 className="mt-1 text-lg font-medium">

                            {company.employees}

                          </h3>

                        </div>

                        <div>

                          <p className="text-sm text-[#6A6A6A]">

                            Rating

                          </p>

                          <h3 className="mt-1 text-lg font-medium">

                            ⭐ {company.rating}

                          </h3>

                        </div>

                      </div>

                    </div>

                  </Card>

                );
              }
            )}

          </div>

        )}

      </Container>

    </main>
  );
}