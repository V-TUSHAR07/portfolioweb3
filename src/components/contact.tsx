"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
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
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(139,92,246,0.05), transparent)",
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
          <motion.p variants={itemVariants} className="section-eyebrow mb-3">
            Contact
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm mt-4 max-w-lg"
            style={{ color: "#a1a1aa" }}
          >
            Have a project in mind? Looking for a Django developer, Python dev, or Web3 builder?
            Let&apos;s talk.
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
            {/* Email */}
            <motion.a
              variants={itemVariants}
              href="mailto:tusharpatwadi2003@gmail.com"
              className="flex items-center gap-4 rounded-xl p-4 transition-all duration-200 block"
              style={{
                background: "rgba(59,130,246,0.05)",
                border: "1px solid rgba(59,130,246,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.12)";
                (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.05)";
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0 rounded-lg"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <Mail size={15} style={{ color: "#60a5fa" }} />
              </div>
              <div>
                <div className="text-xs font-semibold mb-0.5" style={{ color: "#52525b" }}>
                  Email
                </div>
                <div className="text-sm" style={{ color: "#a1a1aa" }}>
                  tusharpatwadi2003@gmail.com
                </div>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 rounded-xl p-4"
              style={{
                background: "rgba(139,92,246,0.05)",
                border: "1px solid rgba(139,92,246,0.12)",
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0 rounded-lg"
                style={{
                  background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.2)",
                }}
              >
                <MapPin size={15} style={{ color: "#a78bfa" }} />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold mb-0.5" style={{ color: "#52525b" }}>
                  Location
                </div>
                <div className="text-sm" style={{ color: "#a1a1aa" }}>
                  Bengaluru, Karnataka
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="status-dot" />
                <span className="text-xs font-medium" style={{ color: "#4ade80" }}>
                  Remote OK
                </span>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-xs font-semibold mb-4" style={{ color: "#52525b" }}>
                Social
              </div>
              <div className="space-y-3">
                {[
                  {
                    icon: GithubIcon,
                    label: "GitHub",
                    handle: "@V-TUSHAR07",
                    href: "https://github.com/V-TUSHAR07",
                  },
                  {
                    icon: LinkedinIcon,
                    label: "LinkedIn",
                    handle: "v-tushar-94839b267",
                    href: "https://linkedin.com/in/v-tushar-94839b267",
                  },
                  {
                    icon: TwitterIcon,
                    label: "Twitter / X",
                    handle: "@vtushar",
                    href: "https://twitter.com",
                  },
                ].map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors group"
                    style={{ color: "#71717a" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#fafafa")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#71717a")
                    }
                  >
                    <Icon size={14} />
                    <span className="text-sm">{label}</span>
                    <span
                      className="text-xs ml-auto"
                      style={{ color: "#3f3f46" }}
                    >
                      {handle}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl p-4 text-center"
              style={{
                background: "rgba(59,130,246,0.05)",
                border: "1px solid rgba(59,130,246,0.12)",
              }}
            >
              <div
                className="text-2xl font-extrabold gradient-text"
              >
                &lt; 24h
              </div>
              <div className="text-xs mt-1 font-medium" style={{ color: "#71717a" }}>
                Average response time
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div
              className="rounded-xl p-1"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1))",
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-xl p-7 space-y-5"
                style={{ background: "rgba(12,12,14,0.98)" }}
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "#71717a" }}
                    >
                      Name
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
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "#71717a" }}
                    >
                      Email
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
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold mb-2"
                    style={{ color: "#71717a" }}
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold mb-2"
                    style={{ color: "#71717a" }}
                  >
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
                  className="btn-primary w-full py-3.5 gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "idle" && (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <span
                        className="w-4 h-4 border-2 rounded-full inline-block"
                        style={{
                          borderColor: "rgba(255,255,255,0.3)",
                          borderTopColor: "#ffffff",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  )}
                  {status === "sent" && "Message sent!"}
                  {status === "error" && "Failed to send — please try again"}
                </button>

                {status === "sent" && (
                  <p
                    className="text-center text-sm font-medium"
                    style={{ color: "#4ade80" }}
                  >
                    Message received. I will respond within 24 hours.
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
