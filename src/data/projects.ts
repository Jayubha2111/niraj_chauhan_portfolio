import { Database, Globe, ShoppingCart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "End-to-End E-commerce Data Pipeline",
    description:
      "Designed and deployed a complete ETL pipeline for e-commerce data aggregation. Automates extraction from multiple platforms, transforms raw data into analytics-ready format, and loads into PostgreSQL for BI reporting.",
    icon: ShoppingCart,
    tags: ["Python", "Scrapy", "PostgreSQL", "Airflow", "Docker"],
  },
  {
    title: "Global Trade & Certification Data System",
    description:
      "Built a large-scale data extraction and processing system handling 15M+ records from global trade and certification databases. Implemented incremental updates, deduplication, and data validation pipelines.",
    icon: Globe,
    tags: ["Scrapy", "Playwright", "MongoDB", "Spark", "Kafka"],
  },
  {
    title: "Dynamic Website Data Extraction System",
    description:
      "Developed a configurable web extraction framework supporting JavaScript-rendered pages. Features include dynamic selector configuration, anti-bot measures, proxy rotation, and real-time monitoring dashboard.",
    icon: Database,
    tags: ["Playwright", "Selenium", "BeautifulSoup", "Redis", "FastAPI"],
  },
];
