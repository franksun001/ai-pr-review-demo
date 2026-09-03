# Coding Rules for this demo repo

## Purpose

15-minute Brown Bag: **PR 上的 AI 质量 Review**（团队门禁，不是编辑器里的个人助手）。
Talk page is `src/App.tsx`. Prefer small, surgical changes.

## Quality expectations

1. **DRY for UI** — Same card / section layout 2+ times → extract a shared component. Suggest a file path and props; do not only say "consider refactoring".
2. **Skip nitpicks** — No import order, trailing commas, or formatting unless readability is hurt.
3. **Match existing style** — Functional React, TypeScript, classes already used in `App.css`.

## Intentional debt (demo only)

`src/App.tsx` duplicates `.topic-card` markup on purpose so PR review can flag it.
Do not extract the shared component until the talk has shown the review comments.

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
