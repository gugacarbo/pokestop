import { useTranslations } from "next-intl";
import { PokeStats } from "@/features/poke-stats";

function Page() {
  const t = useTranslations("pages");

  return (
    <>
      <h1 className="px-4 sm:px-0 pt-2 w-full font-semibold text-2xl">
        {t("poke-stats.title")}
        <span className="text-muted-foreground text-xs">Beta</span>
      </h1>
      <p className="mb-2 px-4 sm:px-0 w-full text-gray-700 text-sm dark:text-gray-300">
        {t("poke-stats.description")}
      </p>

      <PokeStats />
    </>
  );
}

export default Page;
