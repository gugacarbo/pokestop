import {PokemonType} from '@/@types/pokemon-types';

export type EffectivenessValue = 0.39 | 0.63 | 1 | 1.6;

export type CumulatedEffectivenessValue = 1;

export type Effectiveness = {
	[defendingType in PokemonType]: EffectivenessValue;
};

export type TypesEffectiveness = {
	[attackingType in PokemonType]: Effectiveness;
};

export type TypesOrder = PokemonType[];

export const typesOrder: TypesOrder = [
	'normal',
	'fighting',
	'flying',
	'poison',
	'ground',
	'rock',
	'bug',
	'ghost',
	'steel',
	'fire',
	'water',
	'grass',
	'electric',
	'psychic',
	'ice',
	'dragon',
	'dark',
	'fairy',
];

export {typesEffectiveness} from '@/data/consts/type-effectiveness';
