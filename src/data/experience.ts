export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  isFreelance?: boolean;
  fiverrUrl?: string;
}

export const experiences: Experience[] = [
  {
    title: "Freelance Data Engineer & Web Scraping Expert",
    company: "Fiverr – Freelance",
    period: "2024 – Present",
    achievements: [
      "Delivered 30+ freelance projects on Fiverr including web scraping, data extraction, ETL pipelines, and automation solutions",
      "Built custom Python scrapers using Scrapy, BeautifulSoup, Selenium & Playwright for clients across 10+ countries",
      "Processed and cleaned 5M+ records for clients in e-commerce, real estate, finance, and lead generation domains",
      "Maintained 5-star Fiverr rating with 100% client satisfaction and repeat business from multiple clients",
      "Developed automated data pipelines and scheduled scraping jobs using Airflow and cron, delivering real-time datasets",
    ],
    isFreelance: true,
    fiverrUrl: "https://www.fiverr.com/pe/99QdXoY",
  },
  {
    title: "Data Engineer",
    company: "Purra.ai",
    period: "July 2025 – April 2026",
    achievements: [
      "Engineered scalable ETL pipelines processing 5M+ records/month using Python, Apache Spark, and Airflow",
      "Designed and maintained real-time data streaming architecture with Kafka, reducing data latency by 60%",
      "Built automated data quality monitoring system, improving data accuracy from 92% to 99.7%",
      "Optimized SQL queries and database schemas, cutting query execution time by 45%",
    ],
  },
  {
    title: "Python Developer – Web Scraping & Data Pipelines",
    company: "Actowiz Solutions",
    period: "September 2024 – July 2025",
    achievements: [
      "Developed 20+ custom web scraping solutions using Scrapy, BeautifulSoup, and Playwright for diverse clients",
      "Built robust data pipelines processing 10M+ records across e-commerce, trade, and certification domains",
      "Implemented anti-detection measures and proxy rotation, achieving 98% success rate on targeted sites",
      "Created automated monitoring and alerting system for pipeline failures, reducing downtime by 80%",
    ],
  },
];
