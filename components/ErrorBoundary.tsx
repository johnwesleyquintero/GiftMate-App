/**
 * Error Boundary component to catch JavaScript errors in component trees
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @param {React.ReactNode} props.fallback - Fallback UI to display when errors occur
 * @param {function} [props.onError] - Error handler callback (optional)
 * @param {function} [props.onReset] - Reset handler callback (optional)
 * @example
 * <ErrorBoundary 
 *   fallback={<ErrorScreen />}
 *   onError={(error) => trackError(error)}
 * >
 *   <App />
 * </ErrorBoundary>
 */
export default function ErrorBoundary({
  children,
  fallback,
  onError,
  onReset
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
  onError?: (error: Error) => void;
  onReset?: () => void;
}) {
  // ... existing code ...
}

/**
 * Error Boundary Implementation Notes:
 * 1. Place at top-level route components
 * 2. Use complementary with try/catch for event handlers
 * 3. Reset state after recovery using reset keys
 * 4. Log errors to monitoring service
 * 5. Test using React's componentDidCatch testing utilities
 */