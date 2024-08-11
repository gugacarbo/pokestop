import { RankedSpread } from "@/lib/generateRankedSpreads";
import { cn } from "@/lib/utils";
import { CellContext } from "@tanstack/react-table";
import { useTranslations } from "next-intl";

function RankCell<T extends RankedSpread, V>({
  row,
  getValue,
}: CellContext<T, V>) {
  const ivs = row.original.ivs;
  const t = useTranslations("main.numbers");

  const value = getValue<number>();

  const numberColor = () => {
    if (value === 1) return "text-yellow-600 dark:text-yellow-500";
    if (value <= 5) return "text-emerald-600 dark:text-emerald-400";
    if (value <= 50) return "text-blue-600 dark:text-blue-400";
    if (value >= 200) return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={cn(
          "flex items-start text-center leading-none",
          numberColor()
        )}
      >
        <b>{value}</b>
        <small>{t("ordinal-symbol", { num: value })}</small>
      </div>
      <div className="flex justify-center items-center text-center">
        <small className="leading-none">{ivs?.atk}-</small>
        <small className="leading-none">{ivs?.def}-</small>
        <small className="leading-none">{ivs?.sta}</small>
      </div>
    </div>
  );
}

export { RankCell };
