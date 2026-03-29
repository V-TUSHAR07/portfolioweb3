"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Send } from "lucide-react";
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
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative py-28 px-6" aria-label="Contact section">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(0,255,136,0.03), transparent)",
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
            // ESTABLISH_CONNECTION
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            <span style={{ color: "#e0ffe8" }}>Get In </span>
            <span className="gradient-text-green">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm mt-4 max-w-lg" style={{ color: "#6b8f78" }}>
            Have a project in mind? Looking for a Web3 expert or full-stack developer?
            Initiate a connection below.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="space-y-4"
          >
            {/* Label */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-[10px] tracking-widest mb-2"
              style={{ color: "#3a5c48", letterSpacing: "0.25em" }}
            >
              // COMMS_CHANNEL
            </motion.p>

            {/* Email */}
            <motion.a
              variants={itemVariants}
              href="mailto:tusharpatwadi@gmail.com"
              className="flex items-center gap-4 rounded-sm p-4 glass-hover group block"
              style={{
                background: "rgba(0,255,136,0.02)",
                border: "1px solid rgba(0,255,136,0.1)",
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(0,255,136,0.06)",
                  border: "1px solid rgba(0,255,136,0.15)",
                  borderRadius: "4px",
                }}
              >
                <Mail size={15} style={{ color: "#00ff88" }} />
              </div>
              <div>
                <div className="font-mono text-[10px] mb-0.5 tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.2em" }}>
                  EMAIL
                </div>
                <div className="text-xs transition-colors" style={{ color: "#6b8f78" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#e0ffe8")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b8f78")}
                >
                  tusharpatwadi@gmail.com
                </div>
              </div>
              <ArrowRight
                size={13}
                className="ml-auto"
                style={{ color: "#3a5c48" }}
              />
            </motion.a>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 rounded-sm p-4"
              style={{
                background: "rgba(0,212,255,0.02)",
                border: "1px solid rgba(0,212,255,0.1)",
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(0,212,255,0.06)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  borderRadius: "4px",
                }}
              >
                <MapPin size={15} style={{ color: "#00d4ff" }} />
              </div>
              <div>
                <div className="font-mono text-[10px] mb-0.5 tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.2em" }}>
                  LOCATION
                </div>
                <div className="text-xs" style={{ color: "#6b8f78" }}>India</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="pulse-dot-sm" />
                <span className="font-mono text-[10px]" style={{ color: "#00ff88" }}>REMOTE_OK</span>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={itemVariants}
              className="rounded-sm p-4"
              style={{
                background: "rgba(0,255,136,0.02)",
                border: "1px solid rgba(0,255,136,0.08)",
              }}
            >
              <div className="font-mono text-[10px] mb-4 tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.2em" }}>
                // SOCIAL_NODES
              </div>
              <div className="space-y-3">
                {[
                  { icon: GithubIcon, label: "GitHub", handle: "@V-TUSHAR07", href: "https://github.com/V-TUSHAR07", color: "#e0ffe8" },
                  { icon: LinkedinIcon, label: "LinkedIn", handle: "V. Tushar", href: "https://linkedin.com", color: "#00d4ff" },
                  { icon: TwitterIcon, label: "Twitter / X", handle: "@tushar", href: "https://twitter.com", color: "#00ff88" },
                ].map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors group"
                    style={{ color: "#6b8f78" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#e0ffe8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b8f78")}
                  >
                    <span style={{ color }} className="transition-transform group-hover:scale-110 inline-flex">
                      <Icon size={14} />
                    </span>
                    <span className="text-xs">{label}</span>
                    <span className="font-mono text-[10px] ml-auto" style={{ color: "#3a5c48" }}>{handle}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div
              variants={itemVariants}
              className="rounded-sm p-4 text-center"
              style={{
                background: "rgba(0,255,136,0.02)",
                border: "1px solid rgba(0,255,136,0.12)",
                boxShadow: "0 0 20px rgba(0,255,136,0.04)",
              }}
            >
              <div className="font-mono text-2xl font-bold" style={{ color: "#00ff88", textShadow: "0 0 16px rgba(0,255,136,0.4)" }}>
                &lt; 24h
              </div>
              <div className="font-mono text-[10px] mt-1 tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.2em" }}>
                AVG_RESPONSE_TIME
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-sm p-1"
              style={{
                background: "linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,212,255,0.08), rgba(255,0,128,0.08))",
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-sm p-7 space-y-5"
                style={{ background: "rgba(3,1,8,0.96)" }}
                noValidate
              >
                {/* Terminal decoration */}
                <div className="flex items-center gap-2 pb-4" style={{ borderBottom: "1px solid rgba(0,255,136,0.08)" }}>
                  <span className="pulse-dot-sm" />
                  <span className="font-mono text-[10px] tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.2em" }}>
                    // INIT_TRANSMISSION
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-mono text-[10px] mb-2 tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.18em" }}>
                      SENDER_NAME
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
                    <label htmlFor="email" className="block font-mono text-[10px] mb-2 tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.18em" }}>
                      EMAIL_ADDRESS
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
                  <label htmlFor="subject" className="block font-mono text-[10px] mb-2 tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.18em" }}>
                    SUBJECT
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
                  <label htmlFor="message" className="block font-mono text-[10px] mb-2 tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.18em" }}>
                    MESSAGE
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
                  className="btn-primary w-full font-mono font-bold py-3.5 text-xs tracking-widest flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ borderRadius: "4px", letterSpacing: "0.18em" }}
                >
                  {status === "idle" && (
                    <>
                      <Send size={14} />
                      TRANSMIT_MESSAGE
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <span
                        className="w-4 h-4 border-2 rounded-full inline-block"
                        style={{
                          borderColor: "rgba(3,1,8,0.3)",
                          borderTopColor: "#030108",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
                      TRANSMITTING...
                    </>
                  )}
                  {status === "sent" && "TRANSMISSION_COMPLETE"}
                  {status === "error" && "TRANSMISSION_FAILED — RETRY"}
                </button>

                {status === "sent" && (
                  <p className="text-center font-mono text-xs" style={{ color: "#00ff88", textShadow: "0 0 8px rgba(0,255,136,0.4)" }}>
                    &gt; Message received. Responding within 24 hours._
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
