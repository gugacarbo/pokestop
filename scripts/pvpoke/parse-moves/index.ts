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

