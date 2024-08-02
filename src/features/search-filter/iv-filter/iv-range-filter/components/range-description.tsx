import { FormDescription } from "@/components/ui/form";
import { firstUpper } from "@/lib/text";
import { useTranslations } from "next-intl";

function RangeDescription({ name }: { name: string }) {
  const t = useTranslations("filters");

  return (
    <FormDescription>
      {firstUpper(t("filter-by"))} {/*@ts-ignore */}
      <b>{t(`ivs.${name}`)}</b>.
    </FormDescription>
  );
}

export { RangeDescription };
