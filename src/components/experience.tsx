"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Freelance Web3 Developer",
    company: "Independent",
    period: "2024 → PRESENT",
    current: true,
    description:
      "Built DeFi protocols and NFT platforms for multiple clients worldwide. Deployed 20+ smart contracts to mainnet including yield vaults, DEX routers, and soulbound token contracts.",
    highlights: [
      "Deployed 20+ smart contracts to Ethereum mainnet & L2s",
      "Built yield aggregators handling $2M+ TVL",
      "Delivered 6 client projects with 100% on-time delivery",
      "Integrated ZK proofs for privacy-preserving verification",
    ],
    color: "#00ff88",
    bg: "rgba(0,255,136,0.02)",
    border: "rgba(0,255,136,0.1)",
  },
  {
    role: "Blockchain Developer",
    company: "CryptoNova",
    period: "2022 → 2024",
    current: false,
    description:
      "Led frontend development for a DEX aggregator processing $50M+ monthly volume. Integrated wallet connections, transaction signing, and gas optimization flows.",
    highlights: [
      "Built DEX aggregator UI handling $50M+ monthly volume",
      "Integrated 12 wallet providers via WalletConnect v2",
      "Reduced transaction failure rate by 35% via gas optimization",
      "Led team of 3 frontend engineers",
    ],
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.02)",
    border: "rgba(0,212,255,0.1)",
  },
  {
    role: "Frontend Engineer",
    company: "TechPulse",
    period: "2020 → 2022",
    current: false,
    description:
      "Built component libraries and analytics dashboards serving 50K+ daily active users. Focused on performance optimization and developer experience.",
    highlights: [
      "Built design system with 60+ reusable components",
      "Reduced bundle size by 40% via code splitting & tree shaking",
      "Improved Core Web Vitals scores to 95+ across all metrics",
      "Mentored 2 junior developers",
    ],
    color: "#ff0080",
    bg: "rgba(255,0,128,0.02)",
    border: "rgba(255,0,128,0.1)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6" aria-label="Experience section">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(0,212,255,0.02), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.p variants={itemVariants} className="section-label mb-3">
            // EXPERIENCE_LOG
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            <span style={{ color: "#e0ffe8" }}>My </span>
            <span className="gradient-text-green">Journey</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,255,136,0.25) 10%, rgba(0,255,136,0.25) 90%, transparent)",
            }}
            aria-hidden="true"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="space-y-10"
          >
            {EXPERIENCE.map((exp, i) => (
              <motion.div key={i} variants={itemVariants} className="relative pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-[16px] top-6 w-[9px] h-[9px] rounded-full -translate-x-1/2"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}99, 0 0 24px ${exp.color}44`,
                    animation: exp.current ? "pulse-green 2s ease-in-out infinite" : undefined,
                  }}
                  aria-hidden="true"
                />

                {/* Card */}
                <div
                  className="rounded-sm p-6 glass-hover scanlines"
                  style={{ background: exp.bg, border: `1px solid ${exp.border}` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold" style={{ color: "#e0ffe8" }}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span
                            className="font-mono text-[9px] px-2 py-0.5 tracking-widest"
                            style={{
                              background: "rgba(0,255,136,0.08)",
                              border: "1px solid rgba(0,255,136,0.2)",
                              color: "#00ff88",
                              borderRadius: "2px",
                              letterSpacing: "0.18em",
                            }}
                          >
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: exp.color }}
                          aria-hidden="true"
                        />
                        <span className="font-mono text-xs font-medium" style={{ color: exp.color }}>
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    {/* Period */}
                    <div
                      className="font-mono text-xs px-2.5 py-1"
                      style={{
                        color: exp.color,
                        background: `${exp.color}08`,
                        border: `1px solid ${exp.color}22`,
                        borderRadius: "3px",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#6b8f78" }}>
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "#94a3b8" }}>
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: exp.color, boxShadow: `0 0 4px ${exp.color}` }}
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
