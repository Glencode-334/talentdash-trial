export default function Loading() {

  return (

    <main className="min-h-screen bg-[#FCFCFD] pb-20">

      {/* HERO */}

      <section className="border-b border-[#F3F4F6] bg-gradient-to-br from-[#FFF8FB] via-white to-[#F8FAFF]">

        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">

          <div className="max-w-3xl">

            <div className="h-5 w-44 animate-pulse rounded-xl bg-[#F3F4F6]" />

            <div className="mt-6 h-14 w-[620px] max-w-full animate-pulse rounded-2xl bg-[#F3F4F6]" />

            <div className="mt-5 h-5 w-[680px] max-w-full animate-pulse rounded-xl bg-[#F3F4F6]" />

            <div className="mt-3 h-5 w-[520px] max-w-full animate-pulse rounded-xl bg-[#F3F4F6]" />

          </div>

          {/* BUTTONS */}

          <div className="mt-10 flex gap-4">

            <div className="h-12 w-44 animate-pulse rounded-2xl bg-[#F3F4F6]" />

            <div className="h-12 w-44 animate-pulse rounded-2xl bg-[#F3F4F6]" />

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-[#F1F1F1] bg-white p-5 shadow-sm"
            >

              <div className="h-4 w-32 animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-5 h-9 w-28 animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-4 h-4 w-40 animate-pulse rounded-lg bg-[#F3F4F6]" />

            </div>
          ))}

        </div>

      </section>

      {/* CONTENT GRID */}

      <section className="mx-auto mt-12 max-w-7xl px-4 md:px-6">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="rounded-3xl border border-[#F1F1F1] bg-white p-6 shadow-sm"
            >

              <div className="h-12 w-12 animate-pulse rounded-2xl bg-[#F3F4F6]" />

              <div className="mt-6 h-6 w-40 animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-4 h-4 w-full animate-pulse rounded-lg bg-[#F3F4F6]" />

              <div className="mt-3 h-4 w-[80%] animate-pulse rounded-lg bg-[#F3F4F6]" />

            </div>
          ))}

        </div>

      </section>

      {/* TABLE */}

      <section className="mx-auto mt-12 max-w-7xl px-4 md:px-6">

        <div className="overflow-hidden rounded-3xl border border-[#F1F1F1] bg-white shadow-sm">

          <div className="border-b border-[#F3F4F6] px-6 py-6">

            <div className="h-6 w-56 animate-pulse rounded-lg bg-[#F3F4F6]" />

            <div className="mt-3 h-4 w-72 animate-pulse rounded-lg bg-[#F3F4F6]" />

          </div>

          <div className="space-y-5 p-6">

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