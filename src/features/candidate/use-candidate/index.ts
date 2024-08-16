"use client";
import { createContext, useContext } from "react";
import { Pokemon } from "@/@types/pokemon";
import { IV } from "@/@types/iv";
import { IVFloor } from "@/@types/iv-floor";
import { RankableMetric } from "@/@types/stat";
import { Dispatch } from "./candidateReducer";

export { Provider } from "./Provider";
export { CandidateActionTypes } from "./candidateReducer";
export { getInitialCandidate } from "./get-initial-candidate";

export type Candidate = {
  species: Pokemon;
  ivs: { atk: IV; def: IV; sta: IV };
  floor: IVFloor;
  rankingMetric: RankableMetric;
  minimumLevel: number;
};

export const Context = createContext<{
  candidate: Candidate;
  dispatch: Dispatch;
} | null>(null);

export function useCandidate() {
  const value = useContext(Context);

  if (value === null) {
    throw new Error(
      "useCandidate must be called within the context of a CandidateProvider"
    );
  }

  return value;
}
