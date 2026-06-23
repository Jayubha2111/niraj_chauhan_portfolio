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
      "Engineered large-scale data acquisition and ETL pipelines processing 15M+ trade and certification records across multiple international platforms",
      "Designed scalable crawler architecture for dynamic, search-based, and paginated registry platforms,ensuring high reliability",
      "Extracted structured datasets from company directories (US, Canada, India), government contractor databases (CAGE codes), and global certification registries (Halal, Kosher, FSC, BRCGS, OEKO-TEX)",
      "Implemented batch processing, retry logic, proxy rotation, and structured logging, improving fault tolerance and reducing failure rates",
    ],
  },
  {
    title: "Python Developer – Web Scraping & Data Pipelines",
    company: "Actowiz Solutions",
    period: "September 2024 – July 2025",
    achievements: [
      "Developed automated web scraping pipelines for e-commerce, quick-commerce, pharmaceutical,restaurant, and retail platforms",
      "Extracted structured product data including pricing, ratings, stock availability, and seller information at scale",
      "Built data extraction workflows for industrial automation suppliers and B2B manufacturing catalogs",
      "Handled JavaScript-rendered platforms using Selenium and Playwright for dynamic data extraction",
      // "Designed and automated scraping workflows using Python and Windows Task Scheduler, reducing manual effort and enabling scheduled data collection",
      // "Stored and managed structured datasets in MySQL and MongoDB with optimized schema design",
      // "Improved parsing logic and selector strategies, increasing scraping efficiency and reducing execution time",
      // "Contributed to real estate and cruise industry data scraping projects",
    ],
  },
];
