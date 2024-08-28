import {IV} from '@/@types/iv';
import {ivFloors} from '@/@types/iv-floor';

import {z} from 'zod';
export type {PokemonType} from './pokemon-types';

import {pokemonTypesSchema} from './pokemon-types';
import {moveSchema} from './move';

export const familyStages = z.union([
	z.literal(1),
	z.literal(2),
	z.literal(3),
	z.literal(4),
	z.literal(5),
]);

const moveType = z
	.array(moveSchema)
	.or(z.array(z.string()))
	.default([])
	.optional();

export const pokemonSchema = z.object({
	id: z.string(),
	dexNumber: z.number(),
	name: z.string(),
	stats: z.object({
		atk: z.number(),
		def: z.number(),
		sta: z.number(),
	}),
	types: z
		.tuple([pokemonTypesSchema])
		.or(z.tuple([pokemonTypesSchema, pokemonTypesSchema])),
	floor: ivFloors.optional(),
	family: z.object({
		id: z.string(),
		stage: familyStages,
	}),
	aliases: z.optional(z.array(z.string())),
	moves: z
		.object({
			fastMoves: moveType,
			chargedMoves: moveType,
			legacyMoves: moveType,
			eliteMoves: moveType,
		})
		.optional(),
	tags: z.array(z.string()).default([]).optional(),
	buddyDistance: z.coerce.number().optional(),
	thirdMoveCost: z.coerce.number().default(10000),
	released: z.boolean().default(true).optional(),
	shadowEligible: z.boolean().optional(),
});


export type PokemonFamilyStage = z.infer<typeof familyStages>;
export type Pokemon = z.infer<typeof pokemonSchema>;

export type PokemonID = Pokemon['id'];
export type PokemonName = Pokemon['name'];
export type PokedexNumber = Pokemon['dexNumber'];
export type PokemonStats = Pokemon['stats'];

export type PokemonIVs = {
	atk: IV;
	def: IV;
	sta: IV;
};
