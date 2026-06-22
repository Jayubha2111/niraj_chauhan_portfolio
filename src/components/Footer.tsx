"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Heart } from "lucide-react";
import { scrollToTop } from "@/lib/utils";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="relative border-t border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-xs md:text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with
            
          </p>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-cyan-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-cyan-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <div className="w-px h-4 bg-subtle" />
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="flex items-center gap-1.5 text-xs md:text-sm text-dark-500 hover:text-cyan-400 transition-colors duration-200"
            >
              Back to top
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
