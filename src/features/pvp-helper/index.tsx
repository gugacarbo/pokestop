'use client';

import {useMemo, useState} from 'react';
import {LeagueCPCap} from '@/@types/league';
import {LevelCap} from '@/@types/level-cap';
import {Pokemon} from '@/@types/pokemon';
import {SpeciesDropdown} from '@/features/pokemon/components/species-dropdown';
import {usePokedex} from '@/features/pokedex/use-pokedex';

import {CpSelector} from './components/cp-selector';
import {HpSelector} from './components/hp-selector';
import {CpLeagueSelector} from '../candidate/builder/components/league-selector';
import {ResultTable} from './result_table/table';
import {useGenerateRankedSpreads} from '@/lib/useGenerateRankedSpreads';
import {CompareModes} from '@/@types/compare-modes';
import {SingleLevelCapSelector} from './components/single-level-cap-selector';
import {Candidate} from '../candidate/use-candidate';
import {KnownMoves} from './known-moves';
import {EffectivenessDisplay} from './components/effectiveness-display';

const defaultPokemon = {
	name: 'Medicham',
	hp: 142,
	cp: 1500,
	leagueCp: 1500,
	levelCap: 51,
} as const;

export function PvpHelper({candidate}: {candidate?: Candidate | null}) {
	const {
		pokemon: {byName},
	} = usePokedex();

	const [pokemon, setPokemon] = useState<Pokemon>(
		byName(candidate?.species?.name || defaultPokemon.name)!,
	);

	const [league, setLeague] = useState<LeagueCPCap>(defaultPokemon.leagueCp);
	const [levelCap, setLevelCap] = useState<LevelCap>(defaultPokemon.levelCap);

	const [anyHp, setAnyHp] = useState<boolean>(true);
	const [hp, setHp] = useState<number>(defaultPokemon.hp);
	const [anyCp, setAnyCp] = useState<boolean>(true);
	const [cp, setCp] = useState<number>(defaultPokemon.cp);

	const [hpFilterMode, setHpFilterMode] = useState<CompareModes>('eq');

	const [cpFilterMode, setCpFilterMode] = useState<CompareModes>('eq');

	const matchingSpreads = useGenerateRankedSpreads(
		pokemon,
		pokemon.floor ?? 0,
		league,
		levelCap,
		0,
		'product',
	);

	const filtered = useMemo(() => {
		return matchingSpreads.filter(spread => {
			const hpMatch =
				anyHp ||
				(hpFilterMode === 'eq' && spread.stats.sta.value === hp) ||
				(hpFilterMode === 'gt' && spread.stats.sta.value >= hp) ||
				(hpFilterMode === 'lt' && spread.stats.sta.value <= hp);

			const cpMatch =
				anyCp ||
				(cpFilterMode === 'eq' && spread.cp === cp) ||
				(cpFilterMode === 'gt' && spread.cp >= cp) ||
				(cpFilterMode === 'lt' && spread.cp <= cp);

			return hpMatch && cpMatch;
		});
	}, [matchingSpreads, hp, anyHp, cp, anyCp, hpFilterMode, cpFilterMode]);

	return (
		<div className="items-start gap-4 space-y-0 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 px-4 sm:px-0 w-full">
			<SpeciesDropdown
				pokemon={pokemon}
				onChange={setPokemon}
				label="Pokémon"
			/>
			<CpSelector
				cp={cp}
				setCp={setCp}
				league={league}
				anyCp={anyCp}
				setAnyCp={setAnyCp}
				mode={cpFilterMode}
				onModeChange={setCpFilterMode}
			/>
			<HpSelector
				hp={hp}
				setHp={setHp}
				anyHp={anyHp}
				setAnyHp={setAnyHp}
				mode={hpFilterMode}
				onModeChange={setHpFilterMode}
			/>
			<CpLeagueSelector league={league} setLeague={setLeague} />
			<SingleLevelCapSelector levelCap={levelCap} setLevelCap={setLevelCap} />
			<div className="flex flex-col gap-4 col-span-1 md:col-span-2">
				<EffectivenessDisplay pokemon={pokemon} />
				<ResultTable matchingSpreads={filtered} />
			</div>
			<div className="flex flex-col gap-4 col-span-1 md:col-span-3">
				<KnownMoves pokemon={pokemon} />
			</div>
		</div>
	);
}
