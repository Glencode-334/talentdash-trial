import Link from "next/link";

import { companies } from "@/data/companies";
import { CompareButton } from "@/components/features/CompareButton";

const salaryRows = [
  {
    role: "Software Engineer",
    company: "Google",
    location: "Bangalore",
    experience: "2-4 yrs",
    compensation: "₹32L",
  },

  {
    role: "Senior Software Engineer",
    company: "Meta",
    location: "Remote",
    experience: "5-7 yrs",
    compensation: "₹48L",
  },

  {
    role: "Frontend Engineer",
    company: "Amazon",
    location: "Hyderabad",
    experience: "3-5 yrs",
    compensation: "₹28L",
  },

  {
    role: "Backend Engineer",
    company: "Microsoft",
    location: "Bangalore",
    experience: "4-6 yrs",
    compensation: "₹36L",
  },

  {
    role: "Staff Engineer",
    company: "Netflix",
    location: "Remote",
    experience: "8+ yrs",
    compensation: "₹82L",
  },

  {
    role: "Full Stack Engineer",
    company: "Flipkart",
    location: "Bangalore",
    experience: "3-5 yrs",
    compensation: "₹26L",
  },
];

export default function SalariesPage() {

  return (

    <main className="bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">

          <div className="max-w-3xl">

            <div className="inline-flex rounded-xl bg-[#FFF1F6] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#FF4D8D]">

              SALARY INTELLIGENCE

            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">

              Explore engineering salaries.

            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B7280] md:text-lg">

              Discover compensation trends,
              salary benchmarks,
              top-paying companies,
              and engineering opportunities across the industry.

            </p>

          </div>

          {/* SEARCH */}

          <div className="mt-10 max-w-4xl">

            <div className="flex items-center rounded-2xl border border-[#ECECEC] bg-white px-5 py-4 shadow-sm">

              <input
                type="text"
                placeholder="Search companies, roles, locations..."
                className="w-full bg-transparent text-sm outline-none"
              />

            </div>

          </div>

        </div>

      </section>

      {/* INSIGHTS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              label: "Highest Paying Role",
              value: "Staff Engineer",
              desc: "Avg ₹82L compensation",
              color: "text-[#16A34A]",
            },

            {
              label: "Top Paying Company",
              value: "Netflix",
              desc: "Premium compensation culture",
              color: "text-[#FF4D8D]",
            },

            {
              label: "Most Active Hiring",
              value: "Amazon",
              desc: "Multiple open engineering roles",
              color: "text-[#7C3AED]",
            },

            {
              label: "Remote Opportunities",
              value: "High",
              desc: "Flexible workplace options",
              color: "text-[#6B7280]",
            },
          ].map((card) => (

            <div
              key={card.label}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-5 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >

              <p className="text-sm text-[#6B7280]">

                {card.label}

              </p>

              <h2 className="mt-3 text-2xl font-bold">

                {card.value}

              </h2>

              <p className={`mt-2 text-sm ${card.color}`}>

                {card.desc}

              </p>

            </div>
          ))}

        </div>

      </section>

      {/* FILTERS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="rounded-3xl border border-[#F1F1F1] bg-white p-6 shadow-sm">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Role",
              "Experience",
              "Location",
              "Company",
            ].map((filter) => (

              <select
                key={filter}
                aria-label={filter}
                className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition focus:border-[#FF4D8D]"
              >

                <option>

                  Select {filter}

                </option>

              </select>
            ))}

          </div>

        </div>

      </section>

      {/* POPULAR ROLES */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-[#FF4D8D]">

              Engineering Roles

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              Popular Salary Benchmarks

            </h2>

          </div>

          <button className="rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm">

            Explore all roles →

          </button>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              role: "Frontend Engineer",
              salary: "₹28L",
            },

            {
              role: "Backend Engineer",
              salary: "₹36L",
            },

            {
              role: "Full Stack Engineer",
              salary: "₹34L",
            },

            {
              role: "Staff Engineer",
              salary: "₹82L",
            },
          ].map((role, index) => {

            const gradients = [
              "from-[#EEF5FF] to-[#F8FBFF]",
              "from-[#FFF6DF] to-[#FFF9EF]",
              "from-[#FFF1F3] to-[#FFF7F8]",
              "from-[#EEF3FF] to-[#F7F9FF]",
            ];

            return (

              <div
                key={role.role}
                className={`rounded-2xl border border-[#F1F1F1] bg-gradient-to-br ${
                  gradients[index % gradients.length]
                } px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
              >

                <p className="text-sm text-[#6B7280]">

                  {role.role}

                </p>

                <h3 className="mt-4 text-3xl font-bold">

                  {role.salary}

                </h3>

                <p className="mt-3 text-sm text-[#16A34A]">

                  Avg Total Compensation

                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* TABLE */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="overflow-hidden rounded-3xl border border-[#F1F1F1] bg-white shadow-sm">

          <div className="flex flex-col gap-4 border-b border-[#F3F4F6] px-6 py-6 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-medium text-[#FF4D8D]">

                Compensation Data

              </p>

              <h2 className="mt-2 text-3xl font-bold">

                Salary Insights

              </h2>

            </div>

            <button className="rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm">

              Export Report

            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-[#FAFAFB]">

                <tr className="border-b border-[#F3F4F6] text-left text-sm text-[#6B7280]">

                  <th className="px-6 py-4 font-medium">

                    Role

                  </th>

                  <th className="px-6 py-4 font-medium">

                    Company

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

                {salaryRows.map((row, index) => {

                  const company =
                    companies.find(
                      (item) =>
                        item.name === row.company
                    );

                  return (

                    <tr
                      key={`${row.role}-${row.company}`}
                      className={`border-b border-[#F8F8F8] transition hover:bg-[#FFF8FB] ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-[#FCFCFD]"
                      }`}
                    >

                      <td className="px-6 py-5 font-medium">

                        {row.role}

                      </td>

                      <td className="px-6 py-5">

                        {company ? (

                          <Link
                            href={`/companies/${company.slug}`}
                            className="font-medium text-[#111827] transition hover:text-[#FF4D8D]"
                          >

                            {row.company}

                          </Link>

                        ) : (

                          row.company
                        )}

                      </td>

                      <td className="px-6 py-5">

                        {row.location}

                      </td>

                      <td className="px-6 py-5">

                        {row.experience}

                      </td>

                      <td className="px-6 py-5 font-semibold text-[#16A34A]">

                        {row.compensation}

                      </td>

                      <td className="px-6 py-5">

                        <CompareButton
                          company={row.company}
                        />

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* TOP COMPANIES */}

      <section
        id="companies"
        className="mx-auto mt-10 max-w-7xl px-4 md:px-6"
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-[#FF4D8D]">

              Company Insights

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              Top Paying Companies

            </h2>

          </div>

          <Link
            href="/compare"
            className="rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm"
          >

            Compare companies →

          </Link>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {companies.slice(0, 8).map((company, index) => {

            const pastel = [
              "bg-[#FFF8FB]",
              "bg-[#F8FAFF]",
              "bg-[#F7FFF9]",
              "bg-[#FFFDF5]",
            ];

            return (

              <Link
                key={company.slug}
                href={`/companies/${company.slug}`}
                className={`rounded-2xl border border-[#F1F1F1] ${
                  pastel[index % pastel.length]
                } px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold shadow-sm">

                    {company.name.charAt(0)}

                  </div>

                  <CompareButton
                    company={company.name}
                  />

                </div>

                <h3 className="mt-5 text-lg font-semibold">

                  {company.name}

                </h3>

                <p className="mt-2 text-sm text-[#6B7280]">

                  {company.industry}

                </p>

                <div className="mt-5 flex items-center justify-between text-sm">

                  <span>

                    ⭐ {company.rating}

                  </span>

                  <span className="text-[#16A34A]">

                    Top Paying

                  </span>

                </div>

              </Link>
            );
          })}

        </div>

      </section>

      {/* CTA */}

      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-6">

        <div className="rounded-3xl bg-gradient-to-r from-[#FF4D8D] to-[#FF7DB2] px-8 py-10 text-white">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h2 className="text-3xl font-bold">

                Compare salary intelligence.

              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">

                Compare companies,
                compensation,
                engineering culture,
                and growth opportunities across the industry.

              </p>

            </div>

            <Link
              href="/compare"
              className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-medium text-[#FF4D8D] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >

              Compare Companies →

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}