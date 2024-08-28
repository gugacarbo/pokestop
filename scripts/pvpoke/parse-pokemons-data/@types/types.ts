import {z} from 'zod';

export const rawPokemonSchema = z.object({
	dex: z.coerce.number(),
	buddyDistance: z.number(),
	speciesId: z.string(),

	// speciesName: z.string(),
	// types: z.array(z.string()),
	// family: z
	// 	.object({
	// 		id: z.string(),
	// 		parent: z.string().optional(),
	// 		evolutions: z.array(z.string()).optional(),
	// 	})
	// 	.optional(),
	thirdMoveCost: z.number(),
	// baseStats: z.object({
	// 	atk: z.number(),
	// 	def: z.number(),
	// 	hp: z.number(),
	// }),
	fastMoves: z.array(z.string()),
	chargedMoves: z.array(z.string()),
	legacyMoves: z.array(z.string()).optional(),
	eliteMoves: z.array(z.string()).optional(),
	tags: z.array(z.string()).optional(),

	fastMovePool: z.array(z.string()),
	chargedMovePool: z.array(z.string()),

	shadowEligible: z.boolean().optional(),
	// nicknames: z.array(z.string()).optional(),
	released: z.boolean().optional(),
});

export type PvPokePokemon = z.infer<typeof rawPokemonSchema>;


type EffectivenessTypes =
	| 'bug'
	| 'dark'
	| 'dragon'
	| 'electric'
	| 'fairy'
	| 'fighting'
	| 'fire'
	| 'flying'
	| 'ghost'
	| 'grass'
	| 'ground'
	| 'ice'
	| 'normal'
	| 'poison'
	| 'psychic'
	| 'rock'
	| 'steel'
	| 'water';

type PvPokeMoveType =
	| 'Low Quality'
	| 'Debuff'
	| 'Boost Nuke'
	| 'High Energy'
	| 'General'
	| 'Boost'
	| 'Spam/Bait'
	| 'Nuke'
	| 'Heavy Damage'
	| 'Self-Debuff Nuke'
	| 'Debuff Spam/Bait'
	| 'Fast Charge'
	| 'High Energy Debuff'
	| 'Self-Debuff'
	| 'Multipurpose'
	| 'Boost Spam/Bait'
	| 'Debuff Nuke'
	| 'Self-Debuff Spam'
	| 'Spam/Bait Debuff'
	| 'Nuke Debuff';

type BuffTarget = 'opponent' | 'self' | 'both';

type Buffs = [number, number];

export interface PvPokeMove {
	moveId: string;
	name: string;
	abbreviation?: string;
	type: EffectivenessTypes;
	power: number;
	energy: number;
	energyGain: number;
	cooldown: number;
	archetype?: PvPokeMoveType;
	buffs?: Buffs;
	buffTarget?: BuffTarget;
	buffApplyChance?: number;
	buffsSelf?: Buffs;
	buffsOpponent?: Buffs;
}

export interface OutputMove {
	id: string;
	name: string;
	type: EffectivenessTypes;
	power: number;
	energy: number;
	energyGain: number;
	cooldown: number;
	archetype?: PvPokeMoveType;
	buffs?: Buffs;
	buffTarget?: BuffTarget;
	buffApplyChance?: number;
	buffsSelf?: Buffs;
	buffsOpponent?: Buffs;
}

