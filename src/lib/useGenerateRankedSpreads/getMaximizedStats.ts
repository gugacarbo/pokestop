import { LeagueCPCap } from "@/@types/league";
import { LevelCap } from "@/@types/level-cap";
import { Pokemon, PokemonIVs } from "@/@types/pokemon";

import { SpreadWithMaximizedStats } from ".";
import { getLevel } from "./getLevel";
import { getStats } from "./getStats";
import { getCP } from "./getCP";

export function getMaximizedStats(
  species: Pokemon,
  ivs: PokemonIVs,
  maxCP: LeagueCPCap,
  maxLevel: LevelCap
): SpreadWithMaximizedStats {
  const atk = ivs.atk + species.stats.atk;
  const def = ivs.def + species.stats.def;
  const sta = ivs.sta + species.stats.sta;

  const level = getLevel(atk, def, sta, maxCP, maxLevel);

  const cp = getCP(atk, def, sta, level);
  const stats = getStats(atk, def, sta, level);

  const product = stats.atk * stats.def * stats.sta;
  const bulkProduct = stats.def * stats.sta;

  return {
    level,
    ivs,
    stats,
    cp,
    product,
    bulkProduct,
  };
}
