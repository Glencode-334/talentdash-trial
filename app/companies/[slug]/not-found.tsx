import Link from "next/link";

export default function CompanyNotFound() {

  return (

    <main className="flex min-h-[80vh] items-center justify-center bg-[#FCFCFD] px-4 py-16">

      <div className="w-full max-w-2xl rounded-3xl border border-[#F1F1F1] bg-white px-8 py-12 text-center shadow-sm md:px-12">

        {/* ICON */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF1F6] text-4xl">

          🏢

        </div>

        {/* TITLE */}

        <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl">

          Company profile not found

        </h1>

        {/* DESCRIPTION */}

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6B7280] md:text-base">

          The company profile you are looking for does not exist
          or may not yet be available in the TalentDash database.

        </p>

        {/* ACTIONS */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/"
            className="rounded-2xl bg-[#FF4D8D] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >

            Back to Homepage

          </Link>

          <Link
            href="/salaries"
            className="rounded-2xl border border-[#ECECEC] bg-white px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-[#FAFAFB]"
          >

            Explore Salaries

          </Link>

        </div>

        {/* SUGGESTIONS */}

        <div className="mt-12 border-t border-[#F3F4F6] pt-8">

          <p className="text-sm font-medium text-[#111827]">

            Popular companies

          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">

            {[
              "Google",
              "Amazon",
              "Meta",
              "Microsoft",
              "Netflix",
              "Flipkart",
            ].map((company) => (

              <Link
                key={company}
                href={`/companies/${company.toLowerCase()}`}
                className="rounded-xl border border-[#F1F1F1] bg-[#FAFAFB] px-4 py-2 text-sm font-medium text-[#374151] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
              >

                {company}

              </Link>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}