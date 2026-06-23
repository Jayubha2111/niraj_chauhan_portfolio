"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { experiences } from "@/data/experience";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Timeline() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,212,191,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative space-y-8 md:space-y-12">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-teal-500/50" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-0 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-[11px] top-1.5 w-[25px] h-[25px] rounded-full bg-dark-900 border-2 border-cyan-400 items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-[9px] h-[9px] rounded-full bg-cyan-400"
                />
              </div>

              <div className="glass p-5 md:p-8 glass-hover">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    {exp.isFreelance ? (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="flex-shrink-0 text-green-400">
                        <path d="M23.075 7.385h-4.024s.068-1.396.068-2.401c0-1.272-.839-1.876-1.762-1.876-1.537 0-2.383 1.274-2.383 2.97v3.307h-3.85V3.078H11.12v1.376c-.576-1.087-1.634-1.66-2.814-1.66C5.34 2.794 3.5 4.753 3.5 7.438c0 2.921 1.483 4.159 4.163 4.159 1.28 0 2.34-.43 3.033-1.14v.949h3.85v6.818c0 2.828-1.43 4.292-3.88 4.292-1.892 0-3.078-.963-3.587-2.098h-.003l-3.335 1.4C4.35 23.042 6.87 24 9.726 24c5.243 0 8.647-3.09 8.647-8.202V8.458c1.518 1.093 3.327 1.698 4.702 1.698V7.385z"/>
                      </svg>
                    ) : (
                      <Briefcase size={18} className="flex-shrink-0" />
                    )}
                    <h3 className="text-lg md:text-xl font-semibold text-on-glass">
                      {exp.title}
                    </h3>
                    {exp.isFreelance && (
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                        Freelance
                      </span>
                    )}
                  </div>
                  <span className="sm:ml-auto text-xs md:text-sm text-dark-400 flex items-center gap-1 flex-shrink-0">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>

                <p className="text-violet-400 font-medium mb-3 md:mb-4 text-sm md:text-base flex items-center gap-2">
                  {exp.company}
                  {exp.fiverrUrl && (
                    <a
                      href={exp.fiverrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-green-400 hover:text-green-300 transition-colors"
                    >
                      View Profile →
                    </a>
                  )}
                </p>

                <ul className="space-y-2 md:space-y-3">
                  {exp.achievements.map((ach, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-2 text-on-glass-muted text-sm md:text-base"
                    >
                      <ChevronRight size={15} className="mt-0.5 text-teal-400 flex-shrink-0" />
                      <span>{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
