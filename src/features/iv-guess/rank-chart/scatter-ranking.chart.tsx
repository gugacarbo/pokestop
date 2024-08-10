import { Card, CardHeader } from "@/components/ui/card";
import { RankedSpread } from "@/lib/generateRankedSpreads";
import { useMemo } from "react";

import {
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartHeader } from "./chart-header";

function ScatterPokemonChart({
  matchingSpreads,
}: {
  matchingSpreads: RankedSpread[];
}) {
  const { lowestRank, lowRank, midRank, highRank, topRank } = useMemo(() => {
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

  const extremeStats = useMemo(() => {
    const atk = [...matchingSpreads].sort(
      (a, b) => b.stats.atk.value - a.stats.atk.value
    );
    const def = [...matchingSpreads].sort(
      (a, b) => b.stats.def.value - a.stats.def.value
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
    <Card className="col-span-1 md:col-span-3 w-full">
      <ChartHeader extremeStats={extremeStats} />
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart margin={{ bottom: 20, left: 15, right: 10 }}>
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
            fontSize={14}
            stroke="currentColor"
            className="text-gray-500 dark:text-gray-400"
          >
            <Label value="Defense Stat" offset={0} position="bottom" />
          </XAxis>

          <YAxis
            type="number"
            dataKey="atk"
            name="Attack"
            tickCount={5}
            interval="preserveStartEnd"
            domain={[
              (dataMin: number) => Math.floor(dataMin / 2) * 2,
              (dataMax: number) => Math.ceil(dataMax / 2) * 2,
            ]}
            fontSize={14}
            stroke="currentColor"
            className="text-gray-500 dark:text-gray-400"
          >
            <Label
              value="Attack Stat"
              offset={0}
              angle={270}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>

          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={({ active, payload }) => {
              if (
                active === false ||
                payload === undefined ||
                payload.length === 0
              ) {
                return null;
              }

              const spread = payload[0].payload as RankedSpread;

              return (
                <div className="space-y-1 border-gray-200 border-y bg-white dark:bg-gray-800 shadow-gray-100 shadow-md dark:shadow-xl dark:shadow-gray-900 p-2 border dark:border-transparent rounded-lg text-sm">
                  <p className="font-semibold">
                    {spread.ivs.atk}-{spread.ivs.def}-{spread.ivs.sta} (Rank{" "}
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
            data={lowestRank.map((spread) => ({
              ...spread,
              atk: spread.stats.atk.value,
              def: spread.stats.def.value,
            }))}
            className="dark:fill-red-500 fill-red-600"
            animationDuration={0}
          />
          <Scatter
            data={lowRank.map((spread) => ({
              ...spread,
              atk: spread.stats.atk.value,
              def: spread.stats.def.value,
            }))}
            className="dark:fill-orange-500 fill-orange-600"
            animationDuration={0}
          />
          <Scatter
            data={midRank.map((spread) => ({
              ...spread,
              atk: spread.stats.atk.value,
              def: spread.stats.def.value,
            }))}
            className="dark:fill-amber-500 fill-amber-600"
            animationDuration={0}
          />
          <Scatter
            data={highRank.map((spread) => ({
              ...spread,
              atk: spread.stats.atk.value,
              def: spread.stats.def.value,
            }))}
            className="dark:fill-sky-500 fill-sky-600"
            animationDuration={0}
          />
          <Scatter
            data={topRank.map((spread) => ({
              ...spread,
              atk: spread.stats.atk.value,
              def: spread.stats.def.value,
            }))}
            className="dark:fill-emerald-500 fill-emerald-600"
            animationDuration={0}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </Card>
  );
}

export { ScatterPokemonChart };
