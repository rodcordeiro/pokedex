import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { paddy } from '../../../../utils';
import { PokeImage, PokeId } from '../../style';

interface iPokeEvolutionProps {
  idx: number;
  name: string;
  id: number;
  img: string;
}

export const PokeEvolution = ({ id, idx, name, img }: iPokeEvolutionProps) => {
  return (
    <TouchableOpacity
      onLongPress={() => console.log('searching id:', id)}
      style={[styles.container]}
      key={idx}>
      <PokeImage source={{ uri: img }} style={styles.img} />
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
