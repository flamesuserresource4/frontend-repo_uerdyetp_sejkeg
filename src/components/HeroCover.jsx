import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[360px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-xl bg-gray-950">
      <Spline
        scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft gradient overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />

      <div className="absolute inset-0 flex items-end md:items-center justify-start p-6 md:p-10">
        <div className="max-w-2xl text-white drop-shadow-sm">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Enterprise Workspace Management
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-200 max-w-xl">
            Organize workspaces, clients, projects, and documents with a clean, extensible UI. Built with an accessibility-first mindset and a light design language.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#dashboard"
              className="inline-flex items-center rounded-md bg-[#0A6ED1] px-4 py-2 text-white text-sm font-medium shadow hover:bg-[#0a63bb] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A6ED1] focus-visible:ring-offset-white"
            >
              Go to Dashboard
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center rounded-md bg-white/10 backdrop-blur px-4 py-2 text-white text-sm font-medium ring-1 ring-white/30 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-gray-900"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
