import { CellContext, ColumnDef } from "@tanstack/react-table";
import { MousePointer2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@/lib/navigation";

const GoToId = <T,>(
  route: string,
  key?: keyof T | null,
  options: {
    buttonSize: "md" | "sm";
  } = {
    buttonSize: "md",
  }
): ColumnDef<T & { id: number | string }> => ({
  id: "action",
  size: options.buttonSize === "md" ? 5 : 4,
  cell: ({ row }: CellContext<T & { id: number | string }, unknown>) => {
    return (
      <Btn
        buttonSize={options.buttonSize}
        path={`${route}/${row.original?.[key ?? "id"]}`}
      />
    );
  },
  enableSorting: false,
  enableHiding: false,
});

const Btn = ({
  path,
  buttonSize,
}: {
  path: string;
  buttonSize: "md" | "sm";
}) => (
  <TooltipProvider>
    <Tooltip>
      <Link href={path}>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" type="button">
            <MousePointer2
              className={cn(
                "transition size-4 md:size-5 hover:stroke-primary",
                buttonSize === "sm" && "size-3 md:size-4"
              )}
            />
          </Button>
        </TooltipTrigger>
      </Link>
      <TooltipContent>
        <p>Ir até</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export { GoToId };
