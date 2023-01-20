import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import { usePoke } from "../../hooks/poke";
import { PokemonService } from "../../services/pokemon";
import { BorderlessButton } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { FavPokemon } from "../../models/pokemon";

const Favorite = () => {
  const [favorited, setFavorited] = useState<boolean>(false);
  const [rendered, setRendered] = useState<boolean>(false);
  const service = useMemo(() => new PokemonService(), []);
  const { pokemon } = usePoke();
  useLayoutEffect(() => {
    (async () => {
      const data: any = await service.findById(Number(pokemon?.id));
      console.log("data", data["_array"]);
      if (data["length"] > 0) {
        setFavorited(true);
      }
    })();
  }, [pokemon]);

  const handleFavoriting = useCallback(() => {
    if (favorited) {
      console.log("remove");
      service.deleteById(Number(pokemon?.id));
    } else {
      console.log("save");
      const Poke = new FavPokemon(pokemon?.id, String(pokemon?.name));
      service.addData(Poke);
    }
    setFavorited(!favorited);
  }, [favorited]);
  return (
    <BorderlessButton onPress={handleFavoriting} style={styles.favoriteButton}>
      <Icon
        name={favorited ? "heart" : "heart-o"}
        size={24}
        color={favorited ? "#e30000" : "#f4f4f4"}
      />
    </BorderlessButton>
  );
};
export default React.memo(Favorite);

const styles = StyleSheet.create({
  favoriteButton: {
    paddingRight: 20,
  },
});
