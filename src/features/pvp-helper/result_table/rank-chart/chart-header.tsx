import {CardHeader} from '@/components/ui/card';
import {MinMaxDisplay} from './min-max-display';
import {RankedSpread} from '@/lib/useGenerateRankedSpreads';
import {ShieldIcon, SwordsIcon} from 'lucide-react';
import {useMemo} from 'react';

function ChartHeader({matchingSpreads}: {matchingSpreads: RankedSpread[]}) {
	const extremeStats = useMemo(() => {
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
	}, [matchingSpreads]);
	return (
		<CardHeader className="flex flex-row justify-evenly items-center gap-6 space-y-0 w-full">
			<MinMaxDisplay
				min={extremeStats?.atk?.min?.stats.atk.value}
				max={extremeStats?.atk?.max?.stats.atk.value}
				title="Attack"
				icon={<SwordsIcon className="size-6" />}
			/>

			<MinMaxDisplay
				min={extremeStats?.def?.min?.stats.def.value}
				max={extremeStats?.def?.max?.stats.def.value}
				title="Defense"
				icon={<ShieldIcon className="size-6" />}
			/>
		</CardHeader>
	);
}

export {ChartHeader};
