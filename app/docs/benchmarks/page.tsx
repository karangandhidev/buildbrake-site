const trials = [
  ['1', 'Exact CSS declaration', '6,706', '11,953', '43.9% lower', 'Proved / Proved'],
  ['2', 'Exact copy replacement', '6,027', '7,278', '17.2% lower', 'Proved / Proved'],
  ['3', 'Accessibility attribute', '5,993', '7,403', '19.0% lower', 'Proved / Proved'],
  ['4', 'JavaScript behavior', '7,159', '11,393', '37.2% lower', 'Proved / Proved'],
  ['5', 'Python logic', '7,378', '8,446', '12.6% lower', 'Proved / Proved'],
  ['6', 'Two-file Python refactor', '7,989', '25,106', '68.2% lower', 'Proved / Proved'],
  ['7', 'Implicit implementation file', '6,481', '5,342', '21.3% higher', 'Proved / Proved'],
  ['8', 'Bookmark feature', '11,483', '21,672', '47.0% lower', 'Proved / Proved'],
  ['9', 'Noisy repository backend', '12,668', '13,031', '2.8% lower', 'Proved / Proved'],
];

export default function Benchmarks() {
  return <>
    <div className="doc-eyebrow">Benchmarks</div>
    <h1>Nine controlled comparisons, including the miss.</h1>
    <p className="doc-lead">BuildBrake and direct Codex received identical tasks, models, and starting commits. Every result was checked by an independent test committed before either run.</p>
    <div className="benchmark-summary"><div><span>New input</span><strong>35.6%</strong><em>lower</em></div><div><span>Total input</span><strong>32.8%</strong><em>lower</em></div><div><span>Commands</span><strong>52.0%</strong><em>lower</em></div><div><span>Proof rate</span><strong>9 / 9</strong><em>both approaches</em></div></div>
    <div className="doc-warning"><strong>What this proves</strong><p>In this controlled sample, BuildBrake used fewer aggregate tokens and commands without reducing the proof rate. It does not prove that every task, repository, or model will save tokens.</p></div>
    <h2>Individual results</h2>
    <div className="table-scroll"><table className="benchmark-table"><caption className="sr-only">Nine benchmark trial results</caption><thead><tr><th>Trial</th><th>Task</th><th>BuildBrake new</th><th>Direct new</th><th>Difference</th><th>Outcome</th></tr></thead><tbody>
      {trials.map(row => <tr key={row[0]}>{row.map(cell => <td key={cell}>{cell}</td>)}</tr>)}
    </tbody></table></div>
    <h2>Method</h2>
    <ol><li>Start two isolated worktrees from the same pre-change commit.</li><li>Commit a failing acceptance check before either agent runs.</li><li>Give both agents the exact same task, model, reasoning setting, and sandbox.</li><li>Run one through BuildBrake and one directly through Codex.</li><li>Execute the same independent proof after both runs.</li><li>Compare new input, cached input, total input, commands, changed files, runtime, and outcome.</li></ol>
    <h2>Why trial 7 matters</h2>
    <p>Trial 7 is the honest counterexample. BuildBrake used 21.3 percent more new input tokens than direct Codex, although it still used fewer total tokens and commands. The aggregate claim includes this loss rather than hiding it.</p>
    <h2>Scope and limitations</h2>
    <ul><li>Nine trials remain a small sample.</li><li>Most trials used small dependency-free projects.</li><li>Only one trial tested a repository with substantial tracked noise.</li><li>The results support the context and verification strategy, not a universal savings guarantee.</li></ul>
    <p className="source-note">The raw narrative and complete per-trial notes remain available in the <a href="https://github.com/karangandhidev/buildbrake/blob/main/docs/MICRO_BENCHMARK.md">source repository</a>.</p>
  </>;
}
