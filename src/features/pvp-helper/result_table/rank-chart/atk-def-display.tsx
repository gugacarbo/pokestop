import {RankedSpread} from '@/lib/generateRankedSpreads';
import {MinMaxDisplay} from './min-max-display';
import {ShieldIcon, SwordIcon} from 'lucide-react';

function AtkDefDisplay({matchingSpreads}: {matchingSpreads: RankedSpread[]}) {
	const extremeStats = (() => {
		const atk = [...matchingSpreads].sort(
			(a, b) => b.stats.atk.value - a.stats.atk.value,
		);
		const def = [...matchingSpreads].sort(
			(a, b) => b.stats.def.value - a.stats.def.value,
		);

		return {
			atk: {
				max: atk.at(0),
				min: atk.at(-1),
			},
			def: {
				max: def.at(0),
				min: def.at(-1),
			},
		};
	})();
	return (
		<div className="grid grid-cols-2 w-full">
			<MinMaxDisplay
				title="Attack"
				icon={<SwordIcon />}
				min={extremeStats.atk.max?.stats.atk.value}
				max={extremeStats.atk.min?.stats.atk.value}
			/>
			<MinMaxDisplay
				title="Defense"
				icon={<ShieldIcon />}
				min={extremeStats.def.max?.stats.def.value}
				max={extremeStats.def.min?.stats.def.value}
			/>
		</div>
	);
}

export {AtkDefDisplay};
