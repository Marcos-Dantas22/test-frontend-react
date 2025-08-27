import { useState, useMemo } from 'react';
import type { Vehicle } from '../types/Vehicle';

export const useVehicleFilters = (vehicles: Vehicle[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      const matchesSearch = searchTerm === '' || 
        vehicle.nome_modelo.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesBrand = selectedBrands.length === 0 || 
        selectedBrands.includes(vehicle.brand);

      return matchesSearch && matchesBrand;
    });
  }, [vehicles, searchTerm, selectedBrands]);

  const handleBrandToggle = (brandId: number) => {
    setSelectedBrands(prev => 
      prev.includes(brandId)
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrands([]);
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedBrands,
    handleBrandToggle,
    filteredVehicles,
    clearFilters
  };
};