"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { personalInfo } from "@/data/personal";
import { scrollToSection } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled
          ? "var(--nav-bg, rgba(2,6,23,0.8))"
          : "transparent",
        borderColor: scrolled ? "var(--glass-border)" : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#hero");
            }}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
          >
         
            <span style={{ color: "var(--body-text)" }}>
              {personalInfo.initials}
            </span>
          
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                   className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-cyan-400 bg-black/5 dark:bg-white/10"
                      : "text-dark-400 hover:text-dark-700 dark:hover:text-dark-200 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2.5 rounded-xl glass text-dark-400 hover:text-dark-700 dark:hover:text-dark-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-4 mb-4 glass overflow-hidden"
        >
          <div className="p-2 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                   className={`block px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                    isActive
                      ? "text-cyan-400 bg-black/5 dark:bg-white/10"
                      : "text-dark-400 hover:text-dark-700 dark:hover:text-dark-200 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
