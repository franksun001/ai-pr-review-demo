# Coding Rules for this demo repo

## Purpose

This repository is a **15-minute Brown Bag demo** for AI PR review.
The talk page lives in `src/App.tsx`. Prefer small, surgical changes.

## Quality expectations (what AI reviewers should enforce)

1. **DRY for UI** — If the same card / section layout appears 2+ times, extract a shared React component (e.g. `src/components/TopicCard.tsx`) instead of pasting markup.
2. **Concrete suggestions** — Name the component, proposed file path, and which props to pass. Do not only say "consider refactoring".
3. **Skip nitpicks** — Do not comment on import order, trailing commas, or pure formatting unless readability is hurt.
4. **Match existing style** — Functional React components, TypeScript, CSS modules/classes already used in `App.css`.

## Intentional debt (demo only)

`src/App.tsx` currently duplicates the same `.topic-card` block three times on purpose.
When reviewing a PR that **adds more duplication**, call it out.
When reviewing a PR that **extracts `TopicCard`**, confirm the extraction is complete and props are clear.

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Never

- Do not approve or merge pull requests as the bot.
- Do not add dependencies without asking.
- Do not rewrite the whole page for a small content change.
