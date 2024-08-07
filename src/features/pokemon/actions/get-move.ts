import { Move } from "../@types/move/move";
import moves from "../data/moves";

function getMoveById(move_id: string): Move | undefined {
  if (moves[move_id]) {
    return {
      ...moves[move_id],
    };
  }
  return;
}

export { getMoveById };
