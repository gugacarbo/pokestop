import React, { FC } from 'react';

import { Pokemon } from '@/data/pokedex';

import { CandidateActionTypes, useCandidate } from '@/hooks/useCandidate';
import { usePokedex } from '@/hooks/use-pokedex';

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import SpeciesTypeIcons from './SpeciesTypeIcons';

const CandidateBuilderFamilySwap: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const pokedex = usePokedex();

  const iterableFamily = pokedex
    .familyMembers(candidate.species.family?.id)
    .sort((a, b) => a.family.stage - b.family.stage);

  if (iterableFamily.length === 0) return null;

  return (
    <RadioGroup
      value={candidate.species.name}
      className='flex flex-wrap justify-start items-center mt-2 sm:mt-1 w-full'
    >
      <Label className='sr-only'>
        Other family members
      </Label>

      {iterableFamily.map((familyMember) => (
        <RadioGroupItem
          key={familyMember.id}
          value={familyMember}
          className='mr-2 last:mr-0 mb-2 rounded focus-visible-ring ring-offset-gray-50 dark:ring-offset-gray-900 cursor-pointer'
        >
           <div
              className={`flex justify-start items-center transition-colors border py-1 pr-2 pl-[5px] hover:text-blue-500 dark:hover:text-blue-300 rounded bg-white dark:bg-gray-800 ${
                checked
                  ? 'text-blue-500 dark:text-blue-300 border-gray-200 dark:border-gray-700'
                  : 'text-gray-500 dark:text-gray-400 border-gray-100 dark:border-transparent'
              }`}
            >
              <SpeciesTypeIcons types={familyMember.types} />

              <Label
                className='ml-1.5 font-semibold text-sm'
                as='span'
              >
                {familyMember.name}
              </Label>
            </div>
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
};

export default CandidateBuilderFamilySwap;
