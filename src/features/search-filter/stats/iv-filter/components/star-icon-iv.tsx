import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

function StarIconFilter({
  value,
  disabled,
}: {
  value: number;
  disabled?: boolean;
}) {
  const fade = [
    "opacity-15 fill-transparent",
    "opacity-30 stroke-transparent",
    "opacity-45 stroke-transparent",
    "opacity-75 ",
    "opacity-100 ",
  ];

  return (
    <div className={cn("flex items-center",
      disabled && "opacity-75"
    )}>
      <span className="w-3">{value}</span>
      <StarIcon
        className={cn(
          "size-4 stroke-amber-400 fill-amber-500 transition-all duration-150",
          fade[value]
        )}
      />
    </div>
  );
}

export { StarIconFilter };
