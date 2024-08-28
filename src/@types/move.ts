import {z} from 'zod';
import {pokemonTypesSchema} from './pokemon-types';

const buffsSchema = z.tuple([z.number(), z.number()]).optional();

export const moveArchetypeSchema = z
	.enum([
		'Low Quality',
		'Debuff',
		'Boost Nuke',
		'High Energy',
		'General',
		'Boost',
		'Spam/Bait',
		'Nuke',
		'Heavy Damage',
		'Self-Debuff Nuke',
		'Debuff Spam/Bait',
		'Fast Charge',
		'High Energy Debuff',
		'Self-Debuff',
		'Multipurpose',
		'Boost Spam/Bait',
		'Debuff Nuke',
		'Self-Debuff Spam',
		'Spam/Bait Debuff',
		'Nuke Debuff',
	])
	.optional();

	
export const moveSchema = z.object({
	id: z.string(),
	name: z.string(),
	type: pokemonTypesSchema,
	power: z.coerce.number(),
	energy: z.coerce.number(),
	energyGain: z.coerce.number(),
	cooldown: z.coerce.number(),
	buffs: buffsSchema,
	buffsSelf: buffsSchema,
	buffsOpponent: buffsSchema,
	buffApplyChance: z.coerce.number().optional(),
	buffTarget: z
		.union([z.literal('opponent'), z.literal('self'), z.literal('both')])
		.optional(),
	archetype: moveArchetypeSchema,
	legacy: z.boolean().optional(),
	elite: z.boolean().optional(),
});

export type MoveArchetype = z.infer<typeof moveArchetypeSchema>;
export interface Move extends z.infer<typeof moveSchema> {}
