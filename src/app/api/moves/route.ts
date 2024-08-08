import type { NextRequest, NextResponse } from "next/server";
import moves from "./data/moves";
import { moveSchema } from "@/features/pokemon/@types/move/move";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  if (!moves) {
    return new Response(
      JSON.stringify({
        error: `Move data not found`,
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
    Object.entries(moves).map(([key, value]) => {
      return [key, moveSchema.parse(value)];
    })
  );

  return new Response(JSON.stringify(parsed), {
    headers: {
      "content-type": "application/json",
    },
  });
}
