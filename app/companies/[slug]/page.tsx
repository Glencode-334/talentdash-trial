import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { companies } from "@/data/companies";

import { salaries } from "@/data/salaries";

import { Container } from "@/components/ui/Container";

import { SectionHeader } from "@/components/ui/SectionHeader";

import { Card } from "@/components/ui/Card";

import { formatCurrency } from "@/lib/formatCurrency";

type CompanyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {

  return companies.map((company) => ({
    slug: company.slug,
  }));
}

type MetadataProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {

  const { slug } = await params;

  const company =
    companies.find(
      (company) =>
        company.slug === slug
    );

  if (!company) {

    return {
      title: "Company Not Found",
    };

  }

  return {

    title: `${company.name} Salaries`,

    description:
      `${company.name} salary insights, compensation trends, company information, and workplace intelligence.`,

    openGraph: {

      title:
        `${company.name} Salaries`,

      description:
        `${company.name} salary insights and compensation trends.`,

      type: "website",
    },
  };
}

export default async function CompanyPage({
  params,
}: CompanyPageProps) {

  const { slug } = await params;

  const company =
    companies.find(
      (company) =>
        company.slug === slug
    );

  if (!company) {
    notFound();
  }

  const companySalaries =
    salaries.filter(
      (salary) =>
        salary.companySlug === slug
    );

  const averageCompensation =
    Math.round(

      companySalaries.reduce(
        (acc, salary) =>
          acc +
          salary.totalCompensation,
        0
      ) /

      companySalaries.length
    );

    const structuredData = {

      "@context": "https://schema.org",

      "@type": "Organization",

      name: company.name,

      description: company.description,

      industry: company.industry,

      numberOfEmployees:
        company.employees,

    };

  return (

    <main className="min-h-screen bg-[#F7F7F7] py-10">

      <Container>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              structuredData
            ),
          }}
        />

        <SectionHeader
          title={company.name}
          description={company.description}
        />

        <div className="mb-8 grid gap-6 md:grid-cols-3">

          <Card>

            <div className="p-6">

              <p className="text-sm text-[#6A6A6A]">
                Industry
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {company.industry}
              </h3>

            </div>

          </Card>

          <Card>

            <div className="p-6">

              <p className="text-sm text-[#6A6A6A]">
                Employees
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {company.employees}
              </h3>

            </div>

          </Card>

          <Card>

            <div className="p-6">

              <p className="text-sm text-[#6A6A6A]">
                Avg Compensation
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#16A34A]">

                {formatCurrency(
                  averageCompensation,
                  "INR"
                )}

              </h3>

            </div>

          </Card>

        </div>

        <Card>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="border-b border-[#EBEBEB] bg-[#FAFAFA]">

                <tr>

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

                {companySalaries.map((salary) => (

                  <tr
                    key={salary.id}
                    className="border-b border-[#F1F1F1]"
                  >

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

                ))}

              </tbody>

            </table>

          </div>

        </Card>

      </Container>

    </main>
  );
}