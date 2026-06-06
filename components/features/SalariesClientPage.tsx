"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { salaries } from "@/data/salaries";

import { formatCurrency } from "@/lib/formatCurrency";

const ITEMS_PER_PAGE = 25;

export function SalariesClientPage() {

  const router = useRouter();

  const pathname =
    usePathname();

  const searchParams =
    useSearchParams();

  /* URL STATE */

  const sortBy =
    searchParams.get("sort") ||
    "highest";

  const selectedCompany =
    searchParams.get("company") ||
    "All Companies";

  const selectedLocation =
    searchParams.get("location") ||
    "All Locations";

  const selectedExperience =
    searchParams.get(
      "experience"
    ) || "All Levels";

  const selectedCurrency =
    searchParams.get(
      "currency"
    ) || "inr";

  const searchQuery =
    searchParams.get("search") ||
    "";

  const currentPage = Number(
    searchParams.get("page") || 1
  );

  /* LOCAL SEARCH */

  const [searchInput, setSearchInput] =
    useState(searchQuery);

  /* UPDATE QUERY */

  const updateQuery = (
    key: string,
    value: string
  ) => {

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (
      value.startsWith("All")
    ) {

      params.delete(key);

    } else {

      params.set(key, value);
    }

    if (key !== "page") {

      params.set("page", "1");
    }

    router.replace(
      `${pathname}?${params.toString()}`,
      {
        scroll: false,
      }
    );
  };

  /* REMOVE FILTER */

  const removeFilter = (
    key: string
  ) => {

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    params.delete(key);

    params.set("page", "1");

    router.replace(
      `${pathname}?${params.toString()}`,
      {
        scroll: false,
      }
    );
  };

  /* CLEAR FILTERS */

  const clearAllFilters = () => {

    router.replace(
      pathname,
      {
        scroll: false,
      }
    );
  };

  /* DEBOUNCED SEARCH */

  useEffect(() => {

    const timeout =
      setTimeout(() => {

        const params =
          new URLSearchParams(
            searchParams.toString()
          );

        if (
          searchInput.trim()
        ) {

          params.set(
            "search",
            searchInput
          );

        } else {

          params.delete(
            "search"
          );
        }

        params.set("page", "1");

        router.replace(
          `${pathname}?${params.toString()}`,
          {
            scroll: false,
          }
        );

      }, 400);

    return () =>
      clearTimeout(timeout);

  }, [
    searchInput,
    pathname,
    router,
    searchParams,
  ]);

  /* SALARY PARSER */

  const salaryValue = (
    salary: string
  ) => {

    return Number(
      salary
        .replace("₹", "")
        .replace("$", "")
        .replace("L", "")
        .replace("K", "")
        .replace("+", "")
    );
  };

  /* FILTER + SORT */

  const filteredAndSortedSalaries =
    useMemo(() => {

      let filtered = [...salaries];

      /* SEARCH */

      if (searchQuery) {

        filtered = filtered.filter(
          (salary) =>

            salary.company
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              ) ||

            salary.role
              .toLowerCase()
              .includes(
                searchQuery.toLowerCase()
              )
        );
      }

      /* FILTERS */

      if (
        selectedCompany !==
        "All Companies"
      ) {

        filtered = filtered.filter(
          (salary) =>
            salary.company ===
            selectedCompany
        );
      }

      if (
        selectedLocation !==
        "All Locations"
      ) {

        filtered = filtered.filter(
          (salary) =>
            salary.location ===
            selectedLocation
        );
      }

      if (
        selectedExperience !==
        "All Levels"
      ) {

        filtered = filtered.filter(
          (salary) =>
            salary.experience ===
            selectedExperience
        );
      }

      /* SORTING */

      switch (sortBy) {

        case "highest":

          filtered.sort(
            (a, b) =>
              salaryValue(
                b.compensation
              ) -
              salaryValue(
                a.compensation
              )
          );

          break;

        case "lowest":

          filtered.sort(
            (a, b) =>
              salaryValue(
                a.compensation
              ) -
              salaryValue(
                b.compensation
              )
          );

          break;

        case "company":

          filtered.sort(
            (a, b) =>
              a.company.localeCompare(
                b.company
              )
          );

          break;

        case "experience":

          filtered.sort(
            (a, b) =>
              a.experience.localeCompare(
                b.experience
              )
          );

          break;
      }

      return filtered;

    }, [
      sortBy,
      selectedCompany,
      selectedLocation,
      selectedExperience,
      searchQuery,
    ]);

  /* PAGINATION */

  const totalPages =
    Math.ceil(
      filteredAndSortedSalaries.length /
        ITEMS_PER_PAGE
    );

  const paginatedSalaries =
    filteredAndSortedSalaries.slice(
      (currentPage - 1) *
        ITEMS_PER_PAGE,
      currentPage *
        ITEMS_PER_PAGE
    );

  const startResult =
    filteredAndSortedSalaries.length ===
    0
      ? 0
      : (currentPage - 1) *
          ITEMS_PER_PAGE +
        1;

  const endResult =
    Math.min(
      currentPage *
        ITEMS_PER_PAGE,
      filteredAndSortedSalaries.length
    );

  /* FILTER OPTIONS */

  const companies = [
    "All Companies",
    ...new Set(
      salaries.map(
        (salary) =>
          salary.company
      )
    ),
  ];

  const locations = [
    "All Locations",
    ...new Set(
      salaries.map(
        (salary) =>
          salary.location
      )
    ),
  ];

  const experiences = [
    "All Levels",
    ...new Set(
      salaries.map(
        (salary) =>
          salary.experience
      )
    ),
  ];

  /* LEVEL COLORS */

  const getLevelColor = (
    level: string
  ) => {

    if (
      level.includes("0-2")
    ) {

      return "bg-slate-100 text-slate-700";
    }

    if (
      level.includes("3-5")
    ) {

      return "bg-blue-100 text-blue-700";
    }

    if (
      level.includes("6-8")
    ) {

      return "bg-indigo-100 text-indigo-700";
    }

    return "bg-purple-100 text-purple-700";
  };

  return (

    <main className="bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">

          <div className="max-w-3xl">

            <div className="inline-flex rounded-xl bg-[#FFF1F6] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#FF4D8D]">

              SALARY INTELLIGENCE

            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">

              Engineering salary insights.

            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B7280] md:text-lg">

              Explore compensation benchmarks,
              stock packages,
              engineering salaries,
              and workplace trends across top companies.

            </p>

          </div>

        </div>

      </section>

      {/* FILTERS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="rounded-3xl border border-[#F1F1F1] bg-white p-6 shadow-sm">

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">

            {/* SEARCH */}

            <input
              type="text"
              value={searchInput}
              onChange={(event) =>
                setSearchInput(
                  event.target.value
                )
              }
              placeholder="Search companies or roles..."
              className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-[#9CA3AF] focus:border-[#FF4D8D]"
            />

            {/* COMPANY */}

            <select aria-label="Filter by company"
              value={selectedCompany}
              onChange={(event) =>
                updateQuery(
                  "company",
                  event.target.value
                )
              }
              className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#FF4D8D]"
            >

              {companies.map(
                (company) => (

                  <option
                    key={company}
                  >

                    {company}

                  </option>
                )
              )}

            </select>

            {/* LOCATION */}

            <select aria-label="Filter by location"
              value={selectedLocation}
              onChange={(event) =>
                updateQuery(
                  "location",
                  event.target.value
                )
              }
              className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#FF4D8D]"
            >

              {locations.map(
                (location) => (

                  <option
                    key={location}
                  >

                    {location}

                  </option>
                )
              )}

            </select>

            {/* EXPERIENCE */}

            <select aria-label="Filter by experience level"
              value={selectedExperience}
              onChange={(event) =>
                updateQuery(
                  "experience",
                  event.target.value
                )
              }
              className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#FF4D8D]"
            >

              {experiences.map(
                (experience) => (

                  <option
                    key={experience}
                  >

                    {experience}

                  </option>
                )
              )}

            </select>

            {/* SORT */}

            <select aria-label="Sort by"
              value={sortBy}
              onChange={(event) =>
                updateQuery(
                  "sort",
                  event.target.value
                )
              }
              className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#FF4D8D]"
            >

              <option value="highest">

                Highest Salary

              </option>

              <option value="lowest">

                Lowest Salary

              </option>

              <option value="company">

                Company Name

              </option>

              <option value="experience">

                Experience

              </option>

            </select>

            {/* CURRENCY */}

            <select aria-label="Filter by currency"
              value={selectedCurrency}
              onChange={(event) =>
                updateQuery(
                  "currency",
                  event.target.value
                )
              }
              className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#FF4D8D]"
            >

              <option value="inr">

                INR (₹)

              </option>

              <option value="usd">

                USD ($)

              </option>

            </select>

          </div>

        </div>

      </section>

      {/* ACTIVE FILTERS */}

      {(
        searchQuery ||
        selectedCompany !==
          "All Companies" ||
        selectedLocation !==
          "All Locations" ||
        selectedExperience !==
          "All Levels" ||
        selectedCurrency !==
          "inr" ||
        sortBy !== "highest"
      ) && (

        <section className="mx-auto mt-6 max-w-7xl px-4 md:px-6">

          <div className="flex flex-wrap items-center gap-3">

            {/* SEARCH */}

            {searchQuery && (

              <button
                onClick={() =>
                  removeFilter(
                    "search"
                  )
                }
                className="rounded-xl bg-[#FFF1F6] px-4 py-2 text-sm font-medium text-[#FF4D8D] transition-all duration-200 hover:opacity-80"
              >

                Search: {searchQuery} ✕

              </button>
            )}

            {/* COMPANY */}

            {selectedCompany !==
              "All Companies" && (

              <button
                onClick={() =>
                  removeFilter(
                    "company"
                  )
                }
                className="rounded-xl bg-[#FFF1F6] px-4 py-2 text-sm font-medium text-[#FF4D8D] transition-all duration-200 hover:opacity-80"
              >

                {selectedCompany} ✕

              </button>
            )}

            {/* LOCATION */}

            {selectedLocation !==
              "All Locations" && (

              <button
                onClick={() =>
                  removeFilter(
                    "location"
                  )
                }
                className="rounded-xl bg-[#FFF1F6] px-4 py-2 text-sm font-medium text-[#FF4D8D] transition-all duration-200 hover:opacity-80"
              >

                {selectedLocation} ✕

              </button>
            )}

            {/* EXPERIENCE */}

            {selectedExperience !==
              "All Levels" && (

              <button
                onClick={() =>
                  removeFilter(
                    "experience"
                  )
                }
                className="rounded-xl bg-[#FFF1F6] px-4 py-2 text-sm font-medium text-[#FF4D8D] transition-all duration-200 hover:opacity-80"
              >

                {selectedExperience} ✕

              </button>
            )}

            {/* SORT */}

            {sortBy !==
              "highest" && (

              <button
                onClick={() =>
                  removeFilter(
                    "sort"
                  )
                }
                className="rounded-xl bg-[#EEF2FF] px-4 py-2 text-sm font-medium text-indigo-700 transition-all duration-200 hover:opacity-80"
              >

                Sort: {sortBy} ✕

              </button>
            )}

            {/* CURRENCY */}

            {selectedCurrency !==
              "inr" && (

              <button
                onClick={() =>
                  removeFilter(
                    "currency"
                  )
                }
                className="rounded-xl bg-[#ECFDF3] px-4 py-2 text-sm font-medium text-[#16A34A] transition-all duration-200 hover:opacity-80"
              >

                USD ✕

              </button>
            )}

            {/* CLEAR */}

            <button
              onClick={
                clearAllFilters
              }
              className="rounded-xl border border-[#ECECEC] px-4 py-2 text-sm font-medium text-[#6B7280] transition-all duration-200 hover:bg-[#FAFAFB]"
            >

              Clear All

            </button>

          </div>

        </section>
      )}

      {/* TABLE */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="overflow-hidden rounded-3xl border border-[#F1F1F1] bg-white shadow-sm">

          {/* HEADER */}

          <div className="border-b border-[#F3F4F6] px-6 py-6">

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-sm font-medium text-[#FF4D8D]">

                  Salary Benchmarks

                </p>

                <h2 className="mt-2 text-3xl font-bold">

                  Compensation Insights

                </h2>

              </div>

              <div className="rounded-2xl bg-[#FAFAFB] px-4 py-2 text-sm font-medium text-[#6B7280]">

                Showing {startResult}–
                {endResult} of{" "}
                {
                  filteredAndSortedSalaries.length
                }

              </div>

            </div>

          </div>

          {/* TABLE */}

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

                    Work Policy

                  </th>

                </tr>

              </thead>

              <tbody>

                {paginatedSalaries.map(
                  (
                    salary,
                    index
                  ) => (

                    <tr
                      key={`${salary.company}-${salary.role}-${index}`}
                      className={`border-b border-[#F8F8F8] transition-colors duration-200 hover:bg-[#FAFAFB] ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-[#FCFCFD]"
                      }`}
                    >

                      <td className="px-6 py-5">

                        <div>

                          <h3 className="font-semibold">

                            {salary.role}

                          </h3>

                          <p className="mt-1 text-sm text-[#6B7280]">

                            Base: {
                              formatCurrency(
                                salary.base,
                                selectedCurrency
                              )
                            }

                          </p>

                        </div>

                      </td>

                      <td className="px-6 py-5 font-medium">

                        {salary.company}

                      </td>

                      <td className="px-6 py-5 text-[#6B7280]">

                        {salary.location}

                      </td>

                      <td className="px-6 py-5">

                        <div
                          className={`inline-flex rounded-xl px-3 py-1 text-xs font-medium ${getLevelColor(
                            salary.experience
                          )}`}
                        >

                          {
                            salary.experience
                          }

                        </div>

                      </td>

                      <td className="px-6 py-5">

                        <div>

                          <h3 className="font-semibold text-[#16A34A]">

                            {
                              formatCurrency(
                                salary.compensation,
                                selectedCurrency
                              )
                            }

                          </h3>

                          <p className="mt-1 text-sm text-[#6B7280]">

                            Stock: {
                              salary.stock
                                ? formatCurrency(
                                    salary.stock,
                                    selectedCurrency
                                  )
                                : "—"
                            }

                          </p>

                        </div>

                      </td>

                      <td className="px-6 py-5">

                        <div className="inline-flex rounded-xl bg-[#FFF1F6] px-3 py-1 text-xs font-medium text-[#FF4D8D]">

                          {
                            salary.workPolicy
                          }

                        </div>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

          {/* EMPTY */}

          {filteredAndSortedSalaries.length ===
            0 && (

            <div className="px-6 py-16 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF1F6] text-2xl">

                🔍

              </div>

              <h3 className="mt-5 text-2xl font-bold">

                No salaries found

              </h3>

              <p className="mt-3 text-sm text-[#6B7280]">

                Try adjusting filters
                or search terms.

              </p>

            </div>
          )}

          {/* PAGINATION */}

          {totalPages > 1 && (

            <div className="flex flex-col gap-4 border-t border-[#F3F4F6] px-6 py-5 md:flex-row md:items-center md:justify-between">

              {/* PREVIOUS */}

              <button
                disabled={
                  currentPage === 1
                }
                onClick={() =>
                  updateQuery(
                    "page",
                    String(
                      currentPage - 1
                    )
                  )
                }
                className="rounded-2xl border border-[#ECECEC] px-5 py-2 text-sm font-medium transition-all duration-200 hover:bg-[#FAFAFB] disabled:cursor-not-allowed disabled:opacity-40"
              >

                ← Previous

              </button>

              {/* PAGE NUMBERS */}

              <div className="flex flex-wrap items-center justify-center gap-2">

                {Array.from(
                  {
                    length:
                      totalPages,
                  },
                  (_, index) => {

                    const page =
                      index + 1;

                    return (

                      <button
                        key={page}
                        onClick={() =>
                          updateQuery(
                            "page",
                            String(
                              page
                            )
                          )
                        }
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 ${
                          currentPage ===
                          page

                            ? "bg-[#FF4D8D] text-white"

                            : "border border-[#ECECEC] hover:bg-[#FAFAFB]"
                        }`}
                      >

                        {page}

                      </button>
                    );
                  }
                )}

              </div>

              {/* NEXT */}

              <button
                disabled={
                  currentPage ===
                  totalPages
                }
                onClick={() =>
                  updateQuery(
                    "page",
                    String(
                      currentPage + 1
                    )
                  )
                }
                className="rounded-2xl border border-[#ECECEC] px-5 py-2 text-sm font-medium transition-all duration-200 hover:bg-[#FAFAFB] disabled:cursor-not-allowed disabled:opacity-40"
              >

                Next →

              </button>

            </div>
          )}

        </div>

      </section>

    </main>
  );
}