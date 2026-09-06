/* oxlint-disable next/no-html-link-for-pages -- Static export uses native navigation because Vinext client links fail in production. */
'use client';

import { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Clipboard, Clock3, Command, FileCode2, Gauge, ShieldCheck, TerminalSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const installCommand = `git clone https://github.com/karangandhidev/buildbrake.git
cd buildbrake
./install.sh
bb doctor`;

const proofItems = [['New input', '8,814', 'tokens'], ['Commands', '4', 'of 6'], ['Files changed', '1', 'of 3'], ['Runtime', '41s', 'of 5m']];

export default function Home() {
  const [copied, setCopied] = useState(false);
  async function copyInstall() {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="BuildBrake home"><span className="mark"><span /></span>BuildBrake</a>
        <div className="nav-links"><a href="#how-it-works">How it works</a><a href="/docs">Docs</a><a href="#install">Install</a></div>
        <a className="github-button" href="https://github.com/karangandhidev/buildbrake" target="_blank" rel="noreferrer"><FileCode2 /> GitHub</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span className="live-dot" /> Open source · Runs locally · MIT licensed</div>
        <h1>Put a brake on<br />wasteful agent runs.</h1>
        <p className="hero-copy">BuildBrake gives Codex a clear finish line, a resource budget, and a proof check before it touches your code.</p>
        <div className="hero-actions">
          <a className="primary-cta" href="#install">Install BuildBrake <ArrowRight /></a>
          <a className="secondary-cta" href="https://github.com/karangandhidev/buildbrake" target="_blank" rel="noreferrer">View source <FileCode2 /></a>
        </div>
        <p className="support-note">macOS and Linux · Windows via WSL2 · Python 3.9+</p>

        <div className="receipt-wrap" aria-label="Example BuildBrake run receipt">
          <div className="receipt-topline"><span className="receipt-id"><Command /> RUN 20260906-112204</span><span className="proved"><CheckCircle2 /> PROVED</span></div>
          <div className="receipt-grid">
            <div className="receipt-main">
              <p className="receipt-label">Agent task</p>
              <h2>Fix the receipt path display and verify the regression.</h2>
              <div className="target-block"><span>DONE WHEN</span><p>Every changed file is shown relative to the current project, with regression coverage passing.</p></div>
              <div className="changed-file"><FileCode2 /> src/buildbrake/dashboard.py <Check /></div>
              <div className="finding"><span>AGENT FINDING</span><p>Changed-file paths now resolve from the project root. Targeted tests passed: 2/2.</p></div>
            </div>
            <aside className="receipt-stats">
              <p className="receipt-label">Resource check</p>
              {proofItems.map(([label, value, unit]) => <div className="stat-row" key={label}><span>{label}</span><strong>{value} <small>{unit}</small></strong></div>)}
              <div className="within"><ShieldCheck /> All limits respected</div>
            </aside>
          </div>
        </div>
      </section>

      <section className="problem-section shell">
        <div className="section-kicker">The problem</div>
        <div className="problem-grid">
          <h2>Coding agents are powerful.<br /><span>Unguided runs are expensive.</span></h2>
          <div className="problem-copy"><p>A small CSS change should not need a repository tour, twenty commands, and a giant conversation.</p><p>Without a measurable finish line, an agent can keep inspecting, broaden the task, and still report success without proving the result.</p></div>
        </div>
        <div className="problem-cards">
          <article><Clock3 /><strong>Time drifts</strong><p>No hard stop when a simple task becomes a long session.</p></article>
          <article><Gauge /><strong>Context grows</strong><p>Old conversation and broad file reads inflate every new request.</p></article>
          <article><ShieldCheck /><strong>Success gets guessed</strong><p>Completed is not the same as tested, reviewed, or proved.</p></article>
        </div>
      </section>

      <section className="how-section" id="how-it-works"><div className="shell">
        <div className="section-kicker light">How it works</div>
        <div className="how-heading"><h2>Three checks between<br />your prompt and your code.</h2><p>BuildBrake wraps your own Codex CLI. Your account, project, and agent stay yours.</p></div>
        <div className="steps">
          <article><span className="step-number">01</span><TerminalSquare /><h3>Define the finish line</h3><p>A zero-token preflight turns the task into an observable result and blocks vague work before Codex starts.</p></article>
          <article><span className="step-number">02</span><Gauge /><h3>Limit the run</h3><p>Task size controls context, commands, changed files, model choice, and runtime. Narrow work stays narrow.</p></article>
          <article><span className="step-number">03</span><ShieldCheck /><h3>Demand proof</h3><p>BuildBrake runs targeted checks or the configured suite, then records what happened in a local receipt.</p></article>
        </div>
      </div></section>

      <section className="evidence-section shell" id="evidence">
        <div className="evidence-copy"><div className="section-kicker">Measured, not promised</div><h2>Less input.<br />Fewer commands.<br />Same proved outcomes.</h2><p>Nine controlled comparisons used identical tasks, models, and starting commits. This is a small sample, not a guarantee for every project.</p><a href="/docs/benchmarks">Read the method and every result <ArrowRight /></a></div>
        <div className="evidence-board">
          <div className="metric-big"><span>New input tokens</span><strong>35.6%</strong><em>fewer</em></div>
          <div className="metric-pair"><div><span>Total input</span><strong>32.8%</strong><em>fewer</em></div><div><span>Agent commands</span><strong>52%</strong><em>fewer</em></div></div>
          <div className="outcome-line"><span>Outcome parity</span><strong>9 / 9 proved</strong><CheckCircle2 /></div>
        </div>
      </section>

      <section className="install-section" id="install"><div className="shell install-grid">
        <div><div className="section-kicker light">Start locally</div><h2>One install.<br />Any project.</h2><p>BuildBrake uses your own Codex login and tokens. It stores receipts locally and sends no telemetry of its own.</p><div className="requirements"><span><Check /> Python 3.9+</span><span><Check /> Git</span><span><Check /> Codex CLI</span></div></div>
        <div className="terminal-card"><div className="terminal-bar"><span /><span /><span /><em>Terminal</em></div><pre><code><span>$</span> git clone https://github.com/karangandhidev/buildbrake.git{`\n`}<span>$</span> cd buildbrake{`\n`}<span>$</span> ./install.sh{`\n`}<span>$</span> bb doctor</code></pre><Button className="copy-button" onClick={copyInstall} aria-label="Copy installation commands">{copied ? <Check /> : <Clipboard />} {copied ? 'Copied' : 'Copy commands'}</Button></div>
      </div></section>

      <section className="final-cta shell"><div className="final-mark"><span className="mark large"><span /></span></div><h2>Ship with proof,<br />not guesswork.</h2><p>Open source, local-first guardrails for Codex.</p><a className="primary-cta" href="https://github.com/karangandhidev/buildbrake" target="_blank" rel="noreferrer">Get BuildBrake <ArrowRight /></a></section>
      <footer className="shell"><a className="wordmark" href="#top"><span className="mark"><span /></span>BuildBrake</a><p>Built by Karan Gandhi · MIT License</p><div><a href="/docs">Docs</a><a href="https://github.com/karangandhidev/buildbrake">GitHub</a><a href="https://github.com/karangandhidev/buildbrake/issues">Issues</a></div></footer>
    </main>
  );
}
