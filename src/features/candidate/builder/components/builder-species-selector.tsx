"use client";

import { SpeciesDropdown } from "@/features/_pokemon/components/species-dropdown";

import {
  useCandidate,
  CandidateActionTypes,
} from "@/features/candidate/use-candidate";

function CandidateBuilderSpecies() {
  const { candidate, dispatch } = useCandidate();
  return (
    <SpeciesDropdown
      label="Pokemon"
      pokemon={candidate.species}
      onChange={(poke) =>
        dispatch({ type: CandidateActionTypes.Species, payload: poke })
      }
    />
  );
}

export { CandidateBuilderSpecies };
