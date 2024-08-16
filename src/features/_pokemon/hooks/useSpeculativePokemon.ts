"use client";

import { PokemonID } from "@/@types/pokemon";
import { createContext, useContext } from "react";

const SpeculativePokemonContext = createContext<PokemonID[]>([]);

export const SpeculativePokemonProvider = SpeculativePokemonContext.Provider;

export function useSpeculativePokemon() {
  const value = useContext(SpeculativePokemonContext);

  return value;
}
