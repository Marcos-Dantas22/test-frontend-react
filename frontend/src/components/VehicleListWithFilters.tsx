import React from 'react';
import type { Vehicle, Brand } from '../types/Vehicle';
import { VehicleList } from './VehicleList';
import { SearchBar } from './SearchBar';
import { useVehicleFilters } from '../hooks/useVehicleFilters';

interface VehicleListWithFiltersProps {
  vehicles: Vehicle[];
  brands: Brand[];
  showGrouping?: boolean;
  showFilters?: boolean;
  className?: string;
}

export const VehicleListWithFilters: React.FC<VehicleListWithFiltersProps> = ({
  vehicles,
  brands,
  showGrouping = true,
  showFilters = true,
  className = ""
}) => {
  const {
    searchTerm,
    setSearchTerm,
    selectedBrands,
    handleBrandToggle,
    filteredVehicles
  } = useVehicleFilters(vehicles);

  return (
    <div className={className}>
      {showFilters && (
        <>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedBrands={selectedBrands}
            availableBrands={brands}
            onBrandToggle={handleBrandToggle}
          />
          
          <div className="mb-6">
            <p className="text-gray-600">
              Mostrando <span className="font-semibold">{filteredVehicles.length}</span> {filteredVehicles.length === 1 ? 'veículo' : 'veículos'}
            </p>
          </div>
        </>
      )}

      <VehicleList 
        vehicles={filteredVehicles} 
        brands={brands} 
        showGrouping={showGrouping}
      />
    </div>
  );
};