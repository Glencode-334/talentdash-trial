import Link from "next/link";

const reviewCards = [
  {
    title: "Excellent Engineering Culture",
    company: "Google",
    rating: "4.8",
    review:
      "Strong mentorship, scalable systems, and collaborative engineering teams.",
  },

  {
    title: "Great Career Growth",
    company: "Meta",
    rating: "4.6",
    review:
      "High ownership environment with impactful projects and fast growth opportunities.",
  },

  {
    title: "Fast-Paced Workplace",
    company: "Amazon",
    rating: "4.2",
    review:
      "Challenging work environment with strong compensation and learning opportunities.",
  },

  {
    title: "Excellent Work-Life Balance",
    company: "Microsoft",
    rating: "4.7",
    review:
      "Supportive management, flexible culture, and strong engineering standards.",
  },
];

export default function ReviewsPage() {

  return (

    <main className="bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">

          <div className="max-w-3xl">

            <div className="inline-flex rounded-xl bg-[#FFF1F6] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#FF4D8D]">

              COMPANY REVIEWS

            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">

              Explore workplace experiences.

            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B7280] md:text-lg">

              Discover employee reviews,
              engineering culture,
              work-life balance,
              interview experiences,
              and career growth insights.

            </p>

          </div>

          {/* SEARCH */}

          <div className="mt-10 max-w-3xl">

            <div className="flex items-center rounded-2xl border border-[#ECECEC] bg-white px-5 py-4 shadow-sm">

              <input
                type="text"
                placeholder="Search reviews by company..."
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
              label: "Total Reviews",
              value: "12,400+",
              desc: "Verified employee reviews",
              color: "text-[#FF4D8D]",
            },

            {
              label: "Top Rated Company",
              value: "Google",
              desc: "4.8 overall rating",
              color: "text-[#16A34A]",
            },

            {
              label: "Best Work-Life Balance",
              value: "Microsoft",
              desc: "Flexible workplace culture",
              color: "text-[#7C3AED]",
            },

            {
              label: "Hiring Activity",
              value: "High",
              desc: "Active engineering hiring",
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

      {/* CATEGORIES */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">

            Explore by category

          </h2>

          <button className="text-sm font-medium text-[#FF4D8D]">

            Explore all →

          </button>

        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Engineering Culture",
            "Work-Life Balance",
            "Compensation & Benefits",
            "Career Growth",
            "Interview Experience",
            "Remote Work",
            "Leadership",
            "Learning Opportunities",
          ].map((category, index) => {

            const gradients = [
              "from-[#EEF5FF] to-[#F8FBFF]",
              "from-[#FFF6DF] to-[#FFF9EF]",
              "from-[#FFF1F3] to-[#FFF7F8]",
              "from-[#EEF3FF] to-[#F7F9FF]",
            ];

            return (

              <div
                key={category}
                className={`rounded-2xl border border-[#F1F1F1] bg-gradient-to-br ${
                  gradients[index % gradients.length]
                } px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="font-semibold">

                      {category}

                    </h3>

                    <p className="mt-2 text-sm text-[#6B7280]">

                      Employee insights

                    </p>

                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">

                    →

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* FEATURED REVIEWS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-[#FF4D8D]">

              Employee Experiences

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              Featured Reviews

            </h2>

          </div>

          <button className="rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm">

            View all reviews →

          </button>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {reviewCards.map((review) => (

            <div
              key={review.title}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-6 py-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div className="rounded-xl bg-[#FFF1F6] px-3 py-1 text-xs font-medium text-[#FF4D8D]">

                  ⭐ {review.rating}

                </div>

                <div className="text-sm text-[#6B7280]">

                  Verified Review

                </div>

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

      {/* TOP RATED COMPANIES */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div>

          <p className="text-sm font-medium text-[#FF4D8D]">

            Workplace Rankings

          </p>

          <h2 className="mt-2 text-3xl font-bold">

            Top Rated Companies

          </h2>

        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-[#F1F1F1] bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-[#FAFAFB]">

                <tr className="border-b border-[#F3F4F6] text-left text-sm text-[#6B7280]">

                  <th className="px-6 py-4 font-medium">

                    Company

                  </th>

                  <th className="px-6 py-4 font-medium">

                    Rating

                  </th>

                  <th className="px-6 py-4 font-medium">

                    Work-Life

                  </th>

                  <th className="px-6 py-4 font-medium">

                    Compensation

                  </th>

                  <th className="px-6 py-4 font-medium">

                    Culture

                  </th>

                </tr>

              </thead>

              <tbody>

                {[
                  {
                    company: "Google",
                    rating: "4.8",
                    worklife: "Excellent",
                    compensation: "Premium",
                    culture: "Collaborative",
                  },

                  {
                    company: "Microsoft",
                    rating: "4.7",
                    worklife: "Excellent",
                    compensation: "Strong",
                    culture: "Supportive",
                  },

                  {
                    company: "Meta",
                    rating: "4.6",
                    worklife: "Good",
                    compensation: "Premium",
                    culture: "Fast-paced",
                  },

                  {
                    company: "Netflix",
                    rating: "4.5",
                    worklife: "Balanced",
                    compensation: "Exceptional",
                    culture: "High-performance",
                  },
                ].map((company, index) => (

                  <tr
                    key={company.company}
                    className={`border-b border-[#F8F8F8] transition hover:bg-[#FFF8FB] ${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-[#FCFCFD]"
                    }`}
                  >

                    <td className="px-6 py-5 font-medium">

                      {company.company}

                    </td>

                    <td className="px-6 py-5">

                      ⭐ {company.rating}

                    </td>

                    <td className="px-6 py-5">

                      {company.worklife}

                    </td>

                    <td className="px-6 py-5">

                      {company.compensation}

                    </td>

                    <td className="px-6 py-5">

                      {company.culture}

                    </td>

                  </tr>
                ))}

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

                Explore company insights.

              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">

                Compare workplace culture,
                compensation,
                interview experiences,
                and engineering opportunities across leading companies.

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