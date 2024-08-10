import { RowSelectionState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function useRowselectionRoute({ route }: { route: string }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rowSelection, setRowSelection] = useState<RowSelectionState>(
    id ? { [id]: true } : {}
  );

  const location = useLocation();

  useEffect(() => {
    if (Object.keys(rowSelection).length > 0) {
      const selected = Object.keys(rowSelection)[0];
      if (selected !== id) {
        navigate(`${route}/${selected}${location.search}`);
      }
    } else if (id) {
      navigate(`${route}${location.search}`);
      setRowSelection({});
    }
    //eslint-disable-next-line
  }, [rowSelection]);

  const clearSelection = () => setRowSelection({});

  return [rowSelection, setRowSelection, clearSelection] as const;
}

export default useRowselectionRoute;
