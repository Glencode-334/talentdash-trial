import Link from "next/link";

const footerSections = [
  {
    title: "Platform",
    links: [
      {
        label: "Salaries",
        href: "/salaries",
      },

      {
        label: "Reviews",
        href: "/reviews",
      },

      {
        label: "Compare",
        href: "/compare",
      },
    ],
  },

  {
    title: "Companies",
    links: [
      {
        label: "Google",
        href: "/companies/google",
      },

      {
        label: "Amazon",
        href: "/companies/amazon",
      },

      {
        label: "Microsoft",
        href: "/companies/microsoft",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        label: "Workplace Insights",
        href: "/",
      },

      {
        label: "Engineering Culture",
        href: "/reviews",
      },

      {
        label: "Salary Intelligence",
        href: "/salaries",
      },
    ],
  },
];

export function Footer() {

  return (

    <footer className="mt-20 border-t border-[#F1F1F1] bg-white">

      {/* TOP */}

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}

          <div>

            {/* BRAND */}

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >

              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#FF4D8D] to-[#FF7DB2]" />

              <div>

                <h2 className="text-xl font-bold tracking-tight">

                  TalentDash

                </h2>

                <p className="text-sm text-[#6B7280]">

                  Career Intelligence Platform

                </p>

              </div>

            </Link>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B7280]">

              Explore engineering salaries,
              compare workplace culture,
              discover interview insights,
              and make smarter career decisions with TalentDash.

            </p>

            {/* TAGS */}

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "Salaries",
                "Reviews",
                "Compare",
                "Workplace Insights",
              ].map((tag) => (

                <div
                  key={tag}
                  className="rounded-xl bg-[#FFF1F6] px-4 py-2 text-xs font-medium text-[#FF4D8D]"
                >

                  {tag}

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">

            {footerSections.map((section) => (

              <div key={section.title}>

                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#111827]">

                  {section.title}

                </h3>

                <div className="mt-5 flex flex-col gap-4">

                  {section.links.map((link) => (

                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-[#6B7280] transition-colors duration-200 hover:text-[#FF4D8D]"
                    >

                      {link.label}

                    </Link>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-[#F3F4F6]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-[#6B7280] md:flex-row md:items-center md:justify-between md:px-6">

          <p>

            © 2026 TalentDash. All rights reserved.

          </p>

          <div className="flex flex-wrap items-center gap-5">

            <Link
              href="/"
              className="transition-colors duration-200 hover:text-[#FF4D8D]"
            >

              Privacy

            </Link>

            <Link
              href="/"
              className="transition-colors duration-200 hover:text-[#FF4D8D]"
            >

              Terms

            </Link>

            <Link
              href="/"
              className="transition-colors duration-200 hover:text-[#FF4D8D]"
            >

              Contact

            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}