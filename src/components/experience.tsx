"use client";

import { motion } from "framer-motion";
import { Trophy, GraduationCap } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "1st Runner-up",
    event: "BIT Hackathon, 2024",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.06)",
    border: "rgba(59,130,246,0.15)",
  },
  {
    title: "Best Health-Tech Project",
    event: "DSATM Hackathon, 2024",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
  },
  {
    title: "Second Round Qualifier",
    event: "RVITM, 2024",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
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
    <section id="experience" className="relative py-28 px-6" aria-label="Achievements section">
      <div
        className="absolute inset-0 pointer-events-none section-gradient-blue"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.p variants={itemVariants} className="section-eyebrow mb-3">
            Experience
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            Achievements &amp; Education
          </motion.h2>
        </motion.div>

        {/* Achievements */}
        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px timeline-line"
            aria-hidden="true"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="space-y-6"
          >
            {ACHIEVEMENTS.map((ach, i) => (
              <motion.div key={i} variants={itemVariants} className="relative pl-16">
                <div
                  className="absolute left-[16px] top-6 w-[9px] h-[9px] rounded-full -translate-x-1/2"
                  style={{
                    background: ach.color,
                    boxShadow: `0 0 8px ${ach.color}66`,
                  }}
                  aria-hidden="true"
                />

                <div
                  className="rounded-xl p-6 transition-all duration-200"
                  style={{
                    background: ach.bg,
                    border: `1px solid ${ach.border}`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy size={17} style={{ color: ach.color }} />
                    <h3 className="text-base font-bold" style={{ color: "#fafafa" }}>
                      {ach.title}
                    </h3>
                  </div>
                  <p className="text-sm" style={{ color: "#a1a1aa" }}>
                    {ach.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-8"
          >
            <GraduationCap size={16} style={{ color: "#3b82f6" }} />
            <span className="section-eyebrow">Education</span>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(139,92,246,0.3) 10%, rgba(139,92,246,0.3) 90%, transparent)",
              }}
              aria-hidden="true"
            />

            <motion.div variants={containerVariants} className="space-y-6">
              {[
                {
                  school: "AMC Engineering College",
                  degree: "B.E. in Computer Science and Engineering",
                  period: "Ongoing",
                  color: "#3b82f6",
                  bg: "rgba(59,130,246,0.06)",
                  border: "rgba(59,130,246,0.15)",
                  current: true,
                },
                {
                  school: "Jnana Sweekar PU College",
                  degree: "PU in PCMCs",
                  period: "Completed",
                  color: "#8b5cf6",
                  bg: "rgba(139,92,246,0.06)",
                  border: "rgba(139,92,246,0.15)",
                  current: false,
                },
              ].map((edu, i) => (
                <motion.div key={i} variants={itemVariants} className="relative pl-16">
                  <div
                    className="absolute left-[16px] top-6 w-[9px] h-[9px] rounded-full -translate-x-1/2"
                    style={{
                      background: edu.color,
                      boxShadow: `0 0 8px ${edu.color}66`,
                    }}
                    aria-hidden="true"
                  />

                  <div
                    className="rounded-xl p-6 transition-all duration-200"
                    style={{
                      background: edu.bg,
                      border: `1px solid ${edu.border}`,
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h3 className="text-base font-bold" style={{ color: "#fafafa" }}>
                        {edu.school}
                      </h3>
                      <span
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{
                          background: edu.current
                            ? "rgba(34,197,94,0.08)"
                            : "rgba(255,255,255,0.06)",
                          border: edu.current
                            ? "1px solid rgba(34,197,94,0.2)"
                            : "1px solid rgba(255,255,255,0.1)",
                          color: edu.current ? "#4ade80" : "#a1a1aa",
                        }}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: "#a1a1aa" }}>
                      {edu.degree}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
