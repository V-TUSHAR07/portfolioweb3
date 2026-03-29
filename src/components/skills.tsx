"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    color: "#3b82f6",
    trackColor: "rgba(59,130,246,0.1)",
    glowColor: "rgba(59,130,246,0.3)",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Rust", level: 70 },
      { name: "HTML5 / SCSS", level: 90 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    color: "#8b5cf6",
    trackColor: "rgba(139,92,246,0.1)",
    glowColor: "rgba(139,92,246,0.3)",
    skills: [
      { name: "Django", level: 90 },
      { name: "React.js", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "Anchor (Solana)", level: 72 },
    ],
  },
  {
    title: "Blockchain",
    color: "#f59e0b",
    trackColor: "rgba(245,158,11,0.1)",
    glowColor: "rgba(245,158,11,0.3)",
    skills: [
      { name: "Solana", level: 78 },
      { name: "Smart Contracts", level: 72 },
      { name: "PDAs / Anchor", level: 75 },
      { name: "@coral-xyz/anchor", level: 70 },
    ],
  },
  {
    title: "Tools & Practices",
    color: "#3b82f6",
    trackColor: "rgba(59,130,246,0.1)",
    glowColor: "rgba(59,130,246,0.3)",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "REST APIs", level: 90 },
      { name: "Chart.js", level: 82 },
      { name: "Leadership", level: 88 },
    ],
  },
];

const ALSO_FAMILIAR = [
  "Leadership",
  "Problem-solving",
  "Communication",
  "Fast Learner",
  "Team Collaboration",
  "Agile",
  "REST APIs",
  "Chart.js",
];

const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
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
  index,
}: {
  name: string;
  level: number;
  color: string;
  trackColor: string;
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
    >
      <div aria-hidden="true">
        <svg width="68" height="68" viewBox="0 0 68 68">
          <circle cx="34" cy="34" r={RADIUS} fill="none" stroke={trackColor} strokeWidth="3" />
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
              filter: animated ? `drop-shadow(0 0 3px ${color})` : "none",
            }}
          />
          <text
            x="34"
            y="38"
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-fira), monospace"
            fontWeight="700"
            fill={color}
          >
            {animated ? `${level}%` : "0%"}
          </text>
        </svg>
      </div>
      <p className="skill-card-name">{name}</p>
      <div className="skill-card-hover-glow" aria-hidden="true" />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6" aria-label="Skills section">
      <div
        className="absolute inset-0 pointer-events-none section-gradient-center"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.p variants={itemVariants} className="section-eyebrow mb-3">
            Skills
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            Tech Stack
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm mt-4 max-w-lg"
            style={{ color: "#a1a1aa" }}
          >
            Python, Django, React.js, FastAPI, Solana, Rust — and everything in between.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="w-0.5 h-5 flex-shrink-0 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="text-sm font-semibold" style={{ color: "#fafafa" }}>
                  {cat.title}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${cat.color}30, transparent)`,
                  }}
                />
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    trackColor={cat.trackColor}
                    index={catIdx * 5 + skillIdx}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs font-semibold mb-4" style={{ color: "#52525b" }}>
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {ALSO_FAMILIAR.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
