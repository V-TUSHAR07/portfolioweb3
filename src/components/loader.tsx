"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6",
      });
    }

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw connections between nearby particles
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  // Progress counter
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const duration = 2200;

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 600);
        }, 250);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
          style={{ background: "#0c0c0e" }}
        >
          {/* Particle canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.6 }}
          />

          {/* Blurred gradient blobs */}
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 15, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
              top: "20%",
              left: "30%",
            }}
          />
          <motion.div
            animate={{
              x: [0, -25, 20, 0],
              y: [0, 25, -10, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
              filter: "blur(60px)",
              bottom: "20%",
              right: "25%",
            }}
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Spinning rings around logo */}
            <div className="relative w-32 h-32 mb-8">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid transparent",
                  borderTopColor: "rgba(59,130,246,0.6)",
                  borderRightColor: "rgba(59,130,246,0.1)",
                }}
              />
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{
                  inset: 10,
                  border: "1px solid transparent",
                  borderBottomColor: "rgba(139,92,246,0.5)",
                  borderLeftColor: "rgba(139,92,246,0.08)",
                }}
              />
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{
                  inset: 22,
                  border: "1px solid transparent",
                  borderTopColor: "rgba(59,130,246,0.3)",
                  borderBottomColor: "rgba(139,92,246,0.2)",
                }}
              />

              {/* Center logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    boxShadow:
                      "0 0 30px rgba(59,130,246,0.4), 0 0 60px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                >
                  <span className="text-lg font-extrabold text-white">VT</span>
                </div>
              </motion.div>
            </div>

            {/* Name with staggered letter reveal */}
            <motion.div className="flex gap-[2px] mb-1.5">
              {"V Tushar".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                  style={{ color: "#fafafa" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="text-sm mb-10"
              style={{ color: "#52525b" }}
            >
              Web Developer & Blockchain Builder
            </motion.p>

            {/* Progress section */}
            <div className="w-64 sm:w-72">
              {/* Progress bar with glow */}
              <div className="relative">
                <div
                  className="h-[3px] rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer-bar 1.5s linear infinite",
                      transition: "width 0.08s linear",
                    }}
                  />
                </div>
                {/* Glow dot at the tip */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{
                    left: `calc(${progress}% - 4px)`,
                    background: "#8b5cf6",
                    boxShadow: "0 0 8px #8b5cf6, 0 0 16px rgba(139,92,246,0.4)",
                    transition: "left 0.08s linear",
                    opacity: progress > 2 ? 1 : 0,
                  }}
                />
              </div>

              {/* Labels */}
              <div className="flex items-center justify-between mt-3">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[11px]"
                  style={{ color: "#3f3f46" }}
                >
                  Loading experience
                </motion.span>
                <span
                  className="text-xs font-bold tabular-nums gradient-text"
                >
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
