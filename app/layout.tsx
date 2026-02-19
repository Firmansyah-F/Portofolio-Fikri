import { Inter } from "next/font/google";

import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fikri Firmansyah | Front-End Software Engineer",
  description:
    "Front-End Software Engineer with 4+ years experience in React, Next.js, and scalable web applications.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Fikri Firmansyah",
  ],
  openGraph: {
    title: "Fikri Firmansyah Portfolio",
    description:
      "Modern Front-End Software Engineer specializing in React & Next.js.",
    url: "https://fikrifirmansyah.dev",
    siteName: "Fikri Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
