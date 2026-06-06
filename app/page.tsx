import Link from "next/link";

import { companies } from "@/data/companies";
import { CompareButton } from "@/components/features/CompareButton";

export default function HomePage() {

  return (

    <main className="bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex rounded-xl bg-[#FFF1F6] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#FF4D8D]">

                CAREER INTELLIGENCE PLATFORM

              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">

                Explore salaries,
                reviews &
                workplace insights.

              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B7280] md:text-lg">

                Discover engineering salaries,
                company culture,
                interview experiences,
                and compare opportunities across leading companies.

              </p>

              {/* ACTIONS */}

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/salaries"
                  className="rounded-2xl bg-[#FF4D8D] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
                >

                  Explore Salaries →

                </Link>

                <Link
                  href="/compare"
                  className="rounded-2xl border border-[#ECECEC] bg-white px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm"
                >

                  Compare Companies

                </Link>

              </div>

              {/* STATS */}

              <div className="mt-12 grid gap-4 sm:grid-cols-3">

                {[
                  {
                    value: "12K+",
                    label: "Salary Insights",
                  },

                  {
                    value: "250+",
                    label: "Companies",
                  },

                  {
                    value: "4.8",
                    label: "Avg Rating",
                  },
                ].map((item) => (

                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#F1F1F1] bg-white px-5 py-5 shadow-sm"
                  >

                    <h3 className="text-3xl font-bold">

                      {item.value}

                    </h3>

                    <p className="mt-2 text-sm text-[#6B7280]">

                      {item.label}

                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                {
                  title: "Engineering Salaries",
                  desc: "Compare compensation benchmarks across roles.",
                  gradient: "from-[#EEF5FF] to-[#F8FBFF]",
                },

                {
                  title: "Company Reviews",
                  desc: "Explore verified employee experiences.",
                  gradient: "from-[#FFF6DF] to-[#FFF9EF]",
                },

                {
                  title: "Interview Insights",
                  desc: "Learn hiring patterns and interview difficulty.",
                  gradient: "from-[#FFF1F3] to-[#FFF7F8]",
                },

                {
                  title: "Compare Companies",
                  desc: "Analyze compensation and culture side-by-side.",
                  gradient: "from-[#EEF3FF] to-[#F7F9FF]",
                },
              ].map((card) => (

                <div
                  key={card.title}
                  className={`rounded-3xl border border-[#F1F1F1] bg-gradient-to-br ${card.gradient} p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">

                    ✨

                  </div>

                  <h3 className="mt-6 text-xl font-semibold">

                    {card.title}

                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">

                    {card.desc}

                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* QUICK INSIGHTS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              label: "Top Paying Company",
              value: "Netflix",
              desc: "Premium compensation culture",
              color: "text-[#16A34A]",
            },

            {
              label: "Best Work-Life Balance",
              value: "Microsoft",
              desc: "Flexible workplace culture",
              color: "text-[#FF4D8D]",
            },

            {
              label: "Most Active Hiring",
              value: "Amazon",
              desc: "High engineering demand",
              color: "text-[#7C3AED]",
            },

            {
              label: "Remote Opportunities",
              value: "High",
              desc: "Flexible engineering roles",
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

      {/* COMPARE SECTION */}

      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-6">

        <div className="rounded-3xl border border-[#F1F1F1] bg-white p-8 shadow-sm">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-medium text-[#FF4D8D]">

                Compare Companies

              </p>

              <h2 className="mt-3 text-3xl font-bold">

                Analyze workplace opportunities.

              </h2>

              <p className="mt-4 text-sm leading-7 text-[#6B7280]">

                Compare salaries,
                work-life balance,
                engineering culture,
                and growth opportunities across top companies.

              </p>

            </div>

            <Link
              href="/compare"
              className="inline-flex rounded-2xl bg-[#FF4D8D] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
            >

              Start Comparing →

            </Link>

          </div>

        </div>

      </section>

      {/* COMPANIES */}

      <section
        id="companies"
        className="mx-auto mt-14 max-w-7xl px-4 md:px-6"
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-[#FF4D8D]">

              Explore Companies

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              Top Engineering Companies

            </h2>

          </div>

          <Link
            href="/salaries"
            className="rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm"
          >

            View all →

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
                className={`rounded-2xl border border-[#F1F1F1] ${pastel[index % pastel.length]} p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
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

                    Hiring

                  </span>

                </div>

              </Link>
            );
          })}

        </div>

      </section>

      {/* REVIEWS */}

      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-[#FF4D8D]">

              Employee Experiences

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              Featured Reviews

            </h2>

          </div>

          <Link
            href="/reviews"
            className="rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm"
          >

            View Reviews →

          </Link>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              title: "Excellent Engineering Culture",
              company: "Google",
              review:
                "Strong mentorship and collaborative engineering teams.",
            },

            {
              title: "Great Career Growth",
              company: "Meta",
              review:
                "Fast-paced environment with impactful projects.",
            },

            {
              title: "Balanced Work Culture",
              company: "Microsoft",
              review:
                "Healthy work-life balance with strong engineering practices.",
            },
          ].map((review) => (

            <div
              key={review.title}
              className="rounded-2xl border border-[#F1F1F1] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <div className="rounded-xl bg-[#FFF1F6] px-3 py-1 text-xs font-medium text-[#FF4D8D]">

                  ⭐ 4.8

                </div>

                <span className="text-sm text-[#6B7280]">

                  Verified

                </span>

              </div>

              <h3 className="mt-5 text-xl font-semibold">

                {review.title}

              </h3>

              <p className="mt-2 text-sm font-medium text-[#111827]">

                {review.company}

              </p>

              <p className="mt-4 text-sm leading-7 text-[#6B7280]">

                {review.review}

              </p>

            </div>
          ))}

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="mx-auto mt-16 max-w-7xl px-4 md:px-6">

        <div className="rounded-3xl bg-gradient-to-r from-[#FF4D8D] to-[#FF7DB2] px-8 py-10 text-white">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h2 className="text-3xl font-bold">

                Discover your next opportunity.

              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">

                Explore salaries,
                compare companies,
                analyze engineering culture,
                and make informed career decisions.

              </p>

            </div>

            <Link
              href="/salaries"
              className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-medium text-[#FF4D8D] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >

              Explore Platform →

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}