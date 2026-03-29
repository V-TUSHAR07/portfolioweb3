"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Zap, Globe, ExternalLink } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    label: "Smart Contracts",
    value: "20+",
    sub: "Deployed to mainnet",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: Zap,
    label: "Projects Built",
    value: "30+",
    sub: "Web3 & Full Stack",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    icon: Globe,
    label: "Years Experience",
    value: "4+",
    sub: "Professional work",
    color: "#d946ef",
    bg: "rgba(217,70,239,0.08)",
    border: "rgba(217,70,239,0.2)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6" aria-label="About section">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.p variants={itemVariants} className="section-label mb-3">
            00. About Me
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title text-[#f1f5f9]">
            Who I Am
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#94a3b8] leading-relaxed mb-6"
            >
              I craft high-performance web applications and decentralized protocols. From{" "}
              <span className="text-cyan-400 font-medium">Solidity smart contracts</span> to{" "}
              <span className="text-violet-400 font-medium">React frontends</span>, I build products
              that are fast, secure, and user-first.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-[#64748b] leading-relaxed mb-8"
            >
              Currently exploring{" "}
              <span className="text-fuchsia-400 font-medium">ZK proofs</span>,{" "}
              <span className="text-cyan-400 font-medium">DeFi composability</span>, and on-chain
              governance. I&apos;ve deployed over 20 smart contracts to mainnet and have a deep
              passion for building open, permissionless financial infrastructure.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-[#64748b] text-sm mb-8"
            >
              <MapPin size={14} className="text-cyan-500" />
              <span>Based in India</span>
              <span className="mx-2 text-[#334155]">&bull;</span>
              <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block" />
              <span className="text-emerald-400">Open to remote work</span>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-3 gap-4"
            >
              {HIGHLIGHTS.map((h) => (
                <motion.div
                  key={h.label}
                  variants={itemVariants}
                  className="glass rounded-xl p-5 glass-hover"
                  style={{
                    background: h.bg,
                    borderColor: h.border,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${h.bg}`, border: `1px solid ${h.border}` }}
                  >
                    <h.icon size={18} style={{ color: h.color }} />
                  </div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: h.color }}
                  >
                    {h.value}
                  </div>
                  <div className="text-sm font-medium text-[#f1f5f9] mb-0.5">{h.label}</div>
                  <div className="text-xs text-[#64748b]">{h.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="glass rounded-2xl overflow-hidden">
              {/* Avatar placeholder with gradient */}
              <div
                className="relative h-64 flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(139,92,246,0.12) 50%, rgba(217,70,239,0.08) 100%)",
                }}
              >
                {/* Hexagonal avatar placeholder */}
                <div className="relative">
                  <div
                    className="w-28 h-28 rounded-2xl flex items-center justify-center text-5xl font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))",
                      border: "1px solid rgba(6,182,212,0.3)",
                      boxShadow: "0 0 40px rgba(6,182,212,0.15)",
                    }}
                  >
                    <span className="gradient-text-full">T</span>
                  </div>
                  {/* Online badge */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#0a0a1a]" />
                </div>

                {/* Decorative corner shapes */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 border border-cyan-500/20"
                  style={{ transform: "rotate(45deg)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-4 left-4 w-6 h-6 border border-violet-500/20 rounded"
                  aria-hidden="true"
                />
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#f1f5f9] mb-0.5">V. Tushar</h3>
                <p className="text-sm text-[#64748b] font-mono mb-4">
                  Full Stack &amp; Web3 Developer
                </p>

                <div className="space-y-2 mb-5">
                  {[
                    { label: "Solidity", value: "Expert" },
                    { label: "React / Next.js", value: "Expert" },
                    { label: "DeFi Protocols", value: "Advanced" },
                    { label: "ZK Proofs", value: "Intermediate" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-xs">
                      <span className="text-[#64748b] font-mono">{item.label}</span>
                      <span
                        className="px-2 py-0.5 rounded font-medium"
                        style={{
                          background:
                            item.value === "Expert"
                              ? "rgba(6,182,212,0.1)"
                              : item.value === "Advanced"
                              ? "rgba(139,92,246,0.1)"
                              : "rgba(217,70,239,0.1)",
                          color:
                            item.value === "Expert"
                              ? "#67e8f9"
                              : item.value === "Advanced"
                              ? "#c4b5fd"
                              : "#f0abfc",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://github.com/V-TUSHAR07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
                  style={{
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <ExternalLink size={14} />
                  View GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
