"use client";

import { useEffect, useState, useCallback } from "react";
import { clsx } from "clsx";
import { Menu, X, Code2 } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 40);

    // Scroll progress
    const total = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(total > 0 ? (y / total) * 100 : 0);

    // Active section via scroll position
    const sections = NAV_ITEMS.map((n) => n.href.slice(1));
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #d946ef)",
        }}
        aria-hidden="true"
      />

      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[rgba(10,10,26,0.85)] backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            aria-label="Scroll to top"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-mono text-sm font-semibold text-[#f1f5f9] group-hover:text-cyan-400 transition-colors">
              V.Tushar
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={clsx("nav-link", active === item.href.slice(1) && "active")}
                aria-current={active === item.href.slice(1) ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-white text-sm font-medium px-4 py-2 rounded-lg"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#94a3b8] hover:text-[#f1f5f9] transition-colors p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mobile-menu-enter bg-[rgba(10,10,26,0.98)] backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={clsx(
                  "text-left px-3 py-3 rounded-lg text-sm transition-colors",
                  active === item.href.slice(1)
                    ? "text-[#f1f5f9] bg-white/[0.04]"
                    : "text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/[0.03]"
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-white text-sm font-medium px-4 py-3 rounded-lg mt-2 text-center"
            >
              Hire Me
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
