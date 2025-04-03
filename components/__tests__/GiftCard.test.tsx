import React from 'react';
import { render, screen } from '@testing-library/react-native';
import GiftCard from '../GiftCard';

describe('GiftCard', () => {
  const mockGift = {
    id: '1',
    name: 'Test Gift',
    price: 29.99,
    recipient: 'John Doe',
    occasion: 'Birthday',
    status: 'pending',
  };

  it('renders gift information correctly', () => {
    render(<GiftCard gift={mockGift} />);

    expect(screen.getByText(mockGift.name)).toBeTruthy();
    expect(screen.getByText(mockGift.recipient)).toBeTruthy();
    expect(screen.getByText(mockGift.occasion)).toBeTruthy();
    expect(screen.getByText(`$${mockGift.price}`)).toBeTruthy();
  });

  it('displays correct status', () => {
    render(<GiftCard gift={mockGift} />);
    expect(screen.getByText(mockGift.status)).toBeTruthy();
  });
});
