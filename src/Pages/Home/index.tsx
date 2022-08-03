import React, { useRef, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import Toast from "react-native-root-toast";

import { Button, SearchInput } from "../../components";
import pokeball from "../../../assets/icon.png";
import { Container, Title, Line } from "./style";

const HomeScreen: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const refInput = useRef<any>();
  const [searchParam, setSearchParam] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [toastNotification, setToastNotification] = React.useState<any>();
  const POKEMON_INDEX = 1118;
  const handleSearch = useCallback(async () => {
    setLoading(true);
    try {
      setToastNotification(
        Toast.show(`Searching: ${searchParam}`, {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
        })
      );
      console.log({ searchParam });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setToastNotification(
        Toast.show("Request failed to send.", {
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
  // useEffect(() => {
  //   if (toastNotification) {
  //     setTimeout(() => Toast.hide(toastNotification), 2500);
  //   }
  // }, [toastNotification]);

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
        onPress={() => console.log(getPokeId())}
      />
    </Container>
  );
};

export default React.memo(HomeScreen);
