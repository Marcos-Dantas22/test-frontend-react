import type { Vehicle, Brand } from '../types/Vehicle';

export const brands: Brand[] = [
  { id: 1, name: 'Toyota' },
  { id: 2, name: 'Honda' },
  { id: 3, name: 'Volkswagen' },
  { id: 4, name: 'Ford' },
  { id: 5, name: 'Chevrolet' }
];

export const vehicles: Vehicle[] = [
  {
    id: 55,
    timestamp_cadastro: 1696549488,
    modelo_id: 88,
    ano: 2014,
    combustivel: "FLEX",
    num_portas: 4,
    cor: "BRANCA",
    nome_modelo: "ETIOS",
    valor: 36000,
    brand: 1
  },
  {
    id: 56,
    timestamp_cadastro: 1696549500,
    modelo_id: 89,
    ano: 2018,
    combustivel: "FLEX",
    num_portas: 4,
    cor: "PRATA",
    nome_modelo: "COROLLA",
    valor: 65000,
    brand: 1
  },
  {
    id: 57,
    timestamp_cadastro: 1696549520,
    modelo_id: 90,
    ano: 2020,
    combustivel: "GASOLINA",
    num_portas: 4,
    cor: "PRETA",
    nome_modelo: "CIVIC",
    valor: 85000,
    brand: 2
  },
  {
    id: 58,
    timestamp_cadastro: 1696549540,
    modelo_id: 91,
    ano: 2016,
    combustivel: "FLEX",
    num_portas: 4,
    cor: "AZUL",
    nome_modelo: "FIT",
    valor: 48000,
    brand: 2
  },
  {
    id: 59,
    timestamp_cadastro: 1696549560,
    modelo_id: 92,
    ano: 2019,
    combustivel: "FLEX",
    num_portas: 4,
    cor: "BRANCA",
    nome_modelo: "GOL",
    valor: 42000,
    brand: 3
  },
  {
    id: 60,
    timestamp_cadastro: 1696549580,
    modelo_id: 93,
    ano: 2021,
    combustivel: "FLEX",
    num_portas: 4,
    cor: "VERMELHA",
    nome_modelo: "POLO",
    valor: 72000,
    brand: 3
  },
  {
    id: 61,
    timestamp_cadastro: 1696549600,
    modelo_id: 94,
    ano: 2017,
    combustivel: "FLEX",
    num_portas: 4,
    cor: "CINZA",
    nome_modelo: "KA",
    valor: 38000,
    brand: 4
  },
  {
    id: 62,
    timestamp_cadastro: 1696549620,
    modelo_id: 95,
    ano: 2022,
    combustivel: "FLEX",
    num_portas: 4,
    cor: "BRANCA",
    nome_modelo: "FOCUS",
    valor: 78000,
    brand: 4
  },
  {
    id: 63,
    timestamp_cadastro: 1696549640,
    modelo_id: 96,
    ano: 2015,
    combustivel: "FLEX",
    num_portas: 4,
    cor: "PRATA",
    nome_modelo: "ONIX",
    valor: 35000,
    brand: 5
  },
  {
    id: 64,
    timestamp_cadastro: 1696549660,
    modelo_id: 97,
    ano: 2020,
    combustivel: "FLEX",
    num_portas: 4,
    cor: "PRETA",
    nome_modelo: "CRUZE",
    valor: 68000,
    brand: 5
  }
];