"use client";
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

import { useState } from "react";
import { LEAGUES, LeagueCPCap } from "@/data/league";
import { LEVEL_CAPS, LevelCapNumber } from "@/data/levelCap";
import { Pokemon } from "@/data/pokedex";
import { usePokedex } from "@/hooks/usePokedex";
import {
  RankedSpread,
  generateRankedSpreads,
} from "@/lib/generateRankedSpreads";
import { SpeciesDropdown } from "@/features/iv-guess/species-dropdown";
import { CheckIcon } from "lucide-react";

const defaultPokemon = {
  name: "Medicham",
  hp: 142,
  cp: 1500,
  leagueCp: 1500,
  levelCap: 51,
} as const;

export function IVGuess() {
  const { byName } = usePokedex();
  const [pokemon, setPokemon] = useState<Pokemon>(byName(defaultPokemon.name)!);
  const [league, setLeague] = useState<LeagueCPCap>(defaultPokemon.leagueCp);
  const [levelCap, setLevelCap] = useState<LevelCapNumber>(
    defaultPokemon.levelCap
  );

  const [anyHp, setAnyHp] = useState<boolean>(false);
  const [hp, setHp] = useState<number>(defaultPokemon.hp);
  const [anyCp, setAnyCp] = useState<boolean>(true);
  const [cp, setCp] = useState<number>(defaultPokemon.cp);

  const matchingSpreads = generateRankedSpreads(
    pokemon,
    pokemon.floor ?? 0,
    league,
    levelCap,
    0,
    "product"
  ).filter(
    (spread) =>
      (spread.stats.sta.value === hp || anyHp) && (spread.cp === cp || anyCp)
  );

  const extremeStats = (() => {
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
  })();

  return (
    <div className="items-start gap-6 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 px-4 sm:px-0 w-full">
      <SpeciesDropdown value={pokemon} onChange={setPokemon} label="Pokémon" />

      <div className="space-y-2">
        <label className="block">
          <span className="text-gray-500 text-xs dark:text-gray-400">CP</span>

          <input
            onChange={(evt) => {
              const value = Number(evt.target.value);

              if (!Number.isNaN(value)) {
                setCp(value);
              }
            }}
            defaultValue={cp}
            max={league}
            className="block disabled:opacity-50 form-input mt-1 rounded focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 w-full disabled:cursor-not-allowed"
            type="number"
            disabled={anyCp}
          />
        </label>

        <label className="flex justify-start items-center gap-x-2">
          <span className="text-gray-500 text-xs dark:text-gray-400">
            Any CP
          </span>

          <input
            onChange={(evt) => setAnyCp(evt.target.checked)}
            defaultChecked={anyCp}
            type="checkbox"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block">
          <span className="text-gray-500 text-xs dark:text-gray-400">
            HP Stat
          </span>

          <input
            onChange={(evt) => {
              const value = Number(evt.target.value);

              if (!Number.isNaN(value)) {
                setHp(value);
              }
            }}
            defaultValue={hp}
            className="block disabled:opacity-50 form-input mt-1 rounded focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 w-full disabled:cursor-not-allowed"
            type="number"
            disabled={anyHp}
          />
        </label>
        <label className="flex justify-start items-center gap-x-2">
          <span className="text-gray-500 text-xs dark:text-gray-400">
            Any HP
          </span>

          <input
            onChange={(evt) => setAnyHp(evt.target.checked)}
            defaultChecked={anyHp}
            type="checkbox"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-gray-500 text-xs dark:text-gray-400">League</span>

        <select
          onChange={(evt) => setLeague(Number(evt.target.value) as LeagueCPCap)}
          defaultValue={league}
          className="block form-select mt-1 rounded focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 w-full"
        >
          {LEAGUES.map((league) => (
            <option key={league.key} value={league.cp}>
              {league.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-gray-500 text-xs dark:text-gray-400">
          Level Cap
        </span>

        <select
          onChange={(evt) =>
            setLevelCap(Number(evt.target.value) as LevelCapNumber)
          }
          defaultValue={levelCap}
          className="block form-select mt-1 rounded focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 w-full"
        >
          {LEVEL_CAPS.map((levelCap) => (
            <option key={levelCap.name} value={levelCap.level}>
              {levelCap.level} ({levelCap.description})
            </option>
          ))}
        </select>
      </label>

      <div className="border-gray-200 border-y col-span-1 md:col-span-3 2xl:col-span-2 bg-white dark:bg-gray-800 shadow-gray-100 shadow-md dark:shadow-xl dark:shadow-gray-900 p-4 border dark:border-transparent rounded-lg w-full">
        <p className="border-gray-100 dark:border-gray-700 mb-2 pb-2 border-b font-title">
          Possible Spreads: {matchingSpreads.length}{" "}
          <span className="text-xs">of 4096</span>
        </p>

        <table className="table-fixed w-full text-left text-sm tabular-nums">
          <thead>
            <tr>
              <th className="w-16">Rank</th>
              <th className="w-10">GG?</th>
              <th>IVs</th>
              <th>Atk</th>
              <th>Def</th>
              <th>CP</th>
            </tr>
          </thead>

          <tbody>
            {matchingSpreads.map((spread) => (
              <tr key={`${spread.ivs.atk}-${spread.ivs.def}-${spread.ivs.sta}`}>
                <td>{spread.rank}</td>
                <td>
                  {spread.level >= 50.5 && (
                    <CheckIcon aria-label="Yes" className="w-4 h-4" />
                  )}
                </td>
                <td>
                  {spread.ivs.atk}-{spread.ivs.def}-{spread.ivs.sta}
                </td>
                <td>{spread.stats.atk.value.toFixed(2)}</td>
                <td>{spread.stats.def.value.toFixed(2)}</td>
                <td>{spread.cp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {matchingSpreads.length > 0 && (
        <>
          <div className="border-gray-200 border-y col-span-1 md:col-span-3 bg-white dark:bg-gray-800 shadow-gray-100 shadow-md dark:shadow-xl dark:shadow-gray-900 p-4 border dark:border-transparent rounded-lg w-full overflow-hidden">
            <div className="flex flex-wrap justify-center items-start gap-x-4 gap-y-8 pt-2 pb-6 w-full text-center">
              {extremeStats.atk.max && extremeStats.atk.min && (
                <div className="flex justify-center items-end gap-6 px-12">
                  <div>
                    <p className="mb-0.5 text-xs">Max</p>

                    <p className="font-title text-2xl leading-none tabular-nums">
                      {extremeStats.atk.max.stats.atk.value.toFixed(2)}
                    </p>
                  </div>

                  <p className="font-title leading-6">Attack</p>

                  <div>
                    <p className="mb-0.5 text-xs">Min</p>

                    <p className="font-title text-2xl leading-none tabular-nums">
                      {extremeStats.atk.min.stats.atk.value.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}

              {extremeStats.def.max && extremeStats.def.min && (
                <div className="flex justify-center items-end gap-6 px-12">
                  <div>
                    <p className="mb-0.5 text-xs">Max</p>

                    <p className="font-title text-2xl leading-none tabular-nums">
                      {extremeStats.def.max.stats.def.value.toFixed(2)}
                    </p>
                  </div>

                  <p className="font-title leading-6">Defense</p>

                  <div>
                    <p className="mb-0.5 text-xs">Min</p>

                    <p className="font-title text-2xl leading-none tabular-nums">
                      {extremeStats.def.min.stats.def.value.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart margin={{ bottom: 20, left: 20 }}>
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
                          {spread.ivs.atk}-{spread.ivs.def}-{spread.ivs.sta}{" "}
                          (Rank {spread.rank})
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

                <defs>
                  <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                    <stop offset="30%" stopColor="#6584FF" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.5} />
                  </linearGradient>
                </defs>

                <Scatter
                  data={matchingSpreads.map((spread) => ({
                    ...spread,
                    atk: spread.stats.atk.value,
                    def: spread.stats.def.value,
                  }))}
                  fill="url(#colorUv)"
                  animationDuration={100}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}
