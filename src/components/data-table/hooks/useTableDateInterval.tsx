import { format, isValid, parseISO } from "date-fns";
import { useMemo } from "react";
import { DateRange } from "react-day-picker";
import { useSearchParams } from "react-router-dom";

function useTableDateInterval(
  { from: defaultFrom, to: defaultTo }: DateRange = {
    from: undefined,
    to: undefined,
  }
) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentDates = useMemo(() => {
    const f = searchParams.get("from_date")
      ? parseISO(searchParams.get("from_date") ?? "")
      : defaultFrom;
    const t = searchParams.get("to_date")
      ? parseISO(searchParams.get("to_date") ?? "")
      : defaultTo;

    return {
      from: f && isValid(f) ? f : undefined,
      to: t && isValid(t) ? t : undefined,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("from_date"), searchParams.get("to_date")]);

  function setDateInterval(
    updaterOrValue: DateRange | ((state: DateRange) => DateRange)
  ) {
    let newValues: DateRange;

    if (updaterOrValue instanceof Function) {
      newValues = updaterOrValue(currentDates);
    } else {
      newValues = updaterOrValue;
    }

    setSearchParams(
      (params) => {
        const newFromDate = newValues.from
          ? format(newValues.from, "yyyy-MM-dd")
          : "";
        const newToDate = newValues.to
          ? format(newValues.to, "yyyy-MM-dd")
          : "";

        if (params.get("from_date") !== newFromDate) {
          params.set("from_date", newFromDate);
        }

        if (params.get("to_date") !== newToDate) {
          params.set("to_date", newToDate);
        }

        return params;
      },
      { replace: true }
    );
  }

  return [currentDates, setDateInterval] as const;
}

export { useTableDateInterval };
