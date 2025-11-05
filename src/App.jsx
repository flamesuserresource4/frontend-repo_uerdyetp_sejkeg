import React from 'react';
import LandingHero from './components/LandingHero';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-block h-3 w-3 rounded-full bg-[#0A6ED1]" aria-hidden="true" />
            SAP AI Consultant
          </a>
          <nav className="hidden sm:flex items-center gap-6" aria-label="Main">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
            <a href="#get-started" className="text-sm text-gray-600 hover:text-gray-900">Get started</a>
            <a href="#docs" className="text-sm text-gray-600 hover:text-gray-900">Docs</a>
          </nav>
        </div>
      </header>

      <main>
        <LandingHero />
        <FeatureGrid />
        <HowItWorks />
        <CTASection />
      </main>

      <SiteFooter />
    </div>
  );
}
