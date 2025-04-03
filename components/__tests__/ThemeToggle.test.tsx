import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import ThemeToggle from '../ThemeToggle';

const mockToggleTheme = jest.fn();
const mockUseTheme = jest.fn();

jest.mock('../../config/theme', () => ({
  useTheme: () => mockUseTheme(),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    mockUseTheme.mockReturnValue({
      toggleTheme: mockToggleTheme,
      isDarkMode: false,
      theme: {
        colors: {
          text: '#000000',
          cardBackground: '#ffffff',
        },
        spacing: {
          sm: 4,
        },
        radii: {
          md: 8,
        },
      },
    });
  });

  it('renders sun icon in light mode', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    expect(screen.getByLabelText('Switch to dark mode')).toBeTruthy();
  });

  it('renders moon icon in dark mode', () => {
    mockUseTheme.mockReturnValue({
      toggleTheme: mockToggleTheme,
      isDarkMode: true,
      theme: {
        colors: {
          text: '#ffffff',
          cardBackground: '#000000',
        },
        spacing: {
          sm: 4,
        },
        radii: {
          md: 8,
        },
      },
    });

    render(<ThemeToggle />);

    expect(screen.getByLabelText('Switch to light mode')).toBeTruthy();
  });

  it('calls toggleTheme when pressed', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    fireEvent.press(button);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('applies correct styles', () => {
    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button.props.style).toContainEqual({
      padding: 4,
      borderRadius: 8,
      backgroundColor: '#ffffff',
    });
  });
});
