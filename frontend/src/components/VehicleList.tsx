import React from 'react';
import type { Vehicle, Brand } from '../types/Vehicle';
import { VehicleCard } from './VehicleCard';
import { groupVehiclesByBrand } from '../utils/vehicleUtils';

interface VehicleListProps {
  vehicles: Vehicle[];
  brands: Brand[];
  showGrouping?: boolean;
  className?: string;
}

export const VehicleList: React.FC<VehicleListProps> = ({ 
  vehicles, 
  brands, 
  showGrouping = true,
  className = ""
}) => {
  if (vehicles.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-gray-400 text-6xl mb-4">🚗</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum veículo encontrado</h3>
        <p className="text-gray-500">Tente ajustar seus filtros de busca.</p>
      </div>
    );
  }

  if (!showGrouping) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} brands={brands} />
        ))}
      </div>
    );
  }

  const groupedVehicles = groupVehiclesByBrand(vehicles, brands);

  return (
    <div className={className}>
      {Object.entries(groupedVehicles)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([brandName, brandVehicles]) => (
          <div key={brandName} className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{brandName}</h2>
              <span className="ml-3 bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
                {brandVehicles.length} {brandVehicles.length === 1 ? 'veículo' : 'veículos'}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {brandVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} brands={brands} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};