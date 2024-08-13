import { useMemo } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table as TableInstance } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function TablePageSizeSelect<TData>({
  table,
  label,
  className,
}: {
  table: TableInstance<TData>;
  label?: string;
  className?: string;
}) {
  const t = useTranslations("main");

  const pageSize = table.getState().pagination.pageSize;
  const rowCount = table.getRowCount();
  const min = 10; // min=step

  const sizes = useMemo(() => {
    const max = rowCount < 500 ? rowCount : 500;

    const newSizes = [];

    for (let i = min; i <= max; i += i < 10 ? 1 : 1 + 4) {
      newSizes.push(i);
    }

    if (!newSizes.some((size) => size === rowCount)) newSizes.push(rowCount);

    if (!newSizes.includes(pageSize)) newSizes.push(pageSize);
    return newSizes.sort((a, b) => a - b);
  }, [rowCount, pageSize, min]);

  if (rowCount === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-baseline gap-1 font-semibold whitespace-nowrap",
        className
      )}
    >
      <span>{t("common.showing")}</span>
      {rowCount < min ? (
        <span> {rowCount} </span>
      ) : (
        <Select
          onValueChange={(e) => {
            table.setPageSize(Number(e));
          }}
          defaultValue={pageSize.toString()}
        >
          <SelectTrigger className="mx-0.5 px-3 w-fit">
            <SelectValue placeholder="0" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size} value={size?.toString()}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      <small>{t("common.of")}</small>
      <span>{rowCount}</span>
      <span>{label}</span>
    </div>
  );
}

export { TablePageSizeSelect };
