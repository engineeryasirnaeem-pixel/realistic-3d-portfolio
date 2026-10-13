import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTransitionDivider({ title, subtitle, number }) {
  return (
    <div className="relative py-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Horizontal connector lines */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-8 pointer-events-none">
        <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#335c67]/30 to-[#335c67]/60" />
        <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent via-[#335c67]/30 to-[#335c67]/60" />
      </div>

      {/* Center Welcoming Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 px-6 py-2 rounded-full bg-[#eef3ee] border border-[#335c67]/40 shadow-sm flex items-center gap-3"
      >
        <span className="w-6 h-6 rounded-full bg-[#133038] text-white flex items-center justify-center font-mono font-bold text-[10px]">
          {number}
        </span>
        <div className="text-left">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#133038] font-bold block">
            {title}
          </span>
          {subtitle && (
            <span className="text-[10px] text-slate-500 font-mono block">
              {subtitle}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}
