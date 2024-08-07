import { Move } from "../@types/move/move";
import { Pokemon } from "../@types/pokemon/pokemon";
import { getMoveById } from "./get-move";

//push if move exists and not in pool
function addMove(
  move: Move | string | undefined,
  pokemon: Pokemon,
  pool: keyof Pick<Pokemon, "fastMovePool" | "chargedMovePool">,
  replace?: boolean
) {
  if (!move) return;

  if (typeof move === "string") {
    move = getMoveById(move);
  }

  if (!pokemon[pool]) {
    pokemon[pool] = [];
  }

  if (move) {
    if (pokemon[pool].find((m) => m.moveId === move.moveId)) {
      if (replace) {
        pokemon[pool] = pokemon[pool].filter((m) => m.moveId !== move.moveId);
      } else {
        return;
      }
    }
    move.legacy = (pokemon?.legacyMoves?.indexOf(move.moveId) ?? -1) > -1;
    move.elite = (pokemon?.eliteMoves?.indexOf(move.moveId) ?? -1) > -1;

    move.displayName = move.name;
    pokemon[pool].push(move);
  }
}

export { addMove };
