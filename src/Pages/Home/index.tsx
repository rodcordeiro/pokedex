import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Toast from 'react-native-root-toast';

import { useNavigation } from '@react-navigation/native';
import { Button, SearchInput } from '../../components';
import pokeball from '../../../assets/icon.png';
import heartShappedPokeball from '../../assets/heart_shapped.png';
import { Container, Title, Subtitle, Line } from './style';
import { usePoke } from '../../hooks/poke';

import { Pokemon } from '../../utils';
import { getPokemonData } from '../../utils/getPokemon';

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const refInput = useRef<any>();
  const { setPokemon } = usePoke();
  const [loading, setLoading] = React.useState<boolean>(false);
  const POKEMON_INDEX = 1118;

  const handleSearch = useCallback(
    async (param: { search?: string }) => {
      if (!param.search) {
        throw new Error('Please, provide a pokemon name or index!');
      }
      setLoading(true);
      try {
        const pokemon: Pokemon = await getPokemonData(
          param.search.toLowerCase(),
        );
        setPokemon(pokemon);
        setLoading(false);
        refInput.current.clear();
        // @ts-ignore
        navigate('PokemonScreen');
      } catch (err) {
        console.error(err);
        setLoading(false);
        refInput.current.clear();
        Toast.show('Ops, pokemon not found. Try again!', {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
        });
      }
    },
    [navigate, setPokemon],
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
    handleSearch({ search: String(getPokeId()) });
  };

  return (
    <Container>
      <Title style={{ marginTop: 100 }}>Pokedex</Title>
      <Subtitle>Search by pokemon name or pokedex id.</Subtitle>
      <Form ref={formRef} onSubmit={handleSearch}>
        <SearchInput
          ref={refInput}
          name="search"
          placeholder="What pokemon are you looking for?"
          autoCorrect={false}
          autoCapitalize="none"
          isLoading={loading}
          returnKeyType="next"
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />
      </Form>
      <Line />
      <Button
        title="Choose a random Pokemon"
        icon={pokeball}
        onPress={handleRandomSearch}
        // backgroundColor={'#5DBE62'}
        // textStyle={{ color: 'white', fontWeight: '400' }}
      />
      <Line />
      <Button
        title="List favorited"
        icon={heartShappedPokeball}
        iconStyle={{
          height: 150,
          width: 150,
          top: 0,
          right: -22,
        }}
        // backgroundColor={'#B863CF'}
        // textStyle={{ color: 'white', fontWeight: '400' }}
        onPress={() => {
          // @ts-ignore
          navigate('FavoritesScreen');
        }}
      />
    </Container>
  );
};

export default React.memo(HomeScreen);
