export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export const experiences: Experience[] = [
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
