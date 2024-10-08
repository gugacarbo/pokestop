'use client';

import React, {FC} from 'react';

import {
	CandidateActionTypes,
	useCandidate,
} from '@/features/candidate/use-candidate';
import {usePokedex} from '@/features/pokedex/use-pokedex';

import {SpeciesTypeIcons} from '@/features/pokemon/components/species-type-icons';

import {Label} from '@/components/ui/label';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import {useTranslations} from 'next-intl';

const CandidateBuilderFamilySwap: FC = () => {
	const {candidate, dispatch} = useCandidate();
	const pokedex = usePokedex();

	const t = useTranslations('rankings');

	const iterableFamily = pokedex.pokemon
		.familyMembers(candidate.species.family?.id)
		.sort((a, b) => a.family.stage - b.family.stage);

	if (iterableFamily.length === 0) return null;

	return (
		<div className="flex flex-wrap justify-start items-center gap-2 mt-2 sm:mt-1 w-full">
			<Label className="sr-only">{t('candidate.family.other-members')}</Label>
			{iterableFamily.map(familyMember => (
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
						'gap-1',
						candidate.species.id === familyMember.id &&
							'text-accent-foreground border-primary',
					)}
				>
					<SpeciesTypeIcons types={familyMember.types} />
					<span>{familyMember.name}</span>
				</Button>
			))}
		</div>
	);
};

export {CandidateBuilderFamilySwap};
