"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const Loader = dynamic(() => import("@/components/loader"), { ssr: false });

// Curtain wipe — two halves slide apart
const curtainTop = {
  hidden: { y: 0 },
  visible: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.1 },
  },
};

const curtainBottom = {
  hidden: { y: 0 },
  visible: {
    y: "100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.1 },
  },
};

// Page content fades in and scales up behind the curtain
const pageReveal = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

// Nav slides down from top
const navReveal = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: 0.5,
    },
  },
};

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Loader onDone={handleDone} />}

      {/* Curtain wipe overlay */}
      <motion.div
        initial="hidden"
        animate={loaded ? "visible" : "hidden"}
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{ display: loaded ? undefined : "none" }}
      >
        <motion.div
          variants={curtainTop}
          className="absolute top-0 left-0 right-0 h-1/2"
          style={{ background: "#0c0c0e" }}
        />
        <motion.div
          variants={curtainBottom}
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{ background: "#0c0c0e" }}
        />
        {/* Center flash line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={loaded ? { scaleX: [0, 1, 1], opacity: [0, 1, 0] } : {}}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.05 }}
          className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 origin-center"
          style={{ background: "linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, transparent)" }}
        />
      </motion.div>

      {/* Page content */}
      <motion.div
        initial="hidden"
        animate={loaded ? "visible" : "hidden"}
        variants={pageReveal}
      >
        <motion.div variants={navReveal}>
          <Nav />
        </motion.div>
        <main>
          <motion.div variants={sectionReveal}>
            <Hero />
          </motion.div>
          <motion.div variants={sectionReveal}>
            <About />
          </motion.div>
          <motion.div variants={sectionReveal}>
            <Skills />
          </motion.div>
          <motion.div variants={sectionReveal}>
            <Projects />
          </motion.div>
          <motion.div variants={sectionReveal}>
            <Experience />
          </motion.div>
          <motion.div variants={sectionReveal}>
            <Contact />
          </motion.div>
        </main>
        <motion.div variants={sectionReveal}>
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
}
