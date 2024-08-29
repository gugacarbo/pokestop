import {Move} from '@/@types/move';
import {
	typeBackgrounds,
	typeBorders,
} from '@/features/pokemon/components/species-type-icons';
import {cn} from '@/lib/utils';
import {MoveTitle} from '../move-title';
import {Pokemon} from '@/@types/pokemon';
import {FastMove} from './fast-move';
import {ChargedMove} from './charged-move';

export function PokeMove({
	move,
	pokemon,
	moveType,
	selectedFastMove,
	onClick,
}: {
	move: Move;
	pokemon: Pokemon;
	moveType: 'fast' | 'charged';
	selectedFastMove?: Move | string;
	onClick?: () => void;
}) {
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
				'flex flex-col gap-2 bg-popover p-2 border-2 rounded-md w-full cursor-pointer',
				`${typeBackgrounds[move.type]} bg-opacity-20`,
				typeBorders[move.type],
				moveType === 'fast' &&
					move.id === selectedFast?.id &&
					'border-foreground shadow',
			)}
			onClick={onClick}
		>
			<MoveTitle move={move} isLegacy={isLegacy} isElite={isElite} />
			{moveType === 'fast' ? (
				<FastMove move={move} typeBoost={typeBoost} />
			) : (
				<ChargedMove
					move={move}
					typeBoost={typeBoost}
					currentFastMove={selectedFast}
				/>
			)}
		</div>
	);
}
