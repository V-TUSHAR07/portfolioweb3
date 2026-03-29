"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "WEB3 & BLOCKCHAIN",
    label: "// web3",
    color: "#00ff88",
    trackColor: "rgba(0,255,136,0.08)",
    glowColor: "rgba(0,255,136,0.25)",
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
    trackColor: "rgba(0,212,255,0.08)",
    glowColor: "rgba(0,212,255,0.25)",
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
    trackColor: "rgba(255,0,128,0.08)",
    glowColor: "rgba(255,0,128,0.25)",
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
    trackColor: "rgba(0,255,136,0.08)",
    glowColor: "rgba(0,255,136,0.25)",
    skills: [
      { name: "Git / CI/CD", level: 92 },
      { name: "Docker", level: 80 },
      { name: "Figma", level: 78 },
      { name: "AWS", level: 75 },
    ],
  },
];

const TOTAL_SKILLS = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ~150.8

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function SkillCard({
  name,
  level,
  color,
  trackColor,
  glowColor,
  index,
}: {
  name: string;
  level: number;
  color: string;
  trackColor: string;
  glowColor: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      const timeout = setTimeout(() => setAnimated(true), index * 60);
      return () => clearTimeout(timeout);
    }
  }, [inView, animated, index]);

  const dashOffset = animated
    ? CIRCUMFERENCE - (level / 100) * CIRCUMFERENCE
    : CIRCUMFERENCE;

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="skill-card group"
      style={{
        "--card-color": color,
        "--card-glow": glowColor,
      } as React.CSSProperties}
    >
      {/* SVG circular progress */}
      <div className="skill-card-ring" aria-hidden="true">
        <svg width="68" height="68" viewBox="0 0 68 68">
          {/* Track circle */}
          <circle
            cx="34"
            cy="34"
            r={RADIUS}
            fill="none"
            stroke={trackColor}
            strokeWidth="3"
          />
          {/* Progress arc */}
          <circle
            cx="34"
            cy="34"
            r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "34px 34px",
              transition: animated
                ? `stroke-dashoffset 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 0.06}s`
                : "none",
              filter: animated ? `drop-shadow(0 0 4px ${color})` : "none",
            }}
          />
          {/* Center percentage */}
          <text
            x="34"
            y="38"
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-fira), var(--font-mono), monospace"
            fontWeight="700"
            fill={color}
          >
            {animated ? `${level}%` : "0%"}
          </text>
        </svg>
      </div>

      {/* Skill name */}
      <p className="skill-card-name font-mono">{name}</p>

      {/* Hover glow overlay */}
      <div className="skill-card-hover-glow" aria-hidden="true" />
    </motion.div>
  );
}

function CounterNumber({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6" aria-label="Skills section">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.025), transparent)",
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
            // CORE_SYSTEMS
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            <span style={{ color: "#e0ffe8" }}>Protocol </span>
            <span className="gradient-text-green">Matrix</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm mt-4 max-w-lg font-mono"
            style={{ color: "#6b8f78" }}
          >
            A deep stack spanning Web3, full-stack development, and modern tooling.
          </motion.p>
        </motion.div>

        {/* Category groups */}
        <div className="space-y-12">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={containerVariants}
            >
              {/* Category header */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="w-0.5 h-5 flex-shrink-0"
                  style={{
                    background: cat.color,
                    boxShadow: `0 0 8px ${cat.color}`,
                  }}
                />
                <h3
                  className="font-mono text-xs font-bold tracking-widest"
                  style={{ color: cat.color, letterSpacing: "0.18em" }}
                >
                  {cat.title}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${cat.color}30, transparent)`,
                  }}
                />
                <span
                  className="font-mono text-[10px]"
                  style={{ color: "#3a5c48" }}
                >
                  {cat.label}
                </span>
              </motion.div>

              {/* Skill cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    trackColor={cat.trackColor}
                    glowColor={cat.glowColor}
                    index={catIdx * 4 + skillIdx}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Auxiliary modules + counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(0,255,136,0.06)" }}
        >
          <p
            className="font-mono text-[10px] tracking-widest mb-4"
            style={{ color: "#3a5c48", letterSpacing: "0.25em" }}
          >
            // AUXILIARY_MODULES
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "IPFS",
              "OpenZeppelin",
              "Chainlink",
              "Uniswap_SDK",
              "Viem",
              "Zustand",
              "Prisma",
              "tRPC",
              "Vercel",
              "GitHub_Actions",
              "Linux",
              "Bash",
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

          {/* Counter */}
          <div className="flex items-center gap-3">
            <div className="pulse-dot-sm" />
            <p
              className="font-mono text-[11px]"
              style={{ color: "#6b8f78" }}
            >
              TOTAL_SKILLS_LOADED:{" "}
              <span className="gradient-text-green font-bold text-sm">
                <CounterNumber target={TOTAL_SKILLS} />
              </span>
              <span style={{ color: "#3a5c48" }}> / {TOTAL_SKILLS} modules online</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
