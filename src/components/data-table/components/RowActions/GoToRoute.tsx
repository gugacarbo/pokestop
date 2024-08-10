import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function GoToRoute({ path, name }: { path: string; name: string }) {
  return (
    <Link to={path} className="flex items-center gap-2 w-full h-full">
      <ChevronRight className="size-4" />
      Ver {name}
    </Link>
  );
}

export { GoToRoute };
