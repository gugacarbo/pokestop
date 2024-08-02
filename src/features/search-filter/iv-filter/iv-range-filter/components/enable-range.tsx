import { FormLabel } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useTranslations } from "next-intl";

function EnableRange({
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
    <div className="flex items-center gap-2">
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
      <FormLabel className="capitalize">
        {/*@ts-ignore */}
        {t(`ivs.${name}`)}
      </FormLabel>
    </div>
  );
}

export { EnableRange };
