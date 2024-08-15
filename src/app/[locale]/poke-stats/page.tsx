import { PokeStats } from "@/features/poke-stats";
import { PokeStatsHeader } from "./header";
import { getCandidateCookie } from "@/features/candidate/get-candidate-cookie";

async function Page() {
  const candidate = await getCandidateCookie();

  return (
    <>
      <PokeStatsHeader />
      <PokeStats candidate={candidate} />
    </>
  );
}

export default Page;
