import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
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
        <Link className="wordmark" href="/"><span className="mark"><span /></span>BuildBrake</Link>
        <span className="docs-title"><FileText /> Documentation</span>
        <Link className="back-link" href="/"><ArrowLeft /> Product page</Link>
      </header>
      <div className="docs-frame">
        <aside className="docs-sidebar" aria-label="Documentation navigation">
          <p>Documentation</p>
          <nav>{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav>
          <div className="docs-side-note"><strong>v0.1.0</strong><span>macOS · Linux · WSL2</span></div>
        </aside>
        <article className="docs-content">{children}</article>
      </div>
      <footer className="docs-footer"><span>BuildBrake documentation</span><a href="https://github.com/karangandhidev/buildbrake">View source on GitHub</a></footer>
    </main>
  );
}
