import { useMessages } from "next-intl";
import { SearchFilter } from "../../search-filter-schema";
import { applyNot } from "..";

function acquirementStrParser({ tags: { acquirement } }: SearchFilter): string {
  const { filters } = useMessages() as IntlMessages;

  return Object.entries(acquirement)
    .filter(([_, value]) => value.value)
    .map(([key, value]) => {
      return applyNot(
        `${
          filters?.tags.acquirement[
            key as keyof SearchFilter["tags"]["acquirement"]
          ].value
        }`,
        value.not
      );
    })
    .join(",");
}

export { acquirementStrParser };
