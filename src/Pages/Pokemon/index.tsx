import React, { memo } from "react";
import { ScrollView } from "react-native";
import { usePoke } from "../../hooks/poke";
import { getColor } from "../../utils";
import { Container, Header, PokeImage, PokeName } from "./style";

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
    <Container>
      <Header background={getColor(pokemon!.types[0].type.name).background}>
        <PokeName>{pokemon!.name}</PokeName>
        <PokeName>#{paddy(pokemon!.id, 4)}</PokeName>
        <PokeImage
          source={{ uri: pokemon!.sprites.front_default }}
          style={{
            height: 300,
            width: 300,
          }}
        />
      </Header>
    </Container>
  );
};
export default memo(PokemonScreen);
