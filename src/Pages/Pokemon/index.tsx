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

  console.log(
    "pokemon",
    pokemon!.evolutions
    // getColor(pokemon!.types[0].type.name)
  );

  return (
    <ScrollView
      style={{
        backgroundColor: pokemon?.color?.background,
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
          <PokeName
            style={{
              textShadowColor: "#18181866",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            {pokemon!.name}
          </PokeName>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PokeId
              style={{
                marginLeft: 25,
                padding: 8,
                textShadowColor: "#18181866",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 5,
              }}
            >
              #{paddy(pokemon?.id!, 4)}
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
          {pokemon?.types!.map(({ type }) => (
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
            source={{
              uri:
                pokemon!.sprites!.other["official-artwork"].front_default ||
                pokemon!.sprites!.front_default,
            }}
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
              pokemon!.stats!.map((stat) => [
                camelCase(stat.stat.name),
                stat.base_stat,
              ])
            )}
            color={pokemon!.color!.tag}
          />
        </PokeData>
        <PokeData
          style={{
            width: 400,
          }}
        >
          <PokemonDescription>Evolutions</PokemonDescription>
          <ScrollView
            style={{
              height: 200,
            }}
          >
            {pokemon?.evolutions?.map((evo, idx) => (
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: 20,
                }}
              >
                <PokeImage
                  key={idx}
                  source={{ uri: evo.img }}
                  style={{
                    height: 100,
                    width: 100,
                  }}
                />
                <PokeId style={{ color: "black" }}>{evo.name}</PokeId>
              </View>
            ))}
          </ScrollView>
        </PokeData>
      </ScrollView>
    </ScrollView>
  );
};
export default memo(PokemonScreen);
