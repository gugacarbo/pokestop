import { Card, CardContent } from "@/components/ui/card";
import { SearchFilter } from "./search-filter-schema";
import { useMessages } from "next-intl";

export function FilterResult({ result }: { result: SearchFilter }) {
  const { filters } = useMessages();

  function parseIvs({ ivs }: SearchFilter) {
    return Object.entries(ivs)
      .filter(([_, value]) => value.active)
      .map(([key, value]) => {
        return `${value.mode === "lt" ? "-" : ""}${value.value}${
          value.mode === "gt" ? "-" : ""
        }${key}`;
      })
      .join("&");
  }

  function parseFilters(filters: SearchFilter) {
    return {
      stars: parseStars(filters),
      ivs: parseIvs(filters),
    };
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        {Object.values(parseFilters(result))
          .filter((v) => v)
          .join("&")}
      </CardContent>
    </Card>
  );
}

function parseStars({ stars }: SearchFilter) {
  return Object.entries(stars)
    .map(([key, value]) => {
      return value ? `${key}*` : null;
    })
    .filter((c) => c)
    .join(",");
}
