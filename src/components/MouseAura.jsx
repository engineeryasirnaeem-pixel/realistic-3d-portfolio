import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function MouseAura() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for delayed organic follow
  const springConfig = { damping: 25, stiffness: 180 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const trailConfig = { damping: 35, stiffness: 90 };
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Primary Cyan Core Reticle */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-10 h-10 rounded-full border border-cyan-400/80 bg-cyan-500/10 backdrop-blur-[1px] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.7)]"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#00f0ff]" />
        {/* Crosshair indicators */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-cyan-400" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-cyan-400" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-cyan-400" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-cyan-400" />
      </motion.div>

      {/* Trailing Chromatic CFD Temperature Contour Halo */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-96 h-96 rounded-full opacity-40 blur-[80px]"
        animate={{
          background: [
            'radial-gradient(circle, rgba(0,240,255,0.35) 0%, rgba(59,130,246,0.2) 40%, rgba(236,72,153,0.15) 70%, transparent 100%)',
            'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(139,92,246,0.2) 40%, rgba(0,240,255,0.15) 70%, transparent 100%)',
            'radial-gradient(circle, rgba(245,158,11,0.3) 0%, rgba(239,68,68,0.2) 40%, rgba(0,240,255,0.15) 70%, transparent 100%)',
            'radial-gradient(circle, rgba(0,240,255,0.35) 0%, rgba(59,130,246,0.2) 40%, rgba(236,72,153,0.15) 70%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
