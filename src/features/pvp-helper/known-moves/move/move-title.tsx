import {Move} from '@/@types/move';
import {MoveArcheTypeIcon} from '@/features/pokemon/components/move-arche-type-icons';
import {PokemonTypeIcon} from '@/features/pokemon/components/species-type-icons';
import {useTranslations} from 'next-intl';

export function MoveTitle({
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
			<PokemonTypeIcon type={move.type} className="shadow" size="md" />
			<span className="font-medium">
				{
					//@ts-ignore
					t(`moves.names.${move.id}`)
				}
			</span>
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
