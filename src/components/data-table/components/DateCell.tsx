import { cn } from "@/lib/utils";
import { CellContext, ColumnDef, CoreRow } from "@tanstack/react-table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export type StyleFn<T> = <K>(
  date: Date,
  data: T,
  row: CoreRow<K>
) => string | null | undefined | false;

function DateCell<T>({
  key,
  formatStr,
  cellClassName,
  align,
  styleFn,
  children,
  cell,
  timeFormat = "EEEEEE HH:mm",
  timeChildren,
  ...props
}: {
  key: keyof T;
  cellClassName?: string;
  formatStr: string;
  align?: "left" | "center" | "right";
  styleFn?: StyleFn<T> | StyleFn<T>[];
  children?: (props: { data: T }) => React.ReactNode;
  cell?: (props: Pick<CellContext<T, unknown>, "row">) => React.ReactNode;
  timeFormat?: string | null;
  timeChildren?: (props: { data: T }) => React.ReactNode;
} & Partial<ColumnDef<T>>): ColumnDef<T> {
  return {
    size: 5,
    sortingFn: "datetime",
    accessorKey: key,
    cell: ({ row }: CellContext<T, unknown>) => {
      if (cell) {
        return cell({ row });
      }
      const styles =
        styleFn && Array.isArray(styleFn)
          ? styleFn.map((fn) =>
              fn(row?.original?.[key] as Date, row.original, row)
            )
          : [styleFn?.(row?.original?.[key] as Date, row.original, row)];

      return (
        <div
          className={cn(
            "flex flex-col text-sm",
            align === "center" && "text-center",
            align === "right" && "text-right",
            cellClassName,
            styles
          )}
        >
          <span className="capitalize">
            {row?.original?.[key] &&
              format(row?.original?.[key] as string, formatStr, {
                locale: ptBR,
              })}
          </span>

          {timeFormat && (
            <span className="capitalize">
              {row?.original?.[key] &&
                format(row?.original?.[key] as string, timeFormat, {
                  locale: ptBR,
                })}
              {timeChildren?.({ data: row?.original })}
            </span>
          )}

          {children?.({ data: row?.original })}
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
    ...props,
  };
}

export { DateCell };
