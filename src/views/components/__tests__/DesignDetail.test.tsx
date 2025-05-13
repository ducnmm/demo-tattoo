import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DesignDetail from '../DesignDetail';
import { TattooDesign } from '@/models/TattooModel';

// Mock the BackButton component
jest.mock('../BackButton', () => {
  return function MockBackButton({ onClick, large }: { 
    onClick: () => void, 
    large?: boolean 
  }) {
    return (
      <button 
        onClick={onClick} 
        data-testid="back-button"
        data-large={large || false}
      >
        Back
      </button>
    );
  };
});

describe('DesignDetail Component', () => {
  const mockDesign: TattooDesign = {
    id: 'test-design',
    name: 'Test Design',
    category: 'test-category',
    image: '/images/test.jpg',
    artist: 'Test Artist',
    description: 'Test description for the design'
  };
  
  const mockOnBack = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('renders the design name and description', () => {
    render(<DesignDetail design={mockDesign} onBack={mockOnBack} />);
    
    expect(screen.getByText('Test Design')).toBeInTheDocument();
    expect(screen.getByText('Test description for the design')).toBeInTheDocument();
  });
  
  it('renders without description when not provided', () => {
    const designWithoutDesc = { ...mockDesign, description: undefined };
    render(<DesignDetail design={designWithoutDesc} onBack={mockOnBack} />);
    
    expect(screen.getByText('Test Design')).toBeInTheDocument();
    expect(screen.queryByText('Test description for the design')).not.toBeInTheDocument();
  });
  
  it('renders the BackButton with large prop', () => {
    render(<DesignDetail design={mockDesign} onBack={mockOnBack} />);
    
    const backButton = screen.getByTestId('back-button');
    expect(backButton).toBeInTheDocument();
    expect(backButton.getAttribute('data-large')).toBe('true');
  });
  
  it('calls onBack when back button is clicked', () => {
    render(<DesignDetail design={mockDesign} onBack={mockOnBack} />);
    
    fireEvent.click(screen.getByTestId('back-button'));
    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });
  
  it('renders the "TRY IT ON" button', () => {
    render(<DesignDetail design={mockDesign} onBack={mockOnBack} />);
    
    expect(screen.getByText('TRY IT ON')).toBeInTheDocument();
  });
}); 