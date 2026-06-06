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

  const [companiesLength, setCompaniesLength] =
    useState(0);

  const [showToast, setShowToast] =
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

      setCompaniesLength(
        companies.length
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

      if (companies.length >= 3) {

        setShowToast(true);

        setTimeout(() => {

          setShowToast(false);

        }, 2500);

        return;
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

    setCompaniesLength(
      companies.length
    );

    window.dispatchEvent(
      new Event("compareUpdated")
    );
  };

  return (

    <>
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

      {/* TOAST */}

      {showToast && (

        <div className="pointer-events-none fixed top-24 left-1/2 z-[999] w-fit -translate-x-1/2 rounded-2xl bg-[#111827] px-5 py-3 text-sm font-medium text-white shadow-2xl">

          You can compare up to 3 companies only.

        </div>
      )}
    </>
  );
}