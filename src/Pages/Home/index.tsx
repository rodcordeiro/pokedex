import React, { useRef, useCallback, useEffect } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import Toast from "react-native-root-toast";
import { AxiosResponse } from "axios";
import { useNavigation } from "@react-navigation/native";
import { Button, SearchInput } from "../../components";
import pokeball from "../../../assets/icon.png";
import { Container, Title, Line } from "./style";
import { usePoke } from "../../hooks/poke";
import { getPokemon } from "./api";
import { iPokemonResponse } from "../../utils";

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const refInput = useRef<any>();
  const { setPokemon } = usePoke();
  const [searchParam, setSearchParam] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [toastNotification, setToastNotification] = React.useState<any>();
  const POKEMON_INDEX = 1118;

  const handleSearch = useCallback(async () => {
    setLoading(true);
    try {
      await getPokemon(searchParam).then(
        (response: AxiosResponse<iPokemonResponse>) => {
          console.log(response.data);
          setPokemon(response.data);
          setLoading(false);
          // @ts-ignore
          navigate("PokemonScreen");
        }
      );

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setToastNotification(
        Toast.show("Ops, pokemon not found. Try again!", {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
        })
      );
    }
  }, [searchParam]);

  function getPokeId(): number {
    const pokeId = Math.floor(Math.random() * POKEMON_INDEX + 1);
    if (pokeId !== undefined && (pokeId <= 898 || pokeId >= 10001)) {
      return pokeId;
    } else {
      return getPokeId();
    }
  }

  return (
    <Container>
      <Title>What are you looking for?</Title>
      <Form ref={formRef} onSubmit={() => {}}>
        <SearchInput
          // @ts-ignore
          ref={refInput}
          name="Search"
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
        onPress={() => {
          setSearchParam(String(getPokeId()));
          handleSearch();
        }}
      />
    </Container>
  );
};

export default React.memo(HomeScreen);
