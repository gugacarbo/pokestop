import type { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { getPokemonById } from "@/features/pokemon/actions/get-pokemon";
import { pokemon } from "@/features/pokemon/Pokemon";
import { NextApiRequest } from "next";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { poke: string } }
) {
  const id = params.poke;
  const poke = pokemon(id);

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

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // poke += suffix

  return new Response(JSON.stringify(poke), {
    headers: {
      "content-type": "application/json",
    },
  });
}
