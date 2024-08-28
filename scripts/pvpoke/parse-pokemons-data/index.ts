import { mergePokemons } from './merge-pokemons-data';
import {parseMoves} from './parse-moves';
import {parsePokemons} from './parse-pokemons';

async function parsePokemonsData() {
	const options = {
		shouldFetch:
			process?.argv.includes('--fetch') || process?.argv.includes('-f'),
		shouldMini:
			process?.argv.includes('--mini') || process?.argv.includes('-m'),
	};

	await parseMoves(options);
	await parsePokemons(options);
	await mergePokemons(options);
}

parsePokemonsData();
