import React from "react";
import { FilterFormContext } from "@/features/search-filter";
import { IvRange } from "@/features/search-filter/iv-filter";
import { StarsFilter } from "@/features/search-filter/iv-filter";

export default function Filter() {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      <FilterFormContext>
        <IvRange />
        <StarsFilter />
      </FilterFormContext>
    </main>
  );
}
