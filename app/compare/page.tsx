"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { companies } from "@/data/companies";

export default function ComparePage() {

  const [selectedCompanies, setSelectedCompanies] =
    useState(
      companies.filter(
        (company) =>
          company.slug === "google" ||
          company.slug === "meta"
      )
    );

  useEffect(() => {

    const syncCompanies = () => {

      const stored =
        localStorage.getItem(
          "compareCompanies"
        );

      if (!stored) {

        setSelectedCompanies([]);

        return;
      }

      const parsed: string[] =
        JSON.parse(stored);

      const matchedCompanies =
        companies.filter(
          (company) =>
            parsed.includes(company.name)
        );

      if (
        matchedCompanies.length > 0
      ) {

        setSelectedCompanies(
          matchedCompanies
        );
      }
    };

    syncCompanies();

    window.addEventListener(
      "compareUpdated",
      syncCompanies
    );

    return () => {

      window.removeEventListener(
        "compareUpdated",
        syncCompanies
      );
    };

  }, []);

  const removeCompany = (
    companyName: string
  ) => {

    const updated =
      selectedCompanies.filter(
        (company) =>
          company.name !== companyName
      );

    setSelectedCompanies(updated);

    localStorage.setItem(
      "compareCompanies",
      JSON.stringify(
        updated.map(
          (company) =>
            company.name
        )
      )
    );

    window.dispatchEvent(
      new Event("compareUpdated")
    );
  };

  const comparisonFields = [
    {
      label: "Industry",
      key: "industry",
    },

    {
      label: "Rating",
      key: "rating",
    },

    {
      label: "Employees",
      key: "employees",
    },

    {
      label: "Founded",
      key: "founded",
    },

    {
      label: "Headquarters",
      key: "headquarters",
    },

    {
      label: "Work Policy",
      key: "workPolicy",
    },

    {
      label: "Salary Range",
      key: "salaryRange",
    },
  ];

  return (

    <main className="bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">

          <div className="max-w-3xl">

            <div className="inline-flex rounded-xl bg-[#FFF1F6] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#FF4D8D]">

              COMPANY COMPARISON

            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">

              Compare workplace opportunities.

            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B7280] md:text-lg">

              Analyze salaries,
              engineering culture,
              work-life balance,
              and workplace insights across top companies.

            </p>

          </div>

        </div>

      </section>

      {/* EMPTY STATE */}

      {selectedCompanies.length === 0 && (

        <section className="mx-auto mt-14 max-w-4xl px-4 md:px-6">

          <div className="rounded-3xl border border-[#F1F1F1] bg-white px-8 py-14 text-center shadow-sm">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF1F6] text-3xl">

              ⚖️

            </div>

            <h2 className="mt-6 text-3xl font-bold">

              No companies selected

            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6B7280]">

              Add companies from the homepage,
              salaries page,
              or company pages to start comparing workplace insights and compensation.

            </p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-2xl bg-[#FF4D8D] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
            >

              Explore Companies →

            </Link>

          </div>

        </section>
      )}

      {/* COMPARE CONTENT */}

      {selectedCompanies.length > 0 && (

        <>

          {/* COMPANY CARDS */}

          <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

            <div className="grid gap-4 md:grid-cols-2">

              {selectedCompanies.map(
                (company, index) => {

                  const pastel = [
                    "bg-[#FFF8FB]",
                    "bg-[#F8FAFF]",
                  ];

                  return (

                    <div
                      key={company.slug}
                      className={`rounded-3xl border border-[#F1F1F1] ${
                        pastel[
                          index %
                            pastel.length
                        ]
                      } p-6 shadow-sm`}
                    >

                      {/* TOP */}

                      <div className="flex items-start justify-between gap-4">

                        <div className="flex items-center gap-4">

                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-bold shadow-sm">

                            {company.name.charAt(
                              0
                            )}

                          </div>

                          <div>

                            <h2 className="text-2xl font-bold">

                              {company.name}

                            </h2>

                            <p className="mt-1 text-sm text-[#6B7280]">

                              {
                                company.industry
                              }

                            </p>

                          </div>

                        </div>

                        <button
                          onClick={() =>
                            removeCompany(
                              company.name
                            )
                          }
                          className="rounded-xl border border-[#ECECEC] bg-white px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-[#FAFAFB]"
                        >

                          Remove

                        </button>

                      </div>

                      {/* DESCRIPTION */}

                      <p className="mt-6 text-sm leading-7 text-[#6B7280]">

                        {
                          company.description
                        }

                      </p>

                      {/* TAGS */}

                      <div className="mt-6 flex flex-wrap gap-2">

                        {company.tags.map(
                          (tag) => (

                            <div
                              key={tag}
                              className="rounded-xl bg-white px-3 py-1 text-xs font-medium shadow-sm"
                            >

                              {tag}

                            </div>
                          )
                        )}

                      </div>

                      {/* META */}

                      <div className="mt-6 grid grid-cols-2 gap-4">

                        <div className="rounded-2xl bg-white p-4 shadow-sm">

                          <p className="text-xs text-[#6B7280]">

                            Rating

                          </p>

                          <h3 className="mt-2 text-xl font-bold">

                            ⭐ {
                              company.rating
                            }

                          </h3>

                        </div>

                        <div className="rounded-2xl bg-white p-4 shadow-sm">

                          <p className="text-xs text-[#6B7280]">

                            Salary Range

                          </p>

                          <h3 className="mt-2 text-lg font-bold text-[#16A34A]">

                            {
                              company.salaryRange
                            }

                          </h3>

                        </div>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </section>

          {/* COMPARISON TABLE */}

          <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

            <div className="overflow-hidden rounded-3xl border border-[#F1F1F1] bg-white shadow-sm">

              <div className="border-b border-[#F3F4F6] px-6 py-6">

                <p className="text-sm font-medium text-[#FF4D8D]">

                  Comparison Insights

                </p>

                <h2 className="mt-2 text-3xl font-bold">

                  Side-by-side comparison

                </h2>

              </div>

              <div className="overflow-x-auto">

                <table className="min-w-full">

                  <thead className="bg-[#FAFAFB]">

                    <tr className="border-b border-[#F3F4F6] text-left text-sm text-[#6B7280]">

                      <th className="px-6 py-4 font-medium">

                        Metric

                      </th>

                      {selectedCompanies.map(
                        (company) => (

                          <th
                            key={
                              company.slug
                            }
                            className="px-6 py-4 font-medium"
                          >

                            {
                              company.name
                            }

                          </th>
                        )
                      )}

                    </tr>

                  </thead>

                  <tbody>

                    {comparisonFields.map(
                      (field, index) => (

                        <tr
                          key={field.label}
                          className={`border-b border-[#F8F8F8] ${
                            index % 2 === 0
                              ? "bg-white"
                              : "bg-[#FCFCFD]"
                          }`}
                        >

                          <td className="px-6 py-5 font-medium text-[#111827]">

                            {field.label}

                          </td>

                          {selectedCompanies.map(
                            (
                              company
                            ) => (

                              <td
                                key={`${company.slug}-${field.key}`}
                                className="px-6 py-5 text-[#374151]"
                              >

                                {
                                  company[
                                    field.key as keyof typeof company
                                  ] as string
                                }

                              </td>
                            )
                          )}

                        </tr>
                      )
                    )}

                  </tbody>

                </table>

              </div>

            </div>

          </section>

          {/* CTA */}

          <section className="mx-auto mt-14 max-w-7xl px-4 md:px-6">

            <div className="rounded-3xl bg-gradient-to-r from-[#FF4D8D] to-[#FF7DB2] px-8 py-10 text-white">

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h2 className="text-3xl font-bold">

                    Explore more workplace insights.

                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">

                    Discover salaries,
                    employee reviews,
                    engineering culture,
                    and career opportunities across leading companies.

                  </p>

                </div>

                <Link
                  href="/salaries"
                  className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-medium text-[#FF4D8D] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >

                  Explore Salaries →

                </Link>

              </div>

            </div>

          </section>

        </>
      )}

    </main>
  );
}