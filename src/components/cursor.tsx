"use client";

import { useEffect, useRef } from "react";

const TRAIL_COUNT = 4;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }))
  );
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.opacity = "1";
    ring.style.opacity = "1";
    trailRefs.current.forEach((t) => {
      if (t) t.style.opacity = "1";
    });

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      dot.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const LERP_RING = 0.18;
    const LERP_TRAIL = 0.12;

    const animate = () => {
      // Ring follows with lerp
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, LERP_RING);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, LERP_RING);
      ring.style.transform = `translate3d(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px, 0)`;

      // Trail dots cascade with decreasing lerp
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const source = i === 0 ? mousePos.current : trailPositions.current[i - 1];
        trailPositions.current[i].x = lerp(trailPositions.current[i].x, source.x, LERP_TRAIL - i * 0.02);
        trailPositions.current[i].y = lerp(trailPositions.current[i].y, source.y, LERP_TRAIL - i * 0.02);
        const el = trailRefs.current[i];
        if (el) {
          const size = 4 - i * 0.6;
          el.style.transform = `translate3d(${trailPositions.current[i].x - size / 2}px, ${trailPositions.current[i].y - size / 2}px, 0)`;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    const INTERACTIVE = "a, button, [role=button], input, textarea, select, label, [data-cursor-hover]";

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        ring.classList.add("is-hovering");
        if (dot) {
          dot.style.background = "#ff0080";
          dot.style.boxShadow = "0 0 8px #ff0080, 0 0 16px rgba(255,0,128,0.4)";
        }
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        ring.classList.remove("is-hovering");
        if (dot) {
          dot.style.background = "#00ff88";
          dot.style.boxShadow = "0 0 8px #00ff88, 0 0 16px rgba(0,255,136,0.4)";
        }
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      trailRefs.current.forEach((t) => { if (t) t.style.opacity = "0"; });
    };
    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      trailRefs.current.forEach((t) => { if (t) t.style.opacity = "1"; });
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
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="cursor-trail"
          aria-hidden="true"
          style={{
            opacity: 0,
            width: `${4 - i * 0.6}px`,
            height: `${4 - i * 0.6}px`,
            background: "#00ff88",
            boxShadow: `0 0 ${6 - i}px rgba(0,255,136,${0.5 - i * 0.1})`,
          }}
        />
      ))}
    </>
  );
}
