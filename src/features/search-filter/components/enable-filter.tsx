import { FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { NotInput } from "@/features/search-filter/components/NotInput";
import { useTranslations } from "next-intl";

function EnableFilter({
  name,
  checked,
  onCheckedChange,
  category = "ivs",
  nameKey = "name",
  valueKey = "active",
}: {
  name?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  category?: string;
  nameKey?: string;
  valueKey?: string;
}) {
  const t = useTranslations("filters.stats");

  return (
    <div className="flex items-center gap-2 w-full">
      <NotInput
        valueKey="active"
        name={`stats.${category}${name ? `.${name}` : ""}`}
      />
      <FormLabel className="capitalize">
        {/*@ts-ignore */}
        {t(`${category}.${name ? `${name}.${nameKey}` : `${nameKey}`}`)}
      </FormLabel>
      <Switch
        className="ml-auto"
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
}

export { EnableFilter };
