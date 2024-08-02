import { useMessages } from "next-intl";
import { SearchFilter } from "../../search-filter-schema";

function acquirementStrParser({ tags: { acquirement } }: SearchFilter): string {
  const { filters } = useMessages() as IntlMessages;

  return Object.entries(acquirement)
    .filter(([_, value]) => value)
    .map(([key]) => {
      return `${
        filters?.tags.acquirement[
          key as keyof SearchFilter["tags"]["acquirement"]
        ].value
      }`;
    })
    .join(",");
}

export { acquirementStrParser };
