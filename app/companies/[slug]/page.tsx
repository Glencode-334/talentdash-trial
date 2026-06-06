import Link from "next/link";
import { notFound } from "next/navigation";

import { companies } from "@/data/companies";
import { CompareButton } from "@/components/features/CompareButton";

interface CompanyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {

  return companies.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({
  params,
}: CompanyPageProps) {

  const { slug } = await params;

  const company = companies.find(
    (item) => item.slug === slug
  );

  if (!company) {

    return {
      title: "Company Not Found | TalentDash",
    };
  }

  return {
    title: `${company.name} Salaries, Reviews & Culture | TalentDash`,
    description:
      `Explore salaries, reviews, interview experiences, and workplace insights for ${company.name}.`,
  };
}

export default async function CompanyPage({
  params,
}: CompanyPageProps) {

  const { slug } = await params;

  const company = companies.find(
    (item) => item.slug === slug
  );

  if (!company) {
    notFound();
  }

  return (

    <main className="bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}

            <div className="flex items-start gap-6">

              {/* LOGO */}

              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#FFF1F6] to-[#FFF7FB] text-3xl font-bold text-[#FF4D8D] shadow-sm">

                {company.name.charAt(0)}

              </div>

              {/* INFO */}

              <div>

                <div className="inline-flex rounded-xl bg-[#FFF1F6] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[#FF4D8D]">

                  COMPANY PROFILE

                </div>

                <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">

                  {company.name}

                </h1>

                <p className="mt-4 max-w-2xl text-base leading-8 text-[#6B7280] md:text-lg">

                  Explore salaries,
                  workplace culture,
                  employee reviews,
                  interview experiences,
                  and engineering opportunities at {company.name}.

                </p>

                {/* META */}

                <div className="mt-6 flex flex-wrap items-center gap-3">

                  <div className="rounded-xl bg-white px-4 py-2 text-sm font-medium shadow-sm">

                    ⭐ {company.rating}

                  </div>

                  <div className="rounded-xl bg-white px-4 py-2 text-sm font-medium shadow-sm">

                    🏢 {company.industry}

                  </div>

                  <div className="rounded-xl bg-white px-4 py-2 text-sm font-medium shadow-sm">

                    👥 {company.employees}

                  </div>

                </div>

              </div>

            </div>

            {/* ACTIONS */}

            <div className="flex flex-wrap gap-4">

              <CompareButton
                company={company.name}
              />

              <Link
                href="/salaries"
                className="rounded-2xl border border-[#ECECEC] bg-white px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm"
              >

                View Salaries

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* QUICK STATS */}

      <section className="mx-auto mt-8 max-w-7xl px-4 md:px-6">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              label: "Founded",
              value: company.founded || "2004",
            },

            {
              label: "Headquarters",
              value: company.headquarters || "Bangalore",
            },

            {
              label: "Work Policy",
              value: company.workPolicy || "Hybrid",
            },

            {
              label: "Open Roles",
              value: "128",
            },
          ].map((item) => (

            <div
              key={item.label}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-5 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >

              <p className="text-sm text-[#6B7280]">

                {item.label}

              </p>

              <h2 className="mt-3 text-2xl font-bold">

                {item.value}

              </h2>

            </div>
          ))}

        </div>

      </section>

      {/* SALARY SNAPSHOT */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-[#FF4D8D]">

              Compensation Insights

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              Salary Snapshot

            </h2>

          </div>

          <Link
            href="/salaries"
            className="rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm"
          >

            Explore Salaries →

          </Link>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              role: "Software Engineer",
              comp: "₹32L",
            },

            {
              role: "Senior Engineer",
              comp: "₹48L",
            },

            {
              role: "Staff Engineer",
              comp: "₹82L",
            },

            {
              role: "Engineering Manager",
              comp: "₹95L",
            },
          ].map((item, index) => {

            const gradients = [
              "from-[#EEF5FF] to-[#F8FBFF]",
              "from-[#FFF6DF] to-[#FFF9EF]",
              "from-[#FFF1F3] to-[#FFF7F8]",
              "from-[#EEF3FF] to-[#F7F9FF]",
            ];

            return (

              <div
                key={item.role}
                className={`rounded-2xl border border-[#F1F1F1] bg-gradient-to-br ${
                  gradients[index % gradients.length]
                } px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
              >

                <p className="text-sm text-[#6B7280]">

                  {item.role}

                </p>

                <h3 className="mt-4 text-3xl font-bold">

                  {item.comp}

                </h3>

                <p className="mt-3 text-sm text-[#16A34A]">

                  Avg Total Compensation

                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* CULTURE & BENEFITS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div>

          <p className="text-sm font-medium text-[#FF4D8D]">

            Workplace Experience

          </p>

          <h2 className="mt-2 text-3xl font-bold">

            Culture & Benefits

          </h2>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Remote Flexibility",
            "Learning Budget",
            "Health Insurance",
            "Annual Bonus",
          ].map((benefit, index) => {

            const pastel = [
              "bg-[#FFF8FB]",
              "bg-[#F8FAFF]",
              "bg-[#F7FFF9]",
              "bg-[#FFFDF5]",
            ];

            return (

              <div
                key={benefit}
                className={`rounded-2xl border border-[#F1F1F1] ${pastel[index % pastel.length]} px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm`}
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">

                  ✨

                </div>

                <h3 className="mt-5 text-lg font-semibold">

                  {benefit}

                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B7280]">

                  Employees report strong satisfaction and positive workplace experience.

                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* REVIEWS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-[#FF4D8D]">

              Employee Experience

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              Reviews Preview

            </h2>

          </div>

          <Link
            href="/reviews"
            className="rounded-2xl border border-[#ECECEC] bg-white px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAFAFB] hover:shadow-sm"
          >

            View all reviews →

          </Link>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              title: "Excellent engineering culture",
              review:
                "Great mentorship, strong engineering standards, and collaborative environment.",
            },

            {
              title: "Strong compensation & growth",
              review:
                "Competitive salaries, impactful projects, and clear growth opportunities.",
            },

            {
              title: "Fast-paced workplace",
              review:
                "High ownership culture with opportunities to work on challenging systems.",
            },
          ].map((review, index) => (

            <div
              key={review.title}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-5 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div className="rounded-xl bg-[#FFF1F6] px-3 py-1 text-xs font-medium text-[#FF4D8D]">

                  ⭐ 4.{index + 5}

                </div>

                <div className="text-sm text-[#6B7280]">

                  Verified Review

                </div>

              </div>

              <h3 className="mt-5 text-lg font-semibold">

                {review.title}

              </h3>

              <p className="mt-4 text-sm leading-7 text-[#6B7280]">

                {review.review}

              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}