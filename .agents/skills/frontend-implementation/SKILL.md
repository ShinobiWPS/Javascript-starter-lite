---
name: frontend-implementation
description: Build or modify frontend features in this repository. Use for Vite + TypeScript + React UI work, component changes, routing, forms, async state, accessibility, and UI refactors.
---

# Frontend implementation

Use this skill for feature work and non-trivial UI changes.

## Required repo context

Read `AGENTS.md` first.

For non-trivial work, create or update:
- `docs/ai/specs/<topic>.md`
- `docs/ai/plans/<topic>.md`
- `docs/ai/tasks/<topic>.md`

## Stack contract

- Vite + TypeScript
- pnpm
- Vitest
- Biome for formatting
- ESLint as the canonical linter
- oxlint is consumed through ESLint config
- TypeScript Native Preview in VS Code is optional IDE acceleration, not a runtime/build assumption

## Implementation rules

- Prefer small components with explicit props
- Prefer derived state over duplicated state
- Avoid useEffect unless there is a real external synchronization need
- Keep async boundaries obvious
- Keep DOM semantics and accessibility intact
- Do not introduce abstraction layers unless the plan justifies them
- Do not add libraries unless necessary

## Verify

Before finalizing:
1. Format changed files with Biome
2. Run `pnpm lint`
3. Run `pnpm typecheck`
4. Run `pnpm test --run`

## Extra guidance

If Vercel React/agent skills are installed globally, consult them before large component or rendering changes.
