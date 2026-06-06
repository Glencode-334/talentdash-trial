export default function ReviewsLoading() {

  return (

    <main className="min-h-screen bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">

          <div className="max-w-3xl">

            <div className="h-5 w-40 animate-pulse rounded-xl bg-[#F3F4F6]" />

            <div className="mt-6 h-12 w-[520px] max-w-full animate-pulse rounded-2xl bg-[#F3F4F6]" />

            <div className="mt-5 h-5 w-[640px] max-w-full animate-pulse rounded-xl bg-[#F3F4F6]" />

          </div>

          {/* SEARCH */}

          <div className="mt-10 max-w-3xl">

            <div className="h-16 animate-pulse rounded-2xl border border-[#F1F1F1] bg-white shadow-sm" />

          </div>

        </div>

      </section>

      {/* INSIGHTS */}

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

      {/* CATEGORIES */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="flex items-center justify-between">

          <div className="h-8 w-52 animate-pulse rounded-xl bg-[#F3F4F6]" />

          <div className="h-5 w-24 animate-pulse rounded-xl bg-[#F3F4F6]" />

        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-5 py-4 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div className="space-y-3">

                  <div className="h-5 w-40 animate-pulse rounded-lg bg-[#F3F4F6]" />

                  <div className="h-4 w-28 animate-pulse rounded-lg bg-[#F3F4F6]" />

                </div>

                <div className="h-9 w-9 animate-pulse rounded-full bg-[#F3F4F6]" />

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* REVIEW CARDS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="flex items-center justify-between">

          <div>

            <div className="h-5 w-40 animate-pulse rounded-xl bg-[#F3F4F6]" />

            <div className="mt-4 h-8 w-56 animate-pulse rounded-xl bg-[#F3F4F6]" />

          </div>

          <div className="h-11 w-40 animate-pulse rounded-2xl bg-[#F3F4F6]" />

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-[#F1F1F1] bg-white px-6 py-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div className="h-6 w-16 animate-pulse rounded-xl bg-[#F3F4F6]" />

                <div className="h-4 w-28 animate-pulse rounded-lg bg-[#F3F4F6]" />

              </div>

              <div className="mt-6 h-7 w-56 animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-4 h-4 w-28 animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-6 space-y-3">

                <div className="h-4 animate-pulse rounded-lg bg-[#F3F4F6]" />

                <div className="h-4 animate-pulse rounded-lg bg-[#F3F4F6]" />

                <div className="h-4 w-[80%] animate-pulse rounded-lg bg-[#F3F4F6]" />

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* TABLE */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="overflow-hidden rounded-3xl border border-[#F1F1F1] bg-white shadow-sm">

          <div className="space-y-4 p-6">

            {[1, 2, 3, 4, 5].map((row) => (

              <div
                key={row}
                className="grid grid-cols-5 gap-6"
              >

                {[1, 2, 3, 4, 5].map((col) => (

                  <div
                    key={col}
                    className="h-5 animate-pulse rounded-lg bg-[#F3F4F6]"
                  />

                ))}

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}