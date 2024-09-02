import {Pokemon} from '@/@types/pokemon';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {PokeMove} from './move';
import {useState} from 'react';
import {Switch} from '@/components/ui/switch';
import {
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
	TooltipContent,
} from '@/components/ui/tooltip';

function KnownMoves({pokemon}: {pokemon: Pokemon}) {
	const [selectedFast, setselectedFast] = useState(
		pokemon.moves?.fastMoves?.[0],
	);

	const [showEffectiveness, setShowEffectiveness] = useState(false);

	return (
		<Card className="col-span-1 md:col-span-3 p-2 rounded-md w-full">
			<CardHeader className="pb-1 md:pb-0">
				<div className="flex justify-between items-center w-full">
					<CardTitle>Known Moves</CardTitle>
					<TooltipProvider delayDuration={300} disableHoverableContent={false}>
						<Tooltip>
							<TooltipTrigger asChild={false}>
								<Switch
									checked={showEffectiveness}
									onCheckedChange={setShowEffectiveness}
								/>
							</TooltipTrigger>
							<TooltipContent className="max-w-sm">
								<p>Show Damage Effectiveness</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</CardHeader>
			<CardContent className="gap-4 grid grid-cols-2">
				<div className="flex flex-col gap-1 w-full">
					<span className="m-0.5 font-medium font-title">Fast Moves</span>
					<div className="flex flex-col gap-2 w-full">
						{pokemon.moves?.fastMoves?.map(
							move =>
								typeof move !== 'string' && (
									<PokeMove
										showEffectiveness={showEffectiveness}
										key={move?.id}
										move={move}
										pokemon={pokemon}
										moveType="fast"
										selectedFastMove={selectedFast}
										onClick={() => setselectedFast(move)}
									/>
								),
						)}
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<span className="m-0.5 font-medium font-title">Charged Moves</span>
					<div className="flex flex-col gap-2 w-full">
						{pokemon.moves?.chargedMoves?.map(
							move =>
								typeof move !== 'string' && (
									<PokeMove
										showEffectiveness={showEffectiveness}
										selectedFastMove={selectedFast}
										key={move?.id}
										move={move}
										pokemon={pokemon}
										moveType="charged"
									/>
								),
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export {KnownMoves};
