import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top Header Progress Bar with CFD Rainbow Spectrum */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-900/60 z-[60] backdrop-blur-sm">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 via-fuchsia-500 to-amber-400 shadow-[0_0_12px_rgba(0,240,255,0.8)]"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Vertical HUD Telemetry Needle (Right Side) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider rotate-90 mb-4">
          REYNOLDS SPECTRUM
        </span>
        <div className="w-1.5 h-48 bg-slate-900/90 rounded-full border border-slate-800 relative overflow-hidden shadow-lg backdrop-blur-md">
          {/* Internal thermal gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-500 opacity-80" />
          {/* Indicator slider */}
          <motion.div 
            className="w-full h-3 bg-white rounded-full shadow-[0_0_8px_#ffffff] -translate-y-1/2"
            style={{
              top: `${percent}%`
            }}
          />
        </div>
        <span className="text-[10px] font-mono text-slate-300 font-bold mt-2">
          {percent}%
        </span>
      </div>
    </>
  );
}
