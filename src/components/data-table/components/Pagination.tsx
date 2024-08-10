import { Table as TableInstance } from "@tanstack/react-table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
const MyPagination = <TData,>({
  table,
  className,
}: {
  table: TableInstance<TData>;
  className?: string;
}) => {
  const breakPoint = 5;

  const pageCount = table.getPageCount();
  const currentPageIndex = table.getState().pagination.pageIndex;

  const isLarge = pageCount > breakPoint;
  if (pageCount < 2) {
    return null;
  }
  return (
    <div
      className={cn(
        "flex items-center justify-end space-x-2 py-1 md:pb-2 2xl:py-4 mt-auto mr-auto ",
        className
      )}
    >
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => table.previousPage()}
              // disabled={!table.getCanPreviousPage()}
            />
          </PaginationItem>
          {/* //| Previous */}

          {/* //? Few Pages */}
          {!isLarge &&
            table.getPageOptions().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => table.setPageIndex(page)}
                  isActive={currentPageIndex === page}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

          {/* //* Many Pages */}
          {isLarge && (
            <>
              {currentPageIndex > 1 && (
                <>
                  <PaginationItem>
                    <PaginationLink onClick={() => table.setPageIndex(0)}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis className="size-3 md:size-4" />
                  </PaginationItem>
                </>
              )}

              {table
                .getPageOptions()
                .slice(
                  currentPageIndex > 1 ? currentPageIndex - 1 : 0,
                  currentPageIndex > 1
                    ? currentPageIndex + breakPoint - 3
                    : breakPoint
                )
                .map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => table.setPageIndex(page)}
                      // data-active={table.() === page}
                      isActive={currentPageIndex === page}
                    >
                      {page + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

              {currentPageIndex < pageCount - 2 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis className="size-3 md:size-4" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => table.setPageIndex(pageCount - 1)}
                    >
                      {pageCount}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}
            </>
          )}

          {/*//| Next  */}
          <PaginationItem>
            <PaginationNext
              // disabled={!!!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MyPagination;
