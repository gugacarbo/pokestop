import React from "react";
import { AcquirementFilter, FilterFormContext } from "@/features/search-filter";
import { IvFilter, StarsFilter } from "@/features/search-filter/iv-filter";

export default function Filter() {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      <FilterFormContext>
        <IvFilter />
        <StarsFilter />
        <AcquirementFilter />
      </FilterFormContext>
    </main>
  );
}
