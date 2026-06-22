import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niraj Chauhan | Data Engineer",
  description:
    "Portfolio of Niraj Chauhan — Data Engineer specializing in ETL pipelines, web data extraction, and scalable data solutions. 1.5+ years of experience, 15M+ records processed.",
  keywords: [
    "Data Engineer",
    "ETL",
    "Python",
    "Web Scraping",
    "Data Pipeline",
    "Portfolio",
    "Niraj Chauhan",
  ],
  openGraph: {
    title: "Niraj Chauhan | Data Engineer",
    description:
      "Data Engineer specializing in ETL pipelines, web data extraction, and scalable data solutions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
