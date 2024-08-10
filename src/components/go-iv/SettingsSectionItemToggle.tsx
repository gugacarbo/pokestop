import React, { FC } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsSectionItemToggle: FC<{
  label: string;
  description?: string;
  value: boolean;
  onInput: (value: boolean) => void;
}> = ({ label, description, value, onInput }) => {
  return (
    <div className="flex flex-grow justify-between items-center">
      <Label className="flex-grow pr-4 cursor-pointer select-none">
        <p className="font-semibold text-gray-900 dark:text-white leading-normal">
          {label}
        </p>

        {description && (
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {description}
          </p>
        )}
      </Label>

      <Switch
        checked={value}
        onCheckedChange={onInput}
        className={"border-background shadow-md"}
      >
        <span
          aria-hidden="true"
          className={`${value ? "translate-x-[18px]" : "translate-x-0.5"}
        pointer-events-none inline-block h-5 w-5 rounded-full bg-white translate-y-0.5 shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  );
};

export default SettingsSectionItemToggle;
