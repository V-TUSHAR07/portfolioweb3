"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, GraduationCap } from "lucide-react";

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

        <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {/* Bio */}
            <motion.div
              variants={itemVariants}
              className="mb-6 rounded-xl p-5"
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
              className="text-sm leading-relaxed mb-6"
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

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="mb-8 rounded-xl p-4 space-y-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={15} style={{ color: "#60a5fa" }} />
                <span className="text-xs font-semibold" style={{ color: "#60a5fa" }}>
                  Education
                </span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#fafafa" }}>
                    AMC Engineering College
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#a1a1aa" }}>
                    B.E. in Computer Science and Engineering
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-md shrink-0"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    color: "#4ade80",
                  }}
                >
                  Ongoing
                </span>
              </div>
              <div className="pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <p className="text-sm font-semibold" style={{ color: "#fafafa" }}>
                  Jnana Sweekar PU College
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#a1a1aa" }}>PU in PCMCs</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-sm mb-10"
              style={{ color: "#a1a1aa" }}
            >
              <MapPin size={13} style={{ color: "#3b82f6" }} />
              <span>Bengaluru, Karnataka</span>
              <span className="mx-2" style={{ color: "#3f3f46" }}>&bull;</span>
              <span className="status-dot" />
              <span className="text-xs font-medium" style={{ color: "#4ade80" }}>
                Open to work
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div variants={containerVariants} className="grid sm:grid-cols-3 gap-4">
              {STATS.map((s) => (
                <motion.div
                  key={s.label}
                  variants={itemVariants}
                  className="rounded-xl p-5 transition-all duration-200"
                  style={{
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                  }}
                  whileHover={{ y: -2 }}
                >
                  <div className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>
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
          </motion.div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Card header */}
              <div
                className="relative h-48 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.1) 50%, rgba(245,158,11,0.06) 100%)",
                }}
              >
                <div
                  className="w-20 h-20 flex items-center justify-center text-2xl font-extrabold rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fafafa",
                    letterSpacing: "-0.02em",
                  }}
                >
                  VT
                </div>
                <div
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <span className="status-dot" style={{ width: "5px", height: "5px" }} />
                  <span className="text-xs" style={{ color: "#4ade80" }}>Available</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-base mb-0.5" style={{ color: "#fafafa" }}>
                  V. Tushar
                </h3>
                <p className="text-xs mb-5" style={{ color: "#a1a1aa" }}>
                  Django Dev · Python · Web3 Builder
                </p>

                <div className="space-y-2.5 mb-5">
                  {[
                    { label: "Django / FastAPI", value: "Advanced" },
                    { label: "React.js / Next.js", value: "Advanced" },
                    { label: "Python", value: "Expert" },
                    { label: "Solana / Rust", value: "Intermediate" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#71717a" }}>
                        {item.label}
                      </span>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-md"
                        style={{
                          background: "rgba(59,130,246,0.08)",
                          border: "1px solid rgba(59,130,246,0.15)",
                          color: "#60a5fa",
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
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#a1a1aa",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#fafafa";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(59,130,246,0.3)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(59,130,246,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#a1a1aa";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.03)";
                  }}
                >
                  <ExternalLink size={13} />
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
