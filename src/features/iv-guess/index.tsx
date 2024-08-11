"use client";
import { useMemo, useState } from "react";
import { LeagueCPCap } from "@/data/league";
import { LevelCapNumber } from "@/data/levelCap";
import { Pokemon } from "@/data/pokedex";
import {
  RankedSpread,
  generateRankedSpreads,
} from "@/lib/generateRankedSpreads";
import { SpeciesDropdown } from "@/features/pokemon/components/species-dropdown";
import { usePokedex } from "@/hooks/use-pokedex";

import { ScatterPokemonChart } from "./rank-chart/scatter-ranking.chart";
import { CpSelector } from "./components/cp-selector";
import { HpSelector } from "./components/hp-selector";
import { LeagueSelector } from "./components/league-selector";
import { LevelCapSelector } from "./components/level-cap-selector";
import { ResultTable } from "./result_table/table";
import { useGenerateRankedSpreads } from "@/lib/useGenerateRankedSpreads";
import { CompareModes } from "@/@types/compare-modes";

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

  const [anyHp, setAnyHp] = useState<boolean>(true);
  const [hp, setHp] = useState<number>(defaultPokemon.hp);
  const [anyCp, setAnyCp] = useState<boolean>(true);
  const [cp, setCp] = useState<number>(defaultPokemon.cp);

  const [hpFilterMode, setHpFilterMode] = useState<CompareModes>("eq");

  const [cpFilterMode, setCpFilterMode] = useState<CompareModes>("eq");

  const matchingSpreads = useGenerateRankedSpreads(
    pokemon,
    pokemon.floor ?? 0,
    league,
    levelCap,
    0,
    "product"
  );

  const filtered = useMemo(() => {
    return matchingSpreads.filter((spread) => {
      const hpMatch =
        anyHp ||
        (hpFilterMode === "eq" && spread.stats.sta.value === hp) ||
        (hpFilterMode === "gt" && spread.stats.sta.value >= hp) ||
        (hpFilterMode === "lt" && spread.stats.sta.value <= hp);

      const cpMatch =
        anyCp ||
        (cpFilterMode === "eq" && spread.cp === cp) ||
        (cpFilterMode === "gt" && spread.cp >= cp) ||
        (cpFilterMode === "lt" && spread.cp <= cp);

      return hpMatch && cpMatch;
    });
  }, [matchingSpreads, hp, anyHp, cp, anyCp, hpFilterMode, cpFilterMode]);

  return (
    <div className="items-start gap-6 space-y-0 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 px-4 sm:px-0 w-full">
      <SpeciesDropdown
        pokemon={pokemon}
        onChange={setPokemon}
        label="Pokémon"
      />
      <CpSelector
        cp={cp}
        setCp={setCp}
        league={league}
        anyCp={anyCp}
        setAnyCp={setAnyCp}
        mode={cpFilterMode}
        onModeChange={setCpFilterMode}
      />
      <HpSelector
        hp={hp}
        setHp={setHp}
        anyHp={anyHp}
        setAnyHp={setAnyHp}
        mode={hpFilterMode}
        onModeChange={setHpFilterMode}
      />
      <LeagueSelector league={league} setLeague={setLeague} />
      <LevelCapSelector levelCap={levelCap} setLevelCap={setLevelCap} />
      <ResultTable matchingSpreads={filtered} />
      <ScatterPokemonChart matchingSpreads={filtered} />
    </div>
  );
}
