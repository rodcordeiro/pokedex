import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import { PokeProvider } from "./hooks/poke";
import * as SplashScreen from "expo-splash-screen";

import { RootSiblingParent } from "react-native-root-siblings";

import { DefaultTheme, DarkTheme } from "./styles";
import Routes from "./routes";

SplashScreen.preventAutoHideAsync();

export default function Pokedex() {
  const currentTheme = useColorScheme();
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);
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
