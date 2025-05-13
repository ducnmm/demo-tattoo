import { TattooModel, TattooDesign, Category } from '../models/TattooModel';

export class TattooController {
  private model: TattooModel;

  constructor() {
    this.model = TattooModel.getInstance();
  }

  public getCategories(): Category[] {
    return this.model.getCategories();
  }

  public getDesignsByCategory(categoryId: string): TattooDesign[] {
    return this.model.getDesignsByCategory(categoryId);
  }

  public getDesignById(id: string): TattooDesign | undefined {
    return this.model.getDesignById(id);
  }
}

// Create a singleton instance to be used throughout the app
export const tattooController = new TattooController(); 