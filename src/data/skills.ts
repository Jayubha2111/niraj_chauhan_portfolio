export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Data Extraction",
    skills: ["Scrapy", "BeautifulSoup", "Selenium", "Playwright", "HTML/CSS", "XPath", "Regex"],
  },
  {
    title: "Data Engineering",
    skills: ["ETL Pipelines", "Apache Spark", "Kafka", "Airflow"],
  },
  {
    title: "Data Processing",
    skills: ["Pandas", "NumPy", "PySpark"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Automation",
    skills: ["Cron Jobs", "Shell Scripting", "Docker"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "OOP", "REST APIs"],
  },
  {
    title: "System Reliability",
    skills: ["Error Handling", "Logging", "Monitoring", "Debugging"],
  },
  {
    title: "Tools",
    skills: ["Git", "Linux", "Jupyter", "Postman", "VS Code"],
  },
];
