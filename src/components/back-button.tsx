"use client";

import { useRouter } from "@/lib/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";

function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      type="button"
      onClick={() => {
        router.back();
      }}
    >
      <div className="flex items-center gap-1 group">
        <ChevronLeft className="transform transition-transform group-hover:-translate-x-0.5 size-5" />
        <span>Back</span>
      </div>
    </Button>
  );
}

export { BackButton };
