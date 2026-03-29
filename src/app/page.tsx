"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Cursor from "@/components/cursor";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HudOverlay from "@/components/hud-overlay";

const LoadingScreen = dynamic(() => import("@/components/loading-screen"), {
  ssr: false,
});

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && (
        <LoadingScreen onComplete={() => setLoadingDone(true)} />
      )}
      <div
        style={{
          opacity: loadingDone ? 1 : 0,
          transition: "opacity 0.5s ease 0.1s",
          visibility: loadingDone ? "visible" : "hidden",
        }}
      >
        <Cursor />
        <HudOverlay />
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
