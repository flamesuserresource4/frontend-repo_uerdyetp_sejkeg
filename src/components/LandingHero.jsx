import React from 'react';
import Spline from '@splinetool/react-spline';

export default function LandingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
            <span className="h-2 w-2 rounded-full bg-[#0A6ED1]" aria-hidden="true" />
            UI refactor in progress
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
            OriginERP — SAP AI Consultant
          </h1>
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-xl">
            An AI-powered assistant by OriginERP that guides SAP S/4HANA consultants through structured interviews and generates Business Blueprint Documents (BBD).
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-[#0A6ED1] px-4 py-2 text-white text-sm font-medium shadow hover:bg-[#095fb6] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A6ED1]">
              Explore features
            </a>
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-[#0A6ED1] ring-1 ring-inset ring-[#0A6ED1]/30 hover:bg-[#0A6ED1]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A6ED1]">
              Get started
            </a>
          </div>
        </div>

        <div className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-xl overflow-hidden ring-1 ring-gray-200">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
