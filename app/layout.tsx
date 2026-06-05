import type { Metadata } from "next";
import { Sidebar } from "@/components/features/Sidebar";
import { Navbar } from "@/components/features/Navbar";
import { Footer } from "@/components/features/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  title: {
    default: "TalentDash",
    template: "%s | TalentDash",
  },

  description:
    "Explore salary intelligence, compensation insights, and workplace analytics from top technology companies.",

  openGraph: {

    title: "TalentDash",

    description:
      "Explore salary intelligence and workplace insights.",

    type: "website",
  },

  twitter: {

    card: "summary_large_image",

    title: "TalentDash",

    description:
      "Explore salary intelligence and workplace insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
