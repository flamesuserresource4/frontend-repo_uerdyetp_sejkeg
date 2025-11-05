import React from 'react';
import { Building2, Plus } from 'lucide-react';

export default function WorkspaceHeader({ workspaces, selectedId, onSelect, onCreate }) {
  return (
    <header
      className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between"
      role="banner"
    >
      <div className="flex items-center gap-3">
        <Building2 className="w-5 h-5 text-[#0A6ED1]" aria-hidden="true" />
        <div>
          <h2 className="text-gray-900 font-semibold">Current workspace</h2>
          <p className="text-sm text-gray-500">Switch between your workspaces</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="workspace-select" className="sr-only">
          Select workspace
        </label>
        <select
          id="workspace-select"
          className="min-w-[200px] rounded-md border-gray-300 focus:border-[#0A6ED1] focus:ring-[#0A6ED1] text-gray-900"
          value={selectedId}
          onChange={(e) => onSelect(e.target.value)}
          aria-label="Select workspace"
        >
          {workspaces.map((w) => (
            <option key={w.id} value={w.id}>
              {w.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={onCreate}
          className="inline-flex items-center gap-2 rounded-md bg-[#0A6ED1] px-3 py-2 text-white text-sm font-medium shadow hover:bg-[#0a63bb] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A6ED1]"
        >
          <Plus className="w-4 h-4" aria-hidden="true" />
          New workspace
        </button>
      </div>
    </header>
  );
}
