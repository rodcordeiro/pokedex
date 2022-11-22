import React, { memo } from "react";
import { usePoke } from "../../hooks/poke";
import { TYPE_COLORS } from "../../utils";
import { Container, PokeImage } from "./style";

const PokemonScreen: React.FC = () => {
  const { pokemon } = usePoke();
  console.log("pokemon", pokemon!.types[0]);
  return (
    <Container>
      <PokeImage
        source={{ uri: pokemon!.sprites.front_default }}
        style={{
          height: 300,
          width: 300,
        }}
      />
    </Container>
  );
};
export default memo(PokemonScreen);
