import { Dimensions } from 'react-native';
import React from 'react';

type Theme = {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        cardBackground: string;
        text: string;
        textSecondary: string;
        border: string;
        success: string;
        error: string;
        warning: string;
    };
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    radii: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    typography: {
        heading1: {
            fontSize: number;
            lineHeight: number;
            fontWeight: string;
        };
        body: {
            fontSize: number;
            lineHeight: number;
        };
    };
    shadows: {
        sm: string;
        md: string;
        lg: string;
    };
    dark: boolean;
};

const { width, height } = Dimensions.get('window');

export const lightTheme: Theme = {
    colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        background: '#f8fafc',
        cardBackground: '#ffffff',
        text: '#1e293b',
        textSecondary: '#64748b',
        border: '#e2e8f0',
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    radii: {
        sm: 4,
        md: 8,
        lg: 16,
        xl: 24,
    },
    typography: {
        heading1: {
            fontSize: 32,
            lineHeight: 40,
            fontWeight: '700',
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
        },
    },
    shadows: {
        sm: '0 1px 3px rgba(0,0,0,0.12)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
    },
    dark: false,
};

export const darkTheme: Theme = {
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
        background: '#0f172a',
        cardBackground: '#1e293b',
        text: '#f8fafc',
        textSecondary: '#94a3b8',
        border: '#334155',
    },
    dark: true,
};

export const ThemeContext = React.createContext({
    theme: lightTheme,
    toggleTheme: () => { },
    isDarkMode: false,
});

export const useTheme = () => React.useContext(ThemeContext);

export type ThemeProviderProps = {
    children: React.ReactNode;
    initialTheme?: 'light' | 'dark';
};

export const ThemeProvider = ({
    children,
    initialTheme = 'light'
}: ThemeProviderProps) => {
    const [isDark, setIsDark] = React.useState(initialTheme === 'dark');

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: isDark ? darkTheme : lightTheme,
                toggleTheme,
                isDarkMode: isDark,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};