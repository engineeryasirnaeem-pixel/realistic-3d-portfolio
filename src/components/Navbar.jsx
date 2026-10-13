import React, { useState, useEffect } from 'react';
import { Send, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero" },
    { name: "About & Lab", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-700 py-3 shadow-lg' 
        : 'bg-[#0F172A] py-4 border-b border-slate-800'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#F59E0B] flex items-center justify-center font-mono font-black text-[#0F172A] text-xs shadow-sm">
              YN
            </div>
            <div>
              <div className="text-sm font-bold text-[#F8F9FA] tracking-tight flex items-center gap-1.5">
                <span>Muhammad Yasir Naeem</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">Mechanical & Simulation Engineer</p>
            </div>
          </a>

          {/* Desktop Navigation Links (Text on Secondary: #F8F9FA) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1E293B] border border-slate-700 rounded-full px-4 py-1.5 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#F8F9FA] hover:text-[#F59E0B] px-3 py-1 rounded-full transition-colors hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA in 10% Safety Yellow */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.upwork}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg text-white bg-[#1E293B] border border-slate-700 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span>Upwork</span>
            </a>

            <a
              href="#contact"
              className="btn-safety-yellow inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1E293B] border border-slate-700 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#0F172A] border border-slate-700 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-white hover:text-[#F59E0B] px-3 py-2 rounded-lg hover:bg-[#1E293B]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.upwork}
                target="_blank"
                rel="noreferrer"
                className="text-center py-2 rounded-lg text-xs font-mono text-[#F59E0B] border border-slate-700 bg-[#1E293B] font-bold"
              >
                Upwork Freelance Profile
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-safety-yellow text-center py-2.5 rounded-lg text-xs font-bold"
              >
                Contact Muhammad Yasir Naeem
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
