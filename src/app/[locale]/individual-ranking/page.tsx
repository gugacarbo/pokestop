import React from "react";
import { Provider as CandidateContextProvider } from "@/features/candidate/use-candidate";
import { CandidateBuilder } from "@/features/candidate/builder/candidate-builder";
import { DataOutputSelector } from "@/features/settings/components/data-output-selector";
import { getTranslations } from "next-intl/server";
import { CandidateIndividualRanking } from "@/features/individual-ranking/candidate-individual-ranking";
import { getCandidateCookie } from "@/features/candidate/get-candidate-cookie";
import { LevelCapSelector } from "@/features/candidate/builder/components/level-cap-selector";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });
  return {
    title: t("pages.individual-ranking.title"),
    description: t("pages.individual-ranking.description"),
  };
}

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
