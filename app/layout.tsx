import type { Metadata } from "next";

import "./globals.css";

import { Navbar } from "@/components/features/Navbar";
import { Footer } from "@/components/features/Footer";
import { FloatingCompare } from "@/components/features/FloatingCompare";

export const metadata: Metadata = {

  title: {
    default: "TalentDash",
    template: "%s | TalentDash",
  },

  description:
    "Modern career intelligence platform for salaries, company reviews, interviews, and workplace insights.",

  keywords: [
    "TalentDash",
    "Salaries",
    "Company Reviews",
    "Engineering Jobs",
    "Workplace Insights",
    "Compare Companies",
  ],

  metadataBase: new URL(
    "https://talentdash-trial-rose.vercel.app"
  ),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {

  return (

    <html
      lang="en"
      data-scroll-behavior="smooth"
    >

      <body className="min-h-screen bg-[#FCFCFD] text-[#111827]">

        {/* NAVBAR */}

        <Navbar />

        {/* PAGE */}

        <div className="relative">

          {children}

        </div>

        {/* FLOATING COMPARE */}

        <FloatingCompare />

        {/* FOOTER */}

        <Footer />

      </body>

    </html>
  );
}