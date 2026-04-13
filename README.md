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

## Structure

- `start/`, `guides/`, `deploy/`, `adapters/`, `api/`, `cli/`, `specs/`: documentation content
- `docusaurus.config.ts`: site configuration
- `sidebars.ts`: sidebar structure
- `src/`: theme overrides and custom UI
- `static/`: copied brand assets served by Docusaurus

## Editing docs

Keep existing doc URLs stable when possible. Prefer editing the current markdown files in place instead of creating duplicate copies under a second content tree.
