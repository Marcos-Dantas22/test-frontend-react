import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedBrands: number[];
  availableBrands: { id: number; name: string }[];
  onBrandToggle: (brandId: number) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedBrands,
  availableBrands,
  onBrandToggle
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-col gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por modelo..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        {/* Brand Filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 mr-2">Filtrar por marca:</span>
          {availableBrands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onBrandToggle(brand.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedBrands.includes(brand.id)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};