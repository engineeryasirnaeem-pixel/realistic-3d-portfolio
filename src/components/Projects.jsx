import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Maximize2, 
  ChevronRight, 
  Cpu, 
  Activity, 
  Info
} from 'lucide-react';
import { ALL_PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const tabs = [
    { id: 'all', label: 'All Projects', count: ALL_PROJECTS.length },
    { id: 'cad', label: 'CAD & Mechanical Design', count: ALL_PROJECTS.filter(p => p.category === 'cad').length },
    { id: 'cfd', label: 'CFD Aerodynamics & Thermal', count: ALL_PROJECTS.filter(p => p.category === 'cfd').length },
    { id: 'fea', label: 'FEA Structural Stress', count: ALL_PROJECTS.filter(p => p.category === 'fea').length },
  ];

  const filteredProjects = activeTab === 'all' 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-widest block mb-2">
            ENGINEERING CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A]">
            CAD, CFD & FEA Project Showcase
          </h2>
          <p className="mt-3 text-[#0F172A] text-base opacity-85">
            Detailed engineering evaluation of assemblies, flowfields, and structural simulations with strictly relative images.
          </p>
        </motion.div>

        {/* Clean Filter Tabs (Active in Anodized Black / Safety Yellow) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#0F172A] text-white shadow-md border border-[#F59E0B]'
                    : 'bg-white text-[#0F172A] hover:bg-[#cbd5e1] border border-[#94a3b8]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${isActive ? 'bg-[#F59E0B] text-[#0F172A]' : 'bg-[#e2e8f0] text-slate-700'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid (30% Anodized Black Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="anodized-card rounded-2xl flex flex-col overflow-hidden group"
            >
              {/* Cover Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-85" />

                {/* Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#0F172A]/90 text-[#F59E0B] border border-[#F59E0B]/40 shadow-sm">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Quick Enlarge */}
                <button
                  onClick={() => setLightboxImage(project.cover)}
                  title="Enlarge Image"
                  className="absolute top-3 right-3 p-1.5 rounded-md bg-black/70 text-slate-200 hover:text-[#F59E0B] transition-colors shadow-sm"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {project.gallery && project.gallery.length > 1 && (
                  <div className="absolute bottom-2.5 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-white font-semibold shadow-sm">
                    {project.gallery.length} Images
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F59E0B] mt-1 font-semibold">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.software.map((sw) => (
                      <span key={sw} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1E293B] text-slate-300 border border-slate-700">
                        {sw}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveGalleryIndex(0);
                    }}
                    className="btn-safety-yellow w-full py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5"
                  >
                    <span>View Specifications & Images</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
              <div className="relative w-full max-w-4xl bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-[#F8F9FA]">
                <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#080D1A]">
                  <div>
                    <span className="text-[10px] font-mono text-[#F59E0B] uppercase font-bold">ENGINEERING DOSSIER</span>
                    <h3 className="text-lg font-bold text-white">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 overflow-y-auto space-y-6">
                  {/* Image Viewer */}
                  <div>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black border border-slate-800">
                      <img
                        src={selectedProject.gallery[activeGalleryIndex] || selectedProject.cover}
                        alt="Technical detail"
                        className="w-full h-full object-contain"
                      />
                      <button
                        onClick={() => setLightboxImage(selectedProject.gallery[activeGalleryIndex] || selectedProject.cover)}
                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0F172A]/90 hover:bg-[#0F172A] text-xs font-mono text-[#F59E0B] font-bold border border-slate-700 flex items-center gap-1.5 shadow-sm"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Enlarge High-Res</span>
                      </button>
                    </div>

                    {selectedProject.gallery.length > 1 && (
                      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                        {selectedProject.gallery.map((imgSrc, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveGalleryIndex(idx)}
                            className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                              activeGalleryIndex === idx ? 'border-[#F59E0B]' : 'border-slate-800 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={imgSrc} alt="thumb" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Summary & KPIs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-[#1E293B] p-5 rounded-xl border border-slate-700">
                      <h4 className="text-xs font-mono font-bold text-[#F59E0B] uppercase mb-2">
                        Project Description
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {selectedProject.description}
                      </p>
                      <div className="text-[11px] font-mono text-slate-400 font-semibold">
                        Tools: {selectedProject.software.join(", ")}
                      </div>
                    </div>

                    <div className="bg-[#1E293B] p-5 rounded-xl border border-slate-700">
                      <h4 className="text-xs font-mono font-bold text-[#F59E0B] uppercase mb-2">
                        Key Parameters & Results
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.specs?.map((spec, i) => (
                          <div key={i} className="flex justify-between items-center py-1.5 border-b border-slate-750 text-xs">
                            <span className="text-slate-400 font-mono">{spec.label}</span>
                            <span className="text-white font-mono font-bold">{spec.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Component Explorer for Hydroplane if present */}
                  {selectedProject.components && selectedProject.components.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-xs font-mono font-bold text-[#F59E0B] uppercase mb-3">
                        Sub-Assembly Parts ({selectedProject.components.length} Components)
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 max-h-64 overflow-y-auto p-2 bg-[#1E293B] rounded-xl border border-slate-700">
                        {selectedProject.components.map((comp, idx) => (
                          <div
                            key={idx}
                            onClick={() => setLightboxImage(comp.img)}
                            className="cursor-pointer bg-[#0F172A] p-2 rounded-lg border border-slate-700 hover:border-[#F59E0B] text-center transition-colors"
                          >
                            <div className="aspect-square bg-slate-950 rounded overflow-hidden mb-1">
                              <img src={comp.img} alt={comp.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-[10px] font-mono text-slate-300 line-clamp-1">{comp.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Global Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setLightboxImage(null)}
            >
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={lightboxImage}
                alt="Enlarged"
                className="max-w-[92vw] max-h-[92vh] object-contain rounded-lg border border-slate-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
