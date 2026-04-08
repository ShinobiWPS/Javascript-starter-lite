---
name: errors-as-values
description: Apply the errore.org convention for typed errors as values. Use when writing or changing domain logic, data access, async flows, validation, or any code that may fail.
---

# Errors as values

This repository uses the errore.org convention.

## Core rule

Model recoverable failure as values, not thrown control flow.

Preferred forms:
- `T | SomeError`
- `Promise<T | SomeError>`
- `T | Error` only as a last-resort boundary

## Mandatory rules

- Return typed errors in function signatures
- Narrow with `instanceof Error` or specific subclasses before using the success value
- Do not use `try/catch` for routine control flow
- Convert throwy library boundaries into typed error values at the edge
- Preserve `cause` where meaningful
- Prefer domain-specific error classes
- Keep success-path code linear

## Patterns

### Good
```ts
const user = await getUser(id)
if (user instanceof NotFoundError) return user
if (user instanceof DbError) return user

return renderUser(user)
```

### Bad
```
try {
  const user = await getUser(id)
  return renderUser(user)
} catch (error) {
  return fallback(error)
}
```

## Resource handling:

When cleanup is needed, prefer using / await using patterns where practical instead of nested try/finally.

## Review checklist
Does the signature tell the truth?
Are all typed failures narrowed before success-path property access?
Did any new throw or try/catch slip into normal app flow?
Are boundary adapters explicit?

The skill above is directly aligned with errore’s manifesto: `Error | T` unions, `instanceof` narrowing, explicit signatures, linear flow, `try` wrappers at boundaries, and `using` / `DisposableStack` for cleanup. The site also explicitly recommends telling the agent in `AGENTS.md` to always read the errore skill before editing code.
