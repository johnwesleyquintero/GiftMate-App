/**
 * Custom hook for making API requests
 * @param {string} endpoint - API endpoint to call
 * @param {RequestInit} options - Fetch options including headers, method, body
 * @returns {{
 *   data: any;
 *   error: Error | null;
 *   loading: boolean;
 *   refresh: () => Promise<void>;
 * }} Returns response data, error state, loading state, and refresh function
 * @example
 * const { data, error, loading } = useApi('/users', {
 *   headers: { Authorization: `Bearer ${token}` }
 * });
 */
export function useApi(endpoint: string, options?: RequestInit) {
  // ... existing code ...
}
