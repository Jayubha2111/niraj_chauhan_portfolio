"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Download, Mail, MapPin, ChevronDown,
  Database, Code2, Cpu, ExternalLink
} from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { scrollToSection } from "@/lib/utils";

const roles = ["Data Engineer", "Freelance Specialist", "ETL Pipeline Builder", "Data Architect", "Python Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      className="relative pt-16 md:pt-20 pb-10 md:pb-0 md:min-h-screen flex items-center justify-center overflow-hidden"
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

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-cyan-400 text-sm font-medium mb-5 md:mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-3 leading-[1.1]"
            >
              <span className="block md:inline">Hi, I&apos;m</span>{" "}
              <span className="gradient-text block md:inline">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-3 md:mb-3"
            >
              <Code2 size={18} className="text-violet-400" />
              <span className="text-xl md:text-xl lg:text-2xl text-on-glass-secondary font-light">
                {typingText}
                <span className="typing-cursor" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-dark-400 mb-2 md:mb-2 flex items-center justify-center lg:justify-start gap-1.5 text-sm md:text-base"
            >
              <MapPin size={16} /> {personalInfo.location}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-on-glass-muted max-w-xl mb-6 md:mb-6 text-sm md:text-base lg:text-lg leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 md:gap-3 justify-center lg:justify-start"
            >
              <a
                href="/Niraj_Chauhan_resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 text-sm md:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download size={18} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </a>
              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl glass glass-hover text-on-glass-secondary font-medium transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2.5 md:gap-3 mt-6 md:mt-6 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-xl glass glass-hover text-on-glass-muted hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-xl glass glass-hover text-on-glass-muted hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 md:p-3 rounded-xl glass glass-hover text-on-glass-muted hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={personalInfo.social.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-xl glass glass-hover text-on-glass-muted hover:text-green-400 hover:border-green-500/30 transition-all duration-200"
                aria-label="Fiverr"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M23.075 7.385h-4.024s.068-1.396.068-2.401c0-1.272-.839-1.876-1.762-1.876-1.537 0-2.383 1.274-2.383 2.97v3.307h-3.85V3.078H11.12v1.376c-.576-1.087-1.634-1.66-2.814-1.66C5.34 2.794 3.5 4.753 3.5 7.438c0 2.921 1.483 4.159 4.163 4.159 1.28 0 2.34-.43 3.033-1.14v.949h3.85v6.818c0 2.828-1.43 4.292-3.88 4.292-1.892 0-3.078-.963-3.587-2.098h-.003l-3.335 1.4C4.35 23.042 6.87 24 9.726 24c5.243 0 8.647-3.09 8.647-8.202V8.458c1.518 1.093 3.327 1.698 4.702 1.698V7.385z"/>
                </svg>
              </a>
              <div className="w-px h-7 md:h-8 bg-subtle mx-1 hidden sm:block" />
              <span className="text-dark-500 text-xs hidden sm:block">
                {personalInfo.email}
              </span>
            </motion.div>
          </div>

          {/* Right - Profile Card - BIG on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 w-full md:w-auto flex justify-center"
          >
            <div
              className="relative"
              style={{ animation: isMobile ? "none" : "float 5s ease-in-out infinite" }}
            >
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-teal-500/20 blur-3xl" />

              {/* Main card */}
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[340px] xl:h-[340px] rounded-3xl glass flex items-center justify-center overflow-hidden glow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-teal-500/10" />

                {/* Animated border ring */}
                <div className="absolute inset-1 rounded-[22px] border border-subtle" />

                {/* Profile Image */}
                <div className="relative z-10 w-full h-full">
                  <Image
                    src="/niraj.jpeg"
                    alt="Niraj Chauhan"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 320px, 340px"
                  />
                  {/* Strong gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                    <div className="text-white/80 text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium">
                      Data Engineer
                    </div>
                  </div>
                </div>

                {/* Decorative corner icons */}
                <Database size={14} className="absolute top-4 left-4 md:top-5 md:left-5 text-cyan-400/30 z-20" />
                <Cpu size={14} className="absolute top-4 right-4 md:top-5 md:right-5 text-violet-400/30 z-20" />
                <Code2 size={14} className="absolute bottom-4 left-4 md:bottom-5 md:left-5 text-teal-400/30 z-20" />
                <ExternalLink size={14} className="absolute bottom-4 right-4 md:bottom-5 md:right-5 text-cyan-400/30 z-20" />

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
                className="absolute -bottom-3 -right-3 glass px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-subtle z-30"
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Database size={12} className="text-cyan-400" />
                  <span className="text-[10px] md:text-xs text-on-glass-secondary font-medium">15M+ Records</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 glass px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-subtle z-30"
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Code2 size={12} className="text-violet-400" />
                  <span className="text-[10px] md:text-xs text-on-glass-secondary font-medium">2+ Yrs Exp</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Chevron - desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
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
