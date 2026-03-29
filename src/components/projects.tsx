"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Cpu, BarChart2, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "./social-icons";

const PROJECTS = [
  {
    id: 1,
    title: "ChainVault DeFi",
    description:
      "Multi-chain yield aggregator with auto-compounding vaults. Maximizes returns across 8 chains with gas-optimized smart contracts and a real-time APY dashboard.",
    tags: ["Solidity", "React", "DeFi"],
    tagColors: ["cyan", "violet", "fuchsia"],
    icon: Layers,
    iconColor: "#06b6d4",
    iconBg: "rgba(6,182,212,0.1)",
    accentColor: "#06b6d4",
    gradient: "from-cyan-500/10 to-violet-600/10",
    stats: [
      { label: "TVL", value: "$2.4M" },
      { label: "Chains", value: "8" },
      { label: "APY", value: "18%" },
    ],
    github: "https://github.com/V-TUSHAR07",
    live: "#",
  },
  {
    id: 2,
    title: "NexID",
    description:
      "Decentralized identity platform with soulbound tokens and ZK-proof verification. Self-sovereign identity that lets users prove credentials without revealing data.",
    tags: ["Web3", "ZK-Proofs", "Next.js"],
    tagColors: ["violet", "cyan", "violet"],
    icon: Cpu,
    iconColor: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.1)",
    accentColor: "#8b5cf6",
    gradient: "from-violet-600/10 to-fuchsia-500/10",
    stats: [
      { label: "Users", value: "1.2K" },
      { label: "Proofs", value: "4.8K" },
      { label: "Uptime", value: "99.9%" },
    ],
    github: "https://github.com/V-TUSHAR07",
    live: "#",
  },
  {
    id: 3,
    title: "PulseBoard",
    description:
      "Real-time analytics dashboard with WebSocket streams, interactive charts, and team workspaces. Sub-100ms data latency with smart caching and incremental rendering.",
    tags: ["TypeScript", "WebSockets", "PostgreSQL"],
    tagColors: ["cyan", "violet", "fuchsia"],
    icon: BarChart2,
    iconColor: "#d946ef",
    iconBg: "rgba(217,70,239,0.1)",
    accentColor: "#d946ef",
    gradient: "from-fuchsia-500/10 to-violet-600/10",
    stats: [
      { label: "Latency", value: "<80ms" },
      { label: "Events/s", value: "10K" },
      { label: "Users", value: "200+" },
    ],
    github: "https://github.com/V-TUSHAR07",
    live: "#",
  },
  {
    id: 4,
    title: "NFT Studio Pro",
    description:
      "End-to-end NFT creation platform with lazy minting, IPFS storage, and marketplace integration. Deploy collections in minutes with royalty management built in.",
    tags: ["ERC-721", "IPFS", "React"],
    tagColors: ["fuchsia", "cyan", "violet"],
    icon: ImageIcon,
    iconColor: "#10b981",
    iconBg: "rgba(16,185,129,0.1)",
    accentColor: "#10b981",
    gradient: "from-emerald-500/10 to-cyan-500/10",
    stats: [
      { label: "NFTs Minted", value: "12K+" },
      { label: "Collections", value: "140" },
      { label: "Volume", value: "180 ETH" },
    ],
    github: "https://github.com/V-TUSHAR07",
    live: "#",
  },
];

const TAG_STYLES: Record<string, { bg: string; border: string; color: string }> = {
  cyan: {
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.25)",
    color: "#67e8f9",
  },
  violet: {
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.25)",
    color: "#c4b5fd",
  },
  fuchsia: {
    bg: "rgba(217,70,239,0.1)",
    border: "rgba(217,70,239,0.25)",
    color: "#f0abfc",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

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
    const rotateX = ((y - cy) / cy) * -4;
    const rotateY = ((x - cx) / cx) * 4;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(2px)`;
    card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    card.style.transition = "transform 0.4s ease";
    setTimeout(() => {
      if (card) card.style.transition = "";
    }, 400);
  }, []);

  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      className="project-card glass rounded-2xl overflow-hidden relative"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: "box-shadow 0.3s ease" }}
    >
      {/* Spotlight overlay */}
      <div className="project-spotlight" aria-hidden="true" />

      {/* Top accent bar */}
      <div
        className="h-0.5"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}44, transparent)`,
        }}
      />

      {/* Card content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: project.iconBg, border: `1px solid ${project.accentColor}33` }}
          >
            <Icon size={22} style={{ color: project.iconColor }} />
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#64748b] hover:text-[#f1f5f9] transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#64748b] hover:text-[#f1f5f9] transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#f1f5f9] mb-2">{project.title}</h3>
        <p className="text-sm text-[#64748b] leading-relaxed mb-5">{project.description}</p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-2 rounded-lg"
              style={{
                background: `${project.iconBg}`,
                border: `1px solid ${project.accentColor}22`,
              }}
            >
              <div
                className="text-base font-bold font-mono"
                style={{ color: project.accentColor }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-[#475569] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => {
            const style = TAG_STYLES[project.tagColors[i]] || TAG_STYLES.cyan;
            return (
              <span
                key={tag}
                className="tag"
                style={{
                  background: style.bg,
                  border: `1px solid ${style.border}`,
                  color: style.color,
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6" aria-label="Projects section">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(6,182,212,0.04), transparent)",
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
            03. Projects
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-title text-[#f1f5f9]">
            What I&apos;ve{" "}
            <span className="gradient-text-cyan">Built</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#64748b] mt-4 max-w-lg">
            From DeFi protocols to real-time dashboards — projects that ship to production.
          </motion.p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/V-TUSHAR07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-[#f1f5f9] font-medium px-7 py-3 rounded-xl text-sm"
          >
            <GithubIcon size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
