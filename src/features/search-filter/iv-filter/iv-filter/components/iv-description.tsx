import { FormDescription } from "@/components/ui/form";
import { firstUpper } from "@/lib/text";
import { useTranslations } from "next-intl";

function FilterDescription({ name }: { name: string }) {
  const t = useTranslations("filters");

  return (
    <FormDescription>
      {firstUpper(t("filter-by"))} {/*@ts-ignore */}
      <b>{t(`stats.ivs.${name}.name`)}</b>.
    </FormDescription>
  );
}

export { FilterDescription };
