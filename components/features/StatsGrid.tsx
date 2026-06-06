interface StatItem {
  label: string;
  value: string;
  description: string;
  color?: string;
}

interface StatsGridProps {
  title?: string;
  subtitle?: string;
  stats: StatItem[];
}

export function StatsGrid({
  title,
  subtitle,
  stats,
}: StatsGridProps) {

  return (

    <section className="mx-auto mt-10 max-w-7xl px-4 md:px-6">

      {/* HEADER */}

      {(title || subtitle) && (

        <div className="mb-8">

          {subtitle && (

            <p className="text-sm font-medium text-[#FF4D8D]">

              {subtitle}

            </p>
          )}

          {title && (

            <h2 className="mt-2 text-3xl font-bold">

              {title}

            </h2>
          )}

        </div>
      )}

      {/* GRID */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat, index) => {

          const pastel = [
            "from-[#FFF8FB] to-white",
            "from-[#F8FAFF] to-white",
            "from-[#F7FFF9] to-white",
            "from-[#FFFDF5] to-white",
          ];

          return (

            <div
              key={stat.label}
              className={`group rounded-2xl border border-[#F1F1F1] bg-gradient-to-br ${
                pastel[index % pastel.length]
              } p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
            >

              {/* LABEL */}

              <p className="text-sm text-[#6B7280]">

                {stat.label}

              </p>

              {/* VALUE */}

              <h3 className="mt-4 text-3xl font-bold tracking-tight">

                {stat.value}

              </h3>

              {/* DESCRIPTION */}

              <p
                className={`mt-3 text-sm leading-6 ${
                  stat.color ||
                  "text-[#6B7280]"
                }`}
              >

                {stat.description}

              </p>

              {/* DECORATIVE LINE */}

              <div className="mt-5 h-1 w-16 rounded-full bg-[#FF4D8D]/20 transition-all duration-200 group-hover:w-24 group-hover:bg-[#FF4D8D]/40" />

            </div>
          );
        })}

      </div>

    </section>
  );
}