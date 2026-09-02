/**
 * Talk landing page for the Brown Bag demo.
 *
 * INTENTIONAL QUALITY DEBT (for AI PR review demo):
 * - Problem / Demo / Limits each paste nearly identical "topic card" markup.
 * - An AI reviewer should suggest extracting a shared TopicCard component.
 * Do NOT remove this duplication until after you have shown the review comments.
 */

import './App.css'

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Brown Bag · 15 minutes</p>
        <h1>AI PR Review</h1>
        <p className="lede">
          Not a bug scanner — a first-pass reviewer that flags duplication,
          componentization opportunities, and low-quality patterns before a human
          looks at the PR.
        </p>
        <p className="meta">
          Demo repo · open a PR with intentional DRY violations · watch AI suggest
          extracting a shared component
        </p>
      </header>

      <main>
        {/* --- duplicated card block #1 (Problem) --- */}
        <section className="section" id="problem">
          <h2>1. The problem</h2>
          <p className="section-intro">
            Leaders spend review time on formatting, copy-paste UI, and obvious
            structure issues — instead of business risk and product judgment.
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">Pain</div>
            <h3 className="topic-card__title">Review bandwidth</h3>
            <p className="topic-card__body">
              Every PR waits for a human. Many comments are &quot;you pasted this
              three times — extract a component&quot;, not architecture or compliance.
            </p>
            <ul className="topic-card__list">
              <li>Repeated JSX across sections</li>
              <li>Inconsistent patterns vs the rest of the repo</li>
              <li>Nitpicks that a bot can surface first</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #2 (Demo) --- */}
        <section className="section" id="demo">
          <h2>2. What we demo</h2>
          <p className="section-intro">
            This page intentionally repeats the same card layout three times. Open
            a PR that adds a fourth copy — the AI reviewer should call out DRY.
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">Flow</div>
            <h3 className="topic-card__title">PR → AI review</h3>
            <p className="topic-card__body">
              Push a branch, open a pull request, and let Claude Code Action (or
              CodeRabbit / Greptile) post inline comments with concrete refactor
              suggestions — not just &quot;LGTM&quot; or lint noise.
            </p>
            <ul className="topic-card__list">
              <li>Flag duplicated UI / logic</li>
              <li>Suggest a shared component name and file path</li>
              <li>Skip formatting nitpicks unless they hurt readability</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #3 (Limits) --- */}
        <section className="section" id="limits">
          <h2>3. Limits</h2>
          <p className="section-intro">
            AI review is triage, not sign-off. Especially for payment, patient data,
            and auth — a human still owns the merge.
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">Boundary</div>
            <h3 className="topic-card__title">Human still decides</h3>
            <p className="topic-card__body">
              The bot can suggest extracting a component. It cannot decide whether
              the abstraction is worth it, whether HIPAA/PII rules apply, or whether
              the product behavior is correct.
            </p>
            <ul className="topic-card__list">
              <li>Low-risk PRs: AI summary + CI may be enough to scan in 30s</li>
              <li>High-risk PRs: human reviews AI-flagged lines + business logic</li>
              <li>Same model writing and reviewing can share blind spots</li>
            </ul>
          </div>
        </section>

        <section className="section checklist" id="checklist">
          <h2>4. Adoption checklist</h2>
          <ol>
            <li>Install one AI reviewer on a non-critical repo first</li>
            <li>Write a short AGENTS.md so suggestions match your patterns</li>
            <li>Tune the prompt: quality &amp; DRY in, style nitpicks out</li>
            <li>Keep required CI green; keep human approval for high-risk paths</li>
            <li>Never let the bot approve and merge its own PR</li>
          </ol>
        </section>
      </main>

      <footer className="footer">
        <p>
          Source: intentional duplication lives in <code>src/App.tsx</code>. See{' '}
          <code>README.md</code> for the 15-minute demo script.
        </p>
      </footer>
    </div>
  )
}
