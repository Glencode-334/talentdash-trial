"use client";
import type { ChangeEvent } from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  roleOptions,
  locationOptions,
} from "@/config/filters";

export function FilterBar() {

  const router = useRouter();

  const searchParams =
    useSearchParams();

  const selectedRole =
    searchParams.get("role") ?? "All";

  const selectedLocation =
    searchParams.get("location") ?? "All";

  function updateFilters(
    role: string,
    location: string
  ) {

    const params =
      new URLSearchParams();

    if (role !== "All") {
      params.set("role", role);
    }

    if (location !== "All") {
      params.set(
        "location",
        location
      );
    }

    const query =
      params.toString();

    router.push(
      query
        ? `/salaries?${query}`
        : "/salaries"
    );
  }

  return (

    <div className="mb-8 flex flex-wrap gap-4">

      <select
        value={selectedRole}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>

          updateFilters(
            event.target.value,
            selectedLocation
          )

        }
        className="rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-sm outline-none"
      >

        {roleOptions.map((role) => (

          <option
            key={role}
            value={role}
          >

            {role}

          </option>

        ))}

      </select>

      <select
        value={selectedLocation}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>

          updateFilters(
            selectedRole,
            event.target.value
          )

        }
        className="rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-sm outline-none"
      >

        {locationOptions.map(
          (location) => (

            <option
              key={location}
              value={location}
            >

              {location}

            </option>

          )
        )}

      </select>

    </div>
  );
}