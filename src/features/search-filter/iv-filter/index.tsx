"use client";
import { Card, CardContent } from "@/components/ui/card";

import { IvRange } from "./iv-range";
import { StarsFilter } from "./stars-filter";

export function IvFilter() {
  return (
    <div className="flex justify-center items-stretch gap-2">
      <Card>
        <CardContent className="pt-4">
          <IvRange />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-4">
          <StarsFilter />
        </CardContent>
      </Card>
    </div>
  );
}
