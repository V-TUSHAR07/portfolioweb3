"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles, Stars, Float } from "@react-three/drei";
import * as THREE from "three";

/* ─── Blockchain Node — glowing dodecahedron (12-faced, like a network node) ─── */
function BlockchainNode({ position, color, speed = 0.15, scale = 1 }: { position: [number, number, number]; color: string; speed?: number; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const geo = useMemo(() => new THREE.DodecahedronGeometry(1, 0), []);
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame((state) => {
    if (!meshRef.current || !edgesRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * speed;
    meshRef.current.rotation.y = t * speed * 1.4;
    edgesRef.current.rotation.copy(meshRef.current.rotation);
    // Subtle pulse
    const s = scale + Math.sin(t * 1.5) * 0.03;
    meshRef.current.scale.setScalar(s);
    edgesRef.current.scale.setScalar(s);
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} transparent opacity={0.04} />
      </mesh>
      <lineSegments ref={edgesRef}>
        <primitive object={edgesGeo} attach="geometry" />
        <lineBasicMaterial color={color} transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

/* ─── Ethereum Diamond — a double pyramid (octahedron stretched on Y) ─── */
function EthDiamond({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const geo = useMemo(() => {
    const g = new THREE.OctahedronGeometry(0.9, 0);
    g.scale(1, 1.6, 1); // stretch to diamond shape
    return g;
  }, []);
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <primitive object={geo.clone()} attach="geometry" />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.06} />
      </mesh>
      <lineSegments>
        <primitive object={edgesGeo} attach="geometry" />
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.4} />
      </lineSegments>
    </group>
  );
}

/* ─── Chain Link Ring — torus representing blockchain links ─── */
function ChainRing({ position, color, rotationAxis = "y" }: { position: [number, number, number]; color: string; rotationAxis?: "x" | "y" | "z" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation[rotationAxis] = t * 0.2;
    if (rotationAxis === "y") meshRef.current.rotation.x = Math.PI / 3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.7, 0.08, 8, 24]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
    </mesh>
  );
}

/* ─── Floating Block — a rotating cube representing a block in the chain ─── */
function FloatingBlock({ position, size = 0.5 }: { position: [number, number, number]; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(size, size, size)), [size]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.15;
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.03} />
      </mesh>
      <lineSegments ref={meshRef}>
        <primitive object={edgesGeo} attach="geometry" />
        <lineBasicMaterial color="#00ff88" transparent opacity={0.2} />
      </lineSegments>
    </group>
  );
}

/* ─── Connection Lines — lines between nodes ─── */
function ConnectionLines() {
  const points = useMemo(() => {
    const pts: [THREE.Vector3, THREE.Vector3][] = [
      [new THREE.Vector3(-3, 1.5, -2), new THREE.Vector3(0, -0.5, -3)],
      [new THREE.Vector3(0, -0.5, -3), new THREE.Vector3(3.5, 0.8, -4)],
      [new THREE.Vector3(-1.5, -2, -5), new THREE.Vector3(3.5, 0.8, -4)],
      [new THREE.Vector3(-3, 1.5, -2), new THREE.Vector3(-1.5, -2, -5)],
    ];
    return pts;
  }, []);

  return (
    <>
      {points.map((pair, i) => {
        const geo = new THREE.BufferGeometry().setFromPoints(pair);
        return (
          <line key={i}>
            <primitive object={geo} attach="geometry" />
            <lineBasicMaterial color="#00ff88" transparent opacity={0.08} />
          </line>
        );
      })}
    </>
  );
}

/* ─── Camera Rig — follows mouse ─── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 1.2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.04;
    target.current.y += (mouse.current.y - target.current.y) * 0.04;
    camera.position.x = target.current.x;
    camera.position.y = target.current.y;
    camera.lookAt(0, 0, -2);
  });

  return null;
}

/* ─── Main Scene ─── */
function Scene() {
  return (
    <>
      <CameraRig />

      {/* Deep space stars */}
      <Stars radius={60} depth={70} count={2500} factor={2.5} saturation={0} fade speed={0.25} />

      {/* Green Web3 sparkles — scattered wider */}
      <Sparkles count={60} scale={14} size={1.5} speed={0.25} opacity={0.45} color="#00ff88" />
      <Sparkles count={25} scale={10} size={1} speed={0.2} opacity={0.3} color="#00d4ff" />

      {/* ─── Web3 Objects ─── */}

      {/* Large blockchain node — center-left */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <BlockchainNode position={[-3, 1.5, -2]} color="#00ff88" speed={0.12} scale={1.3} />
      </Float>

      {/* Ethereum diamond — center */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <EthDiamond position={[0, -0.5, -3]} />
      </Float>

      {/* Second blockchain node — right side */}
      <Float speed={1} rotationIntensity={0.25} floatIntensity={0.3}>
        <BlockchainNode position={[3.5, 0.8, -4]} color="#00d4ff" speed={0.1} scale={1} />
      </Float>

      {/* Chain rings — orbiting around */}
      <ChainRing position={[-1.5, -2, -5]} color="#ff0080" rotationAxis="z" />
      <ChainRing position={[2, 2.5, -6]} color="#00ff88" rotationAxis="y" />

      {/* Floating blocks — like blockchain blocks in space */}
      <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.3}>
        <FloatingBlock position={[-4.5, -1, -7]} size={0.4} />
      </Float>
      <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.2}>
        <FloatingBlock position={[4.5, -1.5, -6]} size={0.35} />
      </Float>
      <Float speed={0.9} rotationIntensity={0.1} floatIntensity={0.25}>
        <FloatingBlock position={[1.5, 3, -8]} size={0.3} />
      </Float>

      {/* Connection lines between nodes */}
      <ConnectionLines />
    </>
  );
}

export default function Scene3DInner() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
