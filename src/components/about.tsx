"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const STATS = [
  {
    label: "CONTRACTS",
    value: "20+",
    sub: "Deployed to mainnet",
    color: "#00ff88",
    bg: "rgba(0,255,136,0.04)",
    border: "rgba(0,255,136,0.15)",
  },
  {
    label: "PROJECTS",
    value: "30+",
    sub: "Web3 & Full Stack",
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.04)",
    border: "rgba(0,212,255,0.15)",
  },
  {
    label: "EXPERIENCE",
    value: "4+ YRS",
    sub: "Professional work",
    color: "#ff0080",
    bg: "rgba(255,0,128,0.04)",
    border: "rgba(255,0,128,0.15)",
  },
];

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

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6" aria-label="About section">
      {/* Subtle bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(0,255,136,0.025), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="grid-bg-hex absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.p variants={itemVariants} className="section-label mb-3">
            // ABOUT
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            <span className="gradient-text-green">About</span>{" "}
            <span style={{ color: "#e0ffe8" }}>Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {/* Terminal-style bio intro */}
            <motion.div
              variants={itemVariants}
              className="mb-6 rounded-sm p-5"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(0,255,136,0.12)",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
              }}
            >
              <p className="font-mono text-xs mb-1" style={{ color: "#3a5c48" }}>
                // bio.txt
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
                I craft high-performance web applications and decentralized protocols. From{" "}
                <span style={{ color: "#00ff88" }}>Solidity smart contracts</span> to{" "}
                <span style={{ color: "#00d4ff" }}>React frontends</span>, I build products
                that are fast, secure, and user-first.
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm leading-relaxed mb-8"
              style={{ color: "#6b8f78" }}
            >
              Currently exploring{" "}
              <span style={{ color: "#ff0080" }}>ZK proofs</span>,{" "}
              <span style={{ color: "#00ff88" }}>DeFi composability</span>, and on-chain
              governance. I&apos;ve deployed over 20 smart contracts to mainnet with a deep
              passion for building open, permissionless financial infrastructure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-sm mb-10"
              style={{ color: "#6b8f78" }}
            >
              <MapPin size={13} style={{ color: "#00ff88" }} />
              <span className="font-mono text-xs" style={{ color: "#3a5c48" }}>LOCATION:</span>
              <span>India</span>
              <span className="mx-2" style={{ color: "#1a3a28" }}>&bull;</span>
              <span className="pulse-dot-sm" />
              <span className="font-mono text-xs" style={{ color: "#00ff88" }}>REMOTE_OK</span>
            </motion.div>

            {/* Stats row — data readout cards */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-3 gap-4"
            >
              {STATS.map((s) => (
                <motion.div
                  key={s.label}
                  variants={itemVariants}
                  className="scanlines rounded-sm p-5 glass-hover relative overflow-hidden"
                  style={{
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                  }}
                >
                  {/* Pulsing dot */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="pulse-dot-sm" style={{ background: s.color, animation: "pulse-green 2s ease-in-out infinite" }} />
                    <span className="font-mono text-[10px] tracking-widest" style={{ color: s.color, letterSpacing: "0.2em" }}>
                      {s.label}
                    </span>
                  </div>
                  <div
                    className="text-3xl font-bold font-mono mb-1"
                    style={{ color: s.color, textShadow: `0 0 16px ${s.color}44` }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: "#3a5c48" }}>{s.sub}</div>
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
            <div
              className="rounded-sm overflow-hidden"
              style={{
                background: "rgba(0,255,136,0.02)",
                border: "1px solid rgba(0,255,136,0.1)",
              }}
            >
              {/* Avatar area */}
              <div
                className="relative h-56 flex items-center justify-center overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(0,212,255,0.06) 50%, rgba(255,0,128,0.04) 100%)",
                }}
              >
                <div className="relative">
                  <div
                    className="w-24 h-24 flex items-center justify-center text-5xl font-black font-mono"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      border: "1px solid rgba(0,255,136,0.3)",
                      borderRadius: "4px",
                      boxShadow: "0 0 30px rgba(0,255,136,0.15), inset 0 0 20px rgba(0,0,0,0.5)",
                      color: "#00ff88",
                      textShadow: "0 0 20px rgba(0,255,136,0.6)",
                    }}
                  >
                    T
                  </div>
                  {/* Online badge */}
                  <div
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full pulse-dot"
                    style={{ border: "2px solid #030108" }}
                  />
                </div>

                {/* Corner decorations */}
                <div
                  className="absolute top-3 right-3 w-6 h-6"
                  style={{ border: "1px solid rgba(0,212,255,0.2)", transform: "rotate(45deg)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-3 left-3 w-4 h-4"
                  style={{ border: "1px solid rgba(0,255,136,0.15)" }}
                  aria-hidden="true"
                />
                {/* Scan line decoration */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.3), transparent)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-bold mb-0.5" style={{ color: "#e0ffe8" }}>V. Tushar</h3>
                <p className="font-mono text-xs mb-4" style={{ color: "#6b8f78", letterSpacing: "0.06em" }}>
                  FULL_STACK // WEB3_DEV
                </p>

                <div className="space-y-2 mb-5">
                  {[
                    { label: "Solidity", value: "EXPERT", color: "#00ff88" },
                    { label: "React / Next.js", value: "EXPERT", color: "#00ff88" },
                    { label: "DeFi Protocols", value: "ADVANCED", color: "#00d4ff" },
                    { label: "ZK Proofs", value: "INTER.", color: "#ff0080" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="font-mono text-[11px]" style={{ color: "#3a5c48" }}>{item.label}</span>
                      <span
                        className="font-mono text-[10px] px-2 py-0.5"
                        style={{
                          background: `${item.color}11`,
                          border: `1px solid ${item.color}33`,
                          color: item.color,
                          borderRadius: "2px",
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
                  className="flex items-center justify-center gap-2 w-full py-2.5 font-mono text-xs transition-all duration-200"
                  style={{
                    border: "1px solid rgba(0,255,136,0.12)",
                    background: "rgba(0,255,136,0.02)",
                    color: "#6b8f78",
                    borderRadius: "3px",
                    letterSpacing: "0.1em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00ff88";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.3)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(0,255,136,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#6b8f78";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.12)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <ExternalLink size={12} />
                  VIEW_GITHUB_PROFILE
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
