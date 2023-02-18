import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Stat, StatsContainer } from './style';

interface IStatus {
  stats:
    | {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
      }
    | { [key: string]: number };
  color: string;
}

const PokemonStatus = ({ stats, color }: IStatus) => {
  // console.log({ stats });
  return (
    <StatsContainer>
      <Stat>
        <Text
          style={[
            styles.statText,
            {
              marginRight: 31,
            },
          ]}>
          HP
        </Text>
        <ProgressBar
          progress={stats.hp / 400}
          color={color}
          // color="#85bb65"
          style={styles.progress}
          animatedValue={stats.hp / 400}
        />
      </Stat>
      <Stat>
        <Text style={[styles.statText]}>Attack</Text>
        <ProgressBar
          progress={stats.attack / 400}
          color={color}
          style={styles.progress}
        />
      </Stat>
      <Stat>
        {/* <Text style={[styles.statText]}>Defense: {stats.defense}</Text> */}
        <Text style={[styles.statText]}>Defense</Text>
        <ProgressBar
          progress={stats.defense / 400}
          color={color}
          style={styles.progress}
        />
      </Stat>
      <Stat>
        <Text style={[styles.statText]}>Speed</Text>
        <ProgressBar
          progress={stats.speed / 400}
          color={color}
          style={styles.progress}
        />
      </Stat>
      <Stat>
        <Text style={[styles.statText]}>Special Attack</Text>
        <ProgressBar
          progress={stats.specialAttack / 400}
          color={color}
          style={styles.progress}
        />
      </Stat>
      <Stat>
        <Text style={[styles.statText]}>Special Defense</Text>
        <ProgressBar
          progress={stats.specialDefense / 400}
          color={color}
          style={styles.progress}
        />
      </Stat>
    </StatsContainer>
  );
};

export default PokemonStatus;
const styles = StyleSheet.create({
  statText: {
    marginRight: 10,
  },
  progress: {
    borderRadius: 10,
    width: '80%',
    height: 8,
  },
});
