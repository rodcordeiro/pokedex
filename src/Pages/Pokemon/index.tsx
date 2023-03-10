import React, { memo } from 'react';
import {
  ScrollView,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { usePoke } from '../../hooks/poke';
import { camelCase, capitalize, paddy } from '../../utils';

import {
  Header,
  PokeData,
  PokeHabitatContainer,
  PokeId,
  Text,
  PokeImage,
  PokemonDescription,
  PokeName,
  styles,
} from './style';
import { BackArrow, Tag } from '../../components';
import { ToolTip } from '../../components/Tooltip';
import PokemonStatus from './components/Status';
import { PokeEvolution } from './components/pokeEvolution';
import { ScrollIndicator } from './components/scrollerIndication';

const PokemonScreen: React.FC = () => {
  const { canGoBack, goBack } = useNavigation();
  const { pokemon } = usePoke();
  const { setOptions } = useNavigation();

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
        headerTransparent: true,
      });
    }
  };

  React.useEffect(() => {
    function handleBackButtonClick() {
      if (canGoBack()) {
        goBack();
      }
      return true;
    }
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, [canGoBack, goBack]);

  return (
    <ScrollView
      style={{
        backgroundColor: pokemon?.color?.background,
      }}
      onScroll={handleScroll} sc>
      <Header>
        <View style={styles.pokeNameContainer}>
          <PokeName style={styles.pokeNameStyle}>{pokemon!.name}</PokeName>
          <View style={styles.pokeIdContainer}>
            <PokeId style={styles.pokeIdStyle}>
              #{paddy(pokemon?.id!, 4)}
            </PokeId>
            {pokemon?.is_baby && <Tag type={'baby'} />}
            {pokemon?.is_legendary && <Tag type={'legendary'} />}
            {pokemon?.is_mythical && <Tag type={'mythical'} />}
          </View>
        </View>
        <View style={styles.typesContainer}>
          {pokemon?.types!.map(({ type }) => (
            <Tag type={type.name} key={type.name} />
          ))}
        </View>
        <ScrollView
          horizontal
          centerContent
          alwaysBounceHorizontal
          pagingEnabled>
          <PokeImage
            source={{
              uri:
                pokemon!.sprites!.other['official-artwork'].front_default ||
                pokemon!.sprites!.front_default,
            }}
            style={styles.imageSize}
          />
        </ScrollView>
      </Header>
      <ScrollView
        horizontal
        centerContent
        alwaysBounceHorizontal
        pagingEnabled
        persistentScrollbar
        style={styles.info_scrollview}>
        <PokeData>
          <PokemonDescription>{pokemon?.description}</PokemonDescription>
          {pokemon?.habitat && (
            <PokeHabitatContainer>
              <Feather
                name="map-pin"
                style={{
                  marginTop: 2,
                }}
              />
              <PokemonDescription>
                Habitat: {capitalize(pokemon?.habitat)}
              </PokemonDescription>
            </PokeHabitatContainer>
          )}
          <ScrollIndicator color={String(pokemon?.color?.tag)} page={1} />
        </PokeData>
        <PokeData>
          <ToolTip text="Status" color={String(pokemon?.color?.tag)}>
            <>
              <Text style={{ textAlign: 'center' }}>
                Bellow are the stats of this pokemon.
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  width: '80%',
                  fontSize: 12,
                  fontFamily: 'PTMono_400Regular',
                }}>
                P.S.: The percentage bar is calculated using 400 as base value,
                due to some pokemon with huge hp or attack
              </Text>
            </>
          </ToolTip>
          <PokemonStatus
            stats={Object.fromEntries(
              pokemon!.stats!.map((stat) => [
                camelCase(stat.stat.name),
                stat.base_stat,
              ]),
            )}
            color={pokemon!.color!.tag}
          />
          <ScrollIndicator color={String(pokemon?.color?.tag)} page={2} />
        </PokeData>
        <PokeData>
          <ToolTip text="Evolutions" color={String(pokemon?.color?.tag)}>
            <Text style={{ textAlign: 'center' }}>
              Press and hold an evolution to search for it.
            </Text>
          </ToolTip>
          <FlatList
            data={pokemon?.evolutions}
            renderItem={({ item, index }) => (
              <PokeEvolution
                key={index}
                id={item.id}
                idx={index}
                img={item.img}
                name={item.name}
              />
            )}
            maxToRenderPerBatch={3}
          />
          <ScrollIndicator
            color={String(pokemon?.color?.tag)}
            page={3}
            // disableAbsolutePosition
          />
        </PokeData>
      </ScrollView>
    </ScrollView>
  );
};
export default memo(PokemonScreen);
