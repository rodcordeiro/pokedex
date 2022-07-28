import React,{useEffect} from 'react';
import * as Updates from "expo-updates";

import Pokedex from './src';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      if(process.env.NODE_ENV === "development") return;
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    updateApp();
  }, []);
  return (
    <Pokedex/>
  );
}


