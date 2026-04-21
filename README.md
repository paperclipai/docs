# Paperclip Documentation

This repo now runs on Docusaurus and contains the public documentation site for Paperclip.

## Commands

```bash
npm install
npm run start
```

```bash
npm run build
npm run typecheck
```

## Run as a service

Use these commands when you want the docs site to run as a long-lived process:

```bash
# Development preview service
npm run start:service
```

```bash
# Production-style service
npm run service
```

Both service commands bind to `0.0.0.0` and default to port `3000`. Set `HOST` or `PORT` to override them:

```bash
PORT=4300 npm run service
```

Use `npm run build` before `npm run serve:service` if you want to split the build and run steps across separate deploy phases.

## Structure

- `start/`, `guides/`, `deploy/`, `adapters/`, `api/`, `cli/`, `specs/`: documentation content
- `docusaurus.config.ts`: site configuration
- `sidebars.ts`: sidebar structure
- `src/`: theme overrides and custom UI
- `static/`: copied brand assets served by Docusaurus

## Editing docs

Keep existing doc URLs stable when possible. Prefer editing the current markdown files in place instead of creating duplicate copies under a second content tree.
