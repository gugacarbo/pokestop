'use client';

import {useCallback, useMemo} from 'react';
import {useSettings} from '@/features/settings/use-settings';
import {POKEMONS} from '@/consts/pokemons';
import type {PokemonName, PokemonID} from '@/@types/pokemon';
import {
	getPokemonByName,
	getPokemonByID,
	getPokemonFamilyMembers,
	searchPokemonByName,
} from '@/features/pokemon';
import {MOVES} from '@/consts/moves';

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
		(name: PokemonName) => getPokemonByName(name, list),
		[list],
	);
	const byId = useCallback((id: PokemonID) => getPokemonByID(id, list), [list]);
	const familyMembers = useCallback(
		(familyId: PokemonID) => getPokemonFamilyMembers(familyId, list),
		[list],
	);
	const searchByName = useCallback(
		(query: string) => searchPokemonByName(query, list),
		[list],
	);

	const getMove = useCallback(
		(id: string) => MOVES.find(move => move.id === id),
		[],
	);

	const getMoveByName = useCallback(
		(name: string) => MOVES.find(move => move.name === name),
		[],
	);

	return {
		list,
		byName,
		byId,
		familyMembers,
		searchByName,
		moves: MOVES,
		getMove,
		getMoveByName,
	};
}
