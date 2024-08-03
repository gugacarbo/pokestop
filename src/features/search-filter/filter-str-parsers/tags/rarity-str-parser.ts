import { useMessages } from "next-intl";
import { SearchFilter } from "../../search-filter-schema";
import { applyNot } from "..";

function rarityStrParser({ tags: { rarity } }: SearchFilter): string {
  const { filters } = useMessages() as IntlMessages;

  return Object.entries(rarity)
    .filter(([_, value]) => value.value)
    .map(([key, value]) => {
      return applyNot(
        `${
          filters?.tags.rarity[key as keyof SearchFilter["tags"]["rarity"]]
            .value
        }`,
        value.not
      );
    })
    .join(",");
}

export { rarityStrParser };
