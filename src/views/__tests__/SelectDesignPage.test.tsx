import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectDesignPage from '../SelectDesignPage';
import { tattooController } from '@/controllers/TattooController';
import { Category, TattooDesign } from '@/models/TattooModel';

// Mock the dependencies
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('@/controllers/TattooController', () => {
  const mockCategories: Category[] = [
    { id: 'category-1', name: 'Category 1' },
    { id: 'category-2', name: 'Category 2' }
  ];
  
  const mockDesigns: TattooDesign[] = [
    { 
      id: 'design-1', 
      name: 'Design 1', 
      category: 'category-1',
      image: '/images/design-1.jpg',
      artist: 'Artist 1',
      description: 'Description 1'
    },
    { 
      id: 'design-2', 
      name: 'Design 2', 
      category: 'category-1',
      image: '/images/design-2.jpg',
      artist: 'Artist 2',
      description: 'Description 2'
    },
    { 
      id: 'design-3', 
      name: 'Design 3', 
      category: 'category-2',
      image: '/images/design-3.jpg',
      artist: 'Artist 3',
      description: 'Description 3'
    }
  ];
  
  return {
    tattooController: {
      getCategories: jest.fn().mockReturnValue(mockCategories),
      getDesignsByCategory: jest.fn(categoryId => 
        mockDesigns.filter(d => d.category === categoryId)
      ),
      getDesignById: jest.fn(id => mockDesigns.find(d => d.id === id))
    }
  };
});

// Mock components to simplify testing
jest.mock('../components/CategorySection', () => {
  return function MockCategorySection({ designs, onSelectDesign, onClick }: { 
    designs: TattooDesign[], 
    onSelectDesign: (design: TattooDesign) => void, 
    onClick?: () => void 
  }) {
    return (
      <div data-testid="category-section">
        {designs.map((design: TattooDesign) => (
          <div 
            key={design.id}
            data-testid={`design-${design.id}`}
            onClick={() => onSelectDesign(design)}
          >
            {design.name}
          </div>
        ))}
        {onClick && <button onClick={onClick} data-testid="category-click">View All</button>}
      </div>
    );
  };
});

jest.mock('../components/DesignDetail', () => {
  return function MockDesignDetail({ design, onBack }: { 
    design: TattooDesign, 
    onBack: () => void 
  }) {
    return (
      <div data-testid="design-detail">
        <h2>{design.name}</h2>
        <button onClick={onBack} data-testid="back-button">Back</button>
      </div>
    );
  };
});

describe('SelectDesignPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title and fetches categories', async () => {
    render(<SelectDesignPage />);
    
    expect(screen.getByText('SELECT A DESIGN')).toBeInTheDocument();
    expect(tattooController.getCategories).toHaveBeenCalled();
  });

  it('displays category sections when no category is selected', async () => {
    render(<SelectDesignPage />);
    
    // Check if category sections are displayed
    const categorySections = await screen.findAllByTestId('category-section');
    expect(categorySections.length).toBeGreaterThan(0);
  });

  it('selects a category when category is clicked', async () => {
    render(<SelectDesignPage />);
    
    // Find and click on a category - use getAllByTestId and select the first one
    const categoryButtons = await screen.findAllByTestId('category-click');
    fireEvent.click(categoryButtons[0]);
    
    // Should show only the designs for that category
    expect(tattooController.getDesignsByCategory).toHaveBeenCalled();
  });
  
  it('shows design detail when a design is selected', async () => {
    render(<SelectDesignPage />);
    
    // Find and click on a design
    const design = await screen.findByTestId('design-design-1');
    fireEvent.click(design);
    
    // Should show the design detail view
    const detailView = await screen.findByTestId('design-detail');
    expect(detailView).toBeInTheDocument();
  });
  
  it('navigates back from design detail to category view', async () => {
    render(<SelectDesignPage />);
    
    // Select a design first
    const design = await screen.findByTestId('design-design-1');
    fireEvent.click(design);
    
    // Then click back
    const backButton = await screen.findByTestId('back-button');
    fireEvent.click(backButton);
    
    // Should be back to selection view
    expect(screen.getByText('SELECT A DESIGN')).toBeInTheDocument();
  });
}); 