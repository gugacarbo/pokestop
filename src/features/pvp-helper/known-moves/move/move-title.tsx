import {Move} from '@/@types/move';
import {MoveArcheTypeIcon} from '@/features/pokemon/components/move-arche-type-icons';
import {PokemonTypeIcon} from '@/features/pokemon/components/species-type-icons';
import {useTranslations} from 'next-intl';
import {calculateMoveCounts} from '../../calculate-move-count';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

export function MoveTitle({
	move,
	isLegacy,
	isElite,
	currentFastMove,
}: {
	move: Move;
	currentFastMove?: Move;
	isLegacy: boolean;
	isElite: boolean;
}) {
	const t = useTranslations();

	return (
		<div className="flex items-start gap-1 w-full">
			<PokemonTypeIcon type={move.type} className="shadow" size="md" />
			<div className="flex flex-col justify-center gap-0.5 h-full leading-none">
				<span className="font-medium">
					{
						//@ts-ignore
						t(`moves.names.${move.id}`)
					}
				</span>
				{currentFastMove && (
					<CalculatedMoves
						moveCount={calculateMoveCounts(currentFastMove, move).join(' - ')}
					/>
				)}
			</div>
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

const CalculatedMoves = ({moveCount}: {moveCount: string}) => {
	return (
		<TooltipProvider delayDuration={500} disableHoverableContent={true}>
			<Tooltip>
				<TooltipTrigger asChild={true}>
					<small>
						<small className="text-xs">{moveCount}</small>
					</small>
				</TooltipTrigger>
				<TooltipContent className="flex flex-col max-w-xs">
					<b>Fast Move Count</b>
					<p>Number of fast moves required to reach this move</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
