import type { NextRequest, NextResponse } from "next/server";
import { pokemon } from "@/features/pokemon/Pokemon";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { poke: string } }
) {
  const id = params.poke;

  const poke = await pokemon(id);

  if (!poke) {
    return new Response(
      JSON.stringify({
        error: `Pokemon ${id} not found`,
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

  return new Response(JSON.stringify(id), {
    headers: {
      "content-type": "application/json",
    },
  });
}
