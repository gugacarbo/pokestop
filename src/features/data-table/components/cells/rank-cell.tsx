import { PokemonIVs } from "@/data/pokedex";
import { RankedSpread } from "@/lib/generateRankedSpreads";
import { cn } from "@/lib/utils";
import { CellContext } from "@tanstack/react-table";
import { useTranslations } from "next-intl";

function RankCell<
  T extends {
    ivs?: PokemonIVs;
    rank: number;
  },
  V
>({ row, getValue }: CellContext<T, V>) {
  const ivs = row.original.ivs;
  const t = useTranslations("main.numbers");

  const value = getValue<number>();

  const numberColor = () => {
    const percent = (4097 - value) / 4097;

    if (value === 1) return "text-amber-400 font-bold dark:text-yellow-500";
    else if (percent >= 0.95) return "text-blue-600 dark:text-blue-400";
    else if (percent >= 0.98) return "text-emerald-600 dark:text-emerald-400";
    else return "text-red-600 dark:text-red-400";
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
        <b>{t("ordinal-symbol", { num: value })}</b>
      </div>
      {ivs && (
        <div className="flex justify-center items-center text-center">
          <small className="leading-none">{ivs?.atk}-</small>
          <small className="leading-none">{ivs?.def}-</small>
          <small className="leading-none">{ivs?.sta}</small>
        </div>
      )}
    </div>
  );
}

export { RankCell };
