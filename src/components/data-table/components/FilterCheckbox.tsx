import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import { ListFilter, FilterIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function FilterCheckbox<T>({
  column,
  options,
  allowNone,
  filterId,
}: {
  column: Column<T>;
  options: { label: string; value: string | T }[];
  allowNone?: boolean | string;
  filterId?: boolean | string;
}) {
  const currentValue = column.getFilterValue();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={column.getIsFiltered() ? "default" : "outline"}
          className={cn(
            "place-items-center grid p-1 h-auto aspect-square mr-2",
            column.getIsFiltered() && " text-white"
          )}
          size="sm"
        >
          <FilterIcon
            className={cn("size-4 2xl:size-5 ", column.getIsFiltered() && " text-white")}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Filtrar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <RadioGroup value={currentValue as string} defaultValue={""}>
          <FilterItem
            label="Todos"
            value=""
            setFilterValue={column.setFilterValue}
            currentValue={currentValue as string}
          />

          {options?.map((option) => (
            <FilterItem
              key={`${option.value}`}
              label={option.label}
              value={option.value as string}
              setFilterValue={column.setFilterValue}
              currentValue={currentValue as string}
            />
          ))}
          {allowNone && (
            <FilterItem
              label={allowNone !== true ? allowNone : "Nenhum"}
              value="__none"
              setFilterValue={column.setFilterValue}
              currentValue={currentValue as string}
            />
          )}
          {filterId && (
            <IdFilterList
              setFilterValue={column.setFilterValue}
              currentValue={currentValue as string}
              column={column}
              label={filterId === true ? undefined : filterId}
            />
          )}
        </RadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { FilterCheckbox };

function FilterItem({
  label,
  value,
  setFilterValue,
  currentValue,
}: {
  currentValue?: string;
  label: string;
  value: string;
  setFilterValue: (value: string) => void;
}) {
  return (
    <DropdownMenuItem
      key={`${value}`}
      onClick={() =>
        currentValue === value ? setFilterValue("") : setFilterValue(value)
      }
      className={cn("text-sm flex items-center gap-2")}
    >
      <RadioGroupItem value={value} id={value as string} />
      {label}
    </DropdownMenuItem>
  );
}

function IdFilterList<T>({
  label,
  currentValue,
  setFilterValue,
  column,
}: {
  label?: string;
  currentValue?: string;
  setFilterValue: (value: string) => void;
  column: Column<T>;
}) {
  const values = Array.from(column.getFacetedUniqueValues()) as unknown as [
    id: number,
    name: string
  ][];

  return (
    <DropdownMenuGroup>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <ListFilter
            className={cn(
              "mr-2 size-5",
              Number(currentValue) > 0 && "text-primary"
            )}
          />
          {label || "Filtrar"}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            {values?.map((value) => (
              <DropdownMenuItem
                key={`${value?.[0]}`}
                onClick={() =>
                  currentValue === value?.[0].toString()
                    ? setFilterValue("")
                    : setFilterValue(value?.[0].toString())
                }
                className={cn("text-sm flex items-center gap-2")}
              >
                <RadioGroupItem
                  value={value?.[0].toString()}
                  id={value?.[0].toString()}
                />
                {value?.[1]}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  );
}
