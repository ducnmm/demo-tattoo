import React from 'react';
import { TattooDesign } from '@/models/TattooModel';
import BackButton from './BackButton';

interface DesignDetailProps {
  design: TattooDesign;
  onBack: () => void;
}

const DesignDetail: React.FC<DesignDetailProps> = ({ design, onBack }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-md mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl mb-4">SELECT A DESIGN</h1>
          <BackButton onClick={onBack} large />
        </header>
        
        <div className="bg-white aspect-square mb-8"></div>
        
        <h2 className="text-xl mb-3">{design.name}</h2>
        
        {design.description && (
          <p className="text-sm mb-6">{design.description}</p>
        )}
        
        <button className="w-full bg-white text-gray-900 py-3 text-center font-medium">
          TRY IT ON
        </button>
      </div>
    </div>
  );
};

export default DesignDetail; 