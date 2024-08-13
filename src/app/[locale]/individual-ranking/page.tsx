import React from "react";
import { Provider as CandidateContextProvider } from "@/features/candidate/use-candidate";
import { CandidateBuilder } from "@/features/candidate/builder/candidate-builder";
import { DataOutputSelector } from "@/features/settings/components/data-output-selector";
import { LevelCapSelector } from "@/features/settings/components/level-cap-selector";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { Candidate } from "@/features/candidate/use-candidate";
import { CandidateIndividualRanking } from "@/features/individual-ranking/candidate-individual-ranking";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });
  return {
    title: t("rankings.individual.metadata.title"),
    description: t("rankings.individual.metadata.description"),
  };
}

export const getCandidateCookie = async (): Promise<Candidate | null> => {
  const cookieStore = cookies();
  try {
    return JSON.parse(cookieStore.get("candidate")?.value ?? "{}") as Candidate;
  } catch (err) {
    return null;
  }
};

async function Page() {
  const candidate = await getCandidateCookie();
  return (
    <CandidateContextProvider cachedCandidate={candidate}>
      <CandidateBuilder>
        <LevelCapSelector />
        <DataOutputSelector />
      </CandidateBuilder>
      <CandidateIndividualRanking />
    </CandidateContextProvider>
  );
}

export default Page;
