import React from 'react';

interface BackButtonProps {
  onClick: () => void;
  large?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, large = false }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${
        large ? 'text-xl py-3' : 'text-base py-2'
      } text-gray-700 hover:text-gray-900 transition-colors`}
    >
      <span className="mr-2">&lt;</span>
      <span>GO BACK</span>
    </button>
  );
};

export default BackButton; 