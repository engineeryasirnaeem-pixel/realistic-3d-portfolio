import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Realistic Engineering Mesh with continuous floating and mouse parallax tilt
function BackgroundMeshPlane({ mouseRef }) {
  const meshRef = useRef();
  const wireframeRef = useRef();

  // Load the realistic engineering simulation/CAD texture
  const texture = useLoader(THREE.TextureLoader, '/assets/cad/ortho_front.png');
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;

  // Plane geometry with undulating aerodynamic wave displacement
  const [geometry, count] = useMemo(() => {
    const geo = new THREE.PlaneGeometry(28, 18, 48, 36);
    return [geo, geo.attributes.position.count];
  }, []);

  useFrame((state, delta) => {
    // 1. Continuous organic animation running all the time
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      // Continuous 3D floating and gentle yaw/pitch oscillation
      meshRef.current.position.y = Math.sin(time * 0.4) * 0.35;
      meshRef.current.position.x = Math.cos(time * 0.3) * 0.25;

      // 3D Mouse Parallax
      const targetRotX = -0.15 + (-mouseRef.current.y * Math.PI) / 18;
      const targetRotY = (mouseRef.current.x * Math.PI) / 18;
      meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.04;
      meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.04;
      meshRef.current.rotation.z = Math.sin(time * 0.2) * 0.02;

      // Dynamic surface aerodynamic wave distortion on geometry vertices
      const pos = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        const wave = Math.sin(u * 0.35 + time * 0.8) * Math.cos(v * 0.4 + time * 0.6) * 0.45;
        pos.setZ(i, wave);
      }
      pos.needsUpdate = true;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.z += delta * 0.03;
    }
  });

  return (
    <group position={[0, 0, -4]}>
      {/* Primary Realistic 3D Textured Surface with Lighting */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={0.32}
          roughness={0.4}
          metalness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floating 3D Node Grid Layer */}
      <mesh ref={wireframeRef} position={[0, 0, -0.5]}>
        <planeGeometry args={[32, 22, 24, 18]} />
        <meshBasicMaterial
          color="#0F172A"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>
    </group>
  );
}

// Continuously floating particle mesh nodes that constantly drift across the 3D space
function ContinuousFloatingNodes({ count = 120, mouseRef }) {
  const pointsRef = useRef();

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = [];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      spd.push({
        vy: (0.004 + Math.random() * 0.008),
        vx: (Math.random() - 0.5) * 0.005,
        phase: Math.random() * Math.PI * 2
      });
    }
    return [pos, spd];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const s = speeds[i];
      let y = posAttr.array[i * 3 + 1] - s.vy;
      let x = posAttr.array[i * 3] + Math.sin(time + s.phase) * 0.003;

      // Wrap vertically
      if (y < -9) y = 9;
      posAttr.array[i * 3] = x;
      posAttr.array[i * 3 + 1] = y;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#F59E0B"
        size={0.08}
        transparent
        opacity={0.4}
      />
    </points>
  );
}

export default function Realistic3DBackground() {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#E2E8F0]"
      onPointerMove={handlePointerMove}
    >
      {/* 3D WebGL Canvas Rendering Realistic Image Texture with Wave Mesh & Floating Nodes */}
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[10, 10, 8]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-10, -5, 2]} intensity={0.6} color="#cbd5e1" />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#F59E0B" />

        <React.Suspense fallback={null}>
          <BackgroundMeshPlane mouseRef={mouseRef} />
          <ContinuousFloatingNodes count={120} mouseRef={mouseRef} />
        </React.Suspense>
      </Canvas>

      {/* Titanium vignette overlay ensuring text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E2E8F0]/70 via-[#E2E8F0]/85 to-[#E2E8F0] pointer-events-none" />
    </div>
  );
}
