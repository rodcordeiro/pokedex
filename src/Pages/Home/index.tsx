import React, { useRef, useCallback } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import Toast from "react-native-root-toast";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigation } from "@react-navigation/native";
import { Button, SearchInput } from "../../components";
import pokeball from "../../../assets/icon.png";
import { Container, Title, Line } from "./style";
import { usePoke } from "../../hooks/poke";
import { getPokemon, getPokemonSpecie, getPokemonEvolutionChain } from "./api";
import {
  IPokemonResponse,
  IPokemonSpecie,
  IPokemonEvolutionChain,
  Pokemon,
  getColor,
} from "../../utils";

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const refInput = useRef<any>();
  const { setPokemon } = usePoke();
  const [searchParam, setSearchParam] = React.useState<string>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const POKEMON_INDEX = 1118;

  const handleSearch = useCallback(
    async (param?: any) => {
      setLoading(true);
      console.log(param, searchParam?.toLowerCase());
      try {
        await getPokemon(!searchParam ? param : searchParam.toLowerCase())
          .then(async (pokemonData: AxiosResponse<IPokemonResponse>) => {
            // console.log(pokemonData.data);
            const pokemon: Pokemon = pokemonData.data;

            await getPokemonSpecie(pokemonData.data.species.url).then(
              async (specieData: AxiosResponse<IPokemonSpecie>) => {
                if (specieData.data.evolution_chain) {
                  await getPokemonEvolutionChain(
                    specieData.data.evolution_chain.url
                  ).then(
                    async (evData: AxiosResponse<IPokemonEvolutionChain>) => {
                      const evos = [];
                      if (
                        evData.data.chain.species.name === pokemonData.data.name
                      ) {
                        evos.push({
                          name: evData.data.chain.species.name,
                          img: pokemonData.data.sprites.front_default,
                          id: evData.data.id,
                        });
                      } else {
                        evos.push(
                          await getPokemon(evData.data.chain.species.name).then(
                            (response: AxiosResponse<IPokemonResponse>) => ({
                              name: response.data.name,
                              img: response.data.sprites.front_default,
                              id: response.data.id,
                            })
                          )
                        );
                      }
                      console.log(
                        evData.data.chain.species.name,
                        evData.data.chain.is_baby
                      );
                      if (evData.data.chain.evolves_to.length) {
                        let evo = evData.data.chain.evolves_to[0];
                        console.log(evo.species.name, evo.is_baby);
                        if (evo.species.name === pokemonData.data.name) {
                          evos.push({
                            name: evo.species.name,
                            img: pokemonData.data.sprites.front_default,
                            id: pokemonData.data.id,
                          });
                        } else {
                          evos.push(
                            await getPokemon(evo.species.name).then(
                              (response: AxiosResponse<IPokemonResponse>) => ({
                                name: response.data.name,
                                img: response.data.sprites.front_default,
                                id: response.data.id,
                              })
                            )
                          );
                        }
                        if (evo.evolves_to.length) {
                          evo = evo.evolves_to[0];

                          if (evo.species.name === pokemonData.data.name) {
                            evos.push({
                              name: evo.species.name,
                              img: pokemonData.data.sprites.front_default,
                              id: pokemonData.data.id,
                            });
                          } else {
                            evos.push(
                              await getPokemon(evo.species.name).then(
                                (
                                  response: AxiosResponse<IPokemonResponse>
                                ) => ({
                                  name: response.data.name,
                                  img: response.data.sprites.front_default,
                                  id: response.data.id,
                                })
                              )
                            );
                          }
                        }
                      }
                      pokemon.evolutions = evos;
                    }
                  );
                }

                pokemon.description = specieData.data.flavor_text_entries
                  .filter((entry) => entry.language.name === "en")[0]
                  .flavor_text.replace(/\n/gi, " ");
                pokemon.is_baby = specieData.data.is_baby;
                pokemon.is_legendary = specieData.data.is_legendary;
                pokemon.is_mythical = specieData.data.is_mythical;
                pokemon.color = getColor(pokemonData.data.types[0].type.name);
              }
            );
            setPokemon(pokemon);
            setLoading(false);
            setSearchParam(undefined);
            // @ts-ignore
            navigate("PokemonScreen");
          })
          .catch((err: AxiosError) => {
            setLoading(false);
            throw Error(err.message, { cause: err.stack });
            return;
          });
      } catch (err) {
        console.error(err);
        setLoading(false);
        setSearchParam(undefined);
        Toast.show("Ops, pokemon not found. Try again!", {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
        });
      }
    },
    [searchParam]
  );

  function getPokeId(): number {
    const pokeId = Math.floor(Math.random() * POKEMON_INDEX + 1);
    if (pokeId > 0 && (pokeId <= 898 || pokeId >= 10001)) {
      return pokeId;
    } else {
      return getPokeId();
    }
  }

  const handleRandomSearch = () => {
    handleSearch(String(getPokeId()));
  };

  return (
    <Container>
      <Title>What are you looking for?</Title>
      <Form ref={formRef} onSubmit={function () {}}>
        <SearchInput
          // @ts-ignore
          ref={refInput}
          name="search"
          placeholder="Search a pokemon name or ID..."
          autoCorrect={false}
          onChangeText={setSearchParam}
          autoCapitalize="none"
          isLoading={loading}
          returnKeyType="next"
          onSubmitEditing={handleSearch}
        />
      </Form>
      <Line />
      <Button
        title="Choose a random Pokemon"
        icon={pokeball}
        onPress={handleRandomSearch}
      />
    </Container>
  );
};

export default React.memo(HomeScreen);
