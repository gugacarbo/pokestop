import { FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { NotInput } from "@/features/search-filter/components/NotInput";
import { useTranslations } from "next-intl";

function EnableFilter({
  name,
  checked,
  onCheckedChange,
}: {
  name: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  const t = useTranslations("filters");

  return (
    <div className="flex items-center gap-2 w-full">
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
      <NotInput valueKey="active" name={`ivs.${name}`} />
      <FormLabel className="capitalize">
        {/*@ts-ignore */}
        {t(`ivs.${name}.name`)}
      </FormLabel>
    </div>
  );
}

export { EnableFilter };
