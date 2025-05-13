import React from 'react';
import { TattooDesign } from '@/models/TattooModel';
import DesignGrid from './DesignGrid';

interface CategorySectionProps {
  title: string;
  designs: TattooDesign[];
  onSelectDesign: (design: TattooDesign) => void;
  showArrow?: boolean;
  isScrollable?: boolean;
  onClick?: () => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  designs,
  onSelectDesign,
  showArrow = true,
  isScrollable = false,
  onClick,
}) => {
  return (
    <div className="mb-8">
      <div 
        className="flex items-center mb-4 cursor-pointer" 
        onClick={onClick}
      >
        <h2 className="text-2xl font-normal text-gray-800">
          {title}
        </h2>
        {showArrow && (
          <span className="ml-2 text-2xl">&gt;</span>
        )}
      </div>
      <DesignGrid 
        designs={designs} 
        onSelectDesign={onSelectDesign} 
        isScrollable={isScrollable} 
      />
    </div>
  );
};

export default CategorySection; 