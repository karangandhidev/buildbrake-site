const stages = [
  ['1', 'Preflight', 'A local, zero-token check rejects vague prompts or tasks disconnected from the stated result before Codex starts.'],
  ['2', 'Task sizing', 'Auto mode classifies narrow work as micro or small. Broad redesigns and repository-wide work remain standard.'],
  ['3', 'Context selection', 'A local ranker sends short excerpts from likely files instead of a broad repository dump. Proved receipts can improve later ranking.'],
  ['4', 'Execution limits', 'Each mode sets targets for commands, files, runtime, and new input tokens. Repeated scans and stalled inspection can stop a run.'],
  ['5', 'Verification', 'Configured checks or adaptive targeted tests run after the agent exits. Subjective visual work still requires human review.'],
  ['6', 'Receipt', 'The final record contains usage, commands, changed files, runtime, context choice, verification, and the agent finding.'],
];

export default function HowItWorks() {
  return <>
    <div className="doc-eyebrow">How it works</div>
    <h1>A controlled path from prompt to proof.</h1>
    <p className="doc-lead">BuildBrake runs before, around, and after Codex. It does not alter the model. It controls the information and limits around the run.</p>
    <div className="stage-list">{stages.map(([number, title, body]) => <section key={number}><span>{number}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div>
    <h2>Fresh and reused context</h2>
    <p>BuildBrake can reuse a project-specific Codex thread when measured reuse remains efficient. After enough comparable runs, it starts fresh when predicted reuse cost is more than 25 percent higher. A fresh run receives a compact handoff with likely files and learned verification.</p>
    <h2>Execution modes</h2>
    <div className="doc-card-grid three"><div><strong>Micro</strong><span>One-component CSS, copy, label, icon, or similarly precise work. One likely file and a target below 10,000 new tokens.</span></div><div><strong>Small</strong><span>Narrow implementation work with a few files, low reasoning, and strict inspection limits.</span></div><div><strong>Standard</strong><span>Broad features, redesigns, refactors, and work that genuinely needs more repository context.</span></div></div>
    <h2>Proof is separate from efficiency</h2>
    <p>A run can be efficient and wrong. It can also exceed a token target and still produce the correct result. BuildBrake therefore displays resource use and outcome proof separately.</p>
  </>;
}
