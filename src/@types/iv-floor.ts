import { z } from "zod";

export const ivFloors = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(10),
  z.literal(12),
]);

export type IVFloor = z.infer<typeof ivFloors>;

export const IV_FLOORS: IVFloor[] = ivFloors.options.map(
  (option) => option.value
);

export const MIN_IV_FLOOR = IV_FLOORS[0];
export const MAX_IV_FLOOR = IV_FLOORS[IV_FLOORS.length - 1];
