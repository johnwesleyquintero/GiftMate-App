import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '../hooks/useFrameworkReady';
import { LoadingScreen } from '../components/LoadingScreen';
import { ThemeProvider } from '../config/theme';
import { AppNavigator } from '../lib/navigation';

export default function RootLayout() {
  const { isReady, error } = useFrameworkReady();

  if (!isReady) {
    return <LoadingScreen error={error} />;
  }

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
