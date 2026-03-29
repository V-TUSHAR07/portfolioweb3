"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <mesh ref={meshRef} position={[-2.5, 0.5, -3]}>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshBasicMaterial
        color="#00ff88"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.08;
  });

  return (
    <mesh ref={meshRef} position={[3, -0.5, -4]}>
      <torusKnotGeometry args={[0.9, 0.25, 80, 8, 2, 3]} />
      <meshBasicMaterial
        color="#00d4ff"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

function Octahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh ref={meshRef} position={[1, 2, -5]}>
      <octahedronGeometry args={[0.8, 0]} />
      <meshBasicMaterial
        color="#ff0080"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.8;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.05;
    target.current.y += (mouse.current.y - target.current.y) * 0.05;
    camera.position.x = target.current.x;
    camera.position.y = target.current.y;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  return (
    <>
      <CameraRig />
      <Stars
        radius={50}
        depth={60}
        count={2000}
        factor={2}
        saturation={0}
        fade
        speed={0.3}
      />
      <Sparkles
        count={50}
        scale={8}
        size={1.2}
        speed={0.3}
        opacity={0.5}
        color="#00ff88"
      />
      <Icosahedron />
      <TorusKnot />
      <Octahedron />
    </>
  );
}

export default function Scene3DInner() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
      }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
