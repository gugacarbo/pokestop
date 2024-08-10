import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const RowSelector = <T,>(
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  options?: {
    disabled?: boolean | ((row: T) => boolean | undefined);
    href?: string | ((row: T) => string | undefined);
  }
): ColumnDef<T> => ({
  id: "select",
  size: 0,
  maxSize: 1,
  cell: ({ row, table }: CellContext<T, unknown>) => {
    const navigate = useNavigate();
    const Component = Icon || ChevronRight;
    return (
      <div className="flex-1 place-items-center grid">
        <Button
          disabled={
            typeof options?.disabled === "function"
              ? options.disabled(row.original)
              : options?.disabled
          }
          size="icon"
          variant="outline"
          onClick={(value) => {
            // table.toggleAllPageRowsSelected(false);
            const href =
              typeof options?.href === "function"
                ? options.href(row.original)
                : options?.href;
            if (href) {
              navigate(href);
            } else {
              table.resetRowSelection();
              row.toggleSelected(!!value);
            }
          }}
        >
          <Component
            className={cn(
              "size-5 sm:size-6 2xl:size-7 cursor-pointer",
              row.getIsSelected() && "stroke-primary"
            )}
            aria-label="Select row"
          />
        </Button>
      </div>
    );
  },
  // size: 10,
  // maxSize: 20,
  enableSorting: false,
  enableHiding: false,
});
