import React, { memo } from "react";
import { ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { usePoke } from "../../hooks/poke";
import { camelCase, getColor, paddy } from "../../utils";

import {
  Header,
  PokeData,
  PokeId,
  PokeImage,
  PokemonDescription,
  PokeName,
} from "./style";
import { Tag } from "../../components";
import PokemonStatus from "./components/Status";

const PokemonScreen: React.FC = () => {
  const { pokemon } = usePoke();
  const { setOptions } = useNavigation();

  // console.log(
  //   "pokemon",
  //   pokemon!.description,
  //   getColor(pokemon!.types[0].type.name)
  // );

  return (
    <ScrollView
      style={{
        backgroundColor: getColor(pokemon!.types[0].type.name).background,
      }}
      onScroll={({
        nativeEvent: { layoutMeasurement, contentOffset, contentSize },
      }) => {
        if (contentOffset.y <= 10) {
          setOptions({
            headerShown: true,
          });
        } else {
          setOptions({
            headerShown: false,
          });
        }
      }}
    >
      <Header>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "baseline",
            alignSelf: "flex-start",
          }}
        >
          <PokeName>{pokemon!.name}</PokeName>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PokeId style={{ marginLeft: 25, padding: 8 }}>
              #{paddy(pokemon!.id, 4)}
            </PokeId>
            {pokemon?.is_baby && <Tag type={"baby"} />}
            {pokemon?.is_legendary && <Tag type={"legendary"} />}
            {pokemon?.is_mythical && <Tag type={"mythical"} />}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-start",
            marginLeft: 25,
          }}
        >
          {pokemon?.types.map(({ type }) => (
            <Tag type={type.name} key={type.name} />
          ))}
        </View>
        <ScrollView
          horizontal
          centerContent
          alwaysBounceHorizontal
          pagingEnabled
        >
          <PokeImage
            source={{ uri: pokemon!.sprites.front_default }}
            style={{
              height: 300,
              width: 300,
            }}
          />
          {/* <PokeImage
            source={{ uri: pokemon!.sprites.back_default }}
            style={{
              height: 300,
              width: 300,
            }}
          />
          <PokeImage
            source={{ uri: pokemon!.sprites.front_shiny }}
            style={{
              height: 300,
              width: 300,
            }}
          />
          <PokeImage
            source={{ uri: pokemon!.sprites.back_shiny }}
            style={{
              height: 300,
              width: 300,
            }}
          /> */}
        </ScrollView>
      </Header>
      <ScrollView
        horizontal
        centerContent
        alwaysBounceHorizontal
        pagingEnabled
        persistentScrollbar
      >
        <PokeData>
          <PokemonDescription>{pokemon?.description}</PokemonDescription>
          <PokemonStatus
            stats={Object.fromEntries(
              pokemon!.stats.map((stat) => [
                camelCase(stat.stat.name),
                stat.base_stat,
              ])
            )}
          />
        </PokeData>
        <PokeData>
          <PokemonDescription>{pokemon?.description}</PokemonDescription>
          <PokemonStatus
            stats={Object.fromEntries(
              pokemon!.stats.map((stat) => [
                camelCase(stat.stat.name),
                stat.base_stat,
              ])
            )}
          />
        </PokeData>
      </ScrollView>
    </ScrollView>
  );
};
export default memo(PokemonScreen);
