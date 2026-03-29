"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./scene3d"), { ssr: false, loading: () => null });

const TAGLINES = [
  "SMART_CONTRACT_ENGINEER",
  "DEFI_PROTOCOL_BUILDER",
  "FULL_STACK_ARCHITECT",
  "WEB3_DEVELOPER",
];

const TERMINAL_LINES = [
  "> initializing tushar.protocol...",
  "> loading web3 modules...",
  "> connecting to mainnet...",
  "> system ready_",
];

function useTypingEffect(phrases: string[], charDelay = 55, pauseMs = 1600) {
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
      }, charDelay / 2.5);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, phraseIndex, phrases, charDelay, pauseMs]);

  return text;
}

function TerminalBoot() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, i]);
          if (i === TERMINAL_LINES.length - 1) {
            setTimeout(() => setDone(true), 400);
          }
        }, 600 + i * 380)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="mb-8 max-w-md mx-auto"
    >
      <div
        className="rounded-lg p-4 text-left"
        style={{
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(0,255,136,0.15)",
          boxShadow: "0 0 24px rgba(0,255,136,0.04), inset 0 0 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* Terminal title bar */}
        <div className="flex items-center gap-1.5 mb-3 pb-2" style={{ borderBottom: "1px solid rgba(0,255,136,0.08)" }}>
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <span className="ml-auto font-mono text-[10px]" style={{ color: "#3a5c48" }}>
            tushar@mainnet:~
          </span>
        </div>
        {/* Lines */}
        <div className="space-y-1">
          {TERMINAL_LINES.map((line, i) => (
            <div
              key={i}
              className="font-mono text-xs leading-relaxed transition-opacity duration-300"
              style={{
                color: i === TERMINAL_LINES.length - 1 ? "#00ff88" : "#6b8f78",
                opacity: visibleLines.includes(i) ? 1 : 0,
              }}
            >
              {line}
              {i === TERMINAL_LINES.length - 1 && done && (
                <span
                  className="inline-block w-1.5 h-3.5 ml-0.5 align-middle"
                  style={{
                    background: "#00ff88",
                    animation: "blink 1s step-end infinite",
                    boxShadow: "0 0 4px #00ff88",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Sci-fi floating particles — green/cyan/pink
function ScifiParticles() {
  const particles = [
    { size: 2, top: "12%", left: "5%", duration: "9s", delay: "0s", color: "#00ff88" },
    { size: 3, top: "22%", left: "92%", duration: "11s", delay: "1s", color: "#00d4ff" },
    { size: 2, top: "38%", left: "8%", duration: "7s", delay: "2s", color: "#00ff88" },
    { size: 3, top: "60%", left: "4%", duration: "13s", delay: "0.5s", color: "#ff0080" },
    { size: 2, top: "80%", left: "10%", duration: "10s", delay: "3s", color: "#00ff88" },
    { size: 3, top: "18%", left: "88%", duration: "8s", delay: "1.5s", color: "#00d4ff" },
    { size: 2, top: "50%", left: "94%", duration: "12s", delay: "0s", color: "#00ff88" },
    { size: 2, top: "72%", left: "96%", duration: "14s", delay: "1s", color: "#ff0080" },
    { size: 3, top: "88%", left: "82%", duration: "8s", delay: "3s", color: "#00d4ff" },
    { size: 2, top: "5%", left: "48%", duration: "11s", delay: "0.8s", color: "#00ff88" },
    { size: 2, top: "92%", left: "42%", duration: "7s", delay: "2.5s", color: "#00d4ff" },
    { size: 3, top: "45%", left: "52%", duration: "16s", delay: "1.2s", color: "#ff0080" },
  ];

  const shapes = [
    { w: 40, h: 40, top: "16%", left: "6%", border: "rgba(0,255,136,0.18)", duration: "14s", delay: "0s" },
    { w: 30, h: 30, top: "68%", left: "5%", border: "rgba(0,212,255,0.2)", duration: "11s", delay: "2s" },
    { w: 50, h: 50, top: "25%", left: "90%", border: "rgba(255,0,128,0.15)", duration: "16s", delay: "1s" },
    { w: 35, h: 35, top: "78%", left: "88%", border: "rgba(0,255,136,0.12)", duration: "12s", delay: "3s" },
  ];

  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={`p-${i}`}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            ["--duration" as string]: p.duration,
            ["--delay" as string]: p.delay,
            ["--opacity-start" as string]: "0.4",
            ["--opacity-end" as string]: "0.8",
          }}
        />
      ))}
      {shapes.map((s, i) => (
        <div
          key={`s-${i}`}
          className="geo-shape"
          style={{
            width: s.w,
            height: s.h,
            top: s.top,
            left: s.left,
            border: `1px solid ${s.border}`,
            borderRadius: "0",
            transform: "rotate(45deg)",
            ["--duration" as string]: s.duration,
            ["--delay" as string]: s.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const typedText = useTypingEffect(TAGLINES, 55, 1600);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Deep space background */}
      <div className="absolute inset-0" style={{ background: "#030108" }} />

      {/* Grid */}
      <div className="grid-bg" aria-hidden="true" />

      {/* 3D Scene */}
      <Scene3D />

      {/* Gradient orbs */}
      <div
        className="hero-orb"
        style={{
          width: "500px",
          height: "500px",
          top: "5%",
          left: "-8%",
          background: "rgba(0,255,136,0.055)",
          animation: "orb-drift 20s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="hero-orb"
        style={{
          width: "400px",
          height: "400px",
          top: "15%",
          right: "-6%",
          background: "rgba(0,212,255,0.045)",
          animation: "orb-drift 25s ease-in-out infinite reverse",
          animationDelay: "4s",
        }}
        aria-hidden="true"
      />
      <div
        className="hero-orb"
        style={{
          width: "300px",
          height: "300px",
          bottom: "10%",
          left: "35%",
          background: "rgba(255,0,128,0.035)",
          animation: "orb-drift 18s ease-in-out infinite",
          animationDelay: "9s",
        }}
        aria-hidden="true"
      />

      {/* Particles */}
      <ScifiParticles />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-sm mb-8"
          style={{
            background: "rgba(0,255,136,0.04)",
            border: "1px solid rgba(0,255,136,0.2)",
            boxShadow: "0 0 16px rgba(0,255,136,0.06)",
          }}
        >
          <span className="pulse-dot" />
          <span className="font-mono text-xs tracking-widest" style={{ color: "#00ff88", letterSpacing: "0.18em" }}>
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* Terminal boot sequence */}
        <TerminalBoot />

        {/* Name — GLITCH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <h1
            className="glitch-text gradient-text-full font-bold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(4rem,12vw,8rem)" }}
            data-text="TUSHAR"
          >
            TUSHAR
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm tracking-widest mb-3"
          style={{ color: "#6b8f78", letterSpacing: "0.25em" }}
        >
          WEB3 DEVELOPER // FULL STACK ARCHITECT
        </motion.div>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="h-9 flex items-center justify-center mb-8"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="font-mono text-base" style={{ color: "#00d4ff", textShadow: "0 0 12px rgba(0,212,255,0.4)" }}>
            {typedText}
            <span className="typing-cursor" aria-hidden="true" />
          </span>
        </motion.div>

        {/* Bio snippet */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm leading-relaxed max-w-lg mx-auto mb-10"
          style={{ color: "#6b8f78" }}
        >
          Crafting high-performance decentralized protocols and full-stack applications.
          From Solidity to React — fast, secure, on-chain.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary font-bold px-8 py-3 rounded-sm text-sm tracking-wider"
            style={{ letterSpacing: "0.12em" }}
          >
            VIEW_PROJECTS
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline font-mono px-8 py-3 rounded-sm text-sm tracking-wider"
            style={{ letterSpacing: "0.12em" }}
          >
            REACH_OUT
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-14"
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
              className="w-10 h-10 flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(0,255,136,0.04)",
                border: "1px solid rgba(0,255,136,0.15)",
                borderRadius: "4px",
                color: "#6b8f78",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#00ff88";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.4)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(0,255,136,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#6b8f78";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.15)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        {/* Tech stack chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.34 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {[
            { label: "Solidity", color: "green" },
            { label: "React", color: "cyan" },
            { label: "Next.js", color: "green" },
            { label: "TypeScript", color: "cyan" },
            { label: "Node.js", color: "green" },
            { label: "Hardhat", color: "pink" },
          ].map(({ label, color }) => (
            <span
              key={label}
              className={`tag tag-${color}`}
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator flex flex-col items-center gap-1.5 transition-all duration-200"
        style={{ color: "#3a5c48" }}
        aria-label="Scroll to about section"
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00ff88")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#3a5c48")}
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}
