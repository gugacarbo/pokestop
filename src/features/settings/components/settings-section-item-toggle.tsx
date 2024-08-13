import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

function SettingsSectionItemToggle({
  label,
  description,
  value,
  onInput,
}: {
  label: string;
  description?: string;
  value: boolean;
  onInput: (value: boolean) => void;
}) {
  return (
    <Label className="flex flex-grow justify-between items-center">
      <div className="flex-grow pr-4 cursor-pointer select-none">
        <p className="font-semibold leading-normal">{label}</p>
        {description && (
          <p className="text-muted-foreground/80 text-sm">{description}</p>
        )}
      </div>
      <Switch
        checked={value}
        onCheckedChange={onInput}
        className={cn("border-border shadow-md", value && "border-primary")}
      />
    </Label>
  );
}

export { SettingsSectionItemToggle };
