export interface TattooDesign {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
}

export class TattooModel {
  private static instance: TattooModel;
  private designs: TattooDesign[] = [];
  private categories: Category[] = [];

  private constructor() {
    // Initialize with default data
    this.categories = [
      { id: 'tattoo-artists-designs', name: 'Tattoo Artists Designs' },
      { id: 'spca-collaboration', name: 'SPCA Collaboration' },
      { id: 'category-3', name: 'Category 3' },
      { id: 'category-4', name: 'Category 4' },
      { id: 'category-5', name: 'Category 5 name here' },
    ];

    // Sample designs for each category
    this.designs = [
      // Tattoo Artists Designs - 12 sample designs
      ...Array(12).fill(0).map((_, i) => ({
        id: `tattoo-design-${i+1}`,
        name: `Tattoo Design ${i+1}`,
        imageUrl: '/images/placeholder.jpg',
        category: 'tattoo-artists-designs'
      })),
      
      // SPCA Collaboration - 6 sample designs
      ...Array(6).fill(0).map((_, i) => ({
        id: `spca-design-${i+1}`,
        name: `SPCA Design ${i+1}`,
        imageUrl: '/images/placeholder.jpg',
        category: 'spca-collaboration'
      })),
      
      // Add a special design for the Bichon Blind Box
      {
        id: 'bichon-blind-box',
        name: 'BICHON BLIND BOX',
        imageUrl: '/images/placeholder.jpg',
        category: 'spca-collaboration',
        description: 'The Bichon is a small dog with curly white coats and lots of personality, which makes them favorites of blind rescue charity. They are best known for being playful, easy to work with and very curious!'
      }
    ];
  }

  public static getInstance(): TattooModel {
    if (!TattooModel.instance) {
      TattooModel.instance = new TattooModel();
    }
    return TattooModel.instance;
  }

  public getCategories(): Category[] {
    return this.categories;
  }

  public getDesignsByCategory(categoryId: string): TattooDesign[] {
    return this.designs.filter(design => design.category === categoryId);
  }

  public getDesignById(id: string): TattooDesign | undefined {
    return this.designs.find(design => design.id === id);
  }
} 