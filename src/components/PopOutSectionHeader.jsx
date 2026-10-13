import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PopOutSectionHeader({ 
  stageNumber = "01",
  bigWord = "ANALYSIS.",
  eyebrow = "ENGINEERING DISCIPLINE",
  description = "Rigorous virtual prototyping, turbulent fluid dynamics, and finite element structural design."
}) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const wordScale = useTransform(scrollYProgress, [0.05, 0.45, 0.85], [0.8, 1.45, 0.9]);
  const wordOpacity = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.95], [0.2, 1, 1, 0.3]);
  const yOffset = useTransform(scrollYProgress, [0.05, 0.5, 0.95], [60, 0, -40]);

  return (
    <div 
      ref={containerRef}
      className="relative py-16 sm:py-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden select-none"
    >
      {/* Background connecting lines in Anodized Black */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-8 pointer-events-none opacity-20">
        <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#0F172A] to-[#0F172A]" />
        <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent via-[#0F172A] to-[#0F172A]" />
      </div>

      <motion.div 
        style={{ y: yOffset }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Stage Pill in Anodized Black with Safety Yellow dot */}
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] text-[#F8F9FA] text-xs font-mono font-bold tracking-widest uppercase shadow-md border border-[#334155]">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
          <span>STAGE {stageNumber} · {eyebrow}</span>
        </div>

        {/* The Giant Pop-Out Word in Anodized Black (#0F172A) */}
        <motion.div
          style={{
            scale: wordScale,
            opacity: wordOpacity,
            transformOrigin: 'center center'
          }}
          className="will-change-transform my-3"
        >
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-[#0F172A] leading-none drop-shadow-sm">
            {bigWord}
          </h2>
        </motion.div>

        {/* Narrative Welcoming Line */}
        {description && (
          <p className="mt-4 text-sm sm:text-base text-[#0F172A] max-w-xl mx-auto font-medium leading-relaxed opacity-85">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
