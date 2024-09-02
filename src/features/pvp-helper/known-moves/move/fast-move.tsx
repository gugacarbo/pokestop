import {Move} from '@/@types/move';
import {useTranslations} from 'next-intl';

export function FastMove({move, typeBoost}: {move: Move; typeBoost: boolean}) {
	const t = useTranslations();

	function getTurns(cooldown: number) {
		if (cooldown === 0) {
			return 1;
		}
		return cooldown / 500;
	}
	const dmg = (move.power * (typeBoost ? 1.2 : 1)) / getTurns(move.cooldown);
	return (
		<div className={'flex justify-between gap-1 w-full'}>
			<div className="flex flex-col items-center leading-tight">
				<small>{t('rankings.moves.damage')} </small>
				<small>{dmg.toFixed(2)}</small>
			</div>
			<div className="flex flex-col items-center leading-tight">
				<small>{t('rankings.moves.energy')} </small>
				<small>{(move.energyGain / getTurns(move.cooldown)).toFixed(2)}</small>
			</div>
			<div className="flex flex-col items-center leading-tight">
				<small>{t('rankings.moves.turns')} </small>
				<small>{getTurns(move.cooldown)}</small>
			</div>
		</div>
	);
}
