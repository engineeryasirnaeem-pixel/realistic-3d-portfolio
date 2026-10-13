import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Precision aerospace rotor - Continuously spinning and floating with mouse parallax
function TurbineRotor({ mouseRef }) {
  const rotorRef = useRef();
  const statorRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Continuous rotation at all times
    if (rotorRef.current) {
      rotorRef.current.rotation.z += delta * 1.5;
    }
    if (statorRef.current) {
      statorRef.current.rotation.y += delta * 0.15;
    }
    if (groupRef.current) {
      // Smooth continuous mouse orientation
      const targetX = (mouseRef.current.x * Math.PI) / 9;
      const targetY = (mouseRef.current.y * Math.PI) / 9;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  const bladeCount = 14;
  const blades = Array.from({ length: bladeCount }).map((_, i) => ({
    angle: (i / bladeCount) * Math.PI * 2,
  }));

  return (
    <group ref={groupRef}>
      {/* Rotor & Hub in Anodized Black */}
      <group ref={rotorRef}>
        <mesh>
          <coneGeometry args={[0.7, 1.8, 28]} />
          <meshStandardMaterial
            color="#0F172A"
            wireframe
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.55, 0.72, 1.2, 32]} />
          <meshStandardMaterial
            color="#080D1A"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>

        {/* 10% Safety Yellow Blades */}
        {blades.map((b, i) => (
          <group key={i} rotation={[0, 0, b.angle]}>
            <mesh position={[1.35, 0, 0]} rotation={[0.35, 0, 0.2]}>
              <boxGeometry args={[1.4, 0.06, 0.35]} />
              <meshStandardMaterial
                color="#F59E0B"
                wireframe
                roughness={0.2}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* Casing in Anodized Black Wireframe */}
      <group ref={statorRef}>
        <mesh>
          <torusGeometry args={[2.5, 0.03, 16, 90]} />
          <meshStandardMaterial color="#0F172A" metalness={0.8} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2.6, 2.6, 1.6, 24, 4, true]} />
          <meshStandardMaterial
            color="#334155"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroScene() {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseRef.current.x = (clientX / innerWidth) * 2 - 1;
    mouseRef.current.y = -(clientY / innerHeight) * 2 + 1;
  };

  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-auto"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 10]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-10, -5, -5]} intensity={0.8} color="#cbd5e1" />

        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <TurbineRotor mouseRef={mouseRef} />
        </Float>
      </Canvas>
    </div>
  );
}
