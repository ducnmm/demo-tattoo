"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TattooDesign, Category } from '@/models/TattooModel';
import { tattooController } from '@/controllers/TattooController';
import CategoryTabs from './components/CategoryTabs';
import CategorySection from './components/CategorySection';
import BackButton from './components/BackButton';
import DesignDetail from './components/DesignDetail';

const SelectDesignPage: React.FC = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [categoryDesigns, setCategoryDesigns] = useState<Record<string, TattooDesign[]>>({});
  const [selectedDesign, setSelectedDesign] = useState<TattooDesign | null>(null);
  
  // Fetch categories and designs
  useEffect(() => {
    const loadedCategories = tattooController.getCategories();
    setCategories(loadedCategories);
    
    // Initialize with no active category to show all categories
    setActiveCategory('');
    
    // Load designs for all categories
    const designs: Record<string, TattooDesign[]> = {};
    loadedCategories.forEach(category => {
      designs[category.id] = tattooController.getDesignsByCategory(category.id);
    });
    
    setCategoryDesigns(designs);
  }, []);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleSelectDesign = (design: TattooDesign) => {
    setSelectedDesign(design);
  };

  const handleBack = () => {
    if (selectedDesign) {
      setSelectedDesign(null);
    } else if (activeCategory) {
      setActiveCategory(''); // Go back to all categories view
    } else {
      router.push('/');
    }
  };

  // If a design is selected, show the design detail view
  if (selectedDesign) {
    return <DesignDetail design={selectedDesign} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-normal mb-4">SELECT A DESIGN</h1>
          <CategoryTabs 
            categories={categories} 
            activeCategory={activeCategory} 
            onSelectCategory={handleSelectCategory}
          />
          <BackButton onClick={handleBack} />
        </header>

        <main>
          {activeCategory === '' ? (
            // Show all categories
            categories.map(category => (
              <CategorySection
                key={category.id}
                title={category.name.toUpperCase()}
                designs={categoryDesigns[category.id] || []}
                onSelectDesign={handleSelectDesign}
                showArrow={true}
                isScrollable={true}
                onClick={() => handleSelectCategory(category.id)}
              />
            ))
          ) : (
            // Show specific category
            <CategorySection
              title={categories.find(c => c.id === activeCategory)?.name.toUpperCase() || ''}
              designs={categoryDesigns[activeCategory] || []}
              onSelectDesign={handleSelectDesign}
              showArrow={false}
              isScrollable={false}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default SelectDesignPage; 