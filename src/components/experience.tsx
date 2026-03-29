"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  { title: "1st Runner-up", event: "BIT Hackathon, 2024", color: "#00ff88" },
  { title: "Best Health-Tech Project", event: "DSATM Hackathon, 2024", color: "#00d4ff" },
  { title: "Second Round Qualifier", event: "RVITM, 2024", color: "#ff0080" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6" aria-label="Achievements section">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(0,212,255,0.02), transparent)" }} aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={containerVariants} className="mb-16">
          <motion.p variants={itemVariants} className="section-label mb-3">// ACHIEVEMENT_LOG</motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            <span style={{ color: "#e0ffe8" }}>Hackathons &amp; </span>
            <span className="gradient-text-green">Achievements</span>
          </motion.h2>
        </motion.div>

        {/* Achievements */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,255,136,0.25) 10%, rgba(0,255,136,0.25) 90%, transparent)" }} aria-hidden="true" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={containerVariants} className="space-y-8">
            {ACHIEVEMENTS.map((ach, i) => (
              <motion.div key={i} variants={itemVariants} className="relative pl-16">
                <div className="absolute left-[16px] top-6 w-[9px] h-[9px] rounded-full -translate-x-1/2"
                  style={{ background: ach.color, boxShadow: `0 0 12px ${ach.color}99, 0 0 24px ${ach.color}44`, animation: "pulse-green 2s ease-in-out infinite" }}
                  aria-hidden="true" />

                <div className="rounded-sm p-6 glass-hover scanlines" style={{ background: `${ach.color}08`, border: `1px solid ${ach.color}22` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy size={18} style={{ color: ach.color }} />
                    <h3 className="text-base font-bold" style={{ color: "#e0ffe8" }}>{ach.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: ach.color }} aria-hidden="true" />
                    <span className="font-mono text-xs" style={{ color: ach.color }}>{ach.event}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={containerVariants} className="mt-20">
          <motion.p variants={itemVariants} className="section-label mb-6">// EDUCATION_LOG</motion.p>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.25) 10%, rgba(0,212,255,0.25) 90%, transparent)" }} aria-hidden="true" />

            <motion.div variants={containerVariants} className="space-y-8">
              {[
                { school: "AMC Engineering College", degree: "B.E. in Computer Science and Engineering", period: "ONGOING", color: "#00d4ff", current: true },
                { school: "Jnana Sweekar PU College", degree: "PU in PCMCs", period: "COMPLETED", color: "#00ff88", current: false },
              ].map((edu, i) => (
                <motion.div key={i} variants={itemVariants} className="relative pl-16">
                  <div className="absolute left-[16px] top-6 w-[9px] h-[9px] rounded-full -translate-x-1/2"
                    style={{ background: edu.color, boxShadow: `0 0 12px ${edu.color}99`, animation: edu.current ? "pulse-green 2s ease-in-out infinite" : undefined }}
                    aria-hidden="true" />

                  <div className="rounded-sm p-6 glass-hover" style={{ background: `${edu.color}06`, border: `1px solid ${edu.color}15` }}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h3 className="text-base font-bold" style={{ color: "#e0ffe8" }}>{edu.school}</h3>
                      <span className="font-mono text-[10px] px-2 py-0.5 tracking-widest"
                        style={{ background: `${edu.color}12`, border: `1px solid ${edu.color}30`, color: edu.color, borderRadius: "2px", letterSpacing: "0.18em" }}>
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: "#6b8f78" }}>{edu.degree}</p>
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
