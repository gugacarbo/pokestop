import {Pokemon, PokemonType} from '@/@types/pokemon';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {getTypesEffectiveness} from '@/features/pokedex/get-types-effectiveness';
import {PokemonTypeIcon} from '@/features/pokemon/components/species-type-icons';
import {cn} from '@/lib/utils';
import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';
import {Badge} from '@/components/ui/badge';
import {ShieldIcon, HeartCrackIcon, SwordsIcon} from 'lucide-react';

function EffectivenessDisplay({pokemon}: {pokemon: Pokemon}) {
	const {weaknesses, resistances, strengths} = getTypesEffectiveness(pokemon);

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Effectiveness</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-4 w-full">
				<div className="flex flex-col gap-1 w-full">
					<div className="flex gap-1">
						<SwordsIcon /> <h3>Strengths</h3>
					</div>
					<EffectsContainer>
						{Object.entries(strengths ?? {}).map(([type, multiplier]) => (
							<Effect
								key={type}
								type={type as PokemonType}
								multiplier={multiplier}
							/>
						))}
					</EffectsContainer>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<div className="flex gap-1">
						<HeartCrackIcon />
						<h3>Weaknesses</h3>
					</div>
					<EffectsContainer>
						{Object.entries(weaknesses).map(([type, multiplier]) => (
							<Effect
								key={type}
								type={type as PokemonType}
								multiplier={multiplier}
							/>
						))}
					</EffectsContainer>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<div className="flex gap-1">
						<ShieldIcon />
						<h3>Resistances</h3>
					</div>
					<EffectsContainer>
						{Object.entries(resistances).map(([type, multiplier]) => (
							<Effect
								key={type}
								type={type as PokemonType}
								multiplier={multiplier}
							/>
						))}
					</EffectsContainer>
				</div>
			</CardContent>
		</Card>
	);
}

export {EffectivenessDisplay};

const EffectsContainer = ({children}: {children?: ReactNode}) => (
	<div className="flex flex-wrap gap-1 w-full">{children}</div>
);

function Effect({type, multiplier}: {type: PokemonType; multiplier: number}) {
	const t = useTranslations();

	const variant =
		multiplier > 1 ? 'destructive' : multiplier < 0.5 ? 'green' : 'blue';

	return (
		<Badge
			variant={variant}
			className={cn(
				'bg-opacity-50 text-sm border-none p-0 pr-2 flex gap-1 items-center',
			)}
		>
			<PokemonTypeIcon size="md" type={type} className="scale-105" />
			<span>
				<small className="text-xs">x</small>
				{multiplier}
				<small className="text-xs">
					{' '}
					{t(`filters.tags.type.${type}.name`)}
				</small>
			</span>
		</Badge>
	);
}
