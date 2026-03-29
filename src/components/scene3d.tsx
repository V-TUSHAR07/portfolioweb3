"use client";

import dynamic from "next/dynamic";

// Dynamically import the actual 3D scene with no SSR
const Scene3DInner = dynamic(() => import("./scene3d-inner"), {
  ssr: false,
  loading: () => null,
});

export default function Scene3D() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      <Scene3DInner />
    </div>
  );
}
