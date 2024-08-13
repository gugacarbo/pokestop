"use server";

import { cookies } from "next/headers";
import { Candidate } from ".";

// import * as gtag from "@/utils/gtag";

export async function cacheCandidate(candidate: Candidate) {
  // gtag?.event("candidate_created", {
  //   species_id: candidate.species.id,
  //   iv_atk: candidate.ivs.atk,
  //   iv_def: candidate.ivs.def,
  //   iv_sta: candidate.ivs.sta,
  //   floor: candidate.floor,
  // });

  const cookieStore = cookies();

  cookieStore.set({
    name: "candidate",
    value: JSON.stringify(candidate),
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  });
}
