import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowDown } from 'lucide-react';

export default function PersuasiveHeroWord() {
  const { scrollY } = useScroll();

  const wordScale = useTransform(scrollY, [0, 260], [1, 2.2]);
  const wordOpacity = useTransform(scrollY, [0, 180, 240], [1, 0.4, 0]);
  const containerY = useTransform(scrollY, [0, 260], [0, -100]);
  const tagOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  const scrollToWebsite = () => {
    window.scrollTo({
      top: window.innerHeight * 0.98,
      behavior: 'smooth'
    });
  };

  return (
    <motion.section 
      style={{ y: containerY }}
      className="relative min-h-[96vh] flex flex-col items-center justify-center text-center px-4 select-none overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Subtle engineering category pill in Anodized Black & Safety Yellow */}
        <motion.div
          style={{ opacity: tagOpacity }}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] text-[#F8F9FA] text-xs font-mono font-bold tracking-widest uppercase shadow-md border border-[#334155]"
        >
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <span>CAD · CFD · FEA ENGINEERING</span>
        </motion.div>

        {/* The Persuasive Word that pops out and expands on scroll in Anodized Black (#0F172A) */}
        <motion.div
          style={{
            scale: wordScale,
            opacity: wordOpacity,
            transformOrigin: 'center center'
          }}
          className="will-change-transform"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-9xl md:text-[11rem] font-black tracking-tight text-[#0F172A] leading-none drop-shadow-sm"
          >
            PRECISION.
          </motion.h1>
        </motion.div>

        {/* Narrative & Scroll Prompt in 10% Safety Yellow Button */}
        <motion.div
          style={{ opacity: tagOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-col items-center max-w-xl mx-auto"
        >
          <p className="text-base sm:text-lg text-[#0F172A] font-medium leading-relaxed opacity-90">
            Eliminating physical guesswork through rigorous virtual prototyping, turbulent fluid dynamics, and finite element structural design.
          </p>

          <button
            onClick={scrollToWebsite}
            className="btn-safety-yellow mt-10 group inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-mono font-bold tracking-wider cursor-pointer hover:scale-105"
          >
            <span>SCROLL TO UNFOLD PORTFOLIO</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating scroll trigger at bottom */}
      <motion.div 
        style={{ opacity: tagOpacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#0F172A] cursor-pointer"
        onClick={scrollToWebsite}
      >
        <ChevronDown className="w-6 h-6 hover:text-[#F59E0B] transition-colors" />
      </motion.div>
    </motion.section>
  );
}
