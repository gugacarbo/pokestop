import React from "react";
import { IvFilter } from "@/features/search-filter/iv-filter";
import { FilterFormContext } from "@/features/search-filter";

export default function Filter() {
  return (
    <main className="flex flex-col justify-between items-center">
      <FilterFormContext>
        <IvFilter />
      </FilterFormContext>
    </main>
  );
}
