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
import { getPokemon, getPokemonDescription } from "./api";
import { IPokemonResponse, IPokemonSpecie, Pokemon } from "../../utils";

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
            console.log(pokemonData.data);
            const pokemon: Pokemon = pokemonData.data;

            await getPokemonDescription(pokemonData.data.species.url).then(
              (specieData: AxiosResponse<IPokemonSpecie>) => {
                pokemon.description = specieData.data.flavor_text_entries
                  .filter((entry) => entry.language.name === "en")[0]
                  .flavor_text.replace(/\n/gi, " ");
                pokemon.is_baby = specieData.data.is_baby;
                pokemon.is_legendary = specieData.data.is_legendary;
                pokemon.is_mythical = specieData.data.is_mythical;
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
