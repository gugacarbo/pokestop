'use client';

import {useCallback, useMemo} from 'react';
import {useSettings} from '@/features/settings/use-settings';
import type {PokemonName, PokemonID, Pokemon} from '@/@types/pokemon';
import {
	getPokemonByName,
	getPokemonByID,
	getPokemonFamilyMembers,
	searchPokemonByName,
	getMoves,
} from '@/features/pokemon';
import {MOVES} from '@/data/moves';
import {POKEMONS} from '@/data/pokemons';

const speculativePokemon: PokemonID[] = [];

export function usePokedex() {
	const {settings} = useSettings();

	const list = useMemo(
		() =>
			POKEMONS.filter(pokemon => {
				if (settings?.showSpeculative === true) {
					return true;
				}
				return speculativePokemon.includes(pokemon.id) === false;
			}),
		[settings?.showSpeculative],
	);

	const byName = useCallback(
		(name: PokemonName) => getMoves(getPokemonByName(name, list)),
		[list],
	);
	const byId = useCallback(
		(id: PokemonID) => getMoves(getPokemonByID(id, list)),
		[list],
	);

	const familyMembers = useCallback(
		(familyId: PokemonID) => getPokemonFamilyMembers(familyId, list),
		[list],
	);

	const searchByName = useCallback(
		(query: string) => getMoves(searchPokemonByName(query, list)),
		[list],
	);

	const getMoveById = useCallback(
		(id: string) => MOVES.find(move => move.id === id),
		[MOVES],
	);

	const getMoveByName = useCallback(
		(name: string) => MOVES.find(move => move.name === name),
		[MOVES],
	);

	return {
		pokemon: {
			list,
			byName,
			byId,
			familyMembers,
			searchByName,
		},
		move: {
			list: MOVES,
			getMoveById,
			getMoveByName,
			getMoves,
		},
	};
}
