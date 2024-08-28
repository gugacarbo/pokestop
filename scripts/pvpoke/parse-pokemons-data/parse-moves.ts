import {MoveArcheType, moveSchema} from '@/@types/move';
import {OutputMove, PvPokeMove} from './@types/types';

import * as fs from 'fs';
import * as path from 'path';
import {z} from 'zod';

const parseArcheType: (i?: string) => MoveArcheType = i =>
	i?.toLowerCase().replaceAll(' ', '-').replaceAll('/', '_') as MoveArcheType;

export async function parseMoves({
	shouldFetch = false,
	shouldMini = false,
}: {
	shouldFetch?: boolean;
	shouldMini?: boolean;
} = {}) {
	console.log('parsig moves');
	const output: OutputMove[] = [];
	let pvPokeMovesData: PvPokeMove[] = [];

	if (shouldFetch) {
		const response = await fetch(
			'https://pvpoke.com/data/gamemaster/moves.json',
		).then(res => res.json());
		pvPokeMovesData = response as PvPokeMove[];
	} else {
		const pvpokeMovesPath = path.join(__dirname, './pvp-poke-data/moves.json');
		pvPokeMovesData = require(pvpokeMovesPath);
	}

	console.log('pvPokeMovesData', pvPokeMovesData.length);

	for (const move of pvPokeMovesData as PvPokeMove[]) {
		const Poke = moveSchema.parse({
			id: move.moveId,
			name: move.name,
			type: move.type,
			power: move.power,
			energy: move.energy,
			energyGain: move.energyGain,
			cooldown: move.cooldown,
			archetype: parseArcheType(move.archetype),
			buffs: move.buffs,
			buffTarget: move.buffTarget,
			buffApplyChance: move.buffApplyChance,
			buffsSelf: move.buffsSelf,
			buffsOpponent: move.buffsOpponent,
		});

		output.push(Poke);
	}

	z.array(moveSchema).parse(output);

	console.log('output', output.length);

	const outDir = path.join(__dirname, 'output');
	const outFilePath = path.join(outDir, 'moves.ts');

	const fileContent = `import type { Move } from "@/@types/move";
// Last Update at: ${new Date().toISOString()}
// From {@ ${shouldFetch ? 'pvpoke fetch' : 'local file'}} 
export const MOVES: Move[] = ${JSON.stringify(
		output,
		null,
		shouldMini ? undefined : 4,
	)};`;

	fs.writeFileSync(outFilePath, fileContent);
}
