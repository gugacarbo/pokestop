export type OutputDataKey =
  | "level"
  | "rank"
  | "cp"
  | "xlCandy"
  | "stats"
  | "statProduct"
  | "bulkProduct"
  | "percent";

export type OutputField = {
  key: OutputDataKey;
  name: string;
};

export const OUTPUT_DATA: OutputField[] = [
  { key: "rank", name: "Rank" },
  { key: "level", name: "Level" },
  { key: "cp", name: "CP" },
  { key: "xlCandy", name: "XL Candy" },
  {
    key: "statProduct",
    name: "Stat Product",
  },
  {
    key: "bulkProduct",
    name: "Bulk Product",
  },
  {
    key: "stats",
    name: "Stats",
  },
  {
    key: "percent",
    name: "% of Rank 1",
  },
];
