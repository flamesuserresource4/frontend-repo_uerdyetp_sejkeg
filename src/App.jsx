import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import WorkspaceHeader from './components/WorkspaceHeader';
import SidebarTree from './components/SidebarTree';
import ProjectList from './components/ProjectList';

// Minimal mock data kept local to the page; passed down as props to stateless components
const initialData = {
  workspaces: [
    { id: 'ws-1', name: 'Northwind' },
    { id: 'ws-2', name: 'Contoso' },
  ],
  clients: [
    { id: 'c-1', workspaceId: 'ws-1', name: 'Acme Corp' },
    { id: 'c-2', workspaceId: 'ws-1', name: 'Globex' },
    { id: 'c-3', workspaceId: 'ws-2', name: 'Initech' },
  ],
  projects: [
    { id: 'p-1', clientId: 'c-1', name: 'Portal Revamp' },
    { id: 'p-2', clientId: 'c-2', name: 'Data Lake' },
  ],
};

export default function App() {
  const [workspaces, setWorkspaces] = useState(initialData.workspaces);
  const [clients] = useState(initialData.clients);
  const [projects, setProjects] = useState(initialData.projects);
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(workspaces[0]?.id ?? '');

  const hierarchy = useMemo(() => {
    return workspaces
      .map((w) => ({
        ...w,
        clients: clients
          .filter((c) => c.workspaceId === w.id)
          .map((c) => ({
            ...c,
            projects: projects.filter((p) => p.clientId === c.id),
          })),
      }))
      .filter((w) => w.id === selectedWorkspaceId);
  }, [workspaces, clients, projects, selectedWorkspaceId]);

  const visibleProjects = useMemo(() => {
    const workspaceClientIds = clients.filter((c) => c.workspaceId === selectedWorkspaceId).map((c) => c.id);
    return projects
      .filter((p) => workspaceClientIds.includes(p.clientId))
      .map((p) => ({
        ...p,
        clientName: clients.find((c) => c.id === p.clientId)?.name || '—',
      }));
  }, [projects, clients, selectedWorkspaceId]);

  const handleCreateWorkspace = () => {
    const name = prompt('Workspace name');
    if (!name) return;
    const id = `ws-${Date.now()}`;
    const next = [...workspaces, { id, name }];
    setWorkspaces(next);
    setSelectedWorkspaceId(id);
  };

  const handleCreateProject = () => {
    // Simple demo: create under the first client of the current workspace
    const client = clients.find((c) => c.workspaceId === selectedWorkspaceId);
    if (!client) return alert('Create a client first for this workspace.');
    const name = prompt('Project name');
    if (!name) return;
    const id = `p-${Date.now()}`;
    setProjects((prev) => [...prev, { id, clientId: client.id, name }]);
  };

  const handleSelectProject = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;
    alert(`Selected project: ${project.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <HeroCover />

        <div id="dashboard" className="space-y-4">
          <WorkspaceHeader
            workspaces={workspaces}
            selectedId={selectedWorkspaceId}
            onSelect={setSelectedWorkspaceId}
            onCreate={handleCreateWorkspace}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-4">
              <SidebarTree data={hierarchy} onSelectProject={handleSelectProject} />
            </div>
            <div className="lg:col-span-8">
              <ProjectList projects={visibleProjects} onCreate={handleCreateProject} />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        Built with React, Tailwind, and a playful Spline scene. SAP blue accents for clarity.
      </footer>
    </div>
  );
}
