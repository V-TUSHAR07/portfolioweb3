"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./scene3d"), { ssr: false, loading: () => null });

const ROLES = [
  "Django Developer",
  "React.js Engineer",
  "Solana Builder",
  "Python Developer",
  "FastAPI Architect",
];

function useTypingEffect(phrases: string[], charDelay = 60, pauseMs = 1800) {
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

export default function Hero() {
  const typedText = useTypingEffect(ROLES, 60, 1800);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Base background */}
      <div className="absolute inset-0" style={{ background: "#0c0c0e" }} />

      {/* 3D scene */}
      <Scene3D />

      {/* Gradient orbs */}
      <div
        className="hero-orb"
        style={{
          width: "600px",
          height: "600px",
          top: "-10%",
          left: "-15%",
          background: "rgba(59,130,246,0.07)",
          animation: "orb-drift 22s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="hero-orb"
        style={{
          width: "500px",
          height: "500px",
          top: "10%",
          right: "-12%",
          background: "rgba(139,92,246,0.06)",
          animation: "orb-drift 28s ease-in-out infinite reverse",
          animationDelay: "5s",
        }}
        aria-hidden="true"
      />
      <div
        className="hero-orb"
        style={{
          width: "350px",
          height: "350px",
          bottom: "5%",
          left: "30%",
          background: "rgba(59,130,246,0.04)",
          animation: "orb-drift 18s ease-in-out infinite",
          animationDelay: "10s",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-10"
          style={{
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
          }}
        >
          <span className="status-dot" />
          <span className="text-xs font-medium" style={{ color: "#4ade80" }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <h1
            className="font-extrabold leading-[0.95] tracking-tight text-white"
            style={{ fontSize: "clamp(3.5rem, 11vw, 7.5rem)" }}
          >
            V Tushar
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="text-base font-medium mb-4"
          style={{ color: "#a1a1aa" }}
        >
          Web Developer &amp; Blockchain Builder
        </motion.div>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="h-10 flex items-center justify-center mb-8"
          aria-live="polite"
          aria-atomic="true"
        >
          <span
            className="text-lg font-semibold gradient-text"
            style={{ fontFamily: "var(--font-fira), monospace" }}
          >
            {typedText}
            <span className="typing-cursor" aria-hidden="true" />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="text-base leading-relaxed max-w-xl mx-auto mb-10"
          style={{ color: "#a1a1aa" }}
        >
          Building clean, impactful applications — from Django &amp; React.js platforms
          to decentralized Web3 apps on Solana. Code that works, ships on time, and solves real problems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-7 py-3"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline px-7 py-3"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          {[
            { href: "https://github.com/V-TUSHAR07", icon: GithubIcon, label: "GitHub" },
            { href: "https://linkedin.com/in/v-tushar-94839b267", icon: LinkedinIcon, label: "LinkedIn" },
            { href: "https://twitter.com", icon: TwitterIcon, label: "Twitter" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#a1a1aa",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fafafa";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.4)";
                (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#a1a1aa";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.36 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {[
            { label: "Python", cls: "tag-blue" },
            { label: "Django", cls: "tag-blue" },
            { label: "React.js", cls: "tag-purple" },
            { label: "FastAPI", cls: "tag-purple" },
            { label: "Solana", cls: "tag-amber" },
            { label: "Rust", cls: "tag-amber" },
            { label: "TypeScript", cls: "tag-blue" },
          ].map(({ label, cls }) => (
            <span key={label} className={`tag ${cls}`}>{label}</span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator flex flex-col items-center gap-1.5"
        style={{ color: "#52525b" }}
        aria-label="Scroll to about section"
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#a1a1aa")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525b")}
      >
        <span className="text-xs font-medium tracking-widest">Scroll</span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}
