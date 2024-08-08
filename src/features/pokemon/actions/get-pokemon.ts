import { api } from "@/app/api/axios";
import {
  defaultPokemon,
  Pokemon,
  pokemonSchema,
} from "../@types/pokemon/pokemon";
import { pokemonFactory } from "../Pokemon";
import pokemons from "@/app/api/data/pokemons/data/pokemons";

export async function getAllPokemon(
  parsed?: boolean
): Promise<Record<string, Pokemon>> {
  try {
    // const pokeData = (await api.get<Record<string, Pokemon>>("/data/pokemons"))
    //   ?.data;
    const pokeData = pokemons

    if (parsed) {
      return await parseAllPokemon(pokeData);
    }

    return pokeData ?? {};
  } catch (e) {
    return {};
  }
}

async function parseAllPokemon(pokemons: Record<string, Pokemon>) {
  const factory = pokemonFactory();
  const p:
    Record<string, Pokemon>
  = {}
  for (const key in pokemons) {
    const poke = pokemons[key];

    p[key] = (await factory.get(key)) ?? poke;
  }

  return p;
}

async function getPokemonById(
  poke_id: string | number
): Promise<Pokemon | undefined> {
  const pokemons = await getAllPokemon();

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
