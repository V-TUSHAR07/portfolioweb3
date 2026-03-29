"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Django", "React.js", "Solana", "FastAPI", "Python"];

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const duration = 2000;

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const pct = Math.round(eased * 100);
      setProgress(pct);
      setWordIndex(Math.min(Math.floor(eased * WORDS.length), WORDS.length - 1));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 500);
        }, 300);
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
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ background: "#0c0c0e" }}
        >
          {/* Animated gradient background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.08), transparent 70%)",
            }}
          />

          {/* Orbiting ring */}
          <div className="absolute" style={{ width: 200, height: 200 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                border: "1.5px solid transparent",
                borderTopColor: "#3b82f6",
                borderRightColor: "rgba(139,92,246,0.3)",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full"
              style={{
                inset: 12,
                border: "1px solid transparent",
                borderBottomColor: "rgba(139,92,246,0.4)",
                borderLeftColor: "rgba(59,130,246,0.15)",
              }}
            />
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo / Initials */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(139,92,246,0.15)",
              }}
            >
              <span className="text-xl font-extrabold text-white tracking-tight">VT</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1"
              style={{ color: "#fafafa" }}
            >
              V Tushar
            </motion.h1>

            {/* Cycling word */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="text-sm font-medium mb-8 h-5"
              style={{ color: "#3b82f6" }}
            >
              {WORDS[wordIndex]}
            </motion.p>

            {/* Progress bar */}
            <div className="w-52 sm:w-64">
              <div
                className="h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="h-full rounded-full transition-[width] duration-100 ease-linear"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                    boxShadow: "0 0 12px rgba(59,130,246,0.5)",
                  }}
                />
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <p
                  className="text-[11px] font-medium"
                  style={{ color: "#52525b" }}
                >
                  Loading portfolio
                </p>
                <p
                  className="text-[11px] font-semibold tabular-nums"
                  style={{ color: "#a1a1aa" }}
                >
                  {progress}%
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
