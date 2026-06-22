import { Database, BarChart3, Users, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { icon: Server, label: "Experience", value: "1.5+ Years" },
  { icon: Database, label: "Records Processed", value: "15M+" },
  { icon: BarChart3, label: "Pipelines Built", value: "10+" },
  { icon: Users, label: "Clients Served", value: "20+" },
];

export const aboutSummary = [
  "With 1.5+ years of experience in data engineering, I specialize in building scalable ETL pipelines, web data extraction systems, and data processing solutions. I have successfully processed over 15 million records, delivering reliable data infrastructure for analytics and business intelligence.",
  "My expertise spans the full data lifecycle — from extracting raw data from diverse sources to transforming, loading, and optimizing it for actionable insights. I am passionate about automating workflows, ensuring data quality, and building systems that scale.",
];
