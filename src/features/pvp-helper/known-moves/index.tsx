import {Move} from '@/@types/move';
import {Pokemon} from '@/@types/pokemon';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {
	PokemonTypeIcon,
	typeBackgrounds,
	typeBorders,
} from '@/features/pokemon/components/species-type-icons';
import {cn} from '@/lib/utils';
import {calculateMoveCounts} from '../calculate-move-count';
import {useTranslations} from 'next-intl';
import {MoveArcheTypeIcon} from '@/features/pokemon/components/move-arche-type-icons';
import {getStatusEffectString} from '../get-status-effect-string';

function KnownMoves({pokemon}: {pokemon: Pokemon}) {
	return (
		<Card className="col-span-1 md:col-span-3 bg-secondary p-2 rounded-md w-full">
			<CardHeader className="pb-1 md:pb-2">
				<CardTitle>Known Moves</CardTitle>
			</CardHeader>
			<CardContent className="gap-4 grid grid-cols-2">
				<div className="flex flex-col gap-1 w-full">
					<span className="m-0.5 font-title text-lg">Fast Moves</span>
					<div className="flex flex-col gap-2 w-full">
						{pokemon.moves?.fastMoves?.map(
							move =>
								typeof move !== 'string' && (
									<PokeMove
										key={move?.id}
										move={move}
										pokemon={pokemon}
										moveType="fast"
									/>
								),
						)}
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<span className="m-0.5 font-title text-lg">Charged Moves</span>
					<div className="flex flex-col gap-2 w-full">
						{pokemon.moves?.chargedMoves?.map(
							move =>
								typeof move !== 'string' && (
									<PokeMove
										key={move?.id}
										move={move}
										pokemon={pokemon}
										moveType="charged"
									/>
								),
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export {KnownMoves};

function PokeMove({
	move,
	pokemon,
	moveType,
}: {
	move: Move;
	pokemon: Pokemon;
	moveType: 'fast' | 'charged';
}) {
	const isLegacy = !!pokemon.moves?.legacyMoves?.find(
		m => typeof m !== 'string' && m?.id === move.id,
	);

	const isElite = !!pokemon.moves?.eliteMoves?.find(
		m => typeof m !== 'string' && m?.id === move.id,
	);

	const typeBoost =
		move.type === pokemon.types[0] || move.type === pokemon.types[1];

	return (
		<div
			className={cn(
				'flex flex-col gap-2 bg-popover px-4 p-3 border border-border rounded-md w-full',
				`${typeBackgrounds[move.type]} bg-opacity-20`,
				typeBorders[move.type],
			)}
		>
			<MoveTitle move={move} isLegacy={isLegacy} isElite={isElite} />
			{moveType === 'fast' ? (
				<FastMove move={move} typeBoost={typeBoost} />
			) : (
				<ChargedMove
					move={move}
					typeBoost={typeBoost}
					currentFastMove={
						typeof pokemon.moves?.fastMoves?.[0] !== 'string'
							? pokemon.moves?.fastMoves?.[0]
							: undefined
					}
				/>
			)}
		</div>
	);
}

function MoveTitle({
	move,
	isLegacy,
	isElite,
}: {
	move: Move;
	isLegacy: boolean;
	isElite: boolean;
}) {
	const t = useTranslations();

	return (
		<div className="flex items-baseline gap-1 w-full">
			<PokemonTypeIcon type={move.type} className="shadow" />
			<span className="font-medium">{move.name}</span>
			{isLegacy && (
				<span className="font-bold text-red-500 text-sm"> Legacy</span>
			)}
			{isElite && (
				<span className="font-bold text-indigo-400 text-sm"> Elite</span>
			)}
			{move.archetype && (
				<div className="ml-auto">
					<MoveArcheTypeIcon type={move.archetype} label />
				</div>
			)}
		</div>
	);
}

function FastMove({move, typeBoost}: {move: Move; typeBoost: boolean}) {
	function getTurns(cooldown: number) {
		if (cooldown === 0) {
			return 1;
		}
		return cooldown / 500;
	}
	const dmg = (move.power * (typeBoost ? 1.2 : 1)) / getTurns(move.cooldown);
	return (
		<div className="flex justify-between gap-2 w-full">
			<div className="flex flex-col items-center gap-0.5">
				<small>Damage </small>
				<small>{dmg.toFixed(2)}</small>
			</div>
			<div className="flex flex-col items-center gap-0.5">
				<small>Energy </small>
				<small>{(move.energyGain / getTurns(move.cooldown)).toFixed(2)}</small>
			</div>
			<div className="flex flex-col items-center gap-0.5">
				<small>Turns </small>
				<small>{getTurns(move.cooldown)}</small>
			</div>
		</div>
	);
}
function ChargedMove({
	move,
	typeBoost,
	currentFastMove,
}: {
	move: Move;
	typeBoost: boolean;
	currentFastMove?: Move;
}) {
	const dmg = move.power * (typeBoost ? 1.2 : 1);

	return (
		<>
			<div className="flex justify-between gap-2 w-full">
				<div className="flex flex-col items-center gap-0.5">
					<small>Damage </small>
					<small>{dmg.toFixed(0)}</small>
				</div>
				<div className="flex flex-col items-center gap-0.5">
					<small>Energy </small>
					<small>{move.energy}</small>
				</div>
				<div className="flex flex-col items-center gap-0.5">
					<small>Dpe </small>
					<small>{(dmg / move.energy).toFixed(2)}</small>
				</div>
			</div>
			<div>
				<small>
					{currentFastMove &&
						calculateMoveCounts(currentFastMove, move).join(' - ')}
				</small>
				{move.buffTarget && <div>{getStatusEffectString(move)}</div>}
			</div>
		</>
	);
}
