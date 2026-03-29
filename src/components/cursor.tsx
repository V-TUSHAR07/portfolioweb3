"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const isTouch = useRef(false);

  useEffect(() => {
    // Detect touch devices — hide cursor
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      isTouch.current = true;
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Show cursor elements
    dot.style.opacity = "1";
    ring.style.opacity = "1";

    // Direct mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      // Dot follows instantly
      dot.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
    };

    // RAF loop for ring with lerp
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const LERP_FACTOR = 0.18;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, LERP_FACTOR);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, LERP_FACTOR);
      ring.style.transform = `translate3d(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px, 0)`;
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    // Hover detection via event delegation
    const INTERACTIVE = "a, button, [role=button], input, textarea, select, label, [data-cursor-hover]";

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        ring.classList.add("is-hovering");
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        ring.classList.remove("is-hovering");
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        id="cursor-dot"
        ref={dotRef}
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
    </>
  );
}
