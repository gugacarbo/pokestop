import React, { FC } from "react";

import { CandidateActionTypes, useCandidate } from "@/hooks/useCandidate";
import { usePokedex } from "@/hooks/use-pokedex";

import SpeciesTypeIcons from "@/features/pokemon/components/SpeciesTypeIcons";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CandidateBuilderFamilySwap: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const pokedex = usePokedex();

  const iterableFamily = pokedex
    .familyMembers(candidate.species.family?.id)
    .sort((a, b) => a.family.stage - b.family.stage);

  if (iterableFamily.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-start items-center gap-2 mt-2 sm:mt-1 w-full">
      <Label className="sr-only">Other family members</Label>
      {iterableFamily.map((familyMember) => (
        <Button
          variant="outline"
          key={familyMember.id}
          onClick={() =>
            dispatch({
              type: CandidateActionTypes.Species,
              payload: familyMember,
            })
          }
          className={cn(
            "gap-1",
            candidate.species.id === familyMember.id &&
              "text-blue-500 dark:text-blue-300 border-blue-500 dark:border-blue-400"
          )}
        >
          <SpeciesTypeIcons types={familyMember.types} />
          <span>{familyMember.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default CandidateBuilderFamilySwap;
