import * as fs from 'fs';
import * as path from 'path';
import {z} from 'zod';
import {PvPokePokemon} from '.';

const pokemonWithMovesSchema = z.object({
	id: z.string(),
	dexNumber: z.coerce.number(),
	moves: z.object({
		fastMoves: z.array(z.string()).optional().default([]),
		chargedMoves: z.array(z.string()).optional().default([]),
	}),
	tags: z.array(z.string()).optional().default([]),
	buddyDistance: z.coerce.number().optional(),
	thirdMoveCost: z.coerce.number().optional(),
	released: z.boolean().optional(),
});

type PokemonWithMoves = z.infer<typeof pokemonWithMovesSchema>;

export type OutputPokemonWithMoves = Record<
	PokemonWithMoves['id'],
	PokemonWithMoves
>;

async function parsePokemons() {
	const output: OutputPokemonWithMoves = {};
	let PvPokePokemonsData: PvPokePokemon[] = [];

	const shouldFetch =
		process?.argv.includes('--fetch') || process?.argv.includes('-f');

	const shouldMini =
		process?.argv.includes('--mini') || process?.argv.includes('-m');

	if (shouldFetch) {
		const response = await fetch(
			'https://pvpoke.com/data/gamemaster/pokemon.json',
		).then(res => res.json());
		PvPokePokemonsData = response as PvPokePokemon[];
	} else {
		const PvPokePokemonsPath = path.join(
			__dirname,
			'./pvp-poke-data/pokemon.json',
		);
		PvPokePokemonsData = require(PvPokePokemonsPath);
	}

	for (const pokemon of PvPokePokemonsData as PvPokePokemon[]) {
		output[pokemon.speciesId] = pokemonWithMovesSchema.parse({
			id: pokemon.speciesId,
			dexNumber: parseInt(pokemon.dex),
			moves: {
				fastMoves: pokemon.fastMoves,
				chargedMoves: pokemon.chargedMoves,
			},
			tags: pokemon.tags,
			buddyDistance: pokemon.buddyDistance,
			thirdMoveCost: pokemon.thirdMoveCost,
			released: pokemon.released,
		});
	}

	z.record(z.string(), pokemonWithMovesSchema).parse(output);

	const outDir = path.join(__dirname, 'output');
	const outFilePath = path.join(outDir, 'pokemons-moves.ts');

	const fileContent = `import type {Pokemon} from '@/@types/pokemon';
// Last Update at: ${new Date().toISOString()}
// From {@ ${shouldFetch ? 'pvpoke fetch' : 'local file'}} 
 const POKEMON_MOVES: Record<
	Pokemon['id'],
	Pick<Pokemon, 'id' | 'dexNumber'> & {
		moves: {
			fastMoves: string[];
			chargedMoves: string[];
			};
		tags?: string[];
	    buddyDistance?: number;
        thirdMoveCost?: number;
        released?: boolean;
		}> =
	${JSON.stringify(output, null, shouldMini ? undefined : 4)};`;

	fs.writeFileSync(outFilePath, fileContent);
}

parsePokemons();
