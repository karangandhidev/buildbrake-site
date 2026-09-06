const install = `curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex
git clone https://github.com/karangandhidev/buildbrake.git
cd buildbrake
./install.sh
bb doctor`;

export default function GettingStarted() {
  return <>
    <div className="doc-eyebrow">Getting started</div>
    <h1>Install once. Run it inside any project.</h1>
    <p className="doc-lead">BuildBrake uses the folder where you start it as the project boundary. Receipts and local state stay in that project.</p>
    <h2>Platform support</h2>
    <div className="table-scroll"><table className="support-table"><caption className="sr-only">Supported platforms</caption><tbody>
      <tr><th scope="row">macOS</th><td><span className="status supported">Supported</span></td><td>Tested in CI and during development.</td></tr>
      <tr><th scope="row">Linux</th><td><span className="status supported">Supported</span></td><td>Tested in CI.</td></tr>
      <tr><th scope="row">Windows with WSL2</th><td><span className="status path">Supported path</span></td><td>Run BuildBrake and the project inside WSL2.</td></tr>
      <tr><th scope="row">Native Windows</th><td><span className="status unsupported">Not supported</span></td><td>v0.1 requires a Unix environment.</td></tr>
    </tbody></table></div>
    <h2>Requirements</h2>
    <ul><li>Python 3.9 or newer</li><li>Git</li><li>Codex CLI, signed in with your own account</li></ul>
    <h2>Install</h2>
    <pre className="doc-code"><code>{install}</code></pre>
    <p><code>bb doctor</code> checks Python, Git, Codex, and Codex sign-in. If something is missing, it prints a copy-friendly fix.</p>
    <h2>Start the dashboard</h2>
    <pre className="doc-code"><code>{`cd /path/to/your/project
bb serve`}</code></pre>
    <p>The dashboard opens at <code>http://127.0.0.1:8765</code>. It identifies the current folder so you know which project BuildBrake will inspect and modify.</p>
    <h2>Run your first task</h2>
    <ol><li>Use a clean Git branch.</li><li>Enter one observable task under <strong>What should the agent do?</strong></li><li>Leave task size on <strong>Auto</strong>.</li><li>Click <strong>Check and save</strong>, then <strong>Run task</strong>.</li><li>Inspect the Git diff and the BuildBrake receipt.</li></ol>
    <div className="doc-example"><span>Example task</span><p>Change the README installation heading to “Install locally” and verify that the rest of the README is unchanged.</p></div>
    <h2>Uninstall</h2>
    <p>The default installation lives under <code>~/.local/share/buildbrake</code>. Command links live in <code>~/.local/bin</code>, or <code>/opt/homebrew/bin</code> when writable. Remove those links and the isolated directory to uninstall it.</p>
  </>;
}
