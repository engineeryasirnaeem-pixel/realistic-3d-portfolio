import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 py-10 relative bg-[#0F172A] text-[#F8F9FA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div>
            <div className="font-bold text-white tracking-tight flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-xs font-mono text-[#F59E0B] font-semibold">| Mechanical & Simulation Engineer</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Virtual Prototyping, CAD Modeling, CFD Aerodynamics & FEA Stress Analysis
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#1E293B] border border-slate-700 text-white hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.upwork}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#1E293B] border border-slate-700 text-white hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all text-xs font-mono font-bold flex items-center gap-1.5"
              title="Upwork"
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span>Upwork</span>
            </a>

            <a
              href={PERSONAL_INFO.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#1E293B] border border-slate-700 text-white hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1E293B] border border-slate-700 text-white hover:bg-[#F59E0B] hover:text-[#0F172A] transition-all ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs font-mono text-slate-400">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Engineering calculations and CAD assemblies reserved.
        </div>
      </div>
    </footer>
  );
}
