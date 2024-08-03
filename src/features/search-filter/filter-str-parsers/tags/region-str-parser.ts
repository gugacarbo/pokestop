import { useMessages } from "next-intl";
import { SearchFilter } from "../../search-filter-schema";
import { applyNot } from "..";

function regionStrParser({ tags: { region } }: SearchFilter): string {
  const { filters } = useMessages() as IntlMessages;

  return Object.entries(region)
    .filter(([_, value]) => value.value)
    .map(([key, value]) => {
      return applyNot(
        `${
          filters?.tags.region[key as keyof SearchFilter["tags"]["region"]]
            .value
        }`,
        value.not
      );
    })
    .join(",");
}

export { regionStrParser };
