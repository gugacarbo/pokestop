"use server";
import { cookies } from "next/headers";
import { Candidate } from "@/features/candidate/use-candidate";

export const getCandidateCookie = async (): Promise<Candidate | null> => {
  const cookieStore = cookies();
  try {
    return JSON.parse(cookieStore.get("candidate")?.value ?? "{}") as Candidate;
  } catch (err) {
    return null;
  }
};
