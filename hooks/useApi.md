# useApi Hook

## Purpose

Centralizes API request handling with built-in error handling and loading states

## Parameters

- `baseUrl`: API endpoint base URL
- `headers`: Default request headers

## Return Value

```ts
interface ApiHookReturn {
  data: any;
  error: Error | null;
  loading: boolean;
  get: (path: string) => Promise<void>;
  post: (path: string, body: object) => Promise<void>;
}
```

## Usage Example

```tsx
// components/GiftList.tsx
const { data, error, loading, get } = useApi('/api/gifts');

useEffect(() => {
  const loadGifts = async () => {
    await get('/featured');
  };
  loadGifts();
}, []);
```

## Best Practices

1. Wrap in try/catch blocks
2. Handle 401 errors with automatic logout
3. Use exponential backoff for retries
4. Add request cancellation support
5. Implement request caching
