import React from 'react';
import { Car } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center">
          <div className="p-2 bg-blue-600 rounded-lg mr-3">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Catálogo de Veículos</h1>
            <p className="text-sm text-gray-500">Encontre o veículo ideal</p>
          </div>
        </div>
      </div>
    </header>
  );
};