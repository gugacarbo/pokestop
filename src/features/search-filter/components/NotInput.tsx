import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { NotButton } from "./NotButton";

function NotInput({
  name,
  valueKey = "value",
}: {
  name: string;
  valueKey?: string;
}) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <NotButton
              value={field.value.not}
              disabled={!field.value[valueKey]}
              onClick={() => {
                field.onChange({
                  target: {
                    value: {
                      ...field.value,
                      not: !field.value.not,
                    },
                  },
                });
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { NotInput };
