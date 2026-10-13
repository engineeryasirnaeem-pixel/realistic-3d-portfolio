import React from 'react';
import { motion } from 'framer-motion';
import { 
  DraftingCompass, 
  Wind, 
  ShieldAlert, 
  Cpu, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { ENGINEERING_SERVICES } from '../data/portfolioData';

const serviceIcons = {
  DraftingCompass: DraftingCompass,
  Wind: Wind,
  ShieldAlert: ShieldAlert,
  Cpu: Cpu,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-widest block mb-2">
            ENGINEERING CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A]">
            Simulation Services & Deliverables
          </h2>
          <p className="mt-3 text-[#0F172A] text-base opacity-85">
            End-to-end engineering assistance from parametric CAD solids to flow and stress reporting.
          </p>
        </motion.div>

        {/* 4 Clean Capability Cards (30% Anodized Black Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_SERVICES.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Cpu;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="anodized-card p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-slate-700 flex items-center justify-center mb-5 text-[#F59E0B]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-800">
                    <span className="text-xs font-mono text-[#F59E0B] uppercase block mb-2 font-bold">
                      Standard Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:text-[#fbbf24] transition-colors"
                  >
                    <span>Request Engineering Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4-Stage Workflow Strip */}
        <div className="mt-12 anodized-card p-6 rounded-2xl">
          <div className="text-center mb-5">
            <span className="text-xs font-mono text-white uppercase font-bold">
              SIMULATION & DESIGN PIPELINE
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-[#1E293B] rounded-lg border border-slate-700">
              <span className="text-xs font-mono text-[#F59E0B] font-bold block mb-1">STAGE 1</span>
              <div className="text-sm font-semibold text-white">CAD & Fluid Domain</div>
              <p className="text-xs text-slate-400 mt-1">Parametric solid models & DFM check</p>
            </div>
            <div className="p-3 bg-[#1E293B] rounded-lg border border-slate-700">
              <span className="text-xs font-mono text-[#F59E0B] font-bold block mb-1">STAGE 2</span>
              <div className="text-sm font-semibold text-white">High-Quality Meshing</div>
              <p className="text-xs text-slate-400 mt-1">Prism layer inflation & y+ control</p>
            </div>
            <div className="p-3 bg-[#1E293B] rounded-lg border border-slate-700">
              <span className="text-xs font-mono text-[#F59E0B] font-bold block mb-1">STAGE 3</span>
              <div className="text-sm font-semibold text-white">Solver Computation</div>
              <p className="text-xs text-slate-400 mt-1">Navier-Stokes flow & non-linear stress</p>
            </div>
            <div className="p-3 bg-[#1E293B] rounded-lg border border-slate-700">
              <span className="text-xs font-mono text-[#F59E0B] font-bold block mb-1">STAGE 4</span>
              <div className="text-sm font-semibold text-white">Validation & Reports</div>
              <p className="text-xs text-slate-400 mt-1">Factor of safety & production drawings</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
