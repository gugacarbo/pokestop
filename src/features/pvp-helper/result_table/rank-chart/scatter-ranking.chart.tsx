import {RankedSpread} from '@/lib/generateRankedSpreads';
import {useMemo} from 'react';

import {
	CartesianGrid,
	Label,
	ResponsiveContainer,
	Scatter,
	ScatterChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

function ScatterPokemonChart({
	matchingSpreads,
}: {
	matchingSpreads: RankedSpread[];
}) {
	const {lowestRank, lowRank, midRank, highRank, topRank} = useMemo(() => {
		const last = matchingSpreads.length; // 4096

		const [lowestMaxRank, lowMaxRank, midMaxRank, highMaxRank, topMaxRank] = [
			Math.round(last * 0.2), //   <= 20%
			Math.round(last * 0.1), //   >= 20% => #819/4096
			Math.round(last * 0.05), //  >= 10% => #409/4096
			Math.round(last * 0.01), //  >= 5%  => #204/4096
			0, //                       Top 1%  => 40/4096
		];

		const lowestRank = matchingSpreads.slice(lowestMaxRank, last);
		const lowRank = matchingSpreads.slice(lowMaxRank, last);
		const midRank = matchingSpreads.slice(midMaxRank, lowMaxRank);
		const highRank = matchingSpreads.slice(highMaxRank, midMaxRank);
		const topRank = matchingSpreads.slice(topMaxRank, highMaxRank);

		const reducer = (acc: RankedSpread[], _: RankedSpread) => {
			if (acc.length > 60) {
				return acc.filter((_, i) => i % 2 === 0);
			}
			return acc;
		};

		return {
			lowestRank: lowestRank.reduce(reducer, lowestRank),
			lowRank: lowRank.reduce(reducer, lowRank),
			midRank: midRank.reduce(reducer, midRank),
			highRank: highRank.reduce(reducer, highRank),
			topRank,
		};
	}, [matchingSpreads]);

	return (
		<div className="flex bg-popover rounded-b-md w-full aspect-video">
			<ResponsiveContainer width="100%" height="100%">
				<ScatterChart margin={{bottom: 20, left: 0, right: 0}}>
					<CartesianGrid
						strokeDasharray="3 3"
						stroke="currentColor"
						className="text-gray-300 dark:text-gray-600"
					/>

					<XAxis
						type="number"
						dataKey="def"
						name="Defense"
						tickCount={8}
						interval="preserveStartEnd"
						domain={[
							(dataMin: number) => Math.floor(dataMin / 2) * 2,
							(dataMax: number) => Math.ceil(dataMax / 2) * 2,
						]}
						fontSize={12}
						stroke="currentColor"
						className="text-muted-foreground"
					>
						<Label value="Defense Stat" offset={0} position="bottom" />
					</XAxis>

					<YAxis
						type="number"
						dataKey="atk"
						name="Attack"
						tickCount={5}
						padding={{
							top: 0,
							bottom: 0,
						}}
						interval="preserveStartEnd"
						domain={[
							(dataMin: number) => Math.floor(dataMin / 2) * 2,
							(dataMax: number) => Math.ceil(dataMax / 2) * 2,
						]}
						fontSize={12}
						stroke="currentColor"
						className="text-muted-foreground"
					>
						<Label
							fontSize={14}
							value="Attack Stat"
							offset={15}
							angle={270}
							position="insideLeft"
							style={{
								textAnchor: 'middle',
							}}
						/>
					</YAxis>
					<Tooltip
						cursor={{strokeDasharray: '3 3'}}
						content={({active, payload}) => {
							if (
								active === false ||
								payload === undefined ||
								payload.length === 0
							) {
								return null;
							}

							const spread = payload[0].payload as RankedSpread;

							return (
								<div className="space-y-1 bg-popover shadow-md dark:shadow-muted p-2 border border-border rounded-md text-sm">
									<p className="font-semibold">
										{spread.ivs.atk}-{spread.ivs.def}-{spread.ivs.sta} (Rank{' '}
										{spread.rank})
									</p>

									<p>
										{spread.cp} CP, Level {spread.level}
									</p>
									<p>Attack: {spread.stats.atk.value.toFixed(2)}</p>
									<p>Defense: {spread.stats.def.value.toFixed(2)}</p>
									<p>HP: {spread.stats.sta.value}</p>
								</div>
							);
						}}
					/>

					<Scatter
						data={lowestRank.map(spread => ({
							...spread,
							atk: spread.stats.atk.value,
							def: spread.stats.def.value,
						}))}
						className="dark:fill-red-500 fill-red-600"
						animationDuration={0}
					/>
					<Scatter
						data={lowRank.map(spread => ({
							...spread,
							atk: spread.stats.atk.value,
							def: spread.stats.def.value,
						}))}
						className="dark:fill-orange-500 fill-orange-600"
						animationDuration={0}
					/>
					<Scatter
						data={midRank.map(spread => ({
							...spread,
							atk: spread.stats.atk.value,
							def: spread.stats.def.value,
						}))}
						className="dark:fill-amber-500 fill-amber-600"
						animationDuration={0}
					/>
					<Scatter
						data={highRank.map(spread => ({
							...spread,
							atk: spread.stats.atk.value,
							def: spread.stats.def.value,
						}))}
						className="dark:fill-sky-500 fill-sky-600"
						animationDuration={0}
					/>
					<Scatter
						data={topRank.map(spread => ({
							...spread,
							atk: spread.stats.atk.value,
							def: spread.stats.def.value,
						}))}
						className="dark:fill-emerald-500 fill-emerald-600"
						animationDuration={0}
					/>
				</ScatterChart>
			</ResponsiveContainer>
		</div>
	);
}

export {ScatterPokemonChart};
