import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';

interface iIndicatorProps {
  color: string;
  page: number;
  disableAbsolutePosition?: boolean;
}

export const ScrollIndicator = ({
  color,
  page,
  disableAbsolutePosition,
}: iIndicatorProps) => {
  return (
    <View
      style={
        disableAbsolutePosition
          ? styles.container
          : [styles.container, styles.flexContainer]
      }>
      <Octicons
        name={page === 1 ? 'dot-fill' : 'dot'}
        size={20}
        color={color}
        style={styles.icon}
      />
      <Octicons
        name={page === 2 ? 'dot-fill' : 'dot'}
        size={20}
        color={color}
        style={styles.icon}
      />
      <Octicons
        name={page === 3 ? 'dot-fill' : 'dot'}
        size={20}
        color={color}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },
  flexContainer: {
    position: 'absolute',
    bottom: Dimensions.get('screen').height * 0.08,
    left: Dimensions.get('screen').width * 0.4,
  },
  icon: {
    paddingHorizontal: 2,
  },
});
