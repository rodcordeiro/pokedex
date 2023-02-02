import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, PokemonScreen, FavoritesScreen } from '../Pages';
import { BackArrow, Favorite } from '../components';
import { RootStackParamList } from './interfaces';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <BackArrow />,
          cardStyle: {
            backgroundColor: '#d4d4d4',
          },
        }}>
        <Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="PokemonScreen"
          component={PokemonScreen}
          options={{
            headerRight: () => <Favorite />,
          }}
        />
        <Screen name="FavoritesScreen" component={FavoritesScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
