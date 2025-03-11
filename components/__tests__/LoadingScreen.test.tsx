import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { LoadingScreen } from '../LoadingScreen';

const mockUseTheme = jest.fn();

jest.mock('../../config/theme', () => ({
  useTheme: () => mockUseTheme(),
}));

describe('LoadingScreen', () => {
  beforeEach(() => {
    mockUseTheme.mockReturnValue({
      theme: {
        colors: {
          background: '#ffffff',
          primary: '#007AFF',
          text: '#000000',
          error: '#FF3B30'
        },
        spacing: {
          md: 8
        },
        typography: {
          body: {}
        }
      }
    });
  });

  it('renders loading indicator and text when no error', () => {
    render(<LoadingScreen />);
    
    expect(screen.getByLabelText('Loading indicator')).toBeTruthy();
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('displays progress bar when progress prop is provided', () => {
    render(<LoadingScreen progress={50} />);
    
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toBeTruthy();
    expect(progressBar.props.style).toContainEqual({ width: '50%' });
  });

  it('displays error message when error prop is provided', () => {
    const error = new Error('Test error message');
    render(<LoadingScreen error={error} />);
    
    expect(screen.getByText('Error initializing app')).toBeTruthy();
    expect(screen.getByText('Test error message')).toBeTruthy();
  });

  it('applies theme colors correctly', () => {
    render(<LoadingScreen />);
    
    const container = screen.getByTestId('loading-container');
    expect(container.props.style).toContainEqual({
      backgroundColor: '#ffffff'
    });
  });
});