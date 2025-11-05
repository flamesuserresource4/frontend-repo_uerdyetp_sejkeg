import React from 'react';
import { Upload, ListChecks, FileText, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ListChecks,
      title: 'Interview flow',
      desc: 'Guide stakeholders through structured SAP questions to capture requirements.',
    },
    {
      icon: Upload,
      title: 'Add documents',
      desc: 'Drag & drop SAP docs and tag them to submodules for precise context.',
    },
    {
      icon: FileText,
      title: 'Generate BBD',
      desc: 'Stream Business Blueprint Documents in real time with human review.',
    },
    {
      icon: CheckCircle2,
      title: 'Validate & export',
      desc: 'Finalize, version, and export deliverables securely.',
    },
  ];

  return (
    <section aria-labelledby="how-heading" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 id="how-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900">How it works</h2>
        <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" aria-label="Steps">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0A6ED1]/10 text-[#0A6ED1] font-semibold">
                  {idx + 1}
                </span>
                <Icon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                <h3 className="ml-1 font-medium text-gray-900">{title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
