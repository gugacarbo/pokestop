import { LanguageToggle } from "@/components/language-toggler";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Header() {
  const t = useTranslations("main");

  return (
    <header className="flex justify-between items-center shadow mb-2 px-6 py-3 border-b border-border w-full">
      <div className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <h1 className="font-bold text-xl">{t("metadata.title")}</h1>
      </div>

      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
