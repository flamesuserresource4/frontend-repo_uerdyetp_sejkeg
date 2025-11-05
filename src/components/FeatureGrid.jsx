import React from 'react';
import { Layers, FolderTree, Tags, LayoutGrid, MessageSquare, Database } from 'lucide-react';

const features = [
  {
    icon: FolderTree,
    title: 'Enterprise hierarchy',
    desc: 'Workspace → Client → Project → Module → Submodule for clear ownership and navigation.',
  },
  {
    icon: Layers,
    title: 'Multi-module projects',
    desc: 'Select multiple SAP modules per project (FI, CO, MM, and more).',
  },
  {
    icon: Tags,
    title: 'Document tagging',
    desc: 'Upload and tag documents to submodules for context-aware AI retrieval.',
  },
  {
    icon: LayoutGrid,
    title: 'Modern interface',
    desc: 'Light-themed, accessible UI with an 8px grid and SAP blue accents.',
  },
  {
    icon: MessageSquare,
    title: 'ChatKit-powered',
    desc: 'Canvas-like chat with live document preview and streaming BBD generation.',
  },
  {
    icon: Database,
    title: 'Supabase + Qdrant',
    desc: 'Reliable persistence and vector search for AI document context.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Why teams choose SAP AI Consultant</h2>
          <p className="mt-2 text-gray-600">Purpose-built for SAP S/4HANA implementations with robust information architecture.</p>
        </div>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {features.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="rounded-lg border border-gray-200 p-5 bg-white hover:shadow-sm focus-within:ring-2 focus-within:ring-[#0A6ED1]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A6ED1]/10 text-[#0A6ED1]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-gray-900 font-medium">{title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
