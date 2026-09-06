/* oxlint-disable next/no-html-link-for-pages -- Static export uses native navigation because Vinext client links fail in production. */
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation | BuildBrake',
  description: 'Install, understand, and evaluate BuildBrake with practical guides, command reference, benchmarks, and security notes.',
};

const links = [
  ['/docs', 'Overview'],
  ['/docs/getting-started', 'Getting started'],
  ['/docs/how-it-works', 'How it works'],
  ['/docs/cli', 'CLI reference'],
  ['/docs/benchmarks', 'Benchmarks'],
  ['/docs/security', 'Security'],
  ['/docs/license', 'License'],
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="docs-shell">
      <header className="docs-topbar">
        <a className="wordmark" href="/"><span className="mark"><span /></span>BuildBrake</a>
        <span className="docs-title"><FileText /> Documentation</span>
        <a className="back-link" href="/"><ArrowLeft /> Product page</a>
      </header>
      <div className="docs-frame">
        <aside className="docs-sidebar" aria-label="Documentation navigation">
          <p>Documentation</p>
          <nav>{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
          <div className="docs-side-note"><strong>v0.1.0</strong><span>macOS · Linux · WSL2</span></div>
        </aside>
        <article className="docs-content">{children}</article>
      </div>
      <footer className="docs-footer"><span>BuildBrake documentation</span><a href="https://github.com/karangandhidev/buildbrake">View source on GitHub</a></footer>
    </main>
  );
}
