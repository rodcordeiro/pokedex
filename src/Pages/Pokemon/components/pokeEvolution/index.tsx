import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { usePoke } from '../../../../hooks/poke';
import { paddy } from '../../../../utils';
import { getPokemonData } from '../../../../utils/getPokemon';
import { PokeImage, PokeId } from '../../style';

interface iPokeEvolutionProps {
  idx: number;
  name: string;
  id: number;
  img: string;
}

export const PokeEvolution = ({ id, idx, name, img }: iPokeEvolutionProps) => {
  const { navigate } = useNavigation();
  const { setPokemon } = usePoke();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSelectPokemon = React.useCallback(async () => {
    setLoading(true);

    const pokemon = await getPokemonData(String(id));
    setPokemon(pokemon);
    setLoading(false);

    // @ts-ignore
    navigate('PokemonScreen');
  }, [id, navigate, setPokemon]);
  return (
    <TouchableOpacity
      onLongPress={handleSelectPokemon}
      style={[styles.container]}
      key={idx}>
      {loading ? (
        <ActivityIndicator size={50} />
      ) : (
        <PokeImage source={{ uri: img }} style={styles.img} />
      )}
      <PokeId style={styles.name}>
        #{paddy(id, 4)}| {name}
      </PokeId>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: "center",
    alignItems: 'center',
    paddingLeft: 20,
  },
  img: {
    height: 100,
    width: 100,
  },
  name: { color: 'black' },
});
