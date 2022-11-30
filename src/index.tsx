import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import { PokeProvider } from "./hooks/poke";
import * as SplashScreen from "expo-splash-screen";

import { RootSiblingParent } from "react-native-root-siblings";

import { DefaultTheme, DarkTheme } from "./styles";
import Routes from "./routes";
import { useFonts } from "expo-font";
import {
  Quicksand_400Regular,
  Quicksand_300Light,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { PTMono_400Regular } from "@expo-google-fonts/pt-mono";

SplashScreen.preventAutoHideAsync();

export default function Pokedex() {
  const currentTheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    PTMono_400Regular,
    Quicksand_400Regular,
    Quicksand_300Light,
    Quicksand_700Bold,
  });
  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          console.log("oi");
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);
  return (
    <ThemeProvider
      theme={String(currentTheme) === "light" ? DefaultTheme : DarkTheme}
    >
      <PokeProvider>
        <RootSiblingParent>
          <Routes />
          <StatusBar style="auto" />
        </RootSiblingParent>
      </PokeProvider>
    </ThemeProvider>
  );
}
