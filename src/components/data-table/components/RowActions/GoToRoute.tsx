import { Link } from "@/lib/navigation";
import { ChevronRight } from "lucide-react";

function GoToRoute({ path, name }: { path: string; name: string }) {
  return (
    <Link href={path} className="flex items-center gap-2 w-full h-full">
      <ChevronRight className="size-4" />
      Ver {name}
    </Link>
  );
}

export { GoToRoute };
