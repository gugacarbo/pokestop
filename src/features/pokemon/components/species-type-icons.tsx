import { Pokemon } from "@/@types/pokemon";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typeClasses = cva(
  "flex justify-center items-center border-[1.5px] shadow-sm rounded-full overflow-hidden",
  {
    variants: {
      color: {
        bug: "bg-lime-500",
        dark: "bg-zinc-600",
        dragon: "bg-sky-600",
        electric: "bg-yellow-400",
        fire: "bg-orange-400",
        fairy: "bg-fuchsia-400",
        fighting: "bg-rose-500",
        flying: "bg-indigo-400",
        ghost: "bg-indigo-500",
        grass: "bg-green-500",
        ground: "bg-orange-400",
        ice: "bg-emerald-400",
        normal: "bg-neutral-400",
        poison: "bg-purple-500",
        psychic: "bg-rose-400",
        rock: "bg-stone-400",
        steel: "bg-cyan-600",
        water: "bg-blue-400",
      },
      size: {
        sm: "size-5",
        md: "size-7",
        lg: "size-9",
      },
    },
    defaultVariants: {
      color: "normal",
      size: "sm",
    },
  }
);

export function SpeciesTypeIcons({
  types,
  className,
  size = "sm",
}: {
  types: Pokemon["types"];
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const imgSize = size === "lg" ? 18 : size === "md" ? 14 : 10;

  return (
    <div className="relative z-0 flex -space-x-1" aria-hidden>
      {types.map((type, typeIndex) => (
        <div
          key={type}
          title={type.charAt(0).toUpperCase() + type.slice(1)}
          className={cn(
            typeIndex === 0 ? "z-10" : "z-0",
            typeClasses({ color: type, size })
          )}
        >
          <Image
            src={`/types/${type}.svg`}
            alt={type}
            width={imgSize}
            height={imgSize}
          />
        </div>
      ))}
    </div>
  );
}

export default SpeciesTypeIcons;
