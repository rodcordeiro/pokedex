import React, { memo } from 'react';
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { usePoke } from '../../hooks/poke';
import { capitalize, paddy } from '../../utils';

import { PokeId, PokeImage } from './style';
import { BackArrow } from '../../components';
import { PokemonService } from '../../services/pokemon';
import { FavPokemon } from '../../models/pokemon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getPokemonData } from '../../utils/getPokemon';

const FavoritesScreen: React.FC = () => {
  const { setOptions } = useNavigation();
  const { setPokemon } = usePoke();
  const service = React.useMemo(() => new PokemonService(), []);
  const [pokemons, setPokemons] = React.useState<FavPokemon[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<number>();
  const { navigate } = useNavigation();

  React.useLayoutEffect(() => {
    (async () => {
      const data: any = await service.findAll();
      if (data.length > 0) {
        setPokemons(data._array);
      }
    })();
  }, [service]);

  const handleScroll = ({
    nativeEvent: { contentOffset },
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (contentOffset.y <= 10) {
      setOptions({
        headerLeft: () => <BackArrow />,
        headerTransparent: true,
      });
    } else {
      setOptions({
        headerLeft: () => <></>,
      });
    }
  };

  const handleSelectPokemon = React.useCallback(
    async (index: number) => {
      setLoading(true);
      setSelected(index);
      const pokemon = await getPokemonData(String(index));
      setPokemon(pokemon);
      setLoading(false);
      setSelected(undefined);

      // @ts-ignore
      navigate('PokemonScreen');
    },
    [navigate, setPokemon],
  );
  return (
    <ScrollView onScroll={handleScroll} style={styles.container}>
      {pokemons.length > 0 &&
        pokemons.map((pokemon, idx) => (
          <TouchableOpacity
            onPress={() => handleSelectPokemon(pokemon.index)}
            style={styles.pokemon}
            key={idx}>
            {loading && selected === pokemon.index ? (
              <ActivityIndicator size={50} />
            ) : (
              <PokeImage
                source={{
                  uri:
                    pokemon.img_url ||
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
                }}
                style={styles.image}
              />
            )}
            <PokeId style={[{ color: 'black' }]}>
              #{paddy(pokemon.index, 4)}| {capitalize(pokemon.name)}
            </PokeId>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};
export default memo(FavoritesScreen);

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    height: '100%',
  },
  pokemon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
});
