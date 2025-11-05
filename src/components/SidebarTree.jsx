import React, { useState } from 'react';
import { ChevronRight, Folder, FolderTree, FolderOpen, FileText } from 'lucide-react';

// Accessible, collapsible tree: Workspace → Client → Project
export default function SidebarTree({ data, onSelectProject }) {
  return (
    <nav aria-label="Workspace hierarchy" className="bg-white border border-gray-200 rounded-lg p-3">
      <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <FolderTree className="w-4 h-4 text-[#0A6ED1]" aria-hidden="true" />
        Hierarchy
      </h3>
      <ul role="tree" className="space-y-1">
        {data.map((workspace) => (
          <TreeWorkspace key={workspace.id} node={workspace} onSelectProject={onSelectProject} />)
        )}
      </ul>
    </nav>
  );
}

function TreeWorkspace({ node, onSelectProject }) {
  const [open, setOpen] = useState(true);
  return (
    <li role="treeitem" aria-expanded={open} className="">
      <button
        className="w-full text-left flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A6ED1]"
        onClick={() => setOpen((v) => !v)}
        aria-controls={`ws-${node.id}`}
      >
        <ChevronRight className={`w-4 h-4 transition-transform ${open ? 'rotate-90' : ''}`} aria-hidden="true" />
        <FolderOpen className="w-4 h-4 text-[#0A6ED1]" aria-hidden="true" />
        <span className="font-medium text-gray-900">{node.name}</span>
      </button>
      {open && (
        <ul id={`ws-${node.id}`} role="group" className="ml-6 mt-1 space-y-1">
          {node.clients.map((c) => (
            <TreeClient key={c.id} node={c} onSelectProject={onSelectProject} />
          ))}
        </ul>
      )}
    </li>
  );
}

function TreeClient({ node, onSelectProject }) {
  const [open, setOpen] = useState(true);
  return (
    <li role="treeitem" aria-expanded={open}>
      <button
        className="w-full text-left flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A6ED1]"
        onClick={() => setOpen((v) => !v)}
        aria-controls={`client-${node.id}`}
      >
        <ChevronRight className={`w-4 h-4 transition-transform ${open ? 'rotate-90' : ''}`} aria-hidden="true" />
        <Folder className="w-4 h-4 text-gray-500" aria-hidden="true" />
        <span className="text-gray-800">{node.name}</span>
      </button>
      {open && (
        <ul id={`client-${node.id}`} role="group" className="ml-6 mt-1 space-y-1">
          {node.projects.map((p) => (
            <li key={p.id} role="treeitem">
              <button
                className="w-full text-left flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A6ED1]"
                onClick={() => onSelectProject(p.id)}
              >
                <FileText className="w-4 h-4 text-gray-400" aria-hidden="true" />
                <span className="text-gray-700">{p.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
