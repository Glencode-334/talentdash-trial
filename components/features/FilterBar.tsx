interface FilterBarProps {
  compact?: boolean;
}

const filters = [
  {
    label: "Role",
    options: [
      "All Roles",
      "Frontend Engineer",
      "Backend Engineer",
      "Full Stack Engineer",
      "Staff Engineer",
    ],
  },

  {
    label: "Experience",
    options: [
      "All Levels",
      "0-2 Years",
      "3-5 Years",
      "5-8 Years",
      "8+ Years",
    ],
  },

  {
    label: "Location",
    options: [
      "All Locations",
      "Bangalore",
      "Hyderabad",
      "Remote",
      "Pune",
    ],
  },

  {
    label: "Company",
    options: [
      "All Companies",
      "Google",
      "Meta",
      "Amazon",
      "Microsoft",
      "Netflix",
    ],
  },
];

export function FilterBar({
  compact = false,
}: FilterBarProps) {

  return (

    <section
      className={`mx-auto max-w-7xl px-4 md:px-6 ${
        compact
          ? "mt-6"
          : "mt-10"
      }`}
    >

      <div className="rounded-3xl border border-[#F1F1F1] bg-white p-6 shadow-sm">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}

          <div>

            <p className="text-sm font-medium text-[#FF4D8D]">

              Filter Insights

            </p>

            <h2 className="mt-2 text-2xl font-bold">

              Explore salary intelligence

            </h2>

          </div>

          {/* FILTERS */}

          <div className="grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

            {filters.map((filter) => (

              <div
                key={filter.label}
                className="relative"
              >

                <label
                  htmlFor={filter.label}
                  className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#6B7280]"
                >

                  {filter.label}

                </label>

                <select
                  id={filter.label}
                  title={filter.label}
                  aria-label={filter.label}
                  className="w-full rounded-2xl border border-[#ECECEC] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#FF4D8D] focus:bg-white"
                >

                  {filter.options.map(
                    (option) => (

                      <option
                        key={option}
                      >

                        {option}

                      </option>
                    )
                  )}

                </select>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}