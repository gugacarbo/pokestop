import React from "react";
import { FilterFormContext } from "@/features/search-filter";
import { IvFilter, StarsFilter } from "@/features/search-filter/stats";
import { TagFilter } from "@/features/search-filter/tag-filter/tag-filter";
import { BuddyFilter } from "@/features/search-filter/stats/buddy-filter";
import { CatchFilter } from "@/features/search-filter/stats/catch-filter";

function Column({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-stretch gap-2 w-full">{children}</div>
  );
}

export default function Filter() {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      <FilterFormContext>
        <Column>
          <TagFilter tagKey="acquirement" />
          <TagFilter tagKey="gender" />
          <BuddyFilter />
        </Column>
        <Column>
          <TagFilter tagKey="region" />
          <CatchFilter />
        </Column>
        <TagFilter tagKey="rarity" />
        <Column>
          <StarsFilter />
          <IvFilter />
        </Column>
        <TagFilter tagKey="type" />

        <TagFilter tagKey="evolution" />
      </FilterFormContext>
    </main>
  );
}
