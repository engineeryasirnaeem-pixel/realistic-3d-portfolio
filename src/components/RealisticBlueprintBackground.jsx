import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function RealisticBlueprintBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 45, stiffness: 80 });
  const smoothY = useSpring(mouseY, { damping: 45, stiffness: 80 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#E2E8F0]">
      {/* 
        60% Matte Titanium Background (#E2E8F0)
        Subtle engineering drawing with mouse parallax 
      */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] bg-cover bg-center"
      >
        {/* Subtle CAD drawing blueprint overlay in Anodized Black tint */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.10] filter contrast-125"
          style={{ backgroundImage: `url('/assets/cad/Cover.jpg')` }}
        />

        {/* Architectural precision grid in Anodized Black tint */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 23, 42, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 23, 42, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Titanium vignette to maintain crisp contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E2E8F0]/70 via-[#E2E8F0]/85 to-[#E2E8F0] pointer-events-none" />
    </div>
  );
}
