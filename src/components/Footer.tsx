"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Heart, ExternalLink } from "lucide-react";
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
            <a
              href={personalInfo.social.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-green-400 transition-colors duration-200"
              aria-label="Fiverr"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M23.075 7.385h-4.024s.068-1.396.068-2.401c0-1.272-.839-1.876-1.762-1.876-1.537 0-2.383 1.274-2.383 2.97v3.307h-3.85V3.078H11.12v1.376c-.576-1.087-1.634-1.66-2.814-1.66C5.34 2.794 3.5 4.753 3.5 7.438c0 2.921 1.483 4.159 4.163 4.159 1.28 0 2.34-.43 3.033-1.14v.949h3.85v6.818c0 2.828-1.43 4.292-3.88 4.292-1.892 0-3.078-.963-3.587-2.098h-.003l-3.335 1.4C4.35 23.042 6.87 24 9.726 24c5.243 0 8.647-3.09 8.647-8.202V8.458c1.518 1.093 3.327 1.698 4.702 1.698V7.385z"/>
              </svg>
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
