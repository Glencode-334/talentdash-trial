import Link from "next/link";

import { companies } from "@/data/companies";

import { Card } from "@/components/ui/Card";

export function CompanyGrid() {

  return (

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {companies.map((company) => (

        <Link className="group block"
          key={company.slug}
          href={`/companies/${company.slug}`}
        >

          <Card>

            <div className="p-6">

              <h3 className="text-xl font-semibold transition group-hover:text-[#2563EB]">

                {company.name}

              </h3>

              <p className="mt-2 text-sm text-[#6A6A6A]">

                {company.industry}

              </p>

              <p className="mt-4 text-sm">

                ⭐ {company.rating}
              </p>

            </div>

          </Card>

        </Link>

      ))}

    </div>
  );
}