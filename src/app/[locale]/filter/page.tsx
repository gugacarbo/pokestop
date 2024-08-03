import React from "react";
import {
  AcquirementFilter,
  FilterFormContext,
  RarityFilter,
} from "@/features/search-filter";
import { IvFilter, StarsFilter } from "@/features/search-filter/iv-filter";
import { RegionFilter } from "@/features/search-filter/tag-filter/region-filter/region-filter";

export default function Filter() {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      <FilterFormContext>
        <IvFilter />
        <StarsFilter />
        <AcquirementFilter />
        <RegionFilter />
        <RarityFilter />
      </FilterFormContext>
    </main>
  );
}
