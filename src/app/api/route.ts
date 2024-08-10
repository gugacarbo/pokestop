import type { NextRequest, NextResponse } from "next/server";
import pkg from "@/../package.json";

export const runtime = "edge";

export async function GET() {
  return new Response(
    JSON.stringify({
      whoami: pkg.name,
      "-v": pkg.version,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
