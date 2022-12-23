import { api } from "../../../services/api";

export const getPokemon = async (searchParam: string) => {
  return await api.get(`/pokemon/${searchParam}`);
};

export const getPokemonDescription = async (url) => {
  return await api.get(url);
};
