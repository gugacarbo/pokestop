import {z} from 'zod';

export const matchupSchema = z.object({
	opponent: z.string(),
	rating: z.number(),
	opRating: z.number().optional(),
});

export const counterSchema = z.object({
	opponent: z.string(),
	rating: z.number(),
});

export const fastMoveSchema = z.object({
	moveId: z.string(),
	uses: z.number(),
});

export const chargedMoveSchema = z.object({
	moveId: z.string(),
	uses: z.number(),
});

export const movesSchema = z.object({
	fastMoves: z.array(fastMoveSchema),
	chargedMoves: z.array(chargedMoveSchema),
});

export const pvPokeRankingSchema = z.object({
	speciesId: z.string(),
	speciesName: z.string(),
	rating: z.number(),
	matchups: z.array(matchupSchema),
	counters: z.array(counterSchema),
	moves: movesSchema,
	moveset: z.array(z.string()),
	score: z.number(),
});

export type Matchup = z.infer<typeof matchupSchema>;
export type Counter = z.infer<typeof counterSchema>;
export type FastMove = z.infer<typeof fastMoveSchema>;
export type ChargedMove = z.infer<typeof chargedMoveSchema>;
export type Moves = z.infer<typeof movesSchema>;
export type PvPokeRanking = z.infer<typeof pvPokeRankingSchema>;
