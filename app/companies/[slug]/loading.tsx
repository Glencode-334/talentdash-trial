export default function CompanyLoading() {

  return (

    <main className="min-h-screen bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}

            <div className="flex items-start gap-6">

              <div className="h-24 w-24 animate-pulse rounded-3xl bg-[#F3F4F6]" />

              <div className="space-y-4">

                <div className="h-5 w-32 animate-pulse rounded-xl bg-[#F3F4F6]" />

                <div className="h-12 w-64 animate-pulse rounded-xl bg-[#F3F4F6]" />

                <div className="h-5 w-[420px] max-w-full animate-pulse rounded-xl bg-[#F3F4F6]" />

                <div className="flex flex-wrap gap-3">

                  <div className="h-10 w-24 animate-pulse rounded-xl bg-[#F3F4F6]" />

                  <div className="h-10 w-32 animate-pulse rounded-xl bg-[#F3F4F6]" />

                  <div className="h-10 w-28 animate-pulse rounded-xl bg-[#F3F4F6]" />

                </div>

              </div>

            </div>

            {/* ACTIONS */}

            <div className="flex gap-4">

              <div className="h-12 w-40 animate-pulse rounded-2xl bg-[#F3F4F6]" />

              <div className="h-12 w-36 animate-pulse rounded-2xl bg-[#F3F4F6]" />

            </div>

          </div>

        </div>

      </section>

      {/* QUICK STATS */}

      <section className="mx-auto mt-8 max-w-7xl px-4 md:px-6">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-5 py-5 shadow-sm"
            >

              <div className="h-4 w-24 animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-4 h-8 w-32 animate-pulse rounded-lg bg-[#F3F4F6]" />

            </div>
          ))}

        </div>

      </section>

      {/* CONTENT SECTIONS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="grid gap-6 lg:grid-cols-2">

          {[1, 2].map((item) => (

            <div
              key={item}
              className="rounded-3xl border border-[#F1F1F1] bg-white p-6 shadow-sm"
            >

              <div className="h-5 w-40 animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-6 space-y-4">

                {[1, 2, 3].map((line) => (

                  <div
                    key={line}
                    className="h-4 animate-pulse rounded-lg bg-[#F3F4F6]"
                  />

                ))}

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}