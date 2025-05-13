import { TattooController } from '../TattooController';

describe('TattooController', () => {
  let controller: TattooController;

  beforeEach(() => {
    controller = new TattooController();
  });

  it('should return all categories', () => {
    const categories = controller.getCategories();
    expect(categories.length).toBeGreaterThan(0);
    expect(categories[0].id).toBe('tattoo-artists-designs');
    expect(categories[1].id).toBe('spca-collaboration');
  });

  it('should return designs for a specific category', () => {
    const designs = controller.getDesignsByCategory('tattoo-artists-designs');
    expect(designs.length).toBeGreaterThan(0);
    expect(designs[0].category).toBe('tattoo-artists-designs');
  });

  it('should return a design by ID', () => {
    const designs = controller.getDesignsByCategory('tattoo-artists-designs');
    const firstDesignId = designs[0].id;
    
    const design = controller.getDesignById(firstDesignId);
    expect(design).toBeDefined();
    expect(design?.id).toBe(firstDesignId);
  });

  it('should return undefined for a non-existent design ID', () => {
    const design = controller.getDesignById('non-existent-id');
    expect(design).toBeUndefined();
  });
}); 