import React, { createContext, useContext, useState } from 'react';
import { iPokeType, Pokemon } from '../utils';

interface iPokeContext {
  pokemon: Pokemon | null;
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>;
}

const PokeContext = createContext<iPokeContext>({} as iPokeContext);

export const PokeProvider: React.FC<any> = ({ children }) => {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  return (
    <PokeContext.Provider
      value={{
        pokemon,
        setPokemon,
      }}>
      {children}
    </PokeContext.Provider>
  );
};

export function usePoke(): iPokeContext {
  const context = useContext<iPokeContext>(PokeContext);

  if (!context) {
    throw new Error('usePoke must be used within a PokeProvider');
  }

  return context;
}
