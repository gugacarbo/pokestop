"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  defaultValues,
  SearchFilter,
  searchFilterSchema,
} from "./schemas/search-filter-schema";

import { Form } from "@/components/ui/form";
import { FilterResult } from "./filter-result";
import { usePersistHookForm } from "@/hooks/use-persist-hook-form";

export function FilterFormContext({ children }: { children: React.ReactNode }) {
  const form = useForm<SearchFilter>({
    resolver: zodResolver(searchFilterSchema),
    defaultValues,
    resetOptions: {
      keepDirtyValues: true,
    },
  });

  const { reset } = usePersistHookForm<SearchFilter>({
    localKey: "test-key",
    watch: form.watch,
    setValue: form.setValue,
    reset: form.reset,
    schema: searchFilterSchema,
  });

  return (
    <Form {...form}>
      <div className="flex flex-col gap-2 w-full f">
        <FilterResult
          result={form.getValues()}
          reset={() => {
            reset();
            form.reset(defaultValues);
          }}
        />
        <form onSubmit={form.handleSubmit(() => {})}>
          <div className="flex flex-wrap gap-2">{children}</div>
        </form>
      </div>
    </Form>
  );
}
