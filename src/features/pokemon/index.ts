import {Pokemon, PokemonID, PokemonName} from '@/@types/pokemon';
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
