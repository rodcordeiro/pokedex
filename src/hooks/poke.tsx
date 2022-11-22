import React, { createContext, useContext, useState } from "react";
import { iPokeType, iPokemonResponse } from "../utils";

interface iPokeContext {
  pokemon: iPokemonResponse | null;
  setPokemon: React.Dispatch<React.SetStateAction<iPokemonResponse>>;
}

const PokeContext = createContext<iPokeContext>({} as iPokeContext);

export const PokeProvider: React.FC<any> = ({ children }) => {
  const [pokemon, setPokemon] = useState<iPokemonResponse>(
    {} as iPokemonResponse
  );
  return (
    <PokeContext.Provider
      value={{
        pokemon,
        setPokemon,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export function usePoke(): iPokeContext {
  const context = useContext<iPokeContext>(PokeContext);

  if (!context) {
    throw new Error("usePoke must be used within a PokeProvider");
  }

  return context;
}
