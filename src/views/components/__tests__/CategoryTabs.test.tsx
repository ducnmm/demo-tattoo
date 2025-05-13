import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryTabs from '../CategoryTabs';
import { Category } from '@/models/TattooModel';

describe('CategoryTabs Component', () => {
  const mockCategories: Category[] = [
    { id: 'category-1', name: 'Category 1' },
    { id: 'category-2', name: 'Category 2' },
    { id: 'category-3', name: 'Category 3' }
  ];
  
  const mockOnSelect = jest.fn();

  it('renders all category tabs', () => {
    render(
      <CategoryTabs 
        categories={mockCategories} 
        activeCategory="category-1" 
        onSelectCategory={mockOnSelect} 
      />
    );
    
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
    expect(screen.getByText('Category 3')).toBeInTheDocument();
  });

  it('highlights the active category', () => {
    render(
      <CategoryTabs 
        categories={mockCategories} 
        activeCategory="category-2" 
        onSelectCategory={mockOnSelect} 
      />
    );
    
    const activeButton = screen.getByText('Category 2').closest('button');
    expect(activeButton).toHaveClass('bg-gray-800');
  });

  it('calls onSelectCategory when a tab is clicked', () => {
    render(
      <CategoryTabs 
        categories={mockCategories} 
        activeCategory="category-1" 
        onSelectCategory={mockOnSelect} 
      />
    );
    
    fireEvent.click(screen.getByText('Category 3'));
    expect(mockOnSelect).toHaveBeenCalledWith('category-3');
  });
}); 