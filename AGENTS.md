# Documentation project instructions

## About this project

- This is a documentation site built on Docusaurus
- Documentation content lives in root-level markdown and MDX files under folders like `start/`, `guides/`, `deploy/`, `adapters/`, `api/`, and `cli/`
- Site configuration lives in `docusaurus.config.ts` and `sidebars.ts`
- Run `npm run start` to preview locally
- Run `npm run build` to verify the production build

## Terminology

- Use "company" for the top-level Paperclip organization
- Use "agent" for AI employees inside a company
- Use "issue" or "task" only when the product/UI actually uses that term
- Use "board" for the human oversight layer

## Style preferences

- Use active voice and second person
- Keep sentences concise
- Use sentence case for headings
- Bold UI labels such as **Settings**
- Use code formatting for paths, commands, file names, env vars, and identifiers

## Content boundaries

- Document user-facing and operator-facing product behavior
- Avoid documenting internal-only implementation details unless the page is explicitly a spec or reference page
