"use client";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-8 px-6"
      style={{ borderTop: "1px solid rgba(0,255,136,0.08)" }}
      role="contentinfo"
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.35), rgba(0,212,255,0.35), transparent)",
          boxShadow: "0 0 12px rgba(0,255,136,0.15)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 flex items-center justify-center font-mono font-black text-sm"
              style={{
                background: "rgba(0,255,136,0.08)",
                border: "1px solid rgba(0,255,136,0.2)",
                borderRadius: "3px",
                color: "#00ff88",
                textShadow: "0 0 8px rgba(0,255,136,0.5)",
              }}
            >
              T
            </div>
            <span
              className="font-mono text-xs font-bold tracking-widest"
              style={{ color: "#00ff88", letterSpacing: "0.18em" }}
            >
              TUSHAR.PROTOCOL
            </span>
          </div>

          {/* Copyright */}
          <p className="font-mono text-[10px] text-center tracking-widest" style={{ color: "#3a5c48", letterSpacing: "0.18em" }}>
            &copy; {year} TUSHAR.PROTOCOL // ALL_SYSTEMS_OPERATIONAL
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
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
                className="w-8 h-8 flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(0,255,136,0.03)",
                  border: "1px solid rgba(0,255,136,0.08)",
                  borderRadius: "3px",
                  color: "#3a5c48",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#00ff88";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px rgba(0,255,136,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#3a5c48";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
