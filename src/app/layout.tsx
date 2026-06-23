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
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
