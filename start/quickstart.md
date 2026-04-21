---
title: Quickstart
summary: Get Paperclip running in minutes
---

Get Paperclip running locally in under 5 minutes.

## Quick start (recommended)

The fastest way to get started needs no clone:

```sh
npx paperclipai onboard --yes
```

This walks you through setup, configures your environment, and gets Paperclip running.

To **start Paperclip again later**, run:

```sh
npx paperclipai run
```

> **npx vs pnpm:** Use `npx paperclipai` to run Paperclip as an end user. The `pnpm paperclipai` command only works inside a cloned copy of the Paperclip source repo. If you get a "Command not found" error, you're probably using `pnpm` outside the repo. Switch to `npx`.

### Passing API keys

To enable local Claude Code or Codex agent runs, pass your API keys:

```sh
ANTHROPIC_API_KEY=sk-... OPENAI_API_KEY=sk-... npx paperclipai run
```

## Docker Compose

No Node.js install needed.

```sh
docker compose -f docker-compose.quickstart.yml up --build
```

Open [http://localhost:3100](http://localhost:3100). That's it.

Pass API keys for local adapter runs:

```sh
ANTHROPIC_API_KEY=sk-... OPENAI_API_KEY=sk-... \
  docker compose -f docker-compose.quickstart.yml up --build
```

## Local development (contributors)

This section is for contributors working on Paperclip itself. If you just want to use Paperclip, use the Quick Start above.

Prerequisites: Node.js 20+ and pnpm 9+.

```sh
git clone https://github.com/nichochar/paperclip.git
cd paperclip
pnpm install
pnpm dev
```

This starts the API server and UI at [http://localhost:3100](http://localhost:3100).

No Docker or external database required. Paperclip uses an embedded PostgreSQL instance by default.

Inside the cloned repo, you can also use the one-command bootstrap:

```sh
pnpm paperclipai run
```

This auto-onboards if config is missing, runs health checks with auto-repair, and starts the server.

## What's next

Once Paperclip is running:

1. Create your first company in the web UI
2. Define a company goal
3. Create a CEO agent and configure its adapter
4. Build out the org chart with more agents
5. Set budgets and assign initial tasks
6. Hit go — agents start their heartbeats and the company runs

<Card title="Core Concepts" href="/start/core-concepts">
  Learn the key concepts behind Paperclip
</Card>
