import { Database, BarChart3, Users, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { icon: Server, label: "Experience", value: "2 Years" },
  { icon: Database, label: "Records Processed", value: "15M" },
  { icon: BarChart3, label: "Pipelines Built", value: "40+" },
  { icon: Users, label: "Clients Served", value: "20+" },
];

export const aboutSummary = [
  "With 2+ years of experience in data engineering and freelance development, I specialize in building scalable ETL pipelines, web data extraction systems, and data processing solutions. I have successfully processed over 15 million records, delivering reliable data infrastructure for analytics and business intelligence.",
  "As a top-rated freelancer on Fiverr, I have delivered 30+ projects for clients across 10+ countries, specializing in Python automation, web scraping, and custom data pipelines. My expertise spans the full data lifecycle — from extracting raw data to transforming, loading, and optimizing it for actionable insights.",
];
