import { z } from "zod";

const statKeys = z.enum(["atk", "def", "sta"]);
export type StatKey = z.infer<typeof statKeys>;

export const STATS: StatKey[] = statKeys.options;

export type RankableMetric = StatKey | "product" | "bulkProduct";

export const RANKABLE_METRICS: { key: RankableMetric; name: string }[] = [
  { key: "product", name: "Stat Product" },
  { key: "bulkProduct", name: "Bulk Product" },
  { key: "atk", name: "Attack" },
  { key: "def", name: "Defense" },
  { key: "sta", name: "Stamina" },
];
