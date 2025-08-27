import type { Vehicle, Brand } from '../types/Vehicle';

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const getBrandName = (brandId: number, brands: Brand[]): string => {
  const brand = brands.find(b => b.id === brandId);
  return brand ? brand.name : 'Marca não encontrada';
};

export const groupVehiclesByBrand = (vehicles: Vehicle[], brands: Brand[]) => {
  const grouped: { [brandName: string]: Vehicle[] } = {};
  
  vehicles.forEach(vehicle => {
    const brandName = getBrandName(vehicle.brand, brands);
    if (!grouped[brandName]) {
      grouped[brandName] = [];
    }
    grouped[brandName].push(vehicle);
  });
  
  return grouped;
};