import React, { useState } from 'react';
import { Plus, X, Car } from 'lucide-react';
import type { Vehicle, Brand } from '../types/Vehicle';


interface VehicleFormProps {
  brands: Brand[];
  onSubmit: (vehicle: Omit<Vehicle, 'id' | 'timestamp_cadastro'>) => void;
  onCancel?: () => void;
  isOpen: boolean;
}

interface FormData {
  nome_modelo: string;
  brand: number;
  ano: number;
  combustivel: string;
  num_portas: number;
  cor: string;
  valor: number;
}

interface FormErrors {
  nome_modelo?: string;
  brand?: string;
  ano?: string;
  combustivel?: string;
  num_portas?: string;
  cor?: string;
  valor?: string;
}

const initialFormData: FormData = {
  nome_modelo: '',
  brand: 0,
  ano: new Date().getFullYear(),
  combustivel: 'FLEX',
  num_portas: 4,
  cor: '',
  valor: 0,
};

const combustivelOptions = ['FLEX', 'GASOLINA', 'ETANOL', 'DIESEL', 'ELETRICO', 'HIBRIDO'];
const corOptions = ['BRANCA', 'PRETA', 'PRATA', 'CINZA', 'VERMELHA', 'AZUL', 'VERDE', 'AMARELA'];
const portasOptions = [2, 3, 4, 5];

export const VehicleForm: React.FC<VehicleFormProps> = ({
  brands,
  onSubmit,
  onCancel,
  isOpen
}) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome_modelo.trim()) {
      newErrors.nome_modelo = 'Nome do modelo é obrigatório';
    }

    if (formData.brand === 0) {
      newErrors.brand = 'Selecione uma marca';
    }

    if (formData.ano < 1900 || formData.ano > new Date().getFullYear() + 1) {
      newErrors.ano = 'Ano inválido';
    }

    if (!formData.cor.trim()) {
      newErrors.cor = 'Cor é obrigatória';
    }

    if (formData.valor <= 0) {
      newErrors.valor = 'Valor deve ser maior que zero';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
        const vehicleData = {
            ...formData,
            modelo_id: Date.now()
        };
        onSubmit(vehicleData);
        setFormData(initialFormData);
        setErrors({});
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setErrors({});
    onCancel?.();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-600 rounded-lg mr-3">
              <Car className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Cadastrar Novo Veículo</h2>
          </div>
          <button
            onClick={handleCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome do Modelo */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Modelo *
              </label>
              <input
                type="text"
                value={formData.nome_modelo}
                onChange={(e) => handleInputChange('nome_modelo', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                  errors.nome_modelo ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ex: COROLLA, CIVIC, GOL..."
              />
              {errors.nome_modelo && (
                <p className="text-red-500 text-sm mt-1">{errors.nome_modelo}</p>
              )}
            </div>

            {/* Marca */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marca *
              </label>
              <select
                value={formData.brand}
                onChange={(e) => handleInputChange('brand', parseInt(e.target.value))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                  errors.brand ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value={0}>Selecione uma marca</option>
                {brands.map(brand => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
              {errors.brand && (
                <p className="text-red-500 text-sm mt-1">{errors.brand}</p>
              )}
            </div>

            {/* Ano */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ano *
              </label>
              <input
                type="number"
                value={formData.ano}
                onChange={(e) => handleInputChange('ano', parseInt(e.target.value))}
                min="1900"
                max={new Date().getFullYear() + 1}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                  errors.ano ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.ano && (
                <p className="text-red-500 text-sm mt-1">{errors.ano}</p>
              )}
            </div>

            {/* Combustível */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Combustível
              </label>
              <select
                value={formData.combustivel}
                onChange={(e) => handleInputChange('combustivel', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {combustivelOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Número de Portas */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Portas
              </label>
              <select
                value={formData.num_portas}
                onChange={(e) => handleInputChange('num_portas', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {portasOptions.map(option => (
                  <option key={option} value={option}>
                    {option} {option === 1 ? 'porta' : 'portas'}
                  </option>
                ))}
              </select>
            </div>

            {/* Cor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cor *
              </label>
              <select
                value={formData.cor}
                onChange={(e) => handleInputChange('cor', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                  errors.cor ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Selecione uma cor</option>
                {corOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.cor && (
                <p className="text-red-500 text-sm mt-1">{errors.cor}</p>
              )}
            </div>

            {/* Valor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor (R$) *
              </label>
              <input
                type="number"
                value={formData.valor}
                onChange={(e) => handleInputChange('valor', parseFloat(e.target.value) || 0)}
                min="0"
                step="0.01"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                  errors.valor ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ex: 45000.50"
              />
              {errors.valor && (
                <p className="text-red-500 text-sm mt-1">{errors.valor}</p>
              )}
            </div>

          </div>

          {/* Botões */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Cadastrar Veículo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};