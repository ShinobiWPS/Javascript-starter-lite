# TypeScript Files Guide

## When to Create What

| Type | When | Location |
|------|------|----------|
| **Service** | API calls, streaming, WebSocket, complex logic | `services/` |
| **Helper** | Pure functions, formatting, transformations | `helpers/` |
| **Hook** | React state logic, useEffect combinations | `hooks/` |
| **Store** | Global state (Zustand) | `store/` |
| **Enum** | Fixed set of values | `enums/` |
| **Interface** | Data structures, API responses | `interfaces/` |

## Service Pattern
```typescript
export const myService = {
  async fetchData(params: Params): Promise<Result> { /* ... */ },
  processData(data: RawData): ProcessedData { /* ... */ }
};
```

## Helper Pattern
```typescript
export const formatDate = (date: Date): string => date.toLocaleDateString("it-IT");
export const parseDate = (str: string): Date => new Date(str);
```

## Store Pattern (Zustand)
```typescript
import { create } from "zustand";
const useMyStore = create<MyState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}));
```

## TypeScript Rules

### MUST DO
```typescript
// ✅ Type everything
const process = (items: Item[]): Result[] => { };

// ✅ Use generics
const fetch = async <T>(url: string): Promise<T> => { };

// ✅ Use type guards
const isUser = (obj: unknown): obj is User => "id" in obj;
```

### AVOID
```typescript
// ❌ NO any → use unknown + type guards
// ❌ NO implicit types → always explicit
// ❌ NO obj! → use obj?.prop ?? default
```

## Service vs Helper
| Scenario | Use |
|----------|-----|
| Data transformation | Helper |
| API with auth | Service |
| Date formatting | Helper |
| Streaming/WebSocket | Service |
