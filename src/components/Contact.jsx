import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Clock,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'CFD Aerodynamics',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 relative">
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
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A]">
            Start an Engineering Consultation
          </h2>
          <p className="mt-3 text-[#0F172A] text-base opacity-85">
            Reach out directly for CAD solid modeling, aerodynamic flow computations, or structural finite element analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates (Anodized Black) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="anodized-card p-6 sm:p-7 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-5">Direct Contact Coordinates</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#1E293B] text-[#F59E0B] border border-slate-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block font-semibold">Email Address</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-white hover:text-[#F59E0B] hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#1E293B] text-[#F59E0B] border border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block font-semibold">Location</span>
                    <span className="text-sm text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#1E293B] text-[#F59E0B] border border-slate-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block font-semibold">Response Time</span>
                    <span className="text-sm text-slate-200">
                      Within 24 Hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Profile Links */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                <span className="text-xs font-mono text-[#F59E0B] block uppercase font-bold">
                  Verified Freelance & Social Profiles:
                </span>
                
                <a
                  href={PERSONAL_INFO.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#1E293B] border border-slate-700 hover:border-[#F59E0B] text-white hover:text-[#F59E0B] transition-all text-xs"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <span className="font-semibold">Upwork Profile & Reviews</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#1E293B] border border-slate-700 hover:border-[#F59E0B] text-white hover:text-[#F59E0B] transition-all text-xs"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span className="font-semibold">LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#1E293B] border border-slate-700 hover:border-[#F59E0B] text-white hover:text-[#F59E0B] transition-all text-xs"
                >
                  <span className="flex items-center gap-2">
                    <Facebook className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span className="font-semibold">Facebook Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (Anodized Black) */}
          <div className="lg:col-span-7 anodized-card p-6 sm:p-8 rounded-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#1E293B] text-[#F59E0B] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Sent Successfully</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, {formData.name || 'there'}. I have received your message and will review your engineering requirements within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', discipline: 'CFD Aerodynamics', message: '' });
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-[#1E293B] border border-slate-700 text-xs font-mono text-[#F59E0B] hover:bg-black transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E293B] border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E293B] border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
                    PROJECT CATEGORY
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E293B] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#F59E0B]"
                  >
                    <option value="CAD Modeling">Parametric CAD Solid & Surface Modeling</option>
                    <option value="CFD Aerodynamics">CFD Aerodynamics & External Flow</option>
                    <option value="CFD Thermal Fluids">CFD Conjugate Heat Transfer (CHT)</option>
                    <option value="FEA Structural">FEA Structural Stress & Thermal Analysis</option>
                    <option value="Full Project">Complete Virtual Prototyping Pipeline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-bold">
                    PROJECT DESCRIPTION *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on your geometry, flow conditions, loads, or target timeline..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E293B] border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F59E0B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-safety-yellow w-full py-3 rounded-lg text-sm flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-[#0F172A] border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Details</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
