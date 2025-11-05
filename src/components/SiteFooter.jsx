import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} SAP AI Consultant • Light theme • SAP blue accents</p>
        <nav className="flex items-center gap-4" aria-label="Footer">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#get-started" className="hover:text-gray-900">Get started</a>
          <a href="#docs" className="hover:text-gray-900">Docs</a>
        </nav>
      </div>
    </footer>
  );
}
