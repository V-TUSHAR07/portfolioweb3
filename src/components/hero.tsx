"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons";

const TAGLINES = [
  "Building decentralized futures",
  "Smart Contract Engineer",
  "Full Stack Architect",
  "DeFi Protocol Builder",
  "Open Source Advocate",
];

function useTypingEffect(phrases: string[], charDelay = 60, pauseMs = 1500) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && charIndex <= current.length) {
      const t = setTimeout(() => {
        setText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, charDelay);
      return () => clearTimeout(t);
    }

    if (!isDeleting && charIndex > current.length) {
      const t = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, charDelay / 2);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, phraseIndex, phrases, charDelay, pauseMs]);

  return text;
}

// CSS-only floating particles
function Particles() {
  const particles = [
    { size: 3, top: "10%", left: "5%", duration: "9s", delay: "0s", opacity: "0.4" },
    { size: 5, top: "20%", left: "15%", duration: "11s", delay: "1s", opacity: "0.25" },
    { size: 2, top: "35%", left: "8%", duration: "7s", delay: "2s", opacity: "0.5" },
    { size: 4, top: "60%", left: "3%", duration: "13s", delay: "0.5s", opacity: "0.3" },
    { size: 3, top: "80%", left: "12%", duration: "10s", delay: "3s", opacity: "0.4" },
    { size: 6, top: "15%", left: "85%", duration: "8s", delay: "1.5s", opacity: "0.2" },
    { size: 3, top: "30%", left: "92%", duration: "12s", delay: "0s", opacity: "0.4" },
    { size: 4, top: "50%", left: "88%", duration: "9s", delay: "2s", opacity: "0.3" },
    { size: 2, top: "70%", left: "95%", duration: "14s", delay: "1s", opacity: "0.5" },
    { size: 5, top: "85%", left: "80%", duration: "8s", delay: "3s", opacity: "0.25" },
    { size: 3, top: "5%", left: "45%", duration: "11s", delay: "0.8s", opacity: "0.35" },
    { size: 2, top: "90%", left: "40%", duration: "7s", delay: "2.5s", opacity: "0.45" },
    { size: 4, top: "45%", left: "50%", duration: "16s", delay: "1.2s", opacity: "0.15" },
    { size: 3, top: "25%", left: "60%", duration: "10s", delay: "0.3s", opacity: "0.3" },
    { size: 5, top: "75%", left: "55%", duration: "9s", delay: "4s", opacity: "0.2" },
    { size: 2, top: "55%", left: "25%", duration: "13s", delay: "1.8s", opacity: "0.4" },
    { size: 3, top: "40%", left: "70%", duration: "11s", delay: "0.6s", opacity: "0.3" },
    { size: 4, top: "65%", left: "35%", duration: "8s", delay: "2.2s", opacity: "0.35" },
    { size: 2, top: "95%", left: "65%", duration: "12s", delay: "3.5s", opacity: "0.25" },
    { size: 6, top: "42%", left: "78%", duration: "15s", delay: "0.9s", opacity: "0.15" },
  ];

  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: i % 3 === 0 ? "#06b6d4" : i % 3 === 1 ? "#8b5cf6" : "#d946ef",
            ["--duration" as string]: p.duration,
            ["--delay" as string]: p.delay,
            ["--opacity-start" as string]: p.opacity,
            ["--opacity-end" as string]: String(parseFloat(p.opacity) * 1.8),
          }}
        />
      ))}
    </div>
  );
}

