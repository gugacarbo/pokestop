import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SearchIcon, XIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

function GlobalFilterInputs<TData>({
  table,
  placeholder = "Procurar...",
  disabled = false,
  className = "",
  useQueryValue,
}: {
  table?: Table<TData>;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  useQueryValue?: boolean;
}) {
  const [searchParams] = useSearchParams();

  const [filterValue, setFilterValue] = useState(
    (useQueryValue && searchParams.get("global_search")) || ""
  );

  useDebounce(
    () => {
      table?.setPageIndex(0);
      table?.setGlobalFilter(filterValue);
    },
    300,
    [filterValue]
  );

  return (
    <Label
      className={cn(
        "flex items-center gap-2 w-full max-w-sm relative",
        className
      )}
    >
      <Input
        disabled={disabled}
        value={filterValue}
        placeholder={placeholder}
        onChange={(event) => setFilterValue(event.target.value)}
        className="peer"
      />
      <Button
        variant="ghost"
        className={cn(
          "cursor-pointer transition  absolute right-2 peer-focus:text-destructive/60 hover:text-foreground/60 text-foreground/30",
          filterValue ? "opacity-100" : "opacity-0"
        )}
        onClick={() => {
          table?.resetGlobalFilter();
          setFilterValue("");
        }}
        size="icon"
      >
        <XIcon className="size-6" />
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          table?.resetGlobalFilter();
          setFilterValue("");
        }}
        className={cn(
          "cursor-pointer transition  absolute right-2 peer-focus:text-foreground/60 hover:text-foreground/60 text-foreground/30",
          !filterValue ? "opacity-100" : "opacity-0"
        )}
        size="icon"
      >
        <SearchIcon className="size-5" />
      </Button>
    </Label>
  );
}

export default GlobalFilterInputs;
