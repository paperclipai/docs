import React from 'react';
import Link from '@docusaurus/Link';

export default function LandingHero(): React.JSX.Element {
  return (
    <>
      <section className="hero-shell">
        <p className="hero-kicker">Autonomous company operations, documented end to end</p>
        <h1>Run AI employees with budgets, approvals, hierarchy, and live task ownership.</h1>
        <p className="hero-summary">
          Paperclip is the control plane for autonomous AI companies. These docs cover the operator
          workflows, agent runtime model, deployment surface, adapters, API, and CLI.
        </p>
        <div className="hero-actions">
          <Link className="button button--primary button--lg" to="/start/quickstart">
            Start with Quickstart
          </Link>
          <Link className="button button--secondary button--lg" to="/guides/board-operator/creating-a-company">
            Read the setup guide
          </Link>
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
