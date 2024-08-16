import { PokemonType } from "@/@types/pokemon-types";
import { typesEffectiveness, typesOrder } from "@/@types/type-effectiveness";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SpeciesTypeIcons from "@/features/pokemon/components/species-type-icons";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("pages");

  return (
    <Card className="mx-auto p-4 w-full">
      <CardHeader>
        <CardTitle>{t("type-chart.title")}</CardTitle>
        <CardDescription>{t("type-chart.description")}</CardDescription>
      </CardHeader>
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-[auto,repeat(18,1fr)]">
            <td className="place-items-center grid opacity-0 p-1 pointer-events-none">
              <SpeciesTypeIcons size={"lg"} types={["normal"]} />
            </td>
            {typesOrder.map((type) => (
              <td key={type} className="place-items-center grid p-1 w-full">
                <SpeciesTypeIcons size={"lg"} types={[type]} />
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="grid w-full">
          {Object.entries(typesEffectiveness)
            .sort(
              ([a], [b]) =>
                typesOrder.indexOf(a as PokemonType) -
                typesOrder.indexOf(b as PokemonType)
            )
            .map(([type, effectiveness]) => (
              <tr key={type} className="grid grid-cols-[auto,repeat(18,1fr)]">
                <td className="place-items-center grid p-1">
                  <SpeciesTypeIcons size={"lg"} types={[type as PokemonType]} />
                </td>
                {Object.entries(effectiveness)
                  .sort(
                    ([a], [b]) =>
                      typesOrder.indexOf(a as PokemonType) -
                      typesOrder.indexOf(b as PokemonType)
                  )
                  .map(([typ, effect]) => (
                    <td
                      key={type + typ}
                      className="items-center grid p-1 w-full h-full"
                    >
                      <div
                        className={cn(
                          "bg-muted text-center text-sm font-semibold w-full h-full flex items-center justify-center px-2 py-1.5 rounded-md border-border border shadow",
                          effect === 0.39 && "bg-sky-600",
                          effect === 0.63 && "bg-emerald-600",
                          effect === 1.6 && "bg-red-500"
                        )}
                      >
                        {(effect * 100).toFixed(0)}%
                      </div>
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Page;
