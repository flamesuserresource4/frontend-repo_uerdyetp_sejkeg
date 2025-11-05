import React from 'react';
import { FolderKanban, PlusCircle } from 'lucide-react';

export default function ProjectList({ projects, onCreate }) {
  return (
    <section aria-labelledby="projects-heading" className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 id="projects-heading" className="text-gray-900 font-semibold flex items-center gap-2">
          <FolderKanban className="w-5 h-5 text-[#0A6ED1]" aria-hidden="true" />
          Projects
        </h3>
        <button
          type="button"
          onClick={onCreate}
          className="inline-flex items-center gap-2 rounded-md bg-[#0A6ED1] px-3 py-2 text-white text-sm font-medium shadow hover:bg-[#0a63bb] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A6ED1]"
        >
          <PlusCircle className="w-4 h-4" aria-hidden="true" />
          New project
        </button>
      </div>

      {projects.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
          {projects.map((p) => (
            <li key={p.id} className="border border-gray-200 rounded-lg p-4 focus-within:ring-2 focus-within:ring-[#0A6ED1]">
              <div className="font-medium text-gray-900">{p.name}</div>
              <div className="mt-1 text-sm text-gray-500">Client: {p.clientName}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 border border-dashed border-gray-300 rounded-lg bg-gray-50">
      <FolderKanban className="w-10 h-10 text-gray-400" aria-hidden="true" />
      <h4 className="mt-3 text-gray-800 font-medium">No projects yet</h4>
      <p className="mt-1 text-sm text-gray-500 max-w-sm">
        Create your first project to start organizing modules, submodules, and documents.
      </p>
    </div>
  );
}
