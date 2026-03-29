"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, GraduationCap } from "lucide-react";
import { GithubIcon } from "./social-icons";
/* eslint-disable @next/next/no-img-element */

const STATS = [
  {
    label: "Hackathon Wins",
    value: "3+",
    sub: "Awards & qualifications",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.06)",
    border: "rgba(59,130,246,0.15)",
  },
  {
    label: "Projects Built",
    value: "6+",
    sub: "Django, React, Solana",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
  },
  {
    label: "Languages",
    value: "6",
    sub: "Python, JS, TS, Rust, HTML, SCSS",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
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
      <div
        className="absolute inset-0 pointer-events-none section-gradient-blue"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.p variants={itemVariants} className="section-eyebrow mb-3">
            About
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            Who I Am
          </motion.h2>
        </motion.div>

        {/* ─── Top: Large profile image + intro side by side ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid md:grid-cols-[280px_1fr] gap-10 mb-14 items-center"
        >
          {/* Profile image — large, prominent */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
            <div className="relative">
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden relative"
                style={{
                  border: "2px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.1)",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="V Tushar"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle gradient overlay at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(12,12,14,0.6), transparent)",
                  }}
                />
              </div>

              {/* Status badge floating on image */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(12,12,14,0.85)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="status-dot" style={{ width: "6px", height: "6px" }} />
                <span className="text-xs font-medium" style={{ color: "#4ade80" }}>
                  Open to work
                </span>
              </div>

              {/* Decorative gradient ring behind image */}
              <div
                className="absolute -inset-[3px] rounded-3xl pointer-events-none -z-10"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #3b82f6)",
                  opacity: 0.15,
                  filter: "blur(1px)",
                }}
              />
            </div>
          </motion.div>

          {/* Intro text */}
          <motion.div variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              className="mb-5 rounded-xl p-5"
              style={{
                background: "rgba(59,130,246,0.04)",
                border: "1px solid rgba(59,130,246,0.12)",
              }}
            >
              <p className="text-base leading-relaxed" style={{ color: "#a1a1aa" }}>
                Full-stack web developer with a passion for building clean, impactful applications
                — from dynamic{" "}
                <span style={{ color: "#60a5fa" }}>Django &amp; React.js</span> platforms to
                decentralized{" "}
                <span style={{ color: "#a78bfa" }}>Web3 apps on Solana</span>. I write code that
                works, ships on time, and solves real problems.
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm leading-relaxed mb-5"
              style={{ color: "#a1a1aa" }}
            >
              Currently pursuing a{" "}
              <span style={{ color: "#60a5fa" }}>B.E. in Computer Science</span> at AMC Engineering
              College, Bengaluru. Building with{" "}
              <span style={{ color: "#60a5fa" }}>Python, Django, FastAPI</span> on the backend and{" "}
              <span style={{ color: "#a78bfa" }}>React.js, TypeScript</span> on the frontend.
              Exploring blockchain development with{" "}
              <span style={{ color: "#fbbf24" }}>Rust &amp; Anchor on Solana</span>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="flex items-center gap-1.5 text-sm" style={{ color: "#a1a1aa" }}>
                <MapPin size={13} style={{ color: "#3b82f6" }} />
                <span>Bengaluru, Karnataka</span>
              </div>
              <a
                href="https://github.com/V-TUSHAR07"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: "#60a5fa" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#93bbfd")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#60a5fa")}
              >
                <GithubIcon size={13} />
                V-TUSHAR07
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ─── Education ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-xl p-5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={15} style={{ color: "#60a5fa" }} />
              <span className="text-xs font-semibold" style={{ color: "#60a5fa" }}>
                Education
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                className="rounded-lg p-4"
                style={{
                  background: "rgba(59,130,246,0.04)",
                  border: "1px solid rgba(59,130,246,0.1)",
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-semibold" style={{ color: "#fafafa" }}>
                    AMC Engineering College
                  </p>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                    style={{
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.2)",
                      color: "#4ade80",
                    }}
                  >
                    Ongoing
                  </span>
                </div>
                <p className="text-xs" style={{ color: "#a1a1aa" }}>
                  B.E. in Computer Science and Engineering
                </p>
              </div>
              <div
                className="rounded-lg p-4"
                style={{
                  background: "rgba(139,92,246,0.04)",
                  border: "1px solid rgba(139,92,246,0.1)",
                }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: "#fafafa" }}>
                  Jnana Sweekar PU College
                </p>
                <p className="text-xs" style={{ color: "#a1a1aa" }}>PU in PCMCs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Stats ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-3 gap-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="rounded-xl p-6 transition-all duration-200"
              style={{
                background: s.bg,
                border: `1px solid ${s.border}`,
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl font-extrabold mb-1.5" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-sm font-semibold mb-1" style={{ color: "#fafafa" }}>
                {s.label}
              </div>
              <div className="text-xs" style={{ color: "#71717a" }}>
                {s.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
