import { api } from "@/app/api/axios";
import {
  defaultPokemon,
  Pokemon,
  pokemonSchema,
} from "../@types/pokemon/pokemon";

async function getPokemonById(
  poke_id: string | number
): Promise<Pokemon | undefined> {
  const pokemons = (await api.get<Record<string, Pokemon>>("/pokemon")).data;

  if (pokemons[poke_id]) {
    return pokemonSchema.parse({
      ...defaultPokemon,
      ...pokemons[poke_id],
    });
  } else if (!isNaN(parseInt(String(poke_id)))) {
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
