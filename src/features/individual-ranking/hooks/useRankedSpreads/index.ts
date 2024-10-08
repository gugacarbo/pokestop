"use client"

import { createContext, useContext } from 'react';

import { LevelCap } from '@/@types/level-cap';
import { RankedSpread } from '@/lib/generateRankedSpreads';

export { Provider } from './Provider';

export const Context =
  createContext<
    | {
        [K in LevelCap]: RankedSpread[];
      }
    | null
  >(null);

export function useRankedSpreads() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error(
      'useRankedSpreads must be called within the context of a RankedSpreadsProvider',
    );
  }

  return value;
}
