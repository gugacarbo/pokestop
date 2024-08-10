"use client";
import { useState } from "react";
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

  const matchingSpreads = useGenerateRankedSpreads(
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

  return (
    <div className="items-start gap-6 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 px-4 sm:px-0 w-full">
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
      />
      <HpSelector
        hp={hp}
        setHp={setHp}
        league={league}
        anyHp={anyHp}
        setAnyHp={setAnyHp}
      />
      <LeagueSelector league={league} setLeague={setLeague} />
      <LevelCapSelector levelCap={levelCap} setLevelCap={setLevelCap} />
      <ResultTable matchingSpreads={matchingSpreads} />
      <ScatterPokemonChart matchingSpreads={matchingSpreads} />
    </div>
  );
}
