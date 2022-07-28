import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, DarkTheme } from "./styles";
import { HomeScreen } from "./Pages";
const { Navigator, Screen } = createStackNavigator();

export default function Pokedex() {
  const currentTheme = useColorScheme();

  return (
    <ThemeProvider
      theme={String(currentTheme) === "light" ? DefaultTheme : DarkTheme}
    >
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="HomeScreen" component={HomeScreen} />
        </Navigator>
        <StatusBar hidden />
      </NavigationContainer>
    </ThemeProvider>
  );
}
