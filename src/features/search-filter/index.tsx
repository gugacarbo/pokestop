"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  defaultValues,
  SearchFilter,
  searchFilterSchema,
} from "./search-filter-schema";

import { IvFilter } from "./iv-filter";
import { Form } from "@/components/ui/form";
import { FilterResult } from "./filter-result";

export function FilterFormContext({ children }: { children: React.ReactNode }) {
  const form = useForm<SearchFilter>({
    resolver: zodResolver(searchFilterSchema),
    defaultValues,
  });

  function onSubmit(values: SearchFilter) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="flex flex-col gap-2">
        <FilterResult result={form.getValues()} />
        <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
      </div>
    </Form>
  );
}

export { IvFilter };
