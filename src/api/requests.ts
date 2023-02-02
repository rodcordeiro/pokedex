import { AxiosResponse } from 'axios';
import { api } from './api';
import {
  IPokemonEvolutionChain,
  IPokemonResponse,
  IPokemonSpecie,
} from '../utils/interfaces';

export const getPokemon = async (searchParam: string) => {
  return await api.get<string, AxiosResponse<IPokemonResponse>>(
    `/pokemon/${searchParam}`,
  );
};

export const getPokemonSpecie = async (url: string) => {
  return await api.get<string, AxiosResponse<IPokemonSpecie>>(url);
};

export const getPokemonEvolutionChain = async (url: string) => {
  return await api.get<string, AxiosResponse<IPokemonEvolutionChain>>(url);
};
