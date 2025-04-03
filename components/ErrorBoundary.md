# ErrorBoundary Component

## Purpose

Catches JavaScript errors anywhere in the component tree and displays a fallback UI.

## Props

- `fallback`: React element to display when error occurs
- `onError`: (error: Error, info: ErrorInfo) => void

## Usage Example

```tsx
<ErrorBoundary
  fallback={<Text>Something went wrong!</Text>}
  onError={(error) => logError(error)}
>
  <UserProfile />
</ErrorBoundary>
```

## Best Practices

1. Wrap top-level route components
2. Use different boundaries for app sections
3. Log errors to monitoring service
4. Test with intentional errors in dev
