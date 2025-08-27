import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Header } from './components/Header';
import { VehicleListWithFilters } from './components/VehicleListWithFilters';
import { VehicleForm } from './components/VehicleForm';
import { useVehicleData } from './hooks/useVehicleData';
import { vehicles, brands } from './data/vehicles';

function App() {
  const { vehicles: vehicleList, addVehicle } = useVehicleData(vehicles);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddVehicle = (vehicleData: any) => {
    addVehicle(vehicleData);
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Catálogo de Veículos</h2>
            <p className="text-gray-600">Gerencie e visualize todos os veículos cadastrados</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Novo Veículo
          </button>
        </div>

        <VehicleListWithFilters 
          vehicles={vehicleList} 
          brands={brands}
          showGrouping={true}
          showFilters={true}
        />

        <VehicleForm
          brands={brands}
          onSubmit={handleAddVehicle}
          onCancel={() => setIsFormOpen(false)}
          isOpen={isFormOpen}
        />
      </main>
    </div>
  );
}

export default App;