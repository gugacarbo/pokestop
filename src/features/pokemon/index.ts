import {Move} from '@/@types/move';
import {Pokemon, PokemonID, PokemonName} from '@/@types/pokemon';
import {MOVES} from '@/data/moves';
import {POKEMONS} from '@/data/pokemons';
import {isSubsequence} from '@/utils/isSubsequence';

export function getPokemonByName(
	name: PokemonName,
	list: Pokemon[] = POKEMONS,
) {
	if (!name) return null;

	return list.find(pokemon => pokemon.name === name) ?? null;
}

export function searchPokemonByName(query: string, list: Pokemon[] = POKEMONS) {
	const lowerCaseQuery = query.toLowerCase();

	const matches = list.filter(pokemon => {
		return (
			pokemon.aliases?.includes(lowerCaseQuery) ||
			isSubsequence(lowerCaseQuery, pokemon.name.toLowerCase())
		);
	});

	if (matches.length === 0) {
		return null;
	} else if (matches.length === 1) {
		return matches[0];
	} else {
		const exactMatch = matches.find(
			match => match.name.toLowerCase() === lowerCaseQuery,
		);

		if (exactMatch !== undefined) {
			return exactMatch;
		} else {
			return matches[0];
		}
	}
}

export function getPokemonByID(id: PokemonID, list: Pokemon[] = POKEMONS) {
	if (!id) return null;

	return list.find(pokemon => pokemon.id === id) ?? null;
}

export function getPokemonFamilyMembers(
	familyID: PokemonID,
	list: Pokemon[] = POKEMONS,
) {
	return list.filter(pokemon => pokemon.family.id === familyID);
}

export function getMoveById(id: string) {
	return MOVES.find(move => move.id === id);
}

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

export function getMoves(pokemon: string | Pokemon | null): Pokemon | null {
	if (!pokemon) return null;

	const poke = typeof pokemon === 'string' ? getPokemonByID(pokemon) : pokemon;
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
