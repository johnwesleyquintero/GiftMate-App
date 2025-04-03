# useFrameworkReady Hook

## Purpose

Manages framework initialization state and provides loading status for essential dependencies

## Return Value

```ts
interface FrameworkReadyReturn {
  isReady: boolean;
  error: Error | null;
  retry: () => void;
}
```

## Usage Example

```tsx
// components/RootLayout.tsx
const { isReady, error } = useFrameworkReady();

if (!isReady) {
  return <LoadingScreen error={error} />;
}

return <MainApp />;
```

## Implementation Details

1. Checks Supabase connection
2. Verifies required fonts are loaded
3. Validates environment variables
4. Monitors async storage initialization

## Error Handling

- Auto-retries 3 times with exponential backoff
- Captures errors to Sentry
- Shows graceful degradation UI
