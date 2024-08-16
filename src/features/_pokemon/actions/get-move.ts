import { api } from "@/app/api/axios";
import { Move, moveSchema } from "../@types/move/move";
import moves from "@/app/api/data/moves/data/moves";

async function getMoveById(
  poke_id: string | number
): Promise<Move | undefined> {
  // const moves = (await api.get<Record<string, Move>>("/data/moves")).data;

  if (moves[poke_id]) {
    return moveSchema.parse({
      ...moves[poke_id],
    });
  }
  return;
}

export { getMoveById };
