"use client";

import React, { FC, MutableRefObject, useEffect, useRef } from "react";
import {
  useCandidate,
  CandidateActionTypes,
  Candidate,
} from "@/features/candidate/use-candidate";
import { SpeciesDropdown } from "@/features/pokemon/components/species-dropdown";

function useInputRef() {
  return useRef<HTMLInputElement | null>(null);
}

function useSyncInputToCandidate(
  input: MutableRefObject<HTMLInputElement | null>,
  candidate: Candidate
) {
  useEffect(() => {
    // sync candidate with input value if the candidate has been edited by
    // something else
    if (
      input.current !== null &&
      candidate.species.name !== input.current.value &&
      document.activeElement !== input.current
    ) {
      input.current.value = candidate.species.name;
    }
  }, [candidate.species.name, input]);
}

const CandidateBuilderSpecies: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const input = useInputRef();
  useSyncInputToCandidate(input, candidate);

  return (
    <SpeciesDropdown
      label="Pokemon"
      pokemon={candidate.species}
      onChange={(poke) => {
        dispatch({ type: CandidateActionTypes.Species, payload: poke });
        if (candidate.species.id !== poke.id) {
        }
      }}
    />
  );
};

export { CandidateBuilderSpecies };
