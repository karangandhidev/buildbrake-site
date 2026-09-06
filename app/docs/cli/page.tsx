const commands = [
  ['bb doctor', 'Check Python, Git, Codex, and Codex sign-in.'],
  ['bb serve', 'Open the local dashboard for the current project.'],
  ['bb agent', 'Run the saved task through Codex.'],
  ['bb agent --fresh', 'Start a new Codex conversation with a compact project handoff.'],
  ['bb preflight --prompt "..."', 'Validate a task without starting Codex.'],
  ['bb status', 'Show the current outcome contract and latest run.'],
  ['bb history', 'List prior receipts in the terminal.'],
  ['bb evaluate latest', 'Record whether the latest run proved its intended outcome.'],
  ['bb benchmark', 'Summarize historical usage and observed waste patterns.'],
  ['bb run -- npm test', 'Put a non-agent command under the same runtime contract.'],
];

export default function CliReference() {
  return <>
    <div className="doc-eyebrow">CLI reference</div>
    <h1>The commands you will actually use.</h1>
    <p className="doc-lead"><code>bb</code> and <code>buildbrake</code> are aliases. Run either command from the project you want BuildBrake to manage.</p>
    <div className="command-list">{commands.map(([command, text]) => <div key={command}><code>{command}</code><p>{text}</p></div>)}</div>
    <h2>Useful agent options</h2>
    <pre className="doc-code"><code>{`bb agent --prompt "Implement the smallest change that proves the target"
bb agent --fresh --prompt "Start with clean context"
bb agent --sandbox read-only --prompt "Diagnose the failure"
bb agent --model user-default --prompt "Use my configured model"`}</code></pre>
    <h2>Non-interactive commands</h2>
    <p>Use <code>--no-checkpoints</code> in automation where no person can answer the terminal checkpoint. The hard runtime budget still applies.</p>
    <pre className="doc-code"><code>bb run --no-checkpoints -- npm test</code></pre>
  </>;
}
