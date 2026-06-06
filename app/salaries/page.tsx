import type { Metadata } from "next";

import { SalariesClientPage } from "@/components/features/SalariesClientPage";

export const metadata: Metadata = {
  title:
    "Engineering Salaries | TalentDash",

  description:
    "Explore engineering compensation benchmarks, salary ranges, stock packages, and workplace insights across top tech companies.",

  alternates: {
    canonical:
      "https://talentdash.vercel.app/salaries",
  },

  openGraph: {
    title:
      "Engineering Salaries | TalentDash",

    description:
      "Compare compensation, stock packages, and salary benchmarks across leading companies.",

    url:
      "https://talentdash.vercel.app/salaries",

    siteName:
      "TalentDash",

    type: "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Engineering Salaries | TalentDash",

    description:
      "Explore engineering compensation benchmarks across leading tech companies.",
  },
};

export default function SalariesPage() {

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "WebPage",

    name:
      "Engineering Salaries",

    description:
      "Explore salary benchmarks, compensation insights, and workplace trends across leading companies.",

    url:
      "https://talentdash.vercel.app/salaries",
  };

  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(jsonLd),
        }}
      />

      <SalariesClientPage />

    </>
  );
}