# AI PR Review Demo

15-minute Brown Bag demo: **AI does quality/architecture PR review** (DRY, extract components), not just bug scanning.

Talk content is the website itself (`src/App.tsx`). That file **intentionally duplicates** the same card markup three times so an AI reviewer has something real to flag.

Repo: https://github.com/franksun001/ai-pr-review-demo

## Quick start

```bash
npm install
npm run dev
```

## One-time setup (AI review on GitHub)

1. Install the [CodeRabbit GitHub App](https://coderabbit.ai/) on this repo.
2. CodeRabbit uses `.coderabbit.yaml` and automatically reviews non-draft PRs.
3. Open the demo PR and show CodeRabbit's inline comments.

### Optional Claude recovery path

Use this only when restoring the Anthropic-based workflow instead of CodeRabbit: restore the Claude Action job in `.github/workflows/ai-pr-review.yml`, then add the `ANTHROPIC_API_KEY` secret under **Settings → Secrets and variables → Actions**. You may also install the [Claude GitHub App](https://github.com/apps/claude) (see [claude-code-action](https://github.com/anthropics/claude-code-action)).

## 15-minute talk script

| Time | What to show |
|------|----------------|
| 0–2 min | Problem: leaders burn review time on copy-paste UI, not business risk |
| 2–4 min | Open this site locally / GitHub; point at three identical cards in `App.tsx` |
| 4–10 min | **Recorded or live:** branch → add a 4th duplicated card → open PR → AI inline comments suggest `TopicCard` |
| 10–13 min | Limits: triage ≠ sign-off; payment/patient/auth still need humans; same model write+review can blind-spot |
| 13–15 min | Checklist in section 4 of the page + leave the repo link |

### Demo PR (rehearse before the talk)

```bash
git checkout -b demo/more-duplication
# Edit src/App.tsx: paste a fourth .topic-card block (e.g. "Q&A" section)
git add src/App.tsx && git commit -m "demo: add fourth duplicated topic card"
git push -u origin HEAD
# Open PR on GitHub → wait for CodeRabbit review → show inline comments
```

**Do not extract `TopicCard` until after the audience has seen the AI comments.**

## What this is / is not

| Is | Is not |
|----|--------|
| First-pass quality review (DRY, patterns) | Replacement for human merge approval |
| Configurable via `AGENTS.md` + `.coderabbit.yaml` | Fully autonomous write → merge → deploy factory |
| Useful on low-risk PRs to save leader time | Safe alone on payment / patient / auth PRs |

## Stack

Vite + React + TypeScript (`npm create vite@latest -- --template react-ts`).
