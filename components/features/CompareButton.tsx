"use client";

import { useEffect, useState } from "react";

interface CompareButtonProps {
  company: string;
}

export function CompareButton({
  company,
}: CompareButtonProps) {

  const [added, setAdded] =
    useState(false);

  useEffect(() => {

    const syncState = () => {

      const stored =
        localStorage.getItem(
          "compareCompanies"
        );

      const companies: string[] =
        stored ? JSON.parse(stored) : [];

      setAdded(
        companies.includes(company)
      );
    };

    syncState();

    window.addEventListener(
      "compareUpdated",
      syncState
    );

    return () => {

      window.removeEventListener(
        "compareUpdated",
        syncState
      );
    };

  }, [company]);

  const handleCompare = (
    event: React.MouseEvent
  ) => {

    event.preventDefault();
    event.stopPropagation();

    const stored =
      localStorage.getItem(
        "compareCompanies"
      );

    let companies: string[] =
      stored ? JSON.parse(stored) : [];

    if (companies.includes(company)) {

      companies =
        companies.filter(
          (item) =>
            item !== company
        );

    } else {

      if (companies.length >= 2) {

        companies.shift();
      }

      companies.push(company);
    }

    localStorage.setItem(
      "compareCompanies",
      JSON.stringify(companies)
    );

    setAdded(
      companies.includes(company)
    );

    window.dispatchEvent(
      new Event("compareUpdated")
    );
  };

  return (

    <button
      onClick={handleCompare}
      className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
        added

          ? "border-[#FF4D8D] bg-[#FFF1F6] text-[#FF4D8D]"

          : "border-[#ECECEC] bg-white hover:bg-[#FAFAFB]"
      }`}
      aria-label={
        added
          ? `Remove ${company} from comparison`
          : `Add ${company} to comparison`
      }
    >

      {added ? "✓" : "+"}

    </button>
  );
}