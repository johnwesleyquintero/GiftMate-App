import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '../config/theme';

type LoadingScreenProps = {
  error?: Error | null;
  progress?: number;
};

export const LoadingScreen = ({ error, progress }: LoadingScreenProps) => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.content}>
        <ActivityIndicator
          size="large"
          color={theme.colors.primary}
          accessibilityLabel="Loading indicator"
        />

        {progress !== undefined && (
          <View style={styles.progressContainer}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${progress}%`,
                  backgroundColor: theme.colors.primary,
                },
              ]}
            />
          </View>
        )}

        <Text style={[styles.text, { color: theme.colors.text }]}>
          {error ? 'Error initializing app' : 'Loading...'}
        </Text>

        {error && (
          <Text style={[styles.errorText, { color: theme.colors.error }]}>
            {error.message}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  progressContainer: {
    height: 4,
    width: 200,
    backgroundColor: theme.colors.border,
    borderRadius: theme.radii.sm,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  text: {
    ...theme.typography.body,
    marginTop: theme.spacing.md,
  },
  errorText: {
    ...theme.typography.body,
    textAlign: 'center',
    maxWidth: 300,
  },
});
