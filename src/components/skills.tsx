"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Web3 & Blockchain",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.06)",
    border: "rgba(6,182,212,0.15)",
    skills: [
      { name: "Solidity", level: 90 },
      { name: "Ethers.js / Wagmi", level: 85 },
      { name: "Hardhat / Foundry", level: 82 },
      { name: "The Graph", level: 78 },
    ],
  },
  {
    title: "Frontend",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    color: "#d946ef",
    bg: "rgba(217,70,239,0.06)",
    border: "rgba(217,70,239,0.15)",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 82 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "#10b981",
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.15)",
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
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#94a3b8]">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
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
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6" aria-label="Skills section">
      {/* Subtle section bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,92,246,0.04), transparent)",
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
            02. Skills
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title text-[#f1f5f9]">
            Technical{" "}
            <span className="gradient-text-violet">Arsenal</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#64748b] mt-4 max-w-lg">
            A deep stack spanning Web3, full-stack development, and modern tooling.
          </motion.p>
        </motion.div>

        {/* Skill grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 glass-hover"
              style={{ borderColor: cat.border, background: cat.bg }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-5 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="font-semibold text-[#f1f5f9]">{cat.title}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
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
          <p className="text-xs font-mono text-[#475569] uppercase tracking-widest mb-4">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "IPFS", "OpenZeppelin", "Chainlink", "Uniswap SDK",
              "Viem", "Zustand", "Prisma", "tRPC",
              "Vercel", "GitHub Actions", "Linux", "Bash",
            ].map((t) => (
              <span
                key={t}
                className="tag"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#64748b",
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
