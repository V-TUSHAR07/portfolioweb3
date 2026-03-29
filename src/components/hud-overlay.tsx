"use client";

import { useEffect, useState } from "react";

const BASE_BLOCK = 19847523;

export default function HudOverlay() {
  const [time, setTime] = useState("");
  const [block, setBlock] = useState(BASE_BLOCK);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };

    updateTime();
    const interval = setInterval(() => {
      updateTime();
      // Increment block every ~12 seconds (average ETH block time)
      setBlock((b) => b + Math.floor(Math.random() * 2));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-40 hidden md:block"
      aria-hidden="true"
    >
      {/* Top-left: System status */}
      <div
        className="absolute top-5 left-5 flex items-center gap-2"
        style={{ opacity: 0.35 }}
      >
        <span className="pulse-dot-sm" />
        <span
          className="font-mono text-[10px] tracking-widest"
          style={{ color: "#00ff88", letterSpacing: "0.2em" }}
        >
          SYS.ONLINE
        </span>
      </div>

      {/* Top-right: Coordinates */}
      <div
        className="absolute top-5 right-5 text-right"
        style={{ opacity: 0.3 }}
      >
        <div
          className="font-mono text-[10px] tracking-wider"
          style={{ color: "#00d4ff", letterSpacing: "0.12em" }}
        >
          LAT 28.6139 / LNG 77.2090
        </div>
        <div
          className="font-mono text-[9px] mt-0.5"
          style={{ color: "#6b8f78" }}
        >
          NEW DELHI, IND
        </div>
      </div>

      {/* Bottom-left: Block counter */}
      <div
        className="absolute bottom-5 left-5"
        style={{ opacity: 0.32 }}
      >
        <div
          className="font-mono text-[10px] tracking-wider"
          style={{ color: "#00ff88", letterSpacing: "0.12em" }}
        >
          BLOCK #{block.toLocaleString()}
        </div>
        <div
          className="font-mono text-[9px] mt-0.5"
          style={{ color: "#3a5c48" }}
        >
          ETH MAINNET
        </div>
      </div>

      {/* Bottom-right: Clock */}
      <div
        className="absolute bottom-5 right-5 text-right"
        style={{ opacity: 0.3 }}
      >
        <div
          className="font-mono text-[11px] tracking-widest"
          style={{ color: "#00d4ff", letterSpacing: "0.18em" }}
        >
          {time}
        </div>
        <div
          className="font-mono text-[9px] mt-0.5"
          style={{ color: "#3a5c48" }}
        >
          UTC+05:30
        </div>
      </div>
    </div>
  );
}
