import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  Cpu, 
  ChevronRight, 
  ExternalLink,
  Linkedin,
} from 'lucide-react';
import HeroScene from './3d/HeroScene';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-16 overflow-hidden"
    >
      {/* 3D Aerospace Canvas */}
      <HeroScene />

      {/* Foreground Content */}
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000
        }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] text-[#F8F9FA] text-xs font-mono mb-6 shadow-md border border-[#334155]"
        >
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
          <span>Available for CAD Modeling, CFD Aerodynamics & FEA Stress Analysis</span>
        </motion.div>

        {/* Engineer Title (30% Anodized Black #0F172A) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.1]"
        >
          {PERSONAL_INFO.name}
          <span className="block mt-2 text-2xl sm:text-3xl font-bold text-[#1E293B]">
            Mechanical & Simulation Engineer
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-[#0F172A] max-w-3xl mx-auto font-medium leading-relaxed opacity-90"
        >
          {PERSONAL_INFO.tagline} Leveraging advanced finite-volume and finite-element formulations across SOLIDWORKS, ANSYS Fluent, and Abaqus to ensure manufacture-ready engineering integrity.
        </motion.p>

        {/* Telemetry Metrics (30% Anodized Black Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-3xl mx-auto mt-8"
        >
          <div className="anodized-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F59E0B]">
              {PERSONAL_INFO.simulationsRun}
            </div>
            <div className="text-xs font-mono text-slate-300 uppercase mt-1">CFD & FEA Runs</div>
          </div>

          <div className="anodized-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F59E0B]">
              {PERSONAL_INFO.cadAssemblies}
            </div>
            <div className="text-xs font-mono text-slate-300 uppercase mt-1">CAD Assemblies</div>
          </div>

          <div className="anodized-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F59E0B]">
              {PERSONAL_INFO.experienceYears}
            </div>
            <div className="text-xs font-mono text-slate-300 uppercase mt-1">Years CAE Practice</div>
          </div>

          <div className="anodized-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F59E0B]">
              {PERSONAL_INFO.convergenceRate}
            </div>
            <div className="text-xs font-mono text-slate-300 uppercase mt-1">Convergence Rate</div>
          </div>
        </motion.div>

        {/* 10% Safety Yellow Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a
            href="#projects"
            className="btn-safety-yellow inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
          >
            <Cpu className="w-4 h-4" />
            <span>Explore Engineering Projects</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.upwork}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#F8F9FA] bg-[#0F172A] hover:bg-[#1E293B] border border-[#334155] transition-all shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span>Hire on Upwork</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#F8F9FA] bg-[#0F172A] hover:bg-[#1E293B] border border-[#334155] transition-all shadow-md"
          >
            <Linkedin className="w-4 h-4 text-[#F59E0B]" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
