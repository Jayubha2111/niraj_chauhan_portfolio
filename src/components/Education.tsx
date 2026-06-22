"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,212,191,0.03)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass p-6 md:p-8 glass-hover group">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="text-cyan-400" size={24} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {education.degree}
                </h3>
                <p className="text-violet-400 font-medium mb-2 text-sm md:text-base">
                  {education.institution}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs md:text-sm text-dark-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {education.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {education.location}
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex self-center">
                <Award size={32} className="text-dark-500 group-hover:text-cyan-400/50 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
