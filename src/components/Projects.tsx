"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(6,182,212,0.05)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing impactful data engineering projects that solve real-world problems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, idx }: { project: (typeof projects)[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <motion.div
      variants={cardVariants}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass p-5 md:p-6 glass-hover flex flex-col group cursor-pointer transition-transform duration-200 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        <project.icon className="text-cyan-400" size={22} />
      </div>

      <h3 className="text-base md:text-lg font-semibold text-on-glass mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-on-glass-muted text-xs md:text-sm leading-relaxed mb-4 md:mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 md:px-2.5 md:py-1 text-[10px] md:text-xs rounded-md bg-subtle text-on-glass-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1 text-cyan-400 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
        <span>View Details</span>
        <ArrowUpRight size={13} />
      </div>
    </motion.div>
  );
}
