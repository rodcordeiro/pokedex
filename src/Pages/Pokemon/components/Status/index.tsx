import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Stat, StatsContainer } from './style';
import { paddy } from '../../../../utils';

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
            // {
            //   marginRight: 31,
            // },
          ]}>
          HP: {paddy(stats.hp, 3)}
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
        <Text style={[styles.statText]}>ATK: {paddy(stats.attack, 3)}</Text>
        <ProgressBar
          progress={stats.attack / 400}
          color={color}
          style={styles.progress}
        />
      </Stat>
      <Stat>
        <Text style={[styles.statText]}>DEF: {paddy(stats.defense, 3)}</Text>
        <ProgressBar
          progress={stats.defense / 400}
          color={color}
          style={styles.progress}
        />
      </Stat>
      <Stat>
        <Text style={[styles.statText]}>SPD: {paddy(stats.speed, 3)}</Text>
        <ProgressBar
          progress={stats.speed / 400}
          color={color}
          style={styles.progress}
        />
      </Stat>
      <Stat>
        <Text style={[styles.statText]}>
          SATK: {paddy(stats.specialAttack, 3)}
        </Text>
        <ProgressBar
          progress={stats.specialAttack / 400}
          color={color}
          style={styles.progress}
        />
      </Stat>
      <Stat>
        <Text style={[styles.statText]}>
          SDEF: {paddy(stats.specialDefense, 3)}
        </Text>
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
    width: 100,
  },
  progress: {
    borderRadius: 10,
    width: '60%',
    height: 8,
  },
});
