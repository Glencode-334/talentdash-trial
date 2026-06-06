"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingCompare() {

  const [companies, setCompanies] =
    useState<string[]>([]);

  useEffect(() => {

    const syncCompanies = () => {

      const stored =
        localStorage.getItem(
          "compareCompanies"
        );

      setCompanies(
        stored ? JSON.parse(stored) : []
      );
    };

    syncCompanies();

    window.addEventListener(
      "compareUpdated",
      syncCompanies
    );

    return () => {

      window.removeEventListener(
        "compareUpdated",
        syncCompanies
      );
    };

  }, []);

  if (companies.length === 0) {
    return null;
  }

  return (

    <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:bottom-6">

      <div className="rounded-2xl border border-[#F1F1F1] bg-white/95 p-4 shadow-2xl backdrop-blur">

        <div className="flex items-center justify-between gap-4">

          {/* LEFT */}

          <div className="min-w-0">

            <p className="text-xs font-medium uppercase tracking-wide text-[#FF4D8D]">

              Compare Companies

            </p>

            <div className="mt-2 flex flex-wrap items-center gap-2">

              {companies.map((company) => (

                <div
                  key={company}
                  className="rounded-xl bg-[#FFF1F6] px-3 py-1 text-xs font-medium text-[#FF4D8D]"
                >

                  {company}

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-2">

            {/* CLEAR */}

            <button
              onClick={() => {

                localStorage.removeItem(
                  "compareCompanies"
                );

                setCompanies([]);

                window.dispatchEvent(
                  new Event(
                    "compareUpdated"
                  )
                );
              }}
              className="rounded-xl border border-[#ECECEC] px-3 py-2 text-xs font-medium transition-all duration-200 hover:bg-[#FAFAFB]"
            >

              Clear

            </button>

            {/* VIEW */}

            <Link
              href="/compare"
              className="rounded-xl bg-[#FF4D8D] px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            >

              View Compare →

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}