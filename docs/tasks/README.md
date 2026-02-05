
# Task Documentation

Questa cartella contiene la documentazione completa per ogni task implementato.

## Struttura

Ogni file segue il naming pattern: `{CODICE_TASK}.md` (es. `BVTL-12345.md`)

## Contenuto

Ogni documento include:

- **📋 Task Overview**: Informazioni da Jira (titolo, descrizione, acceptance criteria)
- **📐 Functional Specifications Summary**: Riassunto delle specifiche funzionali
- **🔄 Changes Summary**: File modificati e diff statistics
- **🔍 Code Review Results**: Risultati del review LGTM
- **✅ Acceptance Criteria Verification**: Verifica AC
- **📝 Quick Wins & Recommendations**: Suggerimenti dal review
- **🚀 Next Steps**: Azioni raccomandate

## Workflow

Questi documenti vengono generati automaticamente alla fine del workflow di sviluppo:

```
jira-fetcher → frontend-analyst → frontend-dev → local-change-reviewer-lgtm
```

Il prompt `local-change-reviewer-lgtm` unisce:
- `spec/input/{CODICE_TASK}.md` (da jira-fetcher)
- `spec/functional_spec_{CODICE_TASK}.md` (da frontend-analyst)
- Git diff delle modifiche
- Risultati del code review LGTM
