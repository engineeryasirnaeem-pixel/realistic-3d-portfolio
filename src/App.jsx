import React from 'react';
import Navbar from './components/Navbar';
import PersuasiveHeroWord from './components/PersuasiveHeroWord';
import PopOutSectionHeader from './components/PopOutSectionHeader';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Realistic3DBackground from './components/Realistic3DBackground';
import FlyingPlanesAndScrollLeaves from './components/FlyingPlanesAndScrollLeaves';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#E2E8F0] text-[#0F172A] flex flex-col font-sans selection:bg-[#F59E0B] selection:text-[#0F172A] overflow-x-hidden">
      {/* 
        60% Matte Titanium Background (#E2E8F0):
        - High-resolution realistic engineering CAD model (ortho_front.png) rendered on a continuous 3D wave plane with mouse parallax
      */}
      <Realistic3DBackground />

      {/* 
        Aerospace & Nature Atmosphere:
        - Continuous supersonic jet planes with vapor contrails
        - Continuous falling leaves with flutter and scroll acceleration
      */}
      <FlyingPlanesAndScrollLeaves />

      {/* Header in 30% Anodized Black (#0F172A) */}
      <Navbar />

      <main className="flex-1 relative z-10">
        {/* 
          Entry Screen 1:
          "PRECISION." pops out on scroll
        */}
        <PersuasiveHeroWord />

        {/* Section 1: Overview */}
        <Hero />

        {/* 
          Section 2 Welcome Transition:
          "VALIDATION." pops out on scroll
        */}
        <PopOutSectionHeader 
          stageNumber="02"
          bigWord="VALIDATION."
          eyebrow="LAB FACILITIES & CREDENTIALS"
          description="Bridging finite element simulations with physical wind tunnel and telemetry instrumentation."
        />
        <About />

        {/* 
          Section 3 Welcome Transition:
          "PROTOTYPE." pops out on scroll
        */}
        <PopOutSectionHeader 
          stageNumber="03"
          bigWord="PROTOTYPE."
          eyebrow="STRICTLY VERIFIED CASE STUDIES"
          description="High-fidelity CAD solid assemblies, Navier-Stokes flow fields, and structural stress models."
        />
        <Projects />

        {/* 
          Section 4 Welcome Transition:
          "EXECUTION." pops out on scroll
        */}
        <PopOutSectionHeader 
          stageNumber="04"
          bigWord="EXECUTION."
          eyebrow="CAPABILITIES & DELIVERABLES"
          description="From ASME Y14.5 manufacturing blueprints to polyhedral meshing and fatigue life optimization."
        />
        <Capabilities />

        {/* 
          Section 5 Welcome Transition:
          "COLLABORATE." pops out on scroll
        */}
        <PopOutSectionHeader 
          stageNumber="05"
          bigWord="COLLABORATE."
          eyebrow="COMMUNICATION & CHANNELS"
          description="Direct engineering scope reviews, Upwork contract integration, and worldwide availability."
        />
        <Contact />
      </main>

      {/* Footer in 30% Anodized Black (#0F172A) */}
      <Footer />
    </div>
  );
}
