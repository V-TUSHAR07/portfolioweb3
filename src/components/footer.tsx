"use client";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-8 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="font-bold text-sm"
              style={{ color: "#fafafa" }}
            >
              V. Tushar
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#3b82f6" }}
            />
          </div>

          {/* Copyright */}
          <p className="text-xs text-center" style={{ color: "#52525b" }}>
            &copy; {year} V. Tushar. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {[
              { href: "https://github.com/V-TUSHAR07", icon: GithubIcon, label: "GitHub" },
              {
                href: "https://linkedin.com/in/v-tushar-94839b267",
                icon: LinkedinIcon,
                label: "LinkedIn",
              },
              { href: "https://twitter.com", icon: TwitterIcon, label: "Twitter" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#52525b",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#fafafa";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(59,130,246,0.3)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(59,130,246,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#52525b";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.03)";
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
