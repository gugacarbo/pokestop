import {Pokemon, PokemonType} from '@/@types/pokemon';
import {
	Effectiveness,
	EffectivenessValue,
	typesEffectiveness,
} from '@/@types/type-effectiveness';

interface EffectivenessResult {
	weaknesses: Partial<Effectiveness>;
	resistances: Partial<Effectiveness>;
}

export function getWeaknessesAndResistances(
	pokemon: Pokemon,
): EffectivenessResult {
	const type_1 = pokemon.types[0];
	const type_2 = pokemon.types[1] && pokemon.types[1];

	const type_1_effectiveness = getTypesAsDefender(type_1);
	const type_2_effectiveness = type_2 && getTypesAsDefender(type_2);

	const weaknesses: Partial<Effectiveness> = {};
	const resistances: Partial<Effectiveness> = {};

	for (const attackingType in typesEffectiveness) {
		const type_1_multiplier =
			type_1_effectiveness[attackingType as PokemonType] ?? 1;

		const type_2_multiplier = type_2_effectiveness
			? type_2_effectiveness[attackingType as PokemonType] ?? 1
			: 1;

		const multiplier = parseFloat(
			(type_1_multiplier * type_2_multiplier).toFixed(4),
		);

		if (Number(multiplier.toFixed(1)) > 1) {
			weaknesses[attackingType as PokemonType] =
				multiplier as EffectivenessValue;
		} else if (Number(multiplier.toFixed(1)) < 1) {
			resistances[attackingType as PokemonType] =
				multiplier as EffectivenessValue;
		}
	}

	return {
		weaknesses: Object.fromEntries(
			Object.entries(weaknesses).sort(([_, v], [__, v2]) => v2 - v),
		),
		resistances: Object.fromEntries(
			Object.entries(resistances).sort(([_, v], [__, v2]) => v - v2),
		),
	};
}

function getTypesAsDefender(type: PokemonType): Partial<Effectiveness> {
	const effect: Partial<Effectiveness> = {};

	for (const attackingType in typesEffectiveness) {
		effect[attackingType as PokemonType] =
			typesEffectiveness[attackingType as PokemonType][type];
	}

	return effect;
}
