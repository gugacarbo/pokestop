import {z} from 'zod';
import {pokemonTypesSchema} from './pokemon-types';

const buffsSchema = z.tuple([z.number(), z.number()]).optional();

export const moveArchetypeSchema = z.enum([
	'low-quality',
	'debuff',
	'boost-nuke',
	'high-energy',
	'general',
	'boost',
	'spam_bait',
	'nuke',
	'heavy-damage',
	'self-debuff-nuke',
	'debuff-spam_bait',
	'fast-charge',
	'high-energy-debuff',
	'self-debuff',
	'multipurpose',
	'boost-spam_bait',
	'debuff-nuke',
	'self-debuff-spam',
	'spam_bait-debuff',
	'nuke-debuff',
]);

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
	archetype: moveArchetypeSchema.optional(),
	legacy: z.boolean().optional(),
	elite: z.boolean().optional(),
});

export type MoveArcheType = z.infer<typeof moveArchetypeSchema>;
export interface Move extends z.infer<typeof moveSchema> {}
