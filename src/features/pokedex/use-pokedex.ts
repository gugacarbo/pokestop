'use client';

import {useCallback, useMemo} from 'react';
import {useSettings} from '@/features/settings/use-settings';
import type {PokemonName, PokemonID, Pokemon} from '@/@types/pokemon';
import {
	getPokemonByName,
	getPokemonByID,
	getPokemonFamilyMembers,
	searchPokemonByName,
} from '@/features/pokemon';
import {MOVES} from '@/data/moves';
import {POKEMONS} from '@/data/pokemons';
import {Move} from '@/@types/move';

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

	function parseMoves(moves?: (string | Move)[]) {
		if (!moves) return [];
		return moves
			.map(moveId => {
				if (typeof moveId === 'string') {
					const move = getMoveById(moveId);
					if (!move) {
						console.warn(`Move not found: ${moveId}`);
						return undefined;
					}
					return move;
				}
				return moveId;
			})
			.filter(move => move !== undefined && typeof move !== 'string');
	}

	function getMoves(pokemon: string | Pokemon | null): Pokemon | null {
		if (!pokemon) return null;

		const poke = typeof pokemon === 'string' ? byId(pokemon) : pokemon;
		if (!poke) return null;

		return {
			...poke,
			moves: {
				fastMoves: parseMoves(poke.moves?.fastMoves),
				chargedMoves: parseMoves(poke.moves?.chargedMoves),
				legacyMoves: parseMoves(poke.moves?.legacyMoves),
				eliteMoves: parseMoves(poke.moves?.eliteMoves),
			},
		};
	}

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
