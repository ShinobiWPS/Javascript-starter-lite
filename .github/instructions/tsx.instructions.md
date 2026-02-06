---
applyTo: "**/*.tsx"
---

# TSX Components Guide

## Before Creating Components
1. Check `app/src/custom-components/` for existing wrappers
2. Use `@vapor/v3-components` directly when possible

## Required Wrapper Components
- `CustomDataGrid` - ALWAYS use instead of raw MUI DataGrid
- `VaporPage` - root wrapper for EVERY page
- `PageTitle` - page headers with breadcrumbs
- `StandardDeleteModal`, `ConfirmModal`, `BaseModal` - modals
- `ToastNotification` - notifications
- `FormInput`, `CustomSelect`, `CustomAutocomplete` - form controls

## Page Structure
```tsx
import { VaporPage } from "@vapor/v3-components";
import PageTitle from "../../custom-components/PageTitle";
import { CustomDataGrid } from "../../custom-components/CustomDataGrid";

const MyPage = () => (
  <VaporPage>
    <PageTitle title="Title" breadcrumbs={[...]} />
    <CustomDataGrid columns={columns} data={data} /* ... */ />
  </VaporPage>
);
```

## TypeScript Rules
- **Type all props, state, handlers** - NO `any`
- **Use `import type`** for type-only imports
Alexandru Gherasim
Alexandru Gherasim @a.gherasim.ext 
Pending
 
lo hai gia'definito in un altro file,mi pare le instructions

- **Type useState**: `useState<User[]>([])`

```tsx
// ❌ BAD
const [data, setData] = useState([]);

// ✅ GOOD
const [data, setData] = useState<User[]>([]);
```

## Import Order
1. React/external → 2. @vapor → 3. @1f/react-sdk → 4. custom-components → 5. hooks → 6. types
Alexandru Gherasim
Alexandru Gherasim @a.gherasim.ext 
Pending
 
Se mi dai il Ok sulla proposta di Biome, l'ordine verra' configurato con Biome alla formattazione, non dvora' occuparsene una AI


## DO NOT
- ❌ Business logic in components → use hooks/helpers
- ❌ Direct API calls → use `useGetCustom`/`usePostCustom`
- ❌ Raw MUI DataGrid → use `CustomDataGrid`
- ❌ console.log → remove before commit
- ❌ Hardcoded strings → use `useTranslation()`

## Forms
Use `react-hook-form` + `zod` for validation.
