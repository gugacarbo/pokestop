import {cva} from 'class-variance-authority';
import {cn} from '@/lib/utils';
import {
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
	TooltipContent,
} from '@/components/ui/tooltip';
import {useTranslations} from 'next-intl';
import {MoveArcheType} from '@/@types/move';
import {
	ArrowsUpFromLineIcon,
	OctagonXIcon,
	RadiationIcon,
	ZapIcon,
} from 'lucide-react';
import {cloneElement} from 'react';
import {Button} from '@/components/ui/button';

export const moveArcheTypeIcons: Record<MoveArcheType, React.ReactElement> = {
	'low-quality': <OctagonXIcon className="" />,
	debuff: <OctagonXIcon />,
	'boost-nuke': <RadiationIcon className="fill-white" />,
	'high-energy': <ArrowsUpFromLineIcon className="scale-75" />,
	general: <OctagonXIcon />,
	boost: <OctagonXIcon />,
	spam_bait: <OctagonXIcon />,
	nuke: <RadiationIcon className="fill-white" />,
	'heavy-damage': <OctagonXIcon />,
	'self-debuff-nuke': <RadiationIcon className="fill-white" />,
	'debuff-spam_bait': <OctagonXIcon />,
	'fast-charge': <ZapIcon className="fill-white" />,
	'high-energy-debuff': <OctagonXIcon />,
	'self-debuff': <OctagonXIcon />,
	multipurpose: <OctagonXIcon />,
	'boost-spam_bait': <OctagonXIcon />,
	'debuff-nuke': <RadiationIcon className="fill-white" />,
	'self-debuff-spam': <OctagonXIcon />,
	'spam_bait-debuff': <OctagonXIcon />,
	'nuke-debuff': <RadiationIcon className="fill-white" />,
};

export const typeBackgrounds = {
	'low-quality': '',
	debuff: '',
	'boost-nuke': 'bg-red-600',
	'high-energy': 'bg-orange-700',
	general: '',
	boost: '',
	spam_bait: '',
	nuke: 'bg-yellow-600',
	'heavy-damage': '',
	'self-debuff-nuke': 'bg-blue-600',
	'debuff-spam_bait': '',
	'fast-charge': 'bg-amber-500',
	'high-energy-debuff': '',
	'self-debuff': '',
	multipurpose: '',
	'boost-spam_bait': '',
	'debuff-nuke': 'bg-orange-600',
	'self-debuff-spam': '',
	'spam_bait-debuff': '',
	'nuke-debuff': 'bg-yellow-600',
	normal: '',
};

const typeClasses = cva(
	'flex justify-center items-center border-[1.5px] shadow-sm rounded-full overflow-hidden',
	{
		variants: {
			color: typeBackgrounds,
			size: {
				sm: 'size-6',
				md: 'size-9',
				lg: 'size-12',
			},
		},
		defaultVariants: {
			color: 'normal',
			size: 'sm',
		},
	},
);

type IconSize = 'sm' | 'md' | 'lg';

export function MoveArcheTypeIcon({
	type,
	className,
	size = 'sm',
	label,
}: {
	type: MoveArcheType;
	className?: string;
	size?: IconSize;
	label?: boolean;
}) {
	const iconSize =
		size === 'sm' ? 'size-4' : size === 'md' ? 'size-7' : 'size-9';
	const t = useTranslations();

	const icon = cloneElement(moveArcheTypeIcons[type] as React.ReactElement, {
		...moveArcheTypeIcons[type].props,
		className: cn(
			'text-white',
			moveArcheTypeIcons[type].props?.className,
			iconSize,
		),
	});

	return (
		<div className="flex items-center gap-1">
			{label && (
				<small className="font-bold">
					{t(`rankings.moves.arche-types.${type}`)}
				</small>
			)}

			<TooltipProvider delayDuration={500} disableHoverableContent={true}>
				<Tooltip>
					<TooltipTrigger asChild={true}>
						<Button
							size="sm-icon"
							variant="ghost"
							key={type}
							className={cn(typeClasses({color: type, size}), className)}
						>
							{icon}
						</Button>
					</TooltipTrigger>
					<TooltipContent className="max-w-sm">
						<p>{t(`rankings.moves.arche-types.${type}`)}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
