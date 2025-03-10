import { useEffect, useState } from 'react';

declare global {
  interface Window {
    frameworkReady?: (callback: (error?: Error) => void) => void;
  }
}

export function useFrameworkReady() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!window.frameworkReady) {
      setReady(true);
      return;
    }

    window.frameworkReady((err) => {
      if (err) {
        setError(new Error(`Framework init failed: ${err.message}`));
      }
      setReady(true);
    });
  }, []);

  return { ready, error };
}
