import { salaries } from "@/data/salaries";

import { formatCurrency } from "@/lib/formatCurrency";

import { Container } from "@/components/ui/Container";

import { SectionHeader } from "@/components/ui/SectionHeader";

import { Card } from "@/components/ui/Card";

export default function SalariesPage() {

  return (

    <main className="min-h-screen bg-[#F7F7F7] py-10">

      <Container>

        <SectionHeader
          title="Salary Intelligence"
          description="Explore compensation insights from top tech companies."
        />

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

                {salaries.map((salary) => (

                  <tr
                    key={salary.id}
                    className="border-b border-[#F1F1F1]"
                  >

                    <td className="px-6 py-5 font-medium">
                      {salary.company}
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

                ))}

              </tbody>

            </table>

          </div>

        </Card>

      </Container>

    </main>
  );
}