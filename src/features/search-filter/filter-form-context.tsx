"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  defaultValues,
  SearchFilter,
  searchFilterSchema,
} from "./search-filter-schema";

import { Form } from "@/components/ui/form";
import { FilterResult } from "./filter-result";
import { useLocalStorage } from "usehooks-ts";

export function FilterFormContext({ children }: { children: React.ReactNode }) {
  const [value, setValue, resetValue] = useLocalStorage(
    "test-key",
    defaultValues,
    {
      initializeWithValue: true,
    }
  );

  const form = useForm<SearchFilter>({
    resolver: zodResolver(searchFilterSchema),
    defaultValues,
    values: value,
    mode: "all",
  });

  return (
    <Form {...form}>
      <div className="flex flex-col gap-2 w-full">
        <FilterResult result={form.getValues()} reset={resetValue} />
        <form onSubmit={form.handleSubmit(setValue)}>
          <div className="flex gap-2">{children}</div>
          <button>send</button>
        </form>
      </div>
    </Form>
  );
}
