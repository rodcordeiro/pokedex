import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import { usePoke } from "../../hooks/poke";
import { getColor } from "../../utils";
import { Container, Header, PokeId, PokeImage, PokeName } from "./style";
import { Tag } from "../../components";
const PokemonScreen: React.FC = () => {
  const { pokemon } = usePoke();
  console.log(
    "pokemon",
    pokemon!.types[0].type.name,
    getColor(pokemon!.types[0].type.name)
  );
  function paddy(num: number, padlen: number, padchar?: string) {
    var pad_char = typeof padchar !== "undefined" ? padchar : "0";
    var pad = new Array(1 + padlen).join(pad_char);
    return (pad + num).slice(-pad.length);
  }
  return (
    <Container
      style={{
        backgroundColor: getColor(pokemon!.types[0].type.name).background,
      }}
    >
      <Header>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "baseline",
            alignSelf: "flex-start",
          }}
        >
          <PokeName>{pokemon!.name}</PokeName>
          <PokeId>#{paddy(pokemon!.id, 4)}</PokeId>
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
        <ScrollView horizontal centerContent alwaysBounceHorizontal>
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
    </Container>
  );
};
export default memo(PokemonScreen);
