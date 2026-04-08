---
name: browser-debug-with-devtools
description: Debug browser-visible issues using Chrome DevTools MCP. Use for rendering bugs, CSS/layout problems, runtime errors, auth redirects, cookies/storage/session issues, network bugs, and performance regressions.
---

# Browser debugging with Chrome DevTools MCP

Use this skill whenever the browser can answer the question better than static code reading.

## When to use

Use for:
- rendering mismatches
- layout and CSS bugs
- broken forms
- hydration/runtime errors
- auth/session/cookie issues
- local storage / session storage problems
- request failures
- slow interactions or page performance regressions

## Workflow

1. Reproduce the issue in the browser first
2. Inspect:
   - console
   - network
   - DOM
   - storage
   - cookies
   - performance timeline if relevant
3. Identify the failing boundary precisely
4. Change code only after the failure mode is known
5. Re-run the browser flow after the fix

## Rules

- Do not guess at browser behavior that can be observed directly
- Prefer MCP evidence over assumptions
- Capture selectors, requests, and console errors in the plan/tasks docs when the issue is non-trivial
