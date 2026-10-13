import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Streamlines connecting top to bottom
function FlowStreamlines({ mouseRef, scrollProgressRef }) {
  const count = 35;
  const linesRef = useRef([]);

  // Generate parametric helix / wavy aerodynamic path curves
  const curves = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const offsetX = (Math.random() - 0.5) * 16;
      const offsetZ = (Math.random() - 0.5) * 8 - 2;
      const speed = 0.4 + Math.random() * 0.8;
      const points = [];
      
      // Vertical curve from y=12 (top) to y=-12 (bottom)
      for (let y = 12; y >= -12; y -= 1.5) {
        const wave = Math.sin(y * 0.4 + i * 0.5) * 1.8;
        points.push(new THREE.Vector3(offsetX + wave, y, offsetZ));
      }

      return {
        curve: new THREE.CatmullRomCurve3(points),
        speed,
        hueOffset: i / count
      };
    });
  }, [count]);

  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Parallax with mouse
      const targetX = mouseRef.current.x * 2.5;
      const targetY = -mouseRef.current.y * 1.5;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.04;

      // React to scroll progress (travel down page)
      const scrollYOffset = (scrollProgressRef.current - 0.5) * 8;
      groupRef.current.position.y -= (scrollYOffset - groupRef.current.position.y) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {curves.map((item, idx) => {
        const points = item.curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        // CFD color ramp: Top (Cyan/Teal) -> Mid (Blue/Purple) -> Bottom (Magenta/Amber)
        const colors = [];
        points.forEach((pt) => {
          // Normalize height between 12 and -12 -> 0 to 1
          const factor = THREE.MathUtils.clamp((12 - pt.y) / 24, 0, 1);
          // Color interpolate from Cyan (#00f0ff) -> Indigo (#6366f1) -> Pink (#ec4899) -> Orange (#f59e0b)
          const color = new THREE.Color();
          if (factor < 0.33) {
            color.lerpColors(new THREE.Color('#00f0ff'), new THREE.Color('#3b82f6'), factor / 0.33);
          } else if (factor < 0.66) {
            color.lerpColors(new THREE.Color('#3b82f6'), new THREE.Color('#ec4899'), (factor - 0.33) / 0.33);
          } else {
            color.lerpColors(new THREE.Color('#ec4899'), new THREE.Color('#f59e0b'), (factor - 0.66) / 0.34);
          }
          colors.push(color.r, color.g, color.b);
        });

        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        return (
          <line key={idx} geometry={geometry}>
            <lineBasicMaterial
              vertexColors
              transparent
              opacity={0.35}
              blending={THREE.AdditiveBlending}
              linewidth={1}
            />
          </line>
        );
      })}
    </group>
  );
}

// Falling & swirling 3D aerodynamic particle vortex that travels top to bottom
function FlowParticles({ count = 450, mouseRef, scrollProgressRef }) {
  const pointsRef = useRef();

  const [particles, posArray, colorArray] = useMemo(() => {
    const pts = [];
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const p = {
        x: (Math.random() - 0.5) * 22,
        y: Math.random() * 26 - 13, // span from top 13 to bottom -13
        z: (Math.random() - 0.5) * 12 - 2,
        vx: (Math.random() - 0.5) * 0.02,
        vy: -(0.03 + Math.random() * 0.07), // downwards flow
        vz: (Math.random() - 0.5) * 0.02,
        phase: Math.random() * Math.PI * 2,
      };
      pts.push(p);

      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;

      colors[i * 3] = 0;
      colors[i * 3 + 1] = 0.94;
      colors[i * 3 + 2] = 1;
    }
    return [pts, positions, colors];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const colAttr = pointsRef.current.geometry.attributes.color;

    const mouseX = mouseRef.current.x * 6;
    const mouseY = mouseRef.current.y * 6;

    for (let i = 0; i < count; i++) {
      const p = particles[i];

      // Gravity / flow down
      p.y += p.vy * (1 + scrollProgressRef.current * 1.5);
      // Swirling aerodynamic wave
      p.x += Math.sin(p.y * 0.3 + p.phase + state.clock.elapsedTime * 0.8) * 0.03;

      // Mouse interactive repulse / attract vortex
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 5) {
        const force = (5 - dist) * 0.015;
        p.x += dx * force;
        p.y += dy * force;
      }

      // Recycle particles from bottom back to top
      if (p.y < -13) {
        p.y = 13;
        p.x = (Math.random() - 0.5) * 22;
      }

      posAttr.array[i * 3] = p.x;
      posAttr.array[i * 3 + 1] = p.y;
      posAttr.array[i * 3 + 2] = p.z;

      // Color based on height (CFD Spectrum)
      const hNorm = (13 - p.y) / 26; // 0 (top) to 1 (bottom)
      if (hNorm < 0.33) {
        colAttr.array[i * 3] = 0; // R
        colAttr.array[i * 3 + 1] = 0.94 - hNorm * 0.4; // G
        colAttr.array[i * 3 + 2] = 1; // B
      } else if (hNorm < 0.66) {
        colAttr.array[i * 3] = (hNorm - 0.33) * 2.8; // R
        colAttr.array[i * 3 + 1] = 0.3; // G
        colAttr.array[i * 3 + 2] = 1 - (hNorm - 0.33) * 1.5; // B
      } else {
        colAttr.array[i * 3] = 1; // R
        colAttr.array[i * 3 + 1] = (1 - hNorm) * 2.5; // G (red to orange/amber)
        colAttr.array[i * 3 + 2] = 0.1; // B
      }
    }

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={posArray.length / 3}
          array={posArray}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colorArray.length / 3}
          array={colorArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function BackgroundFlowCanvas() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgressRef.current = window.scrollY / totalScroll;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <FlowStreamlines mouseRef={mouseRef} scrollProgressRef={scrollProgressRef} />
        <FlowParticles count={500} mouseRef={mouseRef} scrollProgressRef={scrollProgressRef} />
      </Canvas>
    </div>
  );
}
