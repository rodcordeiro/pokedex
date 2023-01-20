import React, { useState, useMemo, useEffect, useCallback } from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import { usePoke } from "../../hooks/poke";
// import { Database, save, findById, remove } from "../../database";
import { BorderlessButton } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";

const Favorite = () => {

  const [favorited, setFavorited] = useState<boolean>(false);
  // const { pokemon } = usePoke();
  // useEffect(() => {
  //   // const data = findById(String(pokemon?.id));
  //   // console.log(data);
  // }, [pokemon]);

  const handleFavoriting = useCallback(() => {
    if (favorited) {
      console.log("remove");
      // remove(String(pokemon?.id));
    } else {
      console.log("save");
      // save(String(pokemon?.id), pokemon?.name!);
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
