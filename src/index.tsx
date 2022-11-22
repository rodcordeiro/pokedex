import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import { PokeProvider } from "./hooks/poke";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootSiblingParent } from "react-native-root-siblings";

import { DefaultTheme, DarkTheme } from "./styles";
import { HomeScreen, PokemonScreen } from "./Pages";
const { Navigator, Screen } = createStackNavigator();

export default function Pokedex() {
  const currentTheme = useColorScheme();

  return (
    <ThemeProvider
      theme={String(currentTheme) === "light" ? DefaultTheme : DarkTheme}
    >
      <PokeProvider>
        <RootSiblingParent>
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
              />
            </Navigator>
            <StatusBar hidden />
          </NavigationContainer>
        </RootSiblingParent>
      </PokeProvider>
    </ThemeProvider>
  );
}
