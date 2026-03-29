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
      "Web app visualising key socioeconomic indicators (population, housing, employment, rental costs) across UK regions. FastAPI backend serving prediction data with under 1-second response times. Interactive Chart.js dashboards with region selectors and historical vs. projected data overlays.",
    tags: ["React.js", "FastAPI", "Chart.js", "Python"],
    tagClasses: ["tag-blue", "tag-purple", "tag-blue", "tag-blue"],
    icon: BarChart2,
    accentColor: "#3b82f6",
    accentBg: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.2)",
    stats: [
      { label: "API latency", value: "<1s" },
      { label: "Regions", value: "10+" },
      { label: "Charts", value: "6" },
    ],
    status: "Live",
    github: "https://github.com/V-TUSHAR07",
    live: "#",
  },
  {
    id: 2,
    title: "Real-Time Stock Market Forecaster",
    description:
      "Stock market forecasting app displaying live data and prediction results for AAPL, TSLA, MSFT, GOOGL, AMZN. FastAPI backend serving ML model predictions. Chart.js dashboards showing historical prices, baseline vs. LSTM prediction lines, and MSE/RMSE error metrics.",
    tags: ["React.js", "FastAPI", "Chart.js", "Python"],
    tagClasses: ["tag-blue", "tag-purple", "tag-blue", "tag-blue"],
    icon: TrendingUp,
    accentColor: "#8b5cf6",
    accentBg: "rgba(139,92,246,0.08)",
    accentBorder: "rgba(139,92,246,0.2)",
    stats: [
      { label: "Tickers", value: "5" },
      { label: "Model", value: "LSTM" },
      { label: "Latency", value: "<1s" },
    ],
    status: "Live",
    github: "https://github.com/V-TUSHAR07",
    live: "#",
  },
  {
    id: 3,
    title: "MediSOS — Decentralized Medical Storage",
    description:
      "Blockchain app on Solana using Anchor framework for secure on-chain emergency medical data storage (blood group, allergies, conditions). Smart contracts in Rust with PDAs for unique user accounts, custom error handling, and input validation. TypeScript test suite using @coral-xyz/anchor.",
    tags: ["Rust", "Solana", "Anchor", "TypeScript"],
    tagClasses: ["tag-amber", "tag-amber", "tag-purple", "tag-blue"],
    icon: Shield,
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
    stats: [
      { label: "Chain", value: "Solana" },
      { label: "Language", value: "Rust" },
      { label: "Type", value: "dApp" },
    ],
    status: "On-chain",
    github: "https://github.com/V-TUSHAR07/mediSOS",
    live: "#",
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
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
    card.style.transform = `perspective(800px) rotateX(${((y - cy) / cy) * -3}deg) rotateY(${((x - cx) / cx) * 3}deg) translateZ(2px)`;
    card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    card.style.transition = "transform 0.4s ease";
    setTimeout(() => {
      if (card) card.style.transition = "";
    }, 400);
  }, []);

  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      className="project-card rounded-xl overflow-hidden relative"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-[2px]"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
        }}
      />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
              style={{
                background: project.accentBg,
                border: `1px solid ${project.accentBorder}`,
              }}
            >
              <Icon size={20} style={{ color: project.accentColor }} />
            </div>
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: project.accentBg,
                border: `1px solid ${project.accentBorder}`,
                color: project.accentColor,
              }}
            >
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#71717a",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fafafa";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#71717a";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <GithubIcon size={14} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#71717a",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fafafa";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#71717a";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <h3 className="font-bold text-base mb-2" style={{ color: "#fafafa" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#a1a1aa" }}>
          {project.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-2.5 rounded-lg"
              style={{
                background: project.accentBg,
                border: `1px solid ${project.accentBorder}`,
              }}
            >
              <div
                className="font-bold text-sm font-mono"
                style={{ color: project.accentColor }}
              >
                {stat.value}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "#71717a" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span key={tag} className={`tag ${project.tagClasses[i]}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6" aria-label="Projects section">
      <div
        className="absolute inset-0 pointer-events-none section-gradient-purple"
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
            Projects
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title">
            What I&apos;ve Built
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm mt-4 max-w-lg"
            style={{ color: "#a1a1aa" }}
          >
            From AI-powered dashboards to decentralized medical storage on Solana — projects
            that solve real problems.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-5"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/V-TUSHAR07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <GithubIcon size={16} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
