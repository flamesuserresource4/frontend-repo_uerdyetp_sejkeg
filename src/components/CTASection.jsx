import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="get-started" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 md:p-10 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Start your workspace rollout</h2>
            <p className="mt-2 text-gray-600">Refactor aligned to Workspace → Client → Project → Module → Submodule. Plug in real APIs when ready.</p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-[#0A6ED1] px-4 py-2 text-white text-sm font-medium shadow hover:bg-[#095fb6] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A6ED1]"
            >
              <Rocket className="h-4 w-4" aria-hidden="true" />
              Open Dashboard
            </a>
            <a
              href="#docs"
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-[#0A6ED1] ring-1 ring-inset ring-[#0A6ED1]/30 hover:bg-[#0A6ED1]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A6ED1]"
            >
              Read docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
