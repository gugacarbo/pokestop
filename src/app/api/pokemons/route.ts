import type { NextRequest, NextResponse } from "next/server";
import { getAllPokemon } from "@/features/_pokemon/actions/get-pokemon";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const pokemons = await getAllPokemon(true);

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


  return new Response(JSON.stringify(pokemons), {
    headers: {
      "content-type": "application/json",
    },
  });
}
