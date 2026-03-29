"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "WEB3 & BLOCKCHAIN",
    label: "// web3",
    color: "#00ff88",
    bg: "rgba(0,255,136,0.03)",
    border: "rgba(0,255,136,0.12)",
    skills: [
      { name: "Solidity", level: 90 },
      { name: "Ethers.js / Wagmi", level: 85 },
      { name: "Hardhat / Foundry", level: 82 },
      { name: "The Graph", level: 78 },
    ],
  },
  {
    title: "FRONTEND",
    label: "// frontend",
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.03)",
    border: "rgba(0,212,255,0.12)",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "BACKEND",
    label: "// backend",
    color: "#ff0080",
    bg: "rgba(255,0,128,0.03)",
    border: "rgba(255,0,128,0.12)",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 82 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    title: "TOOLS & DEVOPS",
    label: "// devops",
    color: "#00ff88",
    bg: "rgba(0,255,136,0.03)",
    border: "rgba(0,255,136,0.12)",
    skills: [
      { name: "Git / CI/CD", level: 92 },
      { name: "Docker", level: 80 },
      { name: "Figma", level: 78 },
      { name: "AWS", level: 75 },
    ],
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

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="space-y-1.5 group">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono" style={{ color: "#6b8f78" }}>{name}</span>
        <span
          className="font-mono text-[11px] transition-all duration-200"
          style={{ color }}
        >
          LEVEL_{level}
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6" aria-label="Skills section">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.025), transparent)",
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
            // SKILLS
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            <span style={{ color: "#e0ffe8" }}>Technical </span>
            <span className="gradient-text-green">Arsenal</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm mt-4 max-w-lg" style={{ color: "#6b8f78" }}>
            A deep stack spanning Web3, full-stack development, and modern tooling.
          </motion.p>
        </motion.div>

        {/* Skill grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-5"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="rounded-sm p-6 glass-hover circuit-bg relative overflow-hidden"
              style={{
                background: cat.bg,
                border: `1px solid ${cat.border}`,
              }}
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-0.5 h-5"
                    style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                  />
                  <h3 className="font-mono text-xs font-bold tracking-widest" style={{ color: cat.color, letterSpacing: "0.18em" }}>
                    {cat.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px]" style={{ color: "#3a5c48" }}>
                  {cat.label}
                </span>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: "#3a5c48", letterSpacing: "0.25em" }}>
            // ALSO_FAMILIAR_WITH
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "IPFS", "OpenZeppelin", "Chainlink", "Uniswap_SDK",
              "Viem", "Zustand", "Prisma", "tRPC",
              "Vercel", "GitHub_Actions", "Linux", "Bash",
            ].map((t) => (
              <span
                key={t}
                className="tag"
                style={{
                  background: "rgba(0,255,136,0.03)",
                  border: "1px solid rgba(0,255,136,0.1)",
                  color: "#3a5c48",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
