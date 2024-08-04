import React from "react";
import {
  FilterFormContext,
} from "@/features/search-filter";
import { IvFilter, StarsFilter } from "@/features/search-filter/stats";
import { TagFilter } from "@/features/search-filter/tag-filter/tag-filter";

export default function Filter() {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      <FilterFormContext>
        <TagFilter tagKey="acquirement" />
        <TagFilter tagKey="region" />
        <TagFilter tagKey="rarity" />
        <StarsFilter />
        <IvFilter />
        <TagFilter tagKey="gender" />
      </FilterFormContext>
    </main>
  );
}
