export default function CompareLoading() {

  return (

    <main className="min-h-screen bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">

          {/* HEADER */}

          <div className="text-center">

            <div className="mx-auto h-5 w-40 animate-pulse rounded-xl bg-[#F3F4F6]" />

            <div className="mx-auto mt-6 h-12 w-[420px] max-w-full animate-pulse rounded-2xl bg-[#F3F4F6]" />

            <div className="mx-auto mt-5 h-5 w-[620px] max-w-full animate-pulse rounded-xl bg-[#F3F4F6]" />

          </div>

          {/* COMPANY SELECTORS */}

          <div className="mx-auto mt-12 max-w-5xl">

            <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">

              {/* LEFT */}

              <div className="rounded-3xl border border-[#F1F1F1] bg-white p-6 shadow-sm">

                <div className="h-4 w-28 animate-pulse rounded-lg bg-[#F3F4F6]" />

                <div className="mt-5 flex items-center gap-4">

                  <div className="h-16 w-16 animate-pulse rounded-2xl bg-[#F3F4F6]" />

                  <div className="space-y-3">

                    <div className="h-7 w-36 animate-pulse rounded-lg bg-[#F3F4F6]" />

                    <div className="h-4 w-28 animate-pulse rounded-lg bg-[#F3F4F6]" />

                  </div>

                </div>

              </div>

              {/* VS */}

              <div className="flex items-center justify-center">

                <div className="h-16 w-16 animate-pulse rounded-full bg-[#F3F4F6]" />

              </div>

              {/* RIGHT */}

              <div className="rounded-3xl border border-[#F1F1F1] bg-white p-6 shadow-sm">

                <div className="h-4 w-28 animate-pulse rounded-lg bg-[#F3F4F6]" />

                <div className="mt-5 flex items-center gap-4">

                  <div className="h-16 w-16 animate-pulse rounded-2xl bg-[#F3F4F6]" />

                  <div className="space-y-3">

                    <div className="h-7 w-36 animate-pulse rounded-lg bg-[#F3F4F6]" />

                    <div className="h-4 w-28 animate-pulse rounded-lg bg-[#F3F4F6]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SUMMARY CARDS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-5 py-5 shadow-sm"
            >

              <div className="h-4 w-32 animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-4 h-8 w-40 animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-4 h-4 w-44 animate-pulse rounded-lg bg-[#F3F4F6]" />

            </div>
          ))}

        </div>

      </section>

      {/* TABLE */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="overflow-hidden rounded-3xl border border-[#F1F1F1] bg-white shadow-sm">

          <div className="border-b border-[#F3F4F6] px-6 py-6">

            <div className="h-6 w-52 animate-pulse rounded-lg bg-[#F3F4F6]" />

            <div className="mt-3 h-4 w-72 animate-pulse rounded-lg bg-[#F3F4F6]" />

          </div>

          <div className="space-y-4 p-6">

            {[1, 2, 3, 4, 5].map((row) => (

              <div
                key={row}
                className="grid grid-cols-3 gap-6"
              >

                <div className="h-5 animate-pulse rounded-lg bg-[#F3F4F6]" />

                <div className="h-5 animate-pulse rounded-lg bg-[#F3F4F6]" />

                <div className="h-5 animate-pulse rounded-lg bg-[#F3F4F6]" />

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}