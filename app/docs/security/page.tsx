export default function Security() {
  return <>
    <div className="doc-eyebrow">Security</div>
    <h1>Local-first does not mean permission-free.</h1>
    <p className="doc-lead">BuildBrake runs with the permissions of the person who starts it. Review the trust boundary before using it with private or sensitive repositories.</p>
    <h2>What stays local</h2>
    <ul><li>BuildBrake state and receipts stay under the project’s <code>.buildbrake/</code> directory.</li><li>The dashboard binds to <code>127.0.0.1</code> by default.</li><li>BuildBrake sends no telemetry of its own.</li><li>Credentials are not collected or stored by BuildBrake.</li></ul>
    <h2>What leaves your machine</h2>
    <p>BuildBrake launches your Codex CLI. Task prompts and selected project context are sent by Codex according to your Codex configuration and OpenAI account settings. Codex authentication and usage belong to the signed-in user.</p>
    <h2>Receipts may contain sensitive context</h2>
    <p>Receipts can include prompts, file paths, agent findings, and command output. The <code>.buildbrake/</code> directory is Git-ignored by default, but you should still inspect receipts before sharing them.</p>
    <h2>Dashboard exposure</h2>
    <p>Do not bind the dashboard to a public interface on an untrusted network. The default localhost address is intended for the person running BuildBrake on that machine.</p>
    <h2>Report a vulnerability</h2>
    <p>Do not open a public issue containing credentials, private source code, or an unpatched exploit. Use <a href="https://github.com/karangandhidev/buildbrake/security/advisories/new">GitHub private vulnerability reporting</a> and include the affected version, reproduction steps, impact, and suggested mitigation.</p>
  </>;
}
export const metadata = {
  title: "Security | BuildBrake",
  description: "Understand local data, Codex account usage, process permissions, and BuildBrake security boundaries.",
  alternates: { canonical: "/docs/security" },
};
