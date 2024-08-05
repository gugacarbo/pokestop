import React from "react";
import {
  FilterFormContext,
} from "@/features/search-filter";
import { IvFilter, StarsFilter } from "@/features/search-filter/stats";
import { TagFilter } from "@/features/search-filter/tag-filter/tag-filter";
import { BuddyFilter } from "@/features/search-filter/stats/buddy-filter";

export default function Filter() {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      <FilterFormContext>
        <TagFilter tagKey="acquirement" />
        <TagFilter tagKey="region" />
        <TagFilter tagKey="rarity" />
        <StarsFilter />
        <IvFilter />
        <BuddyFilter />
        <TagFilter tagKey="gender" />
      </FilterFormContext>
    </main>
  );
}
