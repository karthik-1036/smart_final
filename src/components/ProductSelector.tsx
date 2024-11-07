import React from 'react';
import { Smartphone } from 'lucide-react';

interface Props {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProductSelector({ selectedCategory, onSelectCategory }: Props) {
  return (
<div className="text-center">
  <button
    onClick={() => onSelectCategory('smartphones')}
    className={`
      w-full px-6 py-5 rounded-xl transition-all duration-300
      ${
        selectedCategory === 'smartphones'
          ? 'bg-blue-600 text-white shadow-md'
          : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 shadow-sm'
      }
    `}
  >
    <div className="flex items-center justify-center space-x-3">
      <Smartphone
        className={`w-7 h-7 transition-transform duration-300 ${
          selectedCategory === 'smartphones' ? 'transform scale-110' : ''
        }`}
      />
      <span className="text-lg font-semibold">Find Your Perfect Smartphone</span>
    </div>
    <p className="mt-2 text-sm opacity-80">
      Get AI-powered recommendations tailored to your needs
    </p>
    <p
      className={`
        mt-1 text-sm font-semibold 
        ${selectedCategory === 'smartphones' ? 'text-white' : 'text-blue-700'}
      `}
    >
      Click here to find your ideal smartphone!
    </p>
  </button>
</div>
 );
}