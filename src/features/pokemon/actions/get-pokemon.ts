import {
  defaultPokemon,
  Pokemon,
  pokemonSchema,
} from "../@types/pokemon/pokemon";
import pokemons from "../data/pokemon";

function getPokemonById(poke_id: string): Pokemon | undefined {
  if (pokemons[poke_id]) {
    return pokemonSchema.parse({
      ...defaultPokemon,
      ...pokemons[poke_id],
    });
  } else if (!isNaN(parseInt(poke_id))) {
    const p = Object.values(pokemons).find((p) => p.dex === Number(poke_id));

    if (p) {
      return pokemonSchema.parse({
        ...defaultPokemon,
        ...p,
      });
    }
  }
  return;
}

export { getPokemonById };
