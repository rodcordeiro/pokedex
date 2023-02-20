import {
  getPokemon,
  getPokemonEvolutionChain,
  getPokemonSpecie,
  getPokemonColor,
} from '../api/requests';
import { getColor } from './colors';
import { evolutionDetails } from './evoDetails';
import { Pokemon } from './interfaces';

export const getPokemonData = async (search: string) => {
  const pokemon: Pokemon = await getPokemon(search)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
  const species = await getPokemonSpecie(pokemon.species!.url)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

  if (species.evolution_chain) {
    const evolutions = await getPokemonEvolutionChain(
      species.evolution_chain.url,
    )
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
    const evos = [];
    let evoDetail = await evolutionDetails(evolutions.chain, pokemon);
    evos.push(evoDetail.data);
    if (evoDetail.hasEvo) {
      evoDetail = await evolutionDetails(
        evolutions.chain.evolves_to[0],
        pokemon,
      );
      evos.push(evoDetail.data);
      if (evoDetail.hasEvo) {
        evoDetail = await evolutionDetails(
          evolutions.chain.evolves_to[0].evolves_to[0],
          pokemon,
        );
        evos.push(evoDetail.data);
      }
    }
    pokemon.evolutions = evos;
  }
  pokemon.description = species.flavor_text_entries
    .filter((entry) => entry.language.name === 'en')[0]
    .flavor_text.replace(/\n/gi, ' ');
  pokemon.is_baby = species.is_baby;
  pokemon.is_legendary = species.is_legendary;
  pokemon.is_mythical = species.is_mythical;
  // console.log(species.habitat);
  pokemon.habitat = species.habitat ? species.habitat.name : undefined;
  pokemon.color = getColor(pokemon.types![0].type.name);
  return pokemon;
};
