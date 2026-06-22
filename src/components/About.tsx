"use client";

import { motion } from "framer-motion";
import { aboutSummary } from "@/data/stats";
import { Database, Code2, Server, GitBranch } from "lucide-react";

const highlights = [
  { icon: Database, text: "Built ETL pipelines processing 5M+ records/month" },
  { icon: Code2, text: "20+ custom web scraping solutions delivered" },
  { icon: Server, text: "Real-time data streaming with Kafka & Spark" },
  { icon: GitBranch, text: "Automated CI/CD for data pipeline deployments" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="glass p-6 md:p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-on-glass">
                Data Engineer based in Ahmedabad, India
              </h3>
              {aboutSummary.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="text-on-glass-muted leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass p-4 flex items-center gap-3 glass-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-cyan-400" />
                </div>
                <span className="text-on-glass-secondary text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
