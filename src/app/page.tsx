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

const revealVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      staggerChildren: 0.08,
    },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Loader onDone={handleDone} />}
      <motion.div
        initial="hidden"
        animate={loaded ? "visible" : "hidden"}
        variants={revealVariants}
      >
        <Nav />
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
