import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../HomePage';

// Mock the Next.js router
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('HomePage Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the title and description correctly', () => {
    render(<HomePage />);
    
    expect(screen.getByText('Touch to Start')).toBeInTheDocument();
    expect(screen.getByText('Want to try on Tattoos?')).toBeInTheDocument();
    expect(
      screen.getByText(/Our AI-powered Tattoo try-on Machine lets you visualize tattoos/i)
    ).toBeInTheDocument();
  });

  it('navigates to select-design page when clicked', () => {
    render(<HomePage />);
    
    // Click anywhere on the page (the full-screen clickable area)
    fireEvent.click(screen.getByLabelText('Touch to start'));
    
    expect(mockPush).toHaveBeenCalledWith('/select-design');
  });
}); 