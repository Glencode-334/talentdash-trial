import { Card } from "@/components/ui/Card";

type StatsGridProps = {
  totalCompanies: number;
  avgCompensation: string;
  topLocation: string;
};

export function StatsGrid({
  totalCompanies,
  avgCompensation,
  topLocation,
}: StatsGridProps) {

  return (

    <div className="mb-10 grid gap-6 md:grid-cols-3">

      <Card>

        <div className="p-6">

          <p className="text-sm text-[#6A6A6A]">
            Companies
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {totalCompanies}
          </h3>

        </div>

      </Card>

      <Card>

        <div className="p-6">

          <p className="text-sm text-[#6A6A6A]">
            Avg Compensation
          </p>

          <h3 className="mt-2 text-3xl font-bold text-[#16A34A]">
            {avgCompensation}
          </h3>

        </div>

      </Card>

      <Card>

        <div className="p-6">

          <p className="text-sm text-[#6A6A6A]">
            Top Location
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {topLocation}
          </h3>

        </div>

      </Card>

    </div>
  );
}