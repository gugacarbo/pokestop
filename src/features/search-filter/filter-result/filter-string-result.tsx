import { cva, type VariantProps } from "class-variance-authority";

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

function FilterStringResult({ parsed }: { parsed: string }) {
  const andBlocks = parsed.split("&").map((block, index) => (
    <p
      key={index}
      className={blockClass({
        color: Math.trunc(index % 10) as BlockVariantType["color"],
      })}
    >
      {index !== 0 && "&"}
      <span>{block}</span>
    </p>
  ));

  return (
    <div>
      <div className="flex gap-1 bg-popover shadow-sm px-2 py-1 border border-border rounded-md w-full h-16 outline-none resize-none">
        {andBlocks}
      </div>
    </div>
  );
}

export { FilterStringResult };
