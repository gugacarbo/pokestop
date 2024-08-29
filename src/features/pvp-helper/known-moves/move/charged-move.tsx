import {Move} from '@/@types/move';
import {useTranslations} from 'next-intl';
import {calculateMoveCounts} from '../../calculate-move-count';
import {getStatusEffectString} from '../../get-status-effect-string';
import {ClockIcon} from 'lucide-react';

export function ChargedMove({
	move,
	typeBoost,
	currentFastMove,
}: {
	move: Move;
	typeBoost: boolean;
	currentFastMove?: Move;
}) {
	const dmg = move.power * (typeBoost ? 1.2 : 1);
	const t = useTranslations();

	return (
		<div className="flex flex-col gap-0.5">
			<div className="flex justify-between gap-2 w-full">
				<div className="flex flex-col items-center">
					<span className="text-sm">
						{dmg.toFixed(0)} <small>{t('rankings.moves.damage')}</small>
					</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-sm">
						{move.energy} <small>{t('rankings.moves.energy')}</small>
					</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-sm">
						{(dmg / move.energy).toFixed(2)}{' '}
						<small>{t('rankings.moves.dpe')}</small>
					</span>
				</div>
			</div>
			<div>
				<div className="flex items-center gap-1">
					<ClockIcon className="size-4" />
					<small className="">
						{currentFastMove &&
							calculateMoveCounts(currentFastMove, move).join(' - ')}
					</small>
				</div>
				{move.buffTarget && <small>{getStatusEffectString(move)}</small>}
			</div>
		</div>
	);
}
