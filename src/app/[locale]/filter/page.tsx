import React from "react";
import { FilterFormContext } from "@/features/search-filter";
import { IvFilter, StarsFilter } from "@/features/search-filter/stats";
import { TagFilter } from "@/features/search-filter/tag-filter/tag-filter";
import { BuddyFilter } from "@/features/search-filter/stats/buddy-filter";
import { CatchFilter } from "@/features/search-filter/stats/catch-filter";
import { PokemonNameFilter } from "@/features/search-filter/pokemon/pokemon-name";

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
          <BuddyFilter />
          <TagFilter tagKey="evolution" />
        </Column>
        {/*  */}
        <Column>
          <CatchFilter />
          <IvFilter />
        </Column>
        {/*  */}
        <Column>
          <TagFilter tagKey="region" />
          <StarsFilter />
          <TagFilter tagKey="gender" />
        </Column>
        {/*  */}
        <Column>
          <PokemonNameFilter />
          <TagFilter tagKey="type" />
        </Column>
        {/*  */}
        <Column>
          <TagFilter tagKey="rarity" />
          <TagFilter className="justify-start" tagKey="size" />
        </Column>
      </FilterFormContext>
    </main>
  );
}
