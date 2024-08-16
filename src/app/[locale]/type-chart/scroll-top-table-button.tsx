"use client";
import { Button } from "@/components/ui/button";
import { SkipBack } from "lucide-react";

function ScrollTopTable() {
  const scroll = () => {
    const y =
      (document?.getElementById("type-chart")?.getBoundingClientRect()?.top ||
        0) +
      window.scrollY -
      20;
    window.scroll({
      top: y,
      behavior: "smooth",
    });
  };
  return (
    <Button onClick={scroll} variant="outline" size="sm-icon">
      <SkipBack className="-rotate-90 size-4" />
    </Button>
  );
}

export { ScrollTopTable };
