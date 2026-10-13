import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  Linkedin, 
  Facebook, 
  Cpu, 
  Wind, 
  Activity, 
  Layers, 
  Code2, 
  Terminal, 
  Flame, 
  Box 
} from 'lucide-react';
import { PERSONAL_INFO, TECHNICAL_SKILLS, LAB_PHOTOS } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Wind: Wind,
  Activity: Activity,
  Layers: Layers,
  Code2: Code2,
  Terminal: Terminal,
  Flame: Flame,
  Box: Box,
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-widest block mb-2">
            EXPERIENCE & LAB VALIDATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A]">
            About Me & Technical Discipline
          </h2>
          <p className="mt-3 text-[#0F172A] text-base leading-relaxed opacity-85">
            Bridging precision 3D CAD modeling with Navier-Stokes aerodynamic solvers and finite element stress prediction.
          </p>
        </motion.div>

        {/* Profile Card & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Engineer Profile Card (Anodized Black) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 anodized-card p-6 rounded-2xl"
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900 mb-5 border border-slate-700">
              <img
                src="/assets/profile.jpg"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F59E0B] text-[#0F172A] font-extrabold uppercase">
                  SIMULATION SPECIALIST
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-amber-300 font-mono">{PERSONAL_INFO.title}</p>
              </div>
            </div>

            {/* Quick Credentials & Location */}
            <div className="space-y-2.5 font-mono text-xs text-slate-300 mb-5">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Location:</span>
                <span className="text-white font-semibold">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Email:</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#F59E0B] font-semibold hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Primary Solvers:</span>
                <span className="text-white font-semibold">SOLIDWORKS, Fluent, Abaqus</span>
              </div>
            </div>

            {/* Direct Connect Buttons (Safety Yellow Accents) */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-lg bg-[#1E293B] border border-slate-700 hover:border-[#F59E0B] text-white hover:text-[#F59E0B] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.upwork}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-lg bg-[#1E293B] border border-slate-700 hover:border-[#F59E0B] text-white hover:text-[#F59E0B] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Upwork</span>
              </a>

              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-lg bg-[#1E293B] border border-slate-700 hover:border-[#F59E0B] text-white hover:text-[#F59E0B] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Technical Competencies */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="anodized-card p-6 sm:p-7 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#F59E0B]" />
                <span>Engineering Background</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                By verifying mechanical CAD solids with computational fluid dynamics (CFD) and structural stress simulations (FEA), I ensure products meet rigorous safety factors and performance targets before physical tooling.
              </p>

              {/* Core Competencies Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Conjugate Heat Transfer",
                  "Transonic Aerodynamics",
                  "Non-Linear Contact FEA",
                  "Composite Materials",
                  "Polyhedral Meshing",
                  "ASME Y14.5 GD&T"
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1E293B] border border-slate-700 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Skills Proficiency Matrix */}
            <div className="anodized-card p-6 sm:p-7 rounded-2xl">
              <h3 className="text-sm font-bold text-white mb-4 font-mono uppercase tracking-wide">
                SOFTWARE PROFICIENCY MATRIX
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {TECHNICAL_SKILLS.map((skill) => {
                  const Icon = iconMap[skill.icon] || Cpu;
                  return (
                    <div key={skill.name} className="bg-[#1E293B] p-3 rounded-lg border border-slate-700">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span className="text-xs font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#F59E0B]">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#0F172A] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#F59E0B] rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Real Action & Lab Photos */}
        <div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-1">
            Experimental Test Rig & Lab Validation
          </h3>
          <p className="text-xs text-[#0F172A] mb-6 opacity-75">
            Physical flow calibration, prototyping inspection, and sensor data acquisition.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LAB_PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="anodized-card rounded-xl overflow-hidden group"
              >
                <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 bg-[#0F172A] border-t border-slate-800">
                  <span className="text-[10px] font-mono text-[#F59E0B] uppercase font-bold block mb-0.5">
                    LAB SETUP #{index + 1}
                  </span>
                  <p className="text-xs text-slate-300 font-medium line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
