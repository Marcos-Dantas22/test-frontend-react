import { useState } from 'react';
import type { Vehicle } from '../types/Vehicle';

export const useVehicleData = (initialVehicles: Vehicle[]) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);

  const addVehicle = (newVehicleData: Omit<Vehicle, 'id' | 'timestamp_cadastro'>) => {
    const newVehicle: Vehicle = {
      ...newVehicleData,
      id: Math.max(...vehicles.map(v => v.id), 0) + 1,
      timestamp_cadastro: Math.floor(Date.now() / 1000)
    };

    setVehicles(prev => [...prev, newVehicle]);
    return newVehicle;
  };

  const removeVehicle = (id: number) => {
    setVehicles(prev => prev.filter(v => v.id !== id));
  };

  const updateVehicle = (id: number, updatedData: Partial<Vehicle>) => {
    setVehicles(prev => 
      prev.map(v => v.id === id ? { ...v, ...updatedData } : v)
    );
  };

  return {
    vehicles,
    addVehicle,
    removeVehicle,
    updateVehicle
  };
};