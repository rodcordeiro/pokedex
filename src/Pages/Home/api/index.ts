import { api } from "../../../services/api";

export const getPokemon = async (searchParam: string) => {
  return await api.get(`/pokemon/${searchParam}`);
};

export const getPokemonSpecie = async (url: string) => {
  return await api.get(url);
};

export const getPokemonEvolutionChain = async (url: string) => {
  return await api.get(url);
};
