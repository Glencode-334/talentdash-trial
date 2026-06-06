import Link from "next/link";

import { companies } from "@/data/companies";
import { CompareButton } from "@/components/features/CompareButton";

export function CompanyGrid() {

  return (

    <section
      id="companies"
      className="mx-auto mt-14 max-w-7xl px-4 md:px-6"
    >

      {/* HEADER */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <p className="text-sm font-medium text-[#FF4D8D]">

            Explore Companies

          </p>

          <h2 className="mt-2 text-3xl font-bold">

            Top Engineering Companies

          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6B7280]">

            Discover workplace culture,
            salary benchmarks,
            interview insights,
            and engineering opportunities across leading companies.

          </p>

        </div>

        <Link
          href="/compare"
          className="inline-flex rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm"
        >

          Compare Companies →

        </Link>

      </div>

      {/* GRID */}

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        {companies.map((company, index) => {

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
              className={`group rounded-2xl border border-[#F1F1F1] ${
                pastel[index % pastel.length]
              } p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
            >

              {/* TOP */}

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold shadow-sm transition-transform duration-200 group-hover:scale-105">

                  {company.name.charAt(0)}

                </div>

                <div
                  onClick={(event) =>
                    event.preventDefault()
                  }
                >

                  <CompareButton
                    company={company.name}
                  />

                </div>

              </div>

              {/* CONTENT */}

              <div className="mt-5">

                <h3 className="text-lg font-semibold">

                  {company.name}

                </h3>

                <p className="mt-2 text-sm text-[#6B7280]">

                  {company.industry}

                </p>

              </div>

              {/* META */}

              <div className="mt-5 flex items-center justify-between text-sm">

                <span className="font-medium">

                  ⭐ {company.rating}

                </span>

                <span className="text-[#16A34A]">

                  Hiring

                </span>

              </div>

              {/* EXTRA */}

              <div className="mt-4 flex flex-wrap gap-2">

                <div className="rounded-xl bg-white px-3 py-1 text-xs font-medium shadow-sm">

                  {company.workPolicy}

                </div>

                <div className="rounded-xl bg-white px-3 py-1 text-xs font-medium shadow-sm">

                  {company.headquarters}

                </div>

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}