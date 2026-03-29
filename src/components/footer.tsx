"use client";

import { Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t py-10 px-6"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
      role="contentinfo"
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(139,92,246,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-mono text-sm font-semibold text-[#f1f5f9]">V.Tushar</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#475569] font-mono text-center">
            &copy; {year} Tushar. Built with{" "}
            <span className="text-cyan-500/80">Next.js</span> &amp;{" "}
            <span className="text-violet-500/80">Tailwind CSS</span>.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
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
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#475569] hover:text-[#f1f5f9] transition-colors"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
