"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, Check, Loader2, AlertCircle } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { sendEmail } from "@/actions/sendEmail";

const contactInfo = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setStatusMsg("Please fill in name, email, and message.");
      return;
    }

    setStatus("loading");
    setStatusMsg("");

    const result = await sendEmail(form);

    if (result.success) {
      setStatus("success");
      setStatusMsg(result.message || "Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setStatusMsg(result.error || "Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.05)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.05)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-5"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 glass p-4 md:p-5 glass-hover group"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-violet-500/30 transition-all duration-200">
                  <item.icon className="text-cyan-400" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-dark-400 text-xs md:text-sm">{item.label}</p>
                  <p className="text-white font-medium text-sm md:text-base group-hover:text-cyan-400 transition-colors duration-200 truncate">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-xl glass glass-hover text-dark-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-xl glass glass-hover text-dark-300 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 md:p-3 rounded-xl glass glass-hover text-dark-300 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-5 md:p-6 space-y-4 md:space-y-5"
            >
              <div className="flex items-center gap-2 text-white font-semibold mb-1 md:mb-2">
                <MessageSquare size={18} className="text-cyan-400" />
                <span>Send a Message</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs md:text-sm text-dark-400 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 md:px-4 md:py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-500 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm text-dark-400 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 md:px-4 md:py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-500 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm text-dark-400 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What&apos;s this about?"
                  className="w-full px-3.5 py-2.5 md:px-4 md:py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-500 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-dark-400 mb-1">Message *</label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full px-3.5 py-2.5 md:px-4 md:py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-500 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 resize-none text-sm"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  {statusMsg}
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  <Check size={16} className="flex-shrink-0" />
                  {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
