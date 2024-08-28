import {Pokemon, PokemonType} from '@/@types/pokemon';
import Image from 'next/image';
import {cva} from 'class-variance-authority';
import {cn} from '@/lib/utils';
import {
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
	TooltipContent,
} from '@/components/ui/tooltip';
import {useTranslations} from 'next-intl';

export const typeBackgrounds = {
	bug: 'bg-lime-500',
	dark: 'bg-zinc-600',
	dragon: 'bg-sky-600',
	electric: 'bg-yellow-400',
	fire: 'bg-orange-400',
	fairy: 'bg-fuchsia-400',
	fighting: 'bg-rose-500',
	flying: 'bg-indigo-400',
	ghost: 'bg-indigo-500',
	grass: 'bg-green-500',
	ground: 'bg-orange-400',
	ice: 'bg-emerald-400',
	normal: 'bg-neutral-400',
	poison: 'bg-purple-500',
	psychic: 'bg-rose-400',
	rock: 'bg-stone-400',
	steel: 'bg-cyan-600',
	water: 'bg-blue-400',
};

export const typeBorders = {
	bug: 'border-lime-500',
	dark: 'border-zinc-600',
	dragon: 'border-sky-600',
	electric: 'border-yellow-400',
	fire: 'border-orange-400',
	fairy: 'border-fuchsia-400',
	fighting: 'border-rose-500',
	flying: 'border-indigo-400',
	ghost: 'border-indigo-500',
	grass: 'border-green-500',
	ground: 'border-orange-400',
	ice: 'border-emerald-400',
	normal: 'border-neutral-400',
	poison: 'border-purple-500',
	psychic: 'border-rose-400',
	rock: 'border-stone-400',
	steel: 'border-cyan-600',
	water: 'border-blue-400',
};

const typeClasses = cva(
	'flex justify-center items-center border-[1.5px] shadow-sm rounded-full overflow-hidden',
	{
		variants: {
			color: typeBackgrounds,
			size: {
				sm: 'size-5',
				md: 'size-7',
				lg: 'size-9',
			},
		},
		defaultVariants: {
			color: 'normal',
			size: 'sm',
		},
	},
);

type IconSize = 'sm' | 'md' | 'lg';

export function SpeciesTypeIcons({
	types,
	className,
	size = 'sm',
}: {
	types: Pokemon['types'];
	className?: string;
	size?: IconSize;
}) {
	return (
		<div className="relative z-0 flex -space-x-1" aria-hidden>
			{types.map((type, typeIndex) => (
				<PokemonTypeIcon
					key={type}
					className={cn(
						typeIndex === 0 ? 'z-10' : 'z-0',
						typeClasses({color: type, size}),
					)}
					type={type}
				/>
			))}
		</div>
	);
}

export default SpeciesTypeIcons;

export function PokemonTypeIcon({
	type,
	className,
	size = 'sm',
	tooltip,
}: {
	type: PokemonType;
	className?: string;
	size?: IconSize;
	tooltip?: boolean;
}) {
	const imgSize = size === 'lg' ? 18 : size === 'md' ? 14 : 10;
	const t = useTranslations();

	return (
		<TooltipProvider delayDuration={500} disableHoverableContent={true}>
			<Tooltip>
				<TooltipTrigger disabled={!tooltip}>
					<div
						// title={type.charAt(0).toUpperCase() + type.slice(1)}
						className={cn(typeClasses({color: type, size}),className)}
					>
						<Image
							src={`/types/${type}.svg`}
							alt={type}
							width={imgSize}
							height={imgSize}
						/>
					</div>
				</TooltipTrigger>
				<TooltipContent className="max-w-sm">
					<p>{t(`filters.tags.type.${type}.name`)}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
