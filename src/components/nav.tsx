"use client";

import { useEffect, useState, useCallback } from "react";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";

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
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
        }}
        aria-hidden="true"
      />

      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "backdrop-blur-xl" : "bg-transparent"
        )}
        style={
          scrolled
            ? {
                background: "rgba(12, 12, 14, 0.9)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
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
            className="flex items-center gap-1.5 group"
            aria-label="Scroll to top"
          >
            <span
              className="font-bold text-base tracking-tight"
              style={{ color: "#fafafa" }}
            >
              V. Tushar
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#3b82f6" }}
            />
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
              className="btn-primary text-sm px-4 py-2"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 transition-colors rounded-lg"
            style={{ color: "#a1a1aa" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fafafa")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#a1a1aa")}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden mobile-menu-enter backdrop-blur-xl px-6 py-5 flex flex-col gap-1"
            style={{
              background: "rgba(12, 12, 14, 0.98)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left px-3 py-3 rounded-lg text-sm transition-colors"
                style={{
                  color: active === item.href.slice(1) ? "#fafafa" : "#a1a1aa",
                  background: active === item.href.slice(1)
                    ? "rgba(59,130,246,0.08)"
                    : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-sm mt-3 text-center"
            >
              Hire Me
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
