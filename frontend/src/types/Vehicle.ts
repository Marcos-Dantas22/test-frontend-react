export interface Vehicle {
  id: number;
  timestamp_cadastro: number;
  modelo_id: number;
  ano: number;
  combustivel: string;
  num_portas: number;
  cor: string;
  nome_modelo: string;
  valor: number;
  brand: number;
}

export interface Brand {
  id: number;
  name: string;
}