import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../config/theme';
import { Moon, Sun } from 'lucide-react-native';

const ThemeToggle = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={styles.container}
      accessibilityLabel={
        isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
      }
      accessibilityRole="button"
    >
      {isDarkMode ? (
        <Moon size={24} color={theme.colors.text} />
      ) : (
        <Sun size={24} color={theme.colors.text} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.sm,
    borderRadius: theme.radii.md,
    backgroundColor: theme.colors.cardBackground,
  },
});

export default ThemeToggle;
