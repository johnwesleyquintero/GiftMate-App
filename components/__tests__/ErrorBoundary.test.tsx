import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import ErrorBoundary from '../ErrorBoundary';

const mockOnError = jest.fn();
const mockOnReset = jest.fn();

const ErrorComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children when no error occurs', () => {
    const { getByText } = render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <Text>Test content</Text>
      </ErrorBoundary>
    );

    expect(getByText('Test content')).toBeTruthy();
  });

  it('renders fallback UI when error occurs', () => {
    const { getByText } = render(
      <ErrorBoundary 
        fallback={<Text>Error occurred</Text>}
        onError={mockOnError}
      >
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(getByText('Error occurred')).toBeTruthy();
    expect(mockOnError).toHaveBeenCalledWith(expect.any(Error));
  });

  it('calls onReset when reset is triggered', () => {
    const { getByText } = render(
      <ErrorBoundary 
        fallback={<Text>Error occurred</Text>}
        onReset={mockOnReset}
      >
        <ErrorComponent />
      </ErrorBoundary>
    );

    fireEvent.press(getByText('Try again'));
    expect(mockOnReset).toHaveBeenCalled();
  });

  it('applies correct styles to error container', () => {
    const { getByTestId } = render(
      <ErrorBoundary 
        fallback={<Text>Error occurred</Text>}
      >
        <ErrorComponent />
      </ErrorBoundary>
    );

    const container = getByTestId('error-boundary-container');
    expect(container.props.style).toMatchObject({
      backgroundColor: expect.any(String),
      borderRadius: expect.any(Number),
      padding: expect.any(Number),
      margin: expect.any(Number)
    });
  });
});