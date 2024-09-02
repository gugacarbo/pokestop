import {Move} from '@/@types/move';
import {
	typeBackgrounds,
	typeBorders,
} from '@/features/pokemon/components/species-type-icons';
import {cn} from '@/lib/utils';
import {MoveTitle} from './move-title';
import {Pokemon, PokemonType} from '@/@types/pokemon';
import {FastMove} from './fast-move';
import {ChargedMove} from './charged-move';
import {
	EffectBadge,
	EffectsContainer,
} from '../../components/effectiveness-display';
import {typesEffectiveness} from '@/@types/type-effectiveness';

export function PokeMove({
	move,
	pokemon,
	moveType,
	selectedFastMove,
	onClick,
	showEffectiveness,
}: {
	move: Move;
	pokemon: Pokemon;
	moveType: 'fast' | 'charged';
	selectedFastMove?: Move | string;
	onClick?: () => void;
	showEffectiveness?: boolean;
}) {
	const effectiveness = typesEffectiveness[move.type];

	const isLegacy = !!pokemon.moves?.legacyMoves?.find(
		m => typeof m !== 'string' && m?.id === move.id,
	);

	const isElite = !!pokemon.moves?.eliteMoves?.find(
		m => typeof m !== 'string' && m?.id === move.id,
	);

	const typeBoost =
		move.type === pokemon.types[0] || move.type === pokemon.types[1];

	const selectedFast =
		typeof selectedFastMove !== 'string' ? selectedFastMove : undefined;

	return (
		<div
			className={cn(
				'flex flex-col gap-0.5 bg-popover p-2 border-2 rounded-md w-full cursor-pointer',
				`${typeBackgrounds[move.type]} bg-opacity-20`,
				typeBorders[move.type],
				moveType === 'fast' &&
					move.id === selectedFast?.id &&
					'border-foreground shadow',
			)}
			onClick={onClick}
		>
			<MoveTitle
				move={move}
				isLegacy={isLegacy}
				isElite={isElite}
				currentFastMove={moveType === 'charged' ? selectedFast : undefined}
			/>
			{moveType === 'fast' ? (
				<FastMove move={move} typeBoost={typeBoost} />
			) : (
				<ChargedMove move={move} typeBoost={typeBoost} />
			)}
			{showEffectiveness && (
				<EffectsContainer className="mt-1">
					{Object.entries(effectiveness)
						.filter(([_, multiplier]) => multiplier !== 1)
						.sort(([, a], [, b]) => b - a)
						.map(([type, multiplier], i) => {
							return (
								<EffectBadge
									sm
									key={type + i}
									type={type as PokemonType}
									multiplier={multiplier as number}
								/>
							);
						})}
				</EffectsContainer>
			)}
		</div>
	);
}
