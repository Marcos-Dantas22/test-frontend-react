import React from 'react';
import type { Vehicle, Brand } from '../types/Vehicle';
import { formatCurrency, getBrandName } from '../utils/vehicleUtils';

interface VehicleCardProps {
  vehicle: Vehicle;
  brands: Brand[];
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, brands }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {vehicle.nome_modelo}
          </h3>
          <p className="text-sm text-gray-600">
            {getBrandName(vehicle.brand, brands)} • {vehicle.ano}
          </p>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-blue-600">
            {formatCurrency(vehicle.valor)}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
        <div>Combustível: {vehicle.combustivel}</div>
        <div>Portas: {vehicle.num_portas}</div>
        <div>Cor: {vehicle.cor}</div>
        <div>ID: {vehicle.id}</div>
      </div>
    </div>
  );
};