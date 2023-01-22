import { getPokemon } from '../api/requests';
import { IPokemonEvolutionChain, Pokemon } from './interfaces';

export const evolutionDetails = async (
  evolutions: IPokemonEvolutionChain['chain'],
  pokemon: Pokemon,
) => {
  if (evolutions.species.name === pokemon.name) {
    return {
      data: {
        name: evolutions.species.name,
        img: pokemon.sprites!.front_default,
      },
      hasEvo: evolutions.evolves_to.length > 0,
    };
  } else {
    return await getPokemon(evolutions.species.name).then((response) => ({
      data: {
        name: response.data.name,
        img: response.data.sprites.front_default,
      },
      hasEvo: evolutions.evolves_to.length > 0,
    }));
  }
};
