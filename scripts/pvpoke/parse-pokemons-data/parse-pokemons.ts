import * as fs from 'fs';
import * as path from 'path';
import {z} from 'zod';
import {PvPokePokemon} from './@types/types';

const pokemonWithMovesSchema = z.object({
	id: z.string(),
	dexNumber: z.coerce.number(),
	moves: z.object({
		fastMoves: z.array(z.string()).optional().default([]),
		chargedMoves: z.array(z.string()).optional().default([]),
	}),
	tags: z.array(z.string()).optional().default([]),
	buddyDistance: z.coerce.number().optional(),
	thirdMoveCost: z.coerce.number().default(10000),
	released: z.boolean().optional(),
	shadowEligible: z.boolean().optional(),
	legacyMoves: z.array(z.string()).optional(),
	eliteMoves: z.array(z.string()).optional(),
});

type PokemonWithMoves = z.infer<typeof pokemonWithMovesSchema>;

export type OutputPokemonWithMoves = PokemonWithMoves[];

export async function parsePokemons({
	shouldFetch = false,
	shouldMini = false,
}: {
	shouldFetch?: boolean;
	shouldMini?: boolean;
} = {}) {
	const output: OutputPokemonWithMoves = [];
	let PvPokePokemonsData: PvPokePokemon[] = [];

	if (shouldFetch) {
		const pokeResponse = (await fetch(
			'https://pvpoke.com/data/gamemaster/pokemon.json',
		).then(res => res.json())) as PvPokePokemon[];

		const megaResponse = (await fetch(
			'https://pvpoke.com/data/megas.json',
		).then(res => res.json())) as PvPokePokemon[];

		const paldeaResponse = (await fetch(
			'https://pvpoke.com/data/megas.json',
		).then(res => res.json())) as PvPokePokemon[];

		console.log({
			paldea: paldeaResponse.length,
			mega: megaResponse.length,
			poke: pokeResponse.length,
		});

		const output = [...pokeResponse, ...megaResponse, ...paldeaResponse].sort(
			(a, b) => a.dex - b.dex,
		);

		PvPokePokemonsData = output;
	} else {
		const PvPokePokemonsPath = path.join(
			__dirname,
			'./pvp-poke-data/pokemon.json',
		);
		PvPokePokemonsData = require(PvPokePokemonsPath);
	}
	console.log('Parsing Pokemons', PvPokePokemonsData.length);

	for (const pokemon of PvPokePokemonsData as PvPokePokemon[]) {
		const poke = pokemonWithMovesSchema.parse({
			id: pokemon.speciesId,
			dexNumber: pokemon.dex,
			moves: {
				fastMoves: pokemon.fastMoves,
				chargedMoves: pokemon.chargedMoves,
				eliteMoves: pokemon.eliteMoves,
				legacyMoves: pokemon.legacyMoves,
			},
			tags: pokemon.tags,
			buddyDistance: pokemon.buddyDistance,
			thirdMoveCost: pokemon.thirdMoveCost,
			released: pokemon.released,
			shadowEligible: pokemon.shadowEligible,
		});
		if (!!poke) output.push(poke);
		else {
			console.log('Error parsing pokemon', pokemon.speciesId);
		}
	}

	z.array(pokemonWithMovesSchema).parse(output);

	console.log('output', output.length);

	const outDir = path.join(__dirname, 'output');
	const outFilePath = path.join(outDir, 'parsed-pokemons.ts');

	const fileContent = `import type {Pokemon} from '@/@types/pokemon';
// Last Update at: ${new Date().toISOString()}
// From {@ ${shouldFetch ? 'pvpoke fetch' : 'local file'}} 
export const POKEMONS_DATA: (Pick<
		Pokemon,
		'id' | 'dexNumber' | 'tags' | 'buddyDistance' | 'thirdMoveCost' | 'released'
	> & {
		moves: {
			fastMoves: string[];
			chargedMoves: string[];
			eliteMoves?: string[];
			legacyMoves?: string[];
		};
	})[] =
	${JSON.stringify(output, null, shouldMini ? undefined : 4)};`;

	fs.writeFileSync(outFilePath, fileContent);
}
