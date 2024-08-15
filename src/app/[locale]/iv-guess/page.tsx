import { IVGuess } from "@/features/iv-guess";
import { useTranslations } from "next-intl";

export default function IVGuessPage() {
  const t = useTranslations("pages");

  return (
    <>
      <h1 className="px-4 sm:px-0 pt-2 w-full font-semibold text-2xl">
        {t("iv-guess.title")}
        <span className="text-gray-400 text-xs dark:text-gray-500">Beta</span>
      </h1>
      <p className="mb-2 px-4 sm:px-0 w-full text-gray-700 text-sm dark:text-gray-300">
        {t("iv-guess.description")}
      </p>
      <IVGuess />
    </>
  );
}
