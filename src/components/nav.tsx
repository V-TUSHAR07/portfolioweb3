"use client";

import { useEffect, useState, useCallback } from "react";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [blink, setBlink] = useState(true);

  // Blinking underscore on logo
  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 600);
    return () => clearInterval(t);
  }, []);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 40);

    const total = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(total > 0 ? (y / total) * 100 : 0);

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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #00ff88, #00d4ff, #ff0080)",
          boxShadow: "0 0 8px rgba(0,255,136,0.6)",
        }}
        aria-hidden="true"
      />

      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl"
            : "bg-transparent"
        )}
        style={
          scrolled
            ? {
                background: "rgba(3,1,8,0.88)",
                borderBottom: "1px solid rgba(0,255,136,0.08)",
                boxShadow: "0 0 24px rgba(0,255,136,0.04)",
              }
            : undefined
        }
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-0 group"
            aria-label="Scroll to top"
          >
            <span
              className="font-mono text-sm font-bold tracking-widest"
              style={{ color: "#00ff88", letterSpacing: "0.2em", textShadow: "0 0 12px rgba(0,255,136,0.4)" }}
            >
              TUSHAR.DEV
            </span>
            <span
              className="font-mono text-sm font-bold ml-0.5"
              style={{
                color: "#00ff88",
                opacity: blink ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            >
              _
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
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
              className="btn-primary font-mono font-bold px-4 py-2 text-xs tracking-widest"
              style={{ borderRadius: "4px", letterSpacing: "0.15em" }}
            >
              HIRE_ME
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 transition-colors"
            style={{ color: "#6b8f78" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00ff88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b8f78")}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden mobile-menu-enter backdrop-blur-xl px-6 py-5 flex flex-col gap-1"
            style={{
              background: "rgba(3,1,8,0.98)",
              borderBottom: "1px solid rgba(0,255,136,0.12)",
              boxShadow: "0 8px 32px rgba(0,255,136,0.06)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left px-3 py-3 font-mono text-sm transition-colors"
                style={{
                  color: active === item.href.slice(1) ? "#00ff88" : "#6b8f78",
                  borderLeft: active === item.href.slice(1) ? "2px solid #00ff88" : "2px solid transparent",
                  letterSpacing: "0.08em",
                }}
              >
                {active === item.href.slice(1) ? `> ${item.label}` : `  ${item.label}`}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary font-mono font-bold text-xs tracking-widest px-4 py-3 mt-3 text-center"
              style={{ borderRadius: "4px", letterSpacing: "0.15em" }}
            >
              HIRE_ME
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
