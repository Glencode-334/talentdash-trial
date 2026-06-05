"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

type CompareButtonProps = {
  companySlug: string;
};

export function CompareButton({
  companySlug,
}: CompareButtonProps) {

  const router = useRouter();

  const searchParams =
    useSearchParams();

  const selectedCompanies =
    searchParams
      .get("companies")
      ?.split(",")
      .filter(Boolean) ?? [];

  const isSelected =
    selectedCompanies.includes(
      companySlug
    );

  function handleCompare() {

    let updatedCompanies =
      [...selectedCompanies];

    if (isSelected) {

      updatedCompanies =
        updatedCompanies.filter(
          (company) =>
            company !== companySlug
        );

    } else {

      if (
        updatedCompanies.length >= 3
      ) {

        alert(
          "You can compare up to 3 companies."
        );

        return;
      }

      updatedCompanies.push(
        companySlug
      );
    }

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (
      updatedCompanies.length > 0
    ) {

      params.set(
        "companies",
        updatedCompanies.join(",")
      );

    } else {

      params.delete(
        "companies"
      );
    }

    router.replace(
      `/salaries?${params.toString()}`,
      {
        scroll: false,
      }
    );
  }

  return (

    <button
      onClick={handleCompare}
      className={`rounded-lg px-4 py-2 text-sm text-white transition ${
        isSelected
          ? "bg-[#16A34A]"
          : "bg-[#16A34A] hover:-translate-y-0.5 hover:shadow-md"
      }`}
    >

      {isSelected
        ? "Added"
        : "Compare"}

    </button>
  );
}