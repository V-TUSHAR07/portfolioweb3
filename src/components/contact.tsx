"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with actual API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative py-28 px-6" aria-label="Contact section">
      {/* Gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(6,182,212,0.05), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.p variants={itemVariants} className="section-label mb-3">
            05. Contact
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title text-[#f1f5f9]">
            Let&apos;s{" "}
            <span className="gradient-text-cyan">Work Together</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#64748b] mt-4 max-w-lg">
            Have a project in mind? Looking for a Web3 expert or full-stack developer?
            I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Email card */}
            <motion.a
              variants={itemVariants}
              href="mailto:tusharpatwadi@gmail.com"
              className="flex items-center gap-4 glass rounded-xl p-5 glass-hover group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-xs text-[#475569] font-mono mb-0.5">Email</div>
                <div className="text-sm text-[#94a3b8] group-hover:text-[#f1f5f9] transition-colors">
                  tusharpatwadi@gmail.com
                </div>
              </div>
              <ArrowRight
                size={14}
                className="ml-auto text-[#334155] group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
              />
            </motion.a>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 glass rounded-xl p-5"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-violet-500/10 border border-violet-500/20 flex-shrink-0">
                <MapPin size={18} className="text-violet-400" />
              </div>
              <div>
                <div className="text-xs text-[#475569] font-mono mb-0.5">Location</div>
                <div className="text-sm text-[#94a3b8]">India</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-xs">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <span className="text-emerald-400 font-mono">Remote OK</span>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="glass rounded-xl p-5">
              <div className="text-xs text-[#475569] font-mono mb-4">Social</div>
              <div className="space-y-3">
                {[
                  {
                    icon: GithubIcon,
                    label: "GitHub",
                    handle: "@V-TUSHAR07",
                    href: "https://github.com/V-TUSHAR07",
                    color: "#f1f5f9",
                  },
                  {
                    icon: LinkedinIcon,
                    label: "LinkedIn",
                    handle: "V. Tushar",
                    href: "https://linkedin.com",
                    color: "#0ea5e9",
                  },
                  {
                    icon: TwitterIcon,
                    label: "Twitter / X",
                    handle: "@tushar",
                    href: "https://twitter.com",
                    color: "#06b6d4",
                  },
                ].map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#64748b] hover:text-[#f1f5f9] transition-colors group"
                  >
                    <span style={{ color }} className="group-hover:scale-110 transition-transform inline-flex"><Icon size={16} /></span>
                    <span className="text-sm">{label}</span>
                    <span className="text-xs font-mono ml-auto text-[#475569]">{handle}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Response time badge */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-4 text-center"
              style={{
                background: "rgba(6,182,212,0.04)",
                borderColor: "rgba(6,182,212,0.15)",
              }}
            >
              <div className="text-2xl font-bold text-cyan-400 font-mono">&lt; 24h</div>
              <div className="text-xs text-[#64748b] mt-1">Average response time</div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#475569] mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#475569] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-[#475569] mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="DeFi protocol development"
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[#475569] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-primary w-full text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "idle" && (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                      style={{ animation: "spin 0.8s linear infinite" }}
                    />
                    Sending...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <span>Message Sent!</span>
                  </>
                )}
                {status === "error" && "Failed — Try Again"}
              </button>

              {status === "sent" && (
                <p className="text-center text-sm text-emerald-400 font-mono">
                  I&apos;ll get back to you within 24 hours.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
