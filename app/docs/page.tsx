import Link from 'next/link';

export default function DocsOverview() {
  return <>
    <div className="doc-eyebrow">Documentation</div>
    <h1>BuildBrake, from first run to proof.</h1>
    <p className="doc-lead">BuildBrake wraps your own Codex CLI with an outcome contract, a resource budget, bounded context, and a reviewable receipt.</p>
    <div className="doc-callout"><strong>Start here</strong><p>If BuildBrake is not installed yet, follow the getting started guide. It covers Codex setup, platform support, installation, and your first guarded task.</p><Link href="/docs/getting-started">Install and run BuildBrake →</Link></div>
    <h2>Choose what you need</h2>
    <div className="doc-card-grid">
      <Link href="/docs/how-it-works"><strong>Understand the system</strong><span>Preflight, task sizing, context selection, limits, verification, and receipts.</span></Link>
      <Link href="/docs/cli"><strong>Use the terminal</strong><span>The main commands and when to use each one.</span></Link>
      <Link href="/docs/benchmarks"><strong>Inspect the evidence</strong><span>Method, limitations, and all nine controlled comparisons.</span></Link>
      <Link href="/docs/security"><strong>Review the trust model</strong><span>Local permissions, Codex data flow, dashboard binding, and receipts.</span></Link>
    </div>
    <h2>What BuildBrake does not do</h2>
    <p>BuildBrake does not replace Codex, provide an OpenAI account, or guarantee that every task will use fewer tokens. It makes the intended outcome explicit, limits execution, narrows supplied context, and records what happened so the result can be evaluated.</p>
  </>;
}
export const metadata = {
  title: "Documentation | BuildBrake",
  description: "Install, run, and understand BuildBrake with practical guides and measured benchmark results.",
  alternates: { canonical: "/docs" },
};
