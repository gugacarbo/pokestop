import { cva, type VariantProps } from "class-variance-authority";
import { SearchFilter } from "../schemas/search-filter-schema";
import { useBlockFiltersParse } from "../hooks/block-parsers";
import { useBooleanBlockParser } from "../hooks/block-parsers/use-boolean-block-parser";

const blockClass = cva("flex items-center", {
  variants: {
    color: {
      0: "",
      1: "text-blue-500",
      2: "text-emerald-500",
      3: "text-amber-500",
      4: "text-red-500",
      5: "text-purple-500",
      6: "text-pink-500",
      7: "text-cyan-500",
      8: "text-lime-500",
      9: "text-rose-500",
    },
  },
  defaultVariants: {
    color: 0,
  },
});

type BlockVariantType = VariantProps<typeof blockClass>;

function FilterBlocksResult({ result }: { result: SearchFilter }) {
  const { tags } = useBlockFiltersParse(result);
  return <div></div>;
}

export { FilterBlocksResult };  