// Geometric floating shapes
function GeoShapes() {
  const shapes = [
    {
      type: "border",
      w: 60,
      h: 60,
      top: "18%",
      left: "8%",
      border: "1px solid rgba(6,182,212,0.2)",
      rotate: "45deg",
      duration: "14s",
      delay: "0s",
    },
    {
      type: "border",
      w: 40,
      h: 40,
      top: "65%",
      left: "6%",
      border: "1px solid rgba(139,92,246,0.25)",
      rotate: "0deg",
      duration: "11s",
      delay: "2s",
    },
    {
      type: "border",
      w: 80,
      h: 80,
      top: "30%",
      left: "88%",
      border: "1px solid rgba(217,70,239,0.2)",
      rotate: "30deg",
      duration: "16s",
      delay: "1s",
    },
    {
      type: "border",
      w: 50,
      h: 50,
      top: "75%",
      left: "85%",
      border: "1px solid rgba(6,182,212,0.15)",
      rotate: "15deg",
      duration: "12s",
      delay: "3s",
    },
    {
      type: "filled",
      w: 8,
      h: 8,
      top: "22%",
      left: "75%",
      background: "rgba(6,182,212,0.3)",
      rotate: "45deg",
      duration: "9s",
      delay: "0.5s",
    },
    {
      type: "filled",
      w: 6,
      h: 6,
      top: "55%",
      left: "18%",
      background: "rgba(139,92,246,0.4)",
      rotate: "0deg",
      duration: "13s",
      delay: "1.5s",
    },
  ];

  return (
    <div className="particles-container" aria-hidden="true">
      {shapes.map((s, i) => (
        <div
          key={i}
          className="geo-shape"
          style={{
            width: s.w,
            height: s.h,
            top: s.top,
            left: s.left,
            border: s.border,
            background: s.background,
            borderRadius: s.type === "filled" ? "2px" : "0",
            transform: `rotate(${s.rotate})`,
            ["--duration" as string]: s.duration,
            ["--delay" as string]: s.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const typedText = useTypingEffect(TAGLINES, 60, 1500);
  const heroRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Grid background */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Gradient orbs */}
      <div
        className="hero-orb w-96 h-96 bg-cyan-500/[0.12]"
        style={{
          top: "10%",
          left: "-5%",
          animation: "orb-drift 18s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="hero-orb w-80 h-80 bg-violet-600/[0.12]"
        style={{
          top: "20%",
          right: "-5%",
          animation: "orb-drift 22s ease-in-out infinite reverse",
          animationDelay: "3s",
        }}
        aria-hidden="true"
      />
      <div
        className="hero-orb w-64 h-64 bg-fuchsia-500/[0.08]"
        style={{
          bottom: "15%",
          left: "30%",
          animation: "orb-drift 16s ease-in-out infinite",
          animationDelay: "8s",
        }}
        aria-hidden="true"
      />

      {/* Particles & shapes */}
      <Particles />
      <GeoShapes />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block" style={{ animation: "blink 2s step-end infinite" }} />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3.5rem,10vw,7rem)] font-bold leading-[1.0] tracking-tight mb-4"
        >
          <span className="text-[#f1f5f9]">Hi, I&apos;m </span>
          <span className="gradient-text-full">Tushar</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.1rem,3vw,1.5rem)] text-[#94a3b8] font-medium mb-4"
        >
          Full Stack &amp; Web3 Developer
        </motion.div>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="h-10 flex items-center justify-center mb-8"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="text-[clamp(1rem,2.5vw,1.25rem)] font-mono text-[#64748b]">
            {typedText}
            <span className="typing-cursor" aria-hidden="true" />
          </span>
        </motion.div>

        {/* Bio snippet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#64748b] text-base leading-relaxed max-w-xl mx-auto mb-10"
        >
          Crafting high-performance web apps and decentralized protocols.
          Smart contracts to React frontends — fast, secure, user-first.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-white font-semibold px-7 py-3 rounded-xl text-sm"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline text-[#f1f5f9] font-semibold px-7 py-3 rounded-xl text-sm"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.26 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          {[
            { href: "https://github.com/V-TUSHAR07", icon: GithubIcon, label: "GitHub" },
            { href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
            { href: "https://twitter.com", icon: TwitterIcon, label: "Twitter" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-[#64748b] hover:text-[#f1f5f9] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Tech stack chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {["Solidity", "React", "Next.js", "TypeScript", "Node.js", "Hardhat"].map((tech, i) => (
            <span
              key={tech}
              className="tag"
              style={{
                background: i % 3 === 0 ? "rgba(6,182,212,0.08)" : i % 3 === 1 ? "rgba(139,92,246,0.08)" : "rgba(217,70,239,0.08)",
                border: `1px solid ${i % 3 === 0 ? "rgba(6,182,212,0.2)" : i % 3 === 1 ? "rgba(139,92,246,0.2)" : "rgba(217,70,239,0.2)"}`,
                color: i % 3 === 0 ? "#67e8f9" : i % 3 === 1 ? "#c4b5fd" : "#f0abfc",
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator flex flex-col items-center gap-1 text-[#475569] hover:text-[#94a3b8] transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
