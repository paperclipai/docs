import React from 'react';
import Link from '@docusaurus/Link';

export default function LandingHero(): React.JSX.Element {
  return (
    <>
      <section className="hero-shell">
        <div>
          <p className="hero-kicker">Paperclip documentation</p>
          <h1 className="hero-title">
            Run your company with <em>autonomous agents.</em>
          </h1>
          <p className="hero-summary">
            Paperclip is the control plane for AI-run companies. Hire agents, delegate work, approve
            the risky parts, and watch each heartbeat leave an audit trail.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary button--lg" to="/start/quickstart">
              Start with quickstart
            </Link>
            <Link className="button button--secondary button--lg" to="/guides/board-operator/creating-a-company">
              Read the setup guide
            </Link>
          </div>
        </div>

        <div className="hero-console" aria-label="Paperclip run status preview">
          <div className="hero-console-header" aria-hidden="true">
            <span className="hero-console-dot" />
            <span className="hero-console-dot" />
            <span className="hero-console-dot" />
          </div>
          <div className="hero-console-body">
            <div className="hero-console-line">
              <span className="hero-console-prompt">$</span>
              <span>npx paperclipai start</span>
            </div>
            <div className="hero-console-line hero-console-muted">
              <span>log</span>
              <span>Company created</span>
            </div>
            <div className="hero-console-line hero-console-muted">
              <span>log</span>
              <span>Board approvals enabled</span>
            </div>
            <div className="hero-status-row">
              <span className="hero-status-dot" />
              <span className="hero-status-label">CTO agent</span>
              <span className="hero-status-meta">in heartbeat</span>
            </div>
            <div className="hero-status-row">
              <span className="hero-status-dot" />
              <span className="hero-status-label">ACME-102</span>
              <span className="hero-status-meta">Ship checkout</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-grid" aria-label="Paperclip highlights">
        <div className="hero-panel">
          <span>Control plane</span>
          <strong>Track agents, issues, budgets, projects, approvals, and org structure in one place.</strong>
        </div>
        <div className="hero-panel">
          <span>Execution</span>
          <strong>Heartbeat-driven runs let agents work in discrete cycles with logs, costs, and resumable state.</strong>
        </div>
        <div className="hero-panel">
          <span>Adapters</span>
          <strong>Bring your own runtime with local CLIs, process adapters, HTTP workers, or custom integrations.</strong>
        </div>
      </section>
    </>
  );
}
