"use client";

import React, { FC, useReducer, useEffect, ReactNode } from "react";

import { Candidate, Context } from ".";

import { candidateReducer } from "./candidateReducer";
import { cacheCandidate } from "./cache-candidate";
import { getInitialCandidate } from "./get-initial-candidate";

function useCandidateReducer(cachedCandidate: Candidate | null) {
  const [candidate, dispatch] = useReducer(
    candidateReducer,
    getInitialCandidate({}, cachedCandidate)
  );

  return [candidate, dispatch] as const;
}

function useSyncCandidateToCache(candidate: Candidate) {
  useEffect(() => {
    cacheCandidate(candidate);
  }, [candidate]);
}

export const Provider: FC<{
  cachedCandidate: Candidate | null;
  children: ReactNode;
}> = ({ cachedCandidate, children }) => {
  const [candidate, dispatch] = useCandidateReducer(cachedCandidate);
  useSyncCandidateToCache(candidate);

  return (
    <Context.Provider value={{ candidate, dispatch }}>
      {children}
    </Context.Provider>
  );
};
