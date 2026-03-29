"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BarChart2, Shield, TrendingUp } from "lucide-react";
import { GithubIcon } from "./social-icons";

const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered UK Regional City Insight",
    description:
      "Web app visualising key socioeconomic indicators (population, housing, employment, rental costs) across UK regions. FastAPI backend serving prediction data with under 1-second response times. Interactive Chart.js dashboards with region selectors, historical vs. projected data overlays.",
    tags: ["React.js", "FastAPI", "Chart.js", "Python"],
    tagColors: ["cyan", "pink", "green", "green"],
    icon: BarChart2,
    accentColor: "#00ff88",
    accentBg: "rgba(0,255,136,0.06)",
    stats: [
      { label: "API", value: "<1s" },
      { label: "REGIONS", value: "10+" },
      { label: "CHARTS", value: "6" },
    ],
    status: "LIVE",
    github: "https://github.com/V-TUSHAR07",
    live: "#",
  },
  {
    id: 2,
    title: "Real-Time Stock Market Forecaster",
    description:
      "Stock market forecasting app displaying live data and prediction results for AAPL, TSLA, MSFT, GOOGL, AMZN. FastAPI backend serving ML model predictions. Chart.js dashboards showing historical prices, baseline vs. LSTM prediction lines, and MSE/RMSE error metrics.",
    tags: ["React.js", "FastAPI", "Chart.js", "Python"],
    tagColors: ["cyan", "pink", "green", "green"],
    icon: TrendingUp,
    accentColor: "#00d4ff",
    accentBg: "rgba(0,212,255,0.06)",
    stats: [
      { label: "TICKERS", value: "5" },
      { label: "MODEL", value: "LSTM" },
      { label: "LATENCY", value: "<1s" },
    ],
    status: "LIVE",
    github: "https://github.com/V-TUSHAR07",
    live: "#",
  },
  {
    id: 3,
    title: "MediSOS — Decentralized Medical Storage",
    description:
      "Blockchain app on Solana using Anchor framework for secure on-chain emergency medical data storage (blood group, allergies, conditions). Smart contracts in Rust with PDAs for unique user accounts, custom error handling, and input validation. TypeScript test suite using @coral-xyz/anchor.",
    tags: ["Rust", "Solana", "Anchor", "TypeScript"],
    tagColors: ["pink", "cyan", "green", "cyan"],
    icon: Shield,
    accentColor: "#ff0080",
    accentBg: "rgba(255,0,128,0.06)",
    stats: [
      { label: "CHAIN", value: "Solana" },
      { label: "LANG", value: "Rust" },
      { label: "TYPE", value: "dApp" },
    ],
    status: "ON-CHAIN",
    github: "https://github.com/V-TUSHAR07/mediSOS",
    live: "#",
  },
];

const TAG_STYLES: Record<string, { bg: string; border: string; color: string }> = {
  green: { bg: "rgba(0,255,136,0.07)", border: "rgba(0,255,136,0.2)", color: "#00ff88" },
  cyan: { bg: "rgba(0,212,255,0.07)", border: "rgba(0,212,255,0.2)", color: "#00d4ff" },
  pink: { bg: "rgba(255,0,128,0.07)", border: "rgba(255,0,128,0.2)", color: "#ff0080" },
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    card.style.transform = `perspective(800px) rotateX(${((y - cy) / cy) * -4}deg) rotateY(${((x - cx) / cx) * 4}deg) translateZ(2px)`;
    card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    card.style.transition = "transform 0.4s ease";
    setTimeout(() => { if (card) card.style.transition = ""; }, 400);
  }, []);

  const Icon = project.icon;

  return (
    <div ref={cardRef} className="project-card holo-border rounded-sm overflow-hidden relative" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(0,255,136,0.08)", transition: "box-shadow 0.3s ease" }}>
      <div className="project-spotlight" aria-hidden="true" />
      <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor === "#ff0080" ? "#00d4ff" : "#ff0080"}, transparent)` }} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center" style={{ background: project.accentBg, border: `1px solid ${project.accentColor}33`, borderRadius: "4px" }}>
              <Icon size={20} style={{ color: project.accentColor }} />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="pulse-dot-sm" style={{ background: project.accentColor }} />
              <span className="font-mono text-[9px] tracking-widest" style={{ color: project.accentColor, letterSpacing: "0.2em" }}>STATUS: {project.status}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}
              className="w-7 h-7 flex items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(0,255,136,0.03)", border: "1px solid rgba(0,255,136,0.1)", borderRadius: "3px", color: "#3a5c48" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00ff88"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#3a5c48"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.1)"; }}>
              <GithubIcon size={13} />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live`}
              className="w-7 h-7 flex items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.1)", borderRadius: "3px", color: "#3a5c48" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00d4ff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#3a5c48"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.1)"; }}>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
        <h3 className="font-bold mb-2" style={{ color: "#e0ffe8" }}>{project.title}</h3>
        <p className="text-xs leading-relaxed mb-5" style={{ color: "#6b8f78" }}>{project.description}</p>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {project.stats.map((stat) => (
            <div key={stat.label} className="text-center p-2" style={{ background: project.accentBg, border: `1px solid ${project.accentColor}22`, borderRadius: "3px" }}>
              <div className="font-mono font-bold text-sm" style={{ color: project.accentColor }}>{stat.value}</div>
              <div className="font-mono text-[9px] mt-0.5" style={{ color: "#3a5c48", letterSpacing: "0.1em" }}>{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => {
            const style = TAG_STYLES[project.tagColors[i]] || TAG_STYLES.green;
            return <span key={tag} className="tag" style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.color }}>{tag}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6" aria-label="Projects section">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,212,255,0.025), transparent)" }} aria-hidden="true" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={containerVariants} className="mb-16">
          <motion.p variants={itemVariants} className="section-label mb-3">// DEPLOYED_PROJECTS</motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            <span style={{ color: "#e0ffe8" }}>What I&apos;ve </span>
            <span className="gradient-text-green">Built</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm mt-4 max-w-lg" style={{ color: "#6b8f78" }}>
            From AI-powered dashboards to decentralized medical storage on Solana — projects that solve real problems.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={containerVariants} className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="flex justify-center mt-12">
          <a href="https://github.com/V-TUSHAR07" target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 font-mono font-bold px-7 py-3 text-xs tracking-widest"
            style={{ borderRadius: "4px", letterSpacing: "0.15em" }}>
            <GithubIcon size={14} />
            VIEW_ALL_ON_GITHUB
          </a>
        </motion.div>
      </div>
    </section>
  );
}
