import type { NextRequest, NextResponse } from "next/server";
import pokemons from "./data/pokemons";
import { pokemonSchema } from "@/features/pokemon/@types/pokemon/pokemon";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  if (!pokemons) {
    return new Response(
      JSON.stringify({
        error: `Pokemon data not found`,
        code: 404,
      }),
      {
        headers: {
          "content-type": "application/json",
        },
        status: 404,
      }
    );
  }

  const parsed = Object.fromEntries(
    Object.entries(pokemons).map(([key, value]) => {
      return [key, pokemonSchema.parse(value)];
    })
  );

  return new Response(JSON.stringify(parsed), {
    headers: {
      "content-type": "application/json",
    },
  });
}
