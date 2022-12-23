import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, PokemonScreen } from "../Pages";
import { BackArrow, Favorite } from "../components";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen
          name="PokemonScreen"
          component={PokemonScreen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
            headerRight: () => <Favorite />,
            headerLeft: () => <BackArrow />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
