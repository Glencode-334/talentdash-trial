import Link from "next/link";

import { companies } from "@/data/companies";

export default function HomePage() {

  const topCompanies = [
    "Google",
    "Amazon",
    "Apple",
    "Microsoft",
    "Meta",
    "Netflix",
    "Tesla",
    "Adobe",
    "Salesforce",
    "Infosys",
    "TCS",
    "IBM",
  ];

  const pastelClasses = [
    "from-[#EEF5FF] to-[#F8FBFF]",
    "from-[#FFF6DF] to-[#FFF9EF]",
    "from-[#F8F8F8] to-[#FCFCFC]",
    "from-[#EEF5FF] to-[#F8FBFF]",
    "from-[#EEF3FF] to-[#F7F9FF]",
    "from-[#FFF1F3] to-[#FFF7F8]",
  ];

  return (

    <main className="bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-[#FFFFFF] to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-6 py-12">

          <div className="text-center">

            <div className="inline-flex rounded-xl bg-[#FFF1F6] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#FF4D8D]">

              COMPANIES

            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#111827] md:text-6xl">

              Search for

              <span className="text-[#FF4D8D]">

                {" "}Company

              </span>

            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">

              Search companies to explore salaries,
              benefits,
              workplace culture,
              and career growth opportunities.

            </p>

            {/* SEARCH */}

            <div className="mx-auto mt-8 max-w-3xl">

              <div className="flex items-center rounded-2xl border border-[#ECECEC] bg-white px-5 py-4 shadow-sm">

                <input
                  type="text"
                  placeholder="Search for a company..."
                  className="w-full bg-transparent text-sm outline-none"
                />

              </div>

            </div>

          </div>

          {/* POPULAR COMPANIES */}

          <div className="mt-12">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold">

                Popular Companies

              </h2>

              <Link
                href="/salaries"
                className="text-sm font-medium text-[#FF4D8D]"
              >

                View all companies →

              </Link>

            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

              {topCompanies.map((company, index) => {

                const matchedCompany =
                  companies.find(
                    (item) =>
                      item.name === company
                  );

                return (

                  <Link
                    key={company}
                    href={
                      matchedCompany

                        ? `/companies/${matchedCompany.slug}`

                        : "/salaries"
                    }
                  >

                    <div
                      className={`rounded-2xl border border-[#F1F1F1] bg-gradient-to-br ${
                        pastelClasses[index % pastelClasses.length]
                      } px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <h3 className="text-lg font-semibold">

                            {company}

                          </h3>

                          <p className="mt-2 text-sm text-[#6B7280]">

                            Technology Company

                          </p>

                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">

                          →

                        </div>

                      </div>

                    </div>

                  </Link>
                );
              })}

            </div>

          </div>

        </div>

      </section>

            {/* FUNDING STAGES */}

      <section className="mx-auto mt-8 max-w-7xl px-6">

        <h2 className="text-xl font-bold">

          Startups by Funding Stage

        </h2>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8">

          {[
            "Pre-Seed",
            "Seed",
            "Series A",
            "Series B",
            "Series C",
            "Series D",
            "Series E+",
            "Post IPO",
          ].map((stage) => (

            <div
              key={stage}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-4 py-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >

              <p className="text-sm font-medium">

                {stage}

              </p>

            </div>
          ))}

        </div>

      </section>

      {/* TOP AI COMPANIES */}

      <section className="mx-auto mt-8 max-w-7xl px-6">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">

            Top AI Companies

          </h2>

          <Link
            href="/salaries"
            className="text-sm font-medium text-[#FF4D8D]"
          >

            Explore →
          </Link>

        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            "OpenAI",
            "Anthropic",
            "NVIDIA",
            "Perplexity",
            "Mistral AI",
            "Cohere",
            "Midjourney",
            "Stability AI",
          ].map((company, index) => {

            return (

              <div
                key={company}
                className={`rounded-2xl border border-[#F1F1F1] bg-gradient-to-br ${
                  pastelClasses[index % pastelClasses.length]
                } px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-lg font-semibold">

                      {company}

                    </h3>

                    <p className="mt-2 text-sm text-[#6B7280]">

                      AI & Research

                    </p>

                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">

                    ✨

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* TOP INDIAN COMPANIES */}

      <section className="mx-auto mt-8 max-w-7xl px-6">

        <h2 className="text-xl font-bold">

          Top Indian Companies

        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            "TCS",
            "Infosys",
            "Wipro",
            "HCLTech",
            "Tech Mahindra",
            "Reliance",
            "Airtel",
            "Zomato",
          ].map((company, index) => (

            <div
              key={company}
              className={`rounded-2xl border border-[#F1F1F1] bg-gradient-to-br ${
                pastelClasses[index % pastelClasses.length]
              } px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">

                    {company}

                  </h3>

                  <p className="mt-2 text-sm text-[#6B7280]">

                    Indian Enterprise

                  </p>

                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">

                  →

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

          {/* COMPARE SECTION */}

<section className="mx-auto mt-12 max-w-7xl px-6">

  <div className="rounded-[36px] bg-gradient-to-br from-[#FFF1F6] via-[#FFFFFF] to-[#F8FAFF] px-8 py-14 text-center">

    <div className="mx-auto max-w-3xl">

      <div className="inline-flex rounded-xl bg-white px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#FF4D8D] shadow-sm">

        COMPARE COMPANIES

      </div>

      <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">

        Compare companies.

        <span className="text-[#FF4D8D]">

          {" "}Make better career moves.

        </span>

      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6B7280]">

        Compare compensation,
        growth,
        workplace culture,
        and engineering opportunities.

      </p>

      {/* COMPARE UI */}

      <div className="mt-14 flex flex-col items-center justify-center gap-6 md:flex-row">

        {/* LEFT */}

        <button className="flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-[#D1D5DB] bg-white text-5xl text-[#9CA3AF] transition hover:border-[#FF4D8D] hover:text-[#FF4D8D]">

          +

        </button>

        {/* VS */}

        <div className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm">

          VS

        </div>

        {/* RIGHT */}

        <button className="flex h-28 w-28 items-center justify-center rounded-full border border-dashed border-[#D1D5DB] bg-white text-5xl text-[#9CA3AF] transition hover:border-[#FF4D8D] hover:text-[#FF4D8D]">

          +

        </button>

      </div>

      <Link
        href="/compare"
        className="mt-8 inline-flex text-sm font-medium text-[#FF4D8D]"
      >

        Open advanced compare →
      </Link>

    </div>

  </div>

</section>

      {/* EXPLORE COMPANIES */}

      <section className="mx-auto mt-12 max-w-7xl px-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-[#FF4D8D]">

              Discover Companies ✨

            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">

              Explore companies your way

            </h2>

          </div>

          <button className="rounded-2xl border border-[#ECECEC] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#FAFAFB]">

            View all companies →
          </button>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Top paying companies",
            "Remote friendly companies",
            "Fast growing companies",
            "AI & tech companies",
          ].map((category) => (

            <div
              key={category}
              className="rounded-2xl border border-[#F1F1F1] bg-gradient-to-br from-white to-[#FCFCFD] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >

              <div className="flex h-full flex-col justify-between">

                <div>

                  <h3 className="text-xl font-semibold leading-tight">

                    {category}

                  </h3>

                  <p className="mt-4 text-sm text-[#6B7280]">

                    2,400 companies

                  </p>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <div className="h-1 w-12 rounded-xl bg-[#FF4D8D]" />

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECECEC] bg-white">

                    →
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* QUICK WAYS */}

      <section className="mx-auto mt-12 max-w-7xl px-6">

        <h2 className="text-2xl font-bold">

          Quick ways to explore

        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            "By experience",
            "By location",
            "By company size",
            "By industry",
            "By rating",
            "By funding stage",
            "By known for",
            "By badges",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold">

                    {item}

                  </h3>

                  <p className="mt-2 text-sm text-[#6B7280]">

                    Explore company intelligence

                  </p>

                </div>

                <div className="text-[#FF4D8D]">

                  →
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}