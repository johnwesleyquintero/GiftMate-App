import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../config/theme';
import ThemeToggle from './ThemeToggle';
import { Text } from 'react-native';

export default function SettingsScreen() {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        App Settings
      </Text>

      <View style={styles.settingItem}>
        <Text style={[styles.label, { color: theme.colors.text }]}>
          Dark Mode
        </Text>
        <ThemeToggle />
      </View>

      {/* Add more theme-aware settings components here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  title: {
    ...theme.typography.heading1,
    marginBottom: theme.spacing.xl,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  label: {
    ...theme.typography.body,
  },
});
