'use client';

import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import React, { useRef } from 'react';

function WaterBlob() {
  const mesh = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame(() => {
    if (!mesh.current) return;
    time.current += 0.015;

    // More dynamic motion with tendrils
    mesh.current.rotation.x = Math.sin(time.current * 0.7) * 0.15;
    mesh.current.rotation.y = Math.sin(time.current * 0.5) * 0.15;
  });

  return (
    <group>
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 2, 2]} intensity={0.6} color="#22d3ee" />
      <pointLight position={[-2, -2, -2]} intensity={0.4} color="#67e8f9" />

      <Sphere args={[1, 128, 128]} scale={0.9}>
        <MeshDistortMaterial
          color="#22d3ee"
          attach="material"
          distort={0.4}
          speed={4}
          roughness={0}
          metalness={0.2}
          envMapIntensity={0.6}
          transparent
          opacity={0.85}
        />
      </Sphere>

      {/* Secondary blob for more dynamic effect */}
      <Sphere args={[1, 128, 128]} scale={0.8}>
        <MeshDistortMaterial
          color="#67e8f9"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0}
          metalness={0.1}
          envMapIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </group>
  );
}

export default function LiquidBlob3D() {
  return (
    <div className="w-48 h-48 sm:w-64 sm:h-64 relative overflow-visible">
      <div className="absolute inset-0 overflow-visible">
        <Canvas
          camera={{ position: [0, 0, 2.5], fov: 50 }}
          style={{
            background: 'transparent',
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
        >
          <WaterBlob />
        </Canvas>
      </div>
      {/* Brand-colored glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl" />
    </div>
  );
}
