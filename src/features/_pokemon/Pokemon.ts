import { type Pokemon } from "./@types/pokemon/pokemon";
import { addMove } from "./actions/add-move";
import { getAllPokemon, getPokemonById } from "./actions/get-pokemon";

interface PokemonFactoryInterface {
  get: (poke_id: string | number) => Promise<Pokemon | undefined>;
  getAll: () => Promise<Record<string, Pokemon>>;
}

function pokemonFactory(): PokemonFactoryInterface {
  function get(poke_id: string | number) {
    const id = String(poke_id).replace("_xl", "");
    return pokemon(id);
  }

  return {
    get,
    getAll: () => getAllPokemon(true),
  };
}

async function pokemon(poke_id: string): Promise<Pokemon | undefined> {
  const id = poke_id.replace("_xl", "");

  const data = await getPokemonById(poke_id);

  if (!data) {
    console.log(id + " not found");
    return;
  }

  data.speciesId = id;
  data.fastMovePool = [];
  data.chargedMovePool = [];

  for (var i = 0; i < data.fastMoves.length; i++) {
    await addMove(data.fastMoves[i], data, "fastMovePool");
  }
  for (var i = 0; i < data.chargedMoves.length; i++) {
    await addMove(data.chargedMoves[i], data, "chargedMovePool");
  }

  // Add Return and Frustration for eligible Pokemon
  if (data.tags && data.tags.indexOf("shadoweligible") > -1) {
    data.shadowEligible = true;
    // if ((data?.level25CP ) <= battle.getCP()) {
    // }
    await addMove("RETURN", data, "chargedMovePool");
    if (!data.legacyMoves) data.legacyMoves = [];
    data.legacyMoves.push("RETURN");
  }

  if (data.tags && data.tags.indexOf("shadow") > -1) {
    data.shadowEligible = true;
    await addMove("FRUSTRATION", data, "chargedMovePool");
    if (!data.legacyMoves) data.legacyMoves = [];
    data.legacyMoves.push("FRUSTRATION");
  }

  data.fastMovePool.sort((a, b) =>
    a.moveId > b.moveId ? 1 : b.moveId > a.moveId ? -1 : 0
  );
  data.chargedMovePool.sort((a, b) =>
    a.moveId > b.moveId ? 1 : b.moveId > a.moveId ? -1 : 0
  );

  return data;
}

export { pokemon, pokemonFactory };
