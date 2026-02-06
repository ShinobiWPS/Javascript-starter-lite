---
applyTo: "app/src/features/**"
---

# Features Development Guide

## Folder Structure (MANDATORY)
```
features/{feature-name}/
├── index.tsx              # Routes (REQUIRED)
├── {Name}List.tsx         # List view
├── {Name}Detail.tsx       # Detail view
├── hooks/                 # useFeatureHook.ts
├── sections/              # FeatureFilters.tsx
├── helpers/               # utility functions
├── grids/                 # column definitions
├── interfaces/            # TypeScript types
└── components/            # sub-components
```

## Route Pattern (index.tsx)
```tsx
export const DEFAULT_LIST_PARAMS = { page: 0, pageSize: 10, sortColumn: "name" };

export const featureName = () => [
  { target: "$ONE_LAYOUT_ROUTE", handler: { path: "feature/view/:id?", element: <Detail /> } },
  { target: "$ONE_LAYOUT_ROUTE", handler: { path: "feature", element: <List /> } },
];
```

## Naming Conventions
- **Components**: `PascalCase.tsx` → `AnagraficheList.tsx`
- **Hooks**: `use{Name}.ts` → `useAnagraficheHook.ts`
- **Helpers**: `camelCase.ts` → `anagraficheList.ts`
- **Interfaces**: `{name}.interface.ts`

## Hook Pattern (data fetching)
```tsx
export const useFeatureHook = () => {
  const [data, setData] = useState<DataType[]>([]);
  const request = useGetCustom("endpoint");

  useEffect(() => {
    request.doFetch().then(res => setData(res.data));
  }, []);

  return { data };
};
```

## Where to Put What
| What | Where |
|------|-------|
| Routes | `index.tsx` |
| Data fetching | `hooks/` |
| Grid columns | `grids/` or `helpers/` |
| Filter UI | `sections/` |
| Types | `interfaces/` |

## DO NOT
- ❌ Import from other features → extract to `app/src/helpers/`
- ❌ Direct API in components → use hooks
- ❌ Duplicate interfaces → check `app/src/interfaces/`
