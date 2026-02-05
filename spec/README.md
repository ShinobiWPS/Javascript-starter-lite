# Spec Directory

Questa cartella contiene le specifiche generate dal flusso spec-driven.

## Struttura

```
spec/
├── input/                          # Output dell'agente jira-fetcher
│   └── {CODICE_TASK}.md           # Informazioni raw da Jira
├── functional_spec_{TASK}.md      # Specifiche funzionali generate
└── README.md                      # Questo file
```

## Flusso di Lavoro (Pipeline Completa)

```
┌─────────────────┐     ┌─────────────────────┐     ┌─────────────────┐
│  @jira-fetcher  │ ──► │  @frontend-analyst  │ ──► │  @frontend-dev  │
│                 │     │                     │     │                 │
│  Fetch da Jira  │     │  Genera Specifiche  │     │  Implementa     │
│  → input/*.md   │     │  → functional_spec  │     │  → Codice       │
└─────────────────┘     └─────────────────────┘     └─────────────────┘
```

1. **Fetch da Jira**: L'agente `@jira-fetcher` recupera le informazioni del task e le salva in `input/{CODICE_TASK}.md`
2. **Generazione Specifiche**: L'agente `@frontend-analyst` legge l'input e genera le specifiche funzionali in `functional_spec_{CODICE_TASK}.md`
3. **Implementazione**: L'agente `@frontend-dev` legge le specifiche funzionali e implementa le modifiche al codice

## Utilizzo

```bash
# Dalla chat di Copilot, invoca l'agente jira-fetcher con il codice del task
@jira-fetcher Recupera il task BVTL-12345

# Gli handoff sono automatici:
# jira-fetcher → frontend-analyst → frontend-dev
```

## Invocazione Manuale degli Agenti

Se vuoi invocare manualmente un agente specifico:

```bash
# Solo fetch da Jira (senza handoff)
# Modifica il file dell'agente per disabilitare l'handoff

# Solo generazione specifiche
@frontend-analyst Genera le specifiche per il task BVTL-12345

# Solo implementazione
@frontend-dev Implementa il task BVTL-12345
```

## File Generati

I file in questa cartella sono generati automaticamente e **non dovrebbero essere modificati manualmente** a meno che non sia strettamente necessario per correzioni.

---
*Cartella gestita dal flusso spec-driven*
