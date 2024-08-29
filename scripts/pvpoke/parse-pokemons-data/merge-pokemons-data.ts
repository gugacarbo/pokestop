import * as fs from 'fs';
import * as path from 'path';
import {POKEMONS_CONSTS} from '@/data/consts/pokemons-consts';
import {Pokemon} from '@/@types/pokemon';
import {POKEMONS_DATA} from './output/parsed-pokemons';

export async function mergePokemons({
	shouldMini = false,
}: {
	shouldFetch?: boolean;
	shouldMini?: boolean;
} = {}) {
	const output: Pokemon[] = [];
	const notFound: Partial<Pokemon>[] = [];
	POKEMONS_CONSTS.map(async pokemon => {
		const pokemonData = POKEMONS_DATA.find(p => p.id === pokemon.id);
		if (!pokemonData) {
			notFound.push(pokemon);
			return;
		}

		output.push({
			...pokemon,
			...pokemonData,
		});
	});
	console.log('Merged Pokemons', output.length);
	console.error('Not Found Pokemons', notFound.length);

	saveData(output, 'pokemons.ts', shouldMini, notFound);
}

function saveData(
	data: Array<unknown>,
	filePath: string,
	shouldMini = false,
	notFound: Array<unknown> = [],
) {
	const outDir = path.join(__dirname, 'output');
	const outFilePath = path.join(outDir, 'pokemons.ts');
	const outJSONFilePath = path.join(outDir, 'pokemons.json');
	const notFoundFilePath = path.join(outDir, 'not-found.json');

	const fileContent = `import type {Pokemon} from '@/@types/pokemon';
// Last Update at: ${new Date().toISOString()}
// Parsed ${data.length} from ${POKEMONS_CONSTS.length} Pokemons
export const POKEMONS: Pokemon[] =
	${JSON.stringify(data, null, shouldMini ? undefined : 4)};`;

	fs.writeFileSync(outJSONFilePath, JSON.stringify(data));
	fs.writeFileSync(outFilePath, fileContent);
	fs.writeFileSync(notFoundFilePath, JSON.stringify(notFound,null,2));
}
