import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BackButton from '../BackButton';

describe('BackButton Component', () => {
  it('renders with default styling', () => {
    const mockFn = jest.fn();
    render(<BackButton onClick={mockFn} />);
    
    const button = screen.getByText('GO BACK').closest('button');
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass('text-xl py-3');
    expect(button).toHaveClass('text-base py-2');
  });
  
  it('renders with large styling when large prop is true', () => {
    const mockFn = jest.fn();
    render(<BackButton onClick={mockFn} large={true} />);
    
    const button = screen.getByText('GO BACK').closest('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('text-xl py-3');
    expect(button).not.toHaveClass('text-base py-2');
  });
  
  it('calls the onClick handler when clicked', () => {
    const mockFn = jest.fn();
    render(<BackButton onClick={mockFn} />);
    
    fireEvent.click(screen.getByText('GO BACK'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  
  it('contains the back arrow character', () => {
    const mockFn = jest.fn();
    render(<BackButton onClick={mockFn} />);
    
    expect(screen.getByText('<')).toBeInTheDocument();
  });
}); 