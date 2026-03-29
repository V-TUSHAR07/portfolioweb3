"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const STATUS_MESSAGES = [
  "[SYS] Initializing neural interface...",
  "[NET] Connecting to Ethereum mainnet...",
  "[WEB3] Loading smart contract modules...",
  "[AUTH] Verifying cryptographic signatures...",
  "[RENDER] Building holographic display...",
  "[DONE] All systems operational.",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const wipeTopRef = useRef<HTMLDivElement>(null);
  const wipeBotRef = useRef<HTMLDivElement>(null);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [progressPct, setProgressPct] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Stagger messages and progress
    STATUS_MESSAGES.forEach((_, i) => {
      const pct = Math.round(((i + 1) / STATUS_MESSAGES.length) * 100);
      tl.call(
        () => {
          setVisibleMessages((prev) => [...prev, i]);
          setProgressPct(pct);
        },
        [],
        i * 0.25
      );
    });

    // After last message, brief pause then dramatic exit
    tl.to(
      {},
      { duration: 0.25 },
      STATUS_MESSAGES.length * 0.25
    );

    // Wipe lines sweep out from center
    tl.fromTo(
      wipeTopRef.current,
      { scaleX: 0, opacity: 1 },
      { scaleX: 1, duration: 0.3, ease: "power3.in", transformOrigin: "center center" },
      "exit"
    );
    tl.fromTo(
      wipeBotRef.current,
      { scaleX: 0, opacity: 1 },
      { scaleX: 1, duration: 0.3, ease: "power3.in", transformOrigin: "center center" },
      "exit"
    );

    // Content blur + scale up
    tl.to(
      contentRef.current,
      { filter: "blur(12px)", scale: 1.08, duration: 0.35, ease: "power2.in" },
      "exit+=0.1"
    );

    // Wipe lines fade
    tl.to(
      [wipeTopRef.current, wipeBotRef.current],
      { opacity: 0, duration: 0.2, ease: "power2.in" },
      "exit+=0.3"
    );

    // Overlay fades out
    tl.to(
      overlayRef.current,
      { opacity: 0, duration: 0.4, ease: "power2.inOut" },
      "exit+=0.25"
    );

    return () => {
      tl.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={overlayRef}
      className="loading-overlay"
      aria-label="Loading portfolio"
      role="status"
    >
      {/* Scanlines */}
      <div className="loading-scanlines" aria-hidden="true" />

      {/* Corner brackets */}
      <div className="loading-corner loading-corner--tl" aria-hidden="true" />
      <div className="loading-corner loading-corner--tr" aria-hidden="true" />
      <div className="loading-corner loading-corner--bl" aria-hidden="true" />
      <div className="loading-corner loading-corner--br" aria-hidden="true" />

      {/* Wipe lines */}
      <div ref={wipeTopRef} className="loading-wipe loading-wipe--top" aria-hidden="true" />
      <div ref={wipeBotRef} className="loading-wipe loading-wipe--bot" aria-hidden="true" />

      {/* Center content */}
      <div ref={contentRef} className="loading-content">
        {/* Glitch title */}
        <h1
          className="glitch-text loading-title"
          data-text="TUSHAR"
          aria-label="TUSHAR"
        >
          TUSHAR
        </h1>

        {/* Subtitle */}
        <p className="loading-subtitle">// WEB3 PROTOCOL</p>

        {/* Progress bar */}
        <div ref={progressBarRef} className="loading-bar-track" aria-hidden="true">
          <div
            ref={progressFillRef}
            className="loading-bar-fill"
            style={{ width: `${progressPct}%` }}
          />
          <div className="loading-bar-glow" style={{ left: `${progressPct}%` }} />
        </div>

        {/* Percentage */}
        <p className="loading-pct">{progressPct}%</p>

        {/* Status messages */}
        <div className="loading-messages" aria-live="polite">
          {STATUS_MESSAGES.map((msg, i) => (
            <p
              key={i}
              className={`loading-msg ${visibleMessages.includes(i) ? "loading-msg--visible" : ""}`}
            >
              {msg}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
