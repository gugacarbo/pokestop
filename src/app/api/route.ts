import type { NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { poke: string } }
) {
  return new Response(
    JSON.stringify({
      whoami: env.APP_NAME,
      "-v": env.APP_VERSION,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
