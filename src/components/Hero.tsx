"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Download, Mail, MapPin, ChevronDown,
  Database, Code2, Cpu, ExternalLink
} from "lucide-react";
import { personalInfo } from "@/data/personal";
import { scrollToSection } from "@/lib/utils";

const roles = ["Data Engineer", "ETL Pipeline Builder", "Data Architect", "Python Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const typingText = roles[roleIndex].slice(0, charIndex);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.12)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.08)_0%,_transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating data particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="data-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            opacity: 0.2 + Math.random() * 0.3,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-cyan-400 text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <Code2 size={20} className="text-violet-400" />
              <span className="text-xl md:text-2xl text-dark-200 font-light">
                {typingText}
                <span className="typing-cursor" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-dark-400 mb-2 flex items-center justify-center lg:justify-start gap-1.5"
            >
              <MapPin size={15} /> {personalInfo.location}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-dark-300 max-w-xl mb-8 text-base md:text-lg leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="/Niraj_Chauhan_resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download size={18} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </a>
              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-dark-200 font-medium transition-all duration-300 hover:scale-105"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass glass-hover text-dark-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass glass-hover text-dark-300 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl glass glass-hover text-dark-300 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <div className="w-px h-8 bg-white/10 mx-1" />
              <span className="text-dark-500 text-xs">
                {personalInfo.email}
              </span>
            </motion.div>
          </div>

          {/* Right - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex-shrink-0"
          >
            <div className="relative" style={{ animation: "float 5s ease-in-out infinite" }}>
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-teal-500/20 blur-3xl" />

              {/* Main card */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl glass flex items-center justify-center overflow-hidden glow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-teal-500/10" />

                {/* Animated border ring */}
                <div className="absolute inset-1 rounded-[22px] border border-white/5" />

                {/* Center initials */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-bold gradient-text opacity-80 mb-2">
                    {personalInfo.initials}
                  </div>
                  <div className="text-dark-400 text-xs uppercase tracking-[0.2em]">
                    Data Engineer
                  </div>
                </div>

                {/* Decorative corner icons */}
                <Database size={16} className="absolute top-5 left-5 text-cyan-400/30" />
                <Cpu size={16} className="absolute top-5 right-5 text-violet-400/30" />
                <Code2 size={16} className="absolute bottom-5 left-5 text-teal-400/30" />
                <ExternalLink size={16} className="absolute bottom-5 right-5 text-cyan-400/30" />

                {/* Rotating gradient border ring */}
                <div
                  className="absolute -inset-[2px] rounded-3xl opacity-50"
                  style={{
                    background: "conic-gradient(from 0deg, rgba(6,182,212,0.3), rgba(139,92,246,0.3), rgba(45,212,191,0.3), rgba(6,182,212,0.3))",
                    animation: "spin 4s linear infinite",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "2px",
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 glass px-4 py-2 rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-2">
                  <Database size={14} className="text-cyan-400" />
                  <span className="text-xs text-dark-200 font-medium">15M+ Records</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 glass px-4 py-2 rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-2">
                  <Code2 size={14} className="text-violet-400" />
                  <span className="text-xs text-dark-200 font-medium">1.5+ Yrs Exp</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-dark-500" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
