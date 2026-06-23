"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { stats } from "@/data/stats";

function Counter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "").trim();
  const isNumeric = !isNaN(num);

  useEffect(() => {
    if (!isNumeric) {
      setCount(1);
      setDone(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = Math.ceil(num / 40);
          const timer = setInterval(() => {
            start += increment;
            if (start >= num) {
              setCount(num);
              setDone(true);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 40);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, isNumeric]);

  if (!isNumeric) return <div ref={ref}>{value}</div>;

  return (
    <div ref={ref}>
      {done ? value : count}
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass p-5 md:p-6 text-center glass-hover group"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-cyan-400" size={20} />
              </div>
              <div className="text-xl md:text-2xl font-bold gradient-text mb-1">
                <Counter value={stat.value} />
              </div>
              <div className="text-dark-400 text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
